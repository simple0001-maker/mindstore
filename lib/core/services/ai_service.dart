import 'package:mindstore/core/models/note.dart';

class AiService {
  Future<SearchResult> searchNotes(String query, List<Note> notes) async {
    if (notes.isEmpty) {
      return SearchResult(
        matchedNote: null,
        explanation: 'No notes saved yet.',
        confidence: 0.0,
      );
    }

    final q = query.toLowerCase().trim();
    final terms = q.split(RegExp(r'\s+')).where((t) => t.isNotEmpty).toList();

    Note? bestNote;
    int bestScore = 0;

    for (final note in notes) {
      final title = (note.title ?? '').toLowerCase();
      final content = note.content.toLowerCase();
      int score = 0;

      // Exact phrase match
      if (title.contains(q)) score += 10;
      if (content.contains(q)) score += 5;

      // Individual word matches
      for (final term in terms) {
        if (title.contains(term)) score += 3;
        if (content.contains(term)) score += 1;
      }

      if (score > bestScore) {
        bestScore = score;
        bestNote = note;
      }
    }

    if (bestNote == null || bestScore == 0) {
      return SearchResult(
        matchedNote: null,
        explanation: 'No matching notes found for your query.',
        confidence: 0.0,
      );
    }

    return SearchResult(
      matchedNote: bestNote,
      explanation: 'Found a matching note',
      confidence: (bestScore / 15).clamp(0.0, 1.0),
    );
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

