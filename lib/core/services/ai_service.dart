import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:recallbox/core/constants/app_constants.dart';
import 'package:recallbox/core/models/note.dart';

class AiService {
  late final GenerativeModel _model;

  AiService() {
    _model = GenerativeModel(
      model: AppConstants.geminiModel,
      apiKey: AppConstants.geminiApiKey,
      generationConfig: GenerationConfig(
        temperature: 0.3, // Lower temperature for more focused responses
        maxOutputTokens: 500,
      ),
    );
  }

  /// Search through notes using natural language query
  Future<SearchResult> searchNotes(String query, List<Note> notes) async {
    if (notes.isEmpty) {
      return SearchResult(
        matchedNote: null,
        explanation: 'No notes saved yet.',
        confidence: 0.0,
      );
    }

    // Build a context with all notes
    final notesContext = notes
        .map((note) {
          final title = note.title != null && note.title!.isNotEmpty
              ? 'Title: ${note.title}\n'
              : '';
          return '''
Note ID: ${note.id}
${title}Content: ${note.content}
---''';
        })
        .join('\n\n');

    // Create the prompt
    final prompt =
        '''
You are a note retrieval assistant. Your job is to find the most relevant note based on the user's query.

User Query: "$query"

Available Notes:
$notesContext

Task:
1. Find the MOST relevant note that answers the user's query
2. Return ONLY the Note ID of the best match
3. If no note is relevant, return "NONE"

Return format: Just the Note ID or "NONE"
''';

    try {
      final response = await _model.generateContent([Content.text(prompt)]);
      final resultText = response.text?.trim() ?? 'NONE';

      if (resultText == 'NONE') {
        return SearchResult(
          matchedNote: null,
          explanation: 'No matching notes found for your query.',
          confidence: 0.0,
        );
      }

      // Find the note with matching ID
      final matchedNote = notes.firstWhere(
        (note) => note.id == resultText,
        orElse: () => notes.first, // Fallback to first note
      );

      return SearchResult(
        matchedNote: matchedNote,
        explanation: 'Found a matching note',
        confidence: 0.9,
      );
    } catch (e) {
      throw AiException('Failed to search notes: ${e.toString()}');
    }
  }

  /// Generate a summary of a note
  Future<String> summarizeNote(Note note) async {
    final prompt =
        '''
Summarize this note in one concise sentence:

${note.content}

Return only the summary, nothing else.
''';

    try {
      final response = await _model.generateContent([Content.text(prompt)]);
      return response.text?.trim() ?? 'Unable to summarize';
    } catch (e) {
      throw AiException('Failed to summarize: ${e.toString()}');
    }
  }

  /// Extract keywords from a note
  Future<List<String>> extractKeywords(Note note) async {
    final prompt =
        '''
Extract 3-5 key words or phrases from this note:

${note.content}

Return only the keywords separated by commas.
''';

    try {
      final response = await _model.generateContent([Content.text(prompt)]);
      final keywords = response.text?.trim().split(',') ?? [];
      return keywords.map((k) => k.trim()).where((k) => k.isNotEmpty).toList();
    } catch (e) {
      throw AiException('Failed to extract keywords: ${e.toString()}');
    }
  }
}

class SearchResult {
  final Note? matchedNote;
  final String explanation;
  final double confidence;

  SearchResult({
    required this.matchedNote,
    required this.explanation,
    required this.confidence,
  });
}

class AiException implements Exception {
  final String message;
  AiException(this.message);

  @override
  String toString() => message;
}
