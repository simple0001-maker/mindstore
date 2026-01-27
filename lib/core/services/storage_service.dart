import 'dart:convert';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:recallbox/core/constants/app_constants.dart';
import 'package:recallbox/core/models/note.dart';

class StorageService {
  late Box<String> _notesBox;
  late Box<String> _settingsBox;

  Future<void> init() async {
    await Hive.initFlutter();
    _notesBox = await Hive.openBox<String>(AppConstants.notesBoxName);
    _settingsBox = await Hive.openBox<String>(AppConstants.settingsBoxName);
  }

  // Notes Management
  Future<void> saveNote(Note note) async {
    await _notesBox.put(note.id, jsonEncode(note.toJson()));
  }

  Future<void> deleteNote(String noteId) async {
    await _notesBox.delete(noteId);
  }

  Future<void> updateNote(Note note) async {
    await saveNote(note);
  }

  List<Note> getAllNotes() {
    final notes = <Note>[];
    for (var key in _notesBox.keys) {
      try {
        final jsonStr = _notesBox.get(key);
        if (jsonStr != null) {
          final json = jsonDecode(jsonStr) as Map<String, dynamic>;
          notes.add(Note.fromJson(json));
        }
      } catch (e) {
        // Skip corrupted notes
        continue;
      }
    }
    // Sort by most recent first
    notes.sort((a, b) => b.createdAt.compareTo(a.createdAt));
    return notes;
  }

  Note? getNoteById(String id) {
    try {
      final jsonStr = _notesBox.get(id);
      if (jsonStr != null) {
        final json = jsonDecode(jsonStr) as Map<String, dynamic>;
        return Note.fromJson(json);
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  Future<void> clearAllNotes() async {
    await _notesBox.clear();
  }

  int getNotesCount() {
    return _notesBox.length;
  }

  // Settings Management
  Future<void> saveSetting(String key, String value) async {
    await _settingsBox.put(key, value);
  }

  String? getSetting(String key) {
    return _settingsBox.get(key);
  }

  Future<void> deleteSetting(String key) async {
    await _settingsBox.delete(key);
  }

  Future<void> clearAllSettings() async {
    await _settingsBox.clear();
  }

  // Export notes as JSON
  String exportNotesAsJson() {
    final notes = getAllNotes();
    final jsonList = notes.map((note) => note.toJson()).toList();
    return jsonEncode(jsonList);
  }

  // Import notes from JSON
  Future<int> importNotesFromJson(String jsonString) async {
    try {
      final jsonList = jsonDecode(jsonString) as List;
      int importedCount = 0;

      for (var item in jsonList) {
        try {
          final note = Note.fromJson(item as Map<String, dynamic>);
          await saveNote(note);
          importedCount++;
        } catch (e) {
          // Skip invalid notes
          continue;
        }
      }

      return importedCount;
    } catch (e) {
      throw StorageException('Failed to import notes: ${e.toString()}');
    }
  }
}

class StorageException implements Exception {
  final String message;
  StorageException(this.message);

  @override
  String toString() => message;
}
