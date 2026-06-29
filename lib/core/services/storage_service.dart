import 'dart:convert';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:mindstore/core/constants/app_constants.dart';
import 'package:mindstore/core/models/note.dart';

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

}

class StorageException implements Exception {
  final String message;
  StorageException(this.message);

  @override
  String toString() => message;
}
