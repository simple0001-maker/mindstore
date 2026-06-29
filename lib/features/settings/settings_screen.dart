import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:mindstore/core/constants/app_constants.dart';
import 'package:mindstore/features/settings/settings_view_model.dart';
import 'package:mindstore/features/about/about_screen.dart';
import 'package:url_launcher/url_launcher.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return Scaffold(
      appBar: AppBar(title: const Text('Settings')),
      body: Consumer<SettingsViewModel>(
        builder: (context, viewModel, child) {
          return ListView(
            children: [
              // Appearance Section
              _buildSectionHeader(context, 'Appearance'),
              _buildThemeTile(context, viewModel, colorScheme, theme),

              const Divider(height: 32),

              // Data Section
              _buildSectionHeader(context, 'Data'),
              _buildExportTile(context, viewModel, colorScheme),
              _buildClearDataTile(context, viewModel, colorScheme),

              const Divider(height: 32),

              // Support Section
              _buildSectionHeader(context, 'Support & Legal'),
              _buildLinkTile(
                context,
                'Privacy Policy',
                Icons.privacy_tip_outlined,
                AppConstants.privacyPolicyUrl,
              ),
              _buildLinkTile(
                context,
                'Terms of Service',
                Icons.description_outlined,
                AppConstants.termsOfServiceUrl,
              ),
              _buildLinkTile(
                context,
                'Contact Support',
                Icons.email_outlined,
                'mailto:${AppConstants.developerEmail}',
              ),

              const Divider(height: 32),

              // About Section
              _buildSectionHeader(context, 'About'),
              ListTile(
                leading: const Icon(Icons.info_outline),
                title: const Text('About MindStore'),
                trailing: const Icon(Icons.chevron_right),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => const AboutScreen(),
                    ),
                  );
                },
              ),

              const SizedBox(height: 16),
              Center(
                child: Text(
                  'Version ${AppConstants.appVersion}',
                  style: theme.textTheme.bodySmall?.copyWith(
                    color: colorScheme.onSurface.withValues(alpha: 0.6),
                  ),
                ),
              ),
              const SizedBox(height: 32),
            ],
          );
        },
      ),
    );
  }

  Widget _buildSectionHeader(BuildContext context, String title) {
    final theme = Theme.of(context);
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
      child: Text(
        title,
        style: theme.textTheme.titleSmall?.copyWith(
          fontWeight: FontWeight.bold,
          color: theme.colorScheme.primary,
        ),
      ),
    );
  }

  Widget _buildThemeTile(
    BuildContext context,
    SettingsViewModel viewModel,
    ColorScheme colorScheme,
    ThemeData theme,
  ) {
    return ListTile(
      leading: const Icon(Icons.palette_outlined),
      title: const Text('Theme'),
      subtitle: Text(_getThemeModeName(viewModel.themeMode)),
      trailing: const Icon(Icons.chevron_right),
      onTap: () {
        _showThemeDialog(context, viewModel);
      },
    );
  }

  String _getThemeModeName(ThemeMode mode) {
    switch (mode) {
      case ThemeMode.light:
        return 'Light';
      case ThemeMode.dark:
        return 'Dark';
      case ThemeMode.system:
        return 'System';
    }
  }

  void _showThemeDialog(BuildContext context, SettingsViewModel viewModel) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Choose Theme'),
          content: RadioGroup<ThemeMode>(
            groupValue: viewModel.themeMode,
            onChanged: (value) {
              if (value != null) {
                viewModel.setThemeMode(value);
                Navigator.pop(context);
              }
            },
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: const [
                RadioListTile<ThemeMode>(
                  title: Text('Light'),
                  value: ThemeMode.light,
                ),
                RadioListTile<ThemeMode>(
                  title: Text('Dark'),
                  value: ThemeMode.dark,
                ),
                RadioListTile<ThemeMode>(
                  title: Text('System'),
                  value: ThemeMode.system,
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildExportTile(
    BuildContext context,
    SettingsViewModel viewModel,
    ColorScheme colorScheme,
  ) {
    return ListTile(
      leading: const Icon(Icons.download_outlined),
      title: const Text('Export Notes'),
      subtitle: const Text('Save your notes as JSON'),
      onTap: () async {
        try {
          final jsonData = await viewModel.exportNotes();
          await Clipboard.setData(ClipboardData(text: jsonData));

          if (context.mounted) {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Notes exported to clipboard!')),
            );
          }
        } catch (e) {
          if (context.mounted) {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text('Failed to export: $e'),
                backgroundColor: colorScheme.error,
              ),
            );
          }
        }
      },
    );
  }

  Widget _buildClearDataTile(
    BuildContext context,
    SettingsViewModel viewModel,
    ColorScheme colorScheme,
  ) {
    return ListTile(
      leading: Icon(Icons.delete_sweep_outlined, color: colorScheme.error),
      title: Text('Clear All Data', style: TextStyle(color: colorScheme.error)),
      subtitle: const Text('Delete all notes and settings'),
      onTap: () {
        _showClearDataDialog(context, viewModel);
      },
    );
  }

  void _showClearDataDialog(BuildContext context, SettingsViewModel viewModel) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Clear All Data'),
          content: const Text(
            'This will permanently delete all your notes and settings. This action cannot be undone.',
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Cancel'),
            ),
            TextButton(
              onPressed: () async {
                await viewModel.clearAllData();
                if (context.mounted) {
                  Navigator.pop(context);
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('All data cleared')),
                  );
                }
              },
              child: const Text('Clear All'),
            ),
          ],
        );
      },
    );
  }

  Widget _buildLinkTile(
    BuildContext context,
    String title,
    IconData icon,
    String url,
  ) {
    return ListTile(
      leading: Icon(icon),
      title: Text(title),
      trailing: const Icon(Icons.open_in_new, size: 20),
      onTap: () async {
        final uri = Uri.parse(url);
        if (await canLaunchUrl(uri)) {
          await launchUrl(uri, mode: LaunchMode.externalApplication);
        } else {
          if (context.mounted) {
            ScaffoldMessenger.of(
              context,
            ).showSnackBar(SnackBar(content: Text('Could not open $title')));
          }
        }
      },
    );
  }
}
