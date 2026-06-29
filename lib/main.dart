import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:mindstore/core/theme/app_theme.dart';
import 'package:mindstore/core/services/storage_service.dart';
import 'package:mindstore/core/services/ai_service.dart';
import 'package:mindstore/features/home/home_screen.dart';
import 'package:mindstore/features/home/home_view_model.dart';
import 'package:mindstore/features/save_note/save_note_view_model.dart';
import 'package:mindstore/features/history/history_view_model.dart';
import 'package:mindstore/features/settings/settings_view_model.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Initialize services
  final storageService = StorageService();
  await storageService.init();

  final aiService = AiService();

  runApp(MindStoreApp(storageService: storageService, aiService: aiService));
}

class MindStoreApp extends StatelessWidget {
  final StorageService storageService;
  final AiService aiService;

  const MindStoreApp({
    super.key,
    required this.storageService,
    required this.aiService,
  });

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        // Provide services
        Provider<StorageService>.value(value: storageService),
        Provider<AiService>.value(value: aiService),

        // Provide view models
        ChangeNotifierProvider(
          create: (_) => HomeViewModel(storageService, aiService),
        ),
        ChangeNotifierProvider(
          create: (_) => SaveNoteViewModel(storageService),
        ),
        ChangeNotifierProvider(create: (_) => HistoryViewModel(storageService)),
        ChangeNotifierProvider(
          create: (_) => SettingsViewModel(storageService)..init(),
        ),
      ],
      child: Consumer<SettingsViewModel>(
        builder: (context, settingsViewModel, child) {
          return MaterialApp(
            title: 'MindStore',
            debugShowCheckedModeBanner: false,
            theme: AppTheme.lightTheme,
            darkTheme: AppTheme.darkTheme,
            themeMode: settingsViewModel.themeMode,
            home: const HomeScreen(),
          );
        },
      ),
    );
  }
}
