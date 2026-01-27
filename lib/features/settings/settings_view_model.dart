import 'package:flutter/material.dart';
import 'package:recallbox/core/services/storage_service.dart';
import 'package:recallbox/core/constants/app_constants.dart';

class SettingsViewModel extends ChangeNotifier {
  final StorageService _storageService;

  SettingsViewModel(this._storageService);

  ThemeMode _themeMode = ThemeMode.system;
  ThemeMode get themeMode => _themeMode;

  void init() {
    _loadThemeMode();
  }

  void _loadThemeMode() {
    final savedTheme = _storageService.getSetting(AppConstants.themeKey);
    if (savedTheme != null) {
      _themeMode = ThemeMode.values.firstWhere(
        (mode) => mode.name == savedTheme,
        orElse: () => ThemeMode.system,
      );
    }
    notifyListeners();
  }

  Future<void> setThemeMode(ThemeMode mode) async {
    _themeMode = mode;
    await _storageService.saveSetting(AppConstants.themeKey, mode.name);
    notifyListeners();
  }

  Future<String> exportNotes() async {
    return _storageService.exportNotesAsJson();
  }

  Future<int> importNotes(String jsonString) async {
    return await _storageService.importNotesFromJson(jsonString);
  }

  Future<void> clearAllData() async {
    await _storageService.clearAllNotes();
    await _storageService.clearAllSettings();
    _themeMode = ThemeMode.system;
    notifyListeners();
  }
}
