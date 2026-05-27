import 'package:flutter/material.dart';
import 'package:mindstore/core/models/note.dart';
import 'package:mindstore/core/services/ai_service.dart';
import 'package:mindstore/core/services/storage_service.dart';

class HomeViewModel extends ChangeNotifier {
  final StorageService _storageService;
  final AiService _aiService;

  HomeViewModel(this._storageService, this._aiService);

  bool _isSearching = false;
  bool get isSearching => _isSearching;

  String _searchQuery = '';
  String get searchQuery => _searchQuery;

  SearchResult? _searchResult;
  SearchResult? get searchResult => _searchResult;

  String? _errorMessage;
  String? get errorMessage => _errorMessage;

  List<Note> _recentNotes = [];
  List<Note> get recentNotes => _recentNotes;

  void init() {
    loadRecentNotes();
  }

  void loadRecentNotes() {
    _recentNotes = _storageService.getAllNotes().take(5).toList();
    notifyListeners();
  }

  Future<void> searchNotes(String query) async {
    if (query.trim().isEmpty) {
      _searchResult = null;
      _errorMessage = null;
      notifyListeners();
      return;
    }

    _isSearching = true;
    _searchQuery = query;
    _errorMessage = null;
    notifyListeners();

    try {
      final allNotes = _storageService.getAllNotes();
      _searchResult = await _aiService.searchNotes(query, allNotes);
    } catch (e) {
      _errorMessage = e.toString();
      _searchResult = null;
    } finally {
      _isSearching = false;
      notifyListeners();
    }
  }

  void clearSearch() {
    _searchQuery = '';
    _searchResult = null;
    _errorMessage = null;
    notifyListeners();
  }

  int getNotesCount() {
    return _storageService.getNotesCount();
  }
}
