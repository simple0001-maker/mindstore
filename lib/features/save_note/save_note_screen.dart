import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:recallbox/core/constants/app_constants.dart';
import 'package:recallbox/features/save_note/save_note_view_model.dart';

class SaveNoteScreen extends StatefulWidget {
  const SaveNoteScreen({super.key});

  @override
  State<SaveNoteScreen> createState() => _SaveNoteScreenState();
}

class _SaveNoteScreenState extends State<SaveNoteScreen> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _contentController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  @override
  void dispose() {
    _titleController.dispose();
    _contentController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return Scaffold(
      appBar: AppBar(
        title: const Text('New Note'),
        actions: [
          Consumer<SaveNoteViewModel>(
            builder: (context, viewModel, child) {
              return TextButton.icon(
                onPressed: viewModel.isSaving ? null : () => _saveNote(context),
                icon: viewModel.isSaving
                    ? const SizedBox(
                        width: 16,
                        height: 16,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : const Icon(Icons.check),
                label: Text(viewModel.isSaving ? 'Saving...' : 'Save'),
              );
            },
          ),
        ],
      ),
      body: Consumer<SaveNoteViewModel>(
        builder: (context, viewModel, child) {
          return SingleChildScrollView(
            padding: const EdgeInsets.all(16.0),
            child: Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Info card
                  Card(
                    color: colorScheme.primaryContainer.withOpacity(0.5),
                    child: Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: Row(
                        children: [
                          Icon(
                            Icons.lightbulb_outline,
                            color: colorScheme.primary,
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Text(
                              'Save facts, procedures, or notes. RecallBox will help you find them later.',
                              style: theme.textTheme.bodyMedium?.copyWith(
                                color: colorScheme.onPrimaryContainer,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 24),

                  // Title field (optional)
                  TextFormField(
                    controller: _titleController,
                    decoration: const InputDecoration(
                      labelText: 'Title (Optional)',
                      hintText: 'e.g., Office Wi-Fi Setup',
                      prefixIcon: Icon(Icons.title),
                    ),
                    textCapitalization: TextCapitalization.sentences,
                  ),
                  const SizedBox(height: 16),

                  // Content field
                  TextFormField(
                    controller: _contentController,
                    decoration: InputDecoration(
                      labelText: 'Note Content',
                      hintText: AppConstants.savePlaceholder,
                      prefixIcon: const Icon(Icons.edit_note),
                      alignLabelWithHint: true,
                    ),
                    maxLines: 15,
                    minLines: 8,
                    textCapitalization: TextCapitalization.sentences,
                    validator: (value) {
                      if (value == null || value.trim().isEmpty) {
                        return 'Please enter some content';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 24),

                  // Error message
                  if (viewModel.errorMessage != null)
                    Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: colorScheme.errorContainer,
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Row(
                        children: [
                          Icon(Icons.error_outline, color: colorScheme.error),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Text(
                              viewModel.errorMessage!,
                              style: TextStyle(
                                color: colorScheme.onErrorContainer,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),

                  // Examples section
                  const SizedBox(height: 24),
                  Text(
                    'Examples',
                    style: theme.textTheme.titleMedium?.copyWith(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 12),
                  _buildExampleCard(
                    context,
                    colorScheme,
                    theme,
                    'Simple Fact',
                    'The server password is stored in 1Password under "Dev Servers"',
                  ),
                  const SizedBox(height: 8),
                  _buildExampleCard(
                    context,
                    colorScheme,
                    theme,
                    'Procedure',
                    '''Office Wi-Fi Setup:
1. Connect to NetPlus
2. Password is written under the router
3. Restart if connection fails''',
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }

  Widget _buildExampleCard(
    BuildContext context,
    ColorScheme colorScheme,
    ThemeData theme,
    String title,
    String content,
  ) {
    return Card(
      color: colorScheme.surfaceContainerHighest,
      child: InkWell(
        onTap: () {
          _contentController.text = content;
          _titleController.text = title;
        },
        borderRadius: BorderRadius.circular(16),
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: theme.textTheme.labelLarge?.copyWith(
                  fontWeight: FontWeight.w600,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                content,
                style: theme.textTheme.bodySmall,
                maxLines: 3,
                overflow: TextOverflow.ellipsis,
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _saveNote(BuildContext context) async {
    if (!_formKey.currentState!.validate()) {
      return;
    }

    final viewModel = context.read<SaveNoteViewModel>();
    final success = await viewModel.saveNote(
      _contentController.text,
      _titleController.text,
    );

    if (success && context.mounted) {
      // Show success message
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Row(
            children: [
              Icon(Icons.check_circle, color: Colors.white),
              SizedBox(width: 12),
              Text('Note saved successfully!'),
            ],
          ),
          behavior: SnackBarBehavior.floating,
        ),
      );

      // Go back
      Navigator.pop(context);
    }
  }
}
