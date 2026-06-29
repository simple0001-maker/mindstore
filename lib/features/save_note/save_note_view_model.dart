import 'package:flutter/material.dart';
import 'package:mindstore/core/models/note.dart';
import 'package:mindstore/core/services/storage_service.dart';

class SaveNoteViewModel extends ChangeNotifier {
  final StorageService _storageService;

  SaveNoteViewModel(this._storageService);

  bool _isSaving = false;
  bool get isSaving => _isSaving;

  String? _errorMessage;
  String? get errorMessage => _errorMessage;

  Future<bool> saveNote(String content, String? title) async {
    if (content.trim().isEmpty) {
      _errorMessage = 'Note content cannot be empty';
      notifyListeners();
      return false;
    }

    _isSaving = true;
    _errorMessage = null;
    notifyListeners();

    try {
      final now = DateTime.now();
      final note = Note(
        id: '${now.microsecondsSinceEpoch}_${now.microsecond}',
        content: content.trim(),
        title: title?.trim().isEmpty == true ? null : title?.trim(),
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      );

      await _storageService.saveNote(note);
      return true;
    } catch (e) {
      _errorMessage = 'Failed to save note: ${e.toString()}';
      return false;
    } finally {
      _isSaving = false;
      notifyListeners();
    }
  }

  void clearError() {
    _errorMessage = null;
    notifyListeners();
  }
}
