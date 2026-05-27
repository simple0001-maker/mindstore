import 'package:flutter/material.dart';
import 'package:mindstore/core/models/note.dart';
import 'package:mindstore/core/services/storage_service.dart';

class HistoryViewModel extends ChangeNotifier {
  final StorageService _storageService;

  HistoryViewModel(this._storageService);

  List<Note> _notes = [];
  List<Note> get notes => _notes;

  bool _isLoading = false;
  bool get isLoading => _isLoading;

  String _searchQuery = '';
  String get searchQuery => _searchQuery;

  void init() {
    loadNotes();
  }

  void loadNotes() {
    _isLoading = true;
    notifyListeners();

    _notes = _storageService.getAllNotes();

    _isLoading = false;
    notifyListeners();
  }

  void searchNotes(String query) {
    _searchQuery = query.toLowerCase();
    notifyListeners();
  }

  List<Note> get filteredNotes {
    if (_searchQuery.isEmpty) {
      return _notes;
    }

    return _notes.where((note) {
      final titleMatch =
          note.title?.toLowerCase().contains(_searchQuery) ?? false;
      final contentMatch = note.content.toLowerCase().contains(_searchQuery);
      return titleMatch || contentMatch;
    }).toList();
  }

  Future<void> deleteNote(String noteId) async {
    await _storageService.deleteNote(noteId);
    loadNotes();
  }

  Future<void> clearAllNotes() async {
    await _storageService.clearAllNotes();
    loadNotes();
  }
}
