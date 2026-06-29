import 'package:flutter/material.dart';
import 'package:mindstore/core/constants/app_constants.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return Scaffold(
      appBar: AppBar(title: const Text('About')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // App Icon and Name
            Center(
              child: Column(
                children: [
                  Container(
                    width: 100,
                    height: 100,
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [colorScheme.primary, colorScheme.secondary],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                      borderRadius: BorderRadius.circular(24),
                    ),
                    child: const Icon(
                      Icons.psychology_rounded,
                      size: 56,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    AppConstants.appName,
                    style: theme.textTheme.headlineMedium?.copyWith(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    AppConstants.appTagline,
                    style: theme.textTheme.bodyLarge?.copyWith(
                      color: colorScheme.onSurface.withValues(alpha: 0.7),
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Version ${AppConstants.appVersion}',
                    style: theme.textTheme.bodySmall?.copyWith(
                      color: colorScheme.onSurface.withValues(alpha: 0.5),
                    ),
                  ),
                ],
              ),
            ),

            const SizedBox(height: 40),

            // What is MindStore
            _buildSection(
              context,
              '📦 What is MindStore?',
              '''MindStore is your trusted place for storing and retrieving knowledge. Save notes, facts, and procedures, then find them later using natural language questions.

No folders. No complex organization. Just memory that answers back.''',
              colorScheme,
              theme,
            ),

            const SizedBox(height: 24),

            // How it Works
            _buildSection(
              context,
              '🧠 How It Works',
              '''1. Save anything you want to remember
2. Ask questions like "Where did I save the Wi-Fi setup?"
3. MindStore searches your notes instantly using keyword matching

Search runs entirely on your device — no network calls, no servers, no waiting.''',
              colorScheme,
              theme,
            ),

            const SizedBox(height: 24),

            // Privacy First
            _buildSection(
              context,
              '🔒 Privacy First',
              '''• All your notes stay on your device
• No cloud syncing or external servers
• No user accounts or tracking
• No data collection whatsoever

Your knowledge is yours alone.''',
              colorScheme,
              theme,
            ),

            const SizedBox(height: 24),

            // What We Don't Do
            _buildSection(
              context,
              '❌ What We Don\'t Do',
              '''MindStore is NOT:
• A document editor
• A collaboration tool
• A knowledge base for the internet

We only retrieve YOUR saved content. No external knowledge, no fabrication, no hallucinations.''',
              colorScheme,
              theme,
            ),

            const SizedBox(height: 40),

            // Search technology badge
            Center(
              child: Column(
                children: [
                  Text(
                    'Search powered by',
                    style: theme.textTheme.bodySmall?.copyWith(
                      color: colorScheme.onSurface.withValues(alpha: 0.5),
                    ),
                  ),
                  const SizedBox(height: 8),
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 8,
                    ),
                    decoration: BoxDecoration(
                      color: colorScheme.surfaceContainerHighest,
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Text(
                      'On-Device Keyword Search',
                      style: theme.textTheme.bodyMedium?.copyWith(
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ],
              ),
            ),

            const SizedBox(height: 40),

            // Footer
            Center(
              child: Text(
                '📦✨\n\nMindStore tries to be right, not smart.\n\nMade with care for people who value their knowledge.',
                textAlign: TextAlign.center,
                style: theme.textTheme.bodySmall?.copyWith(
                  color: colorScheme.onSurface.withValues(alpha: 0.6),
                  height: 1.6,
                ),
              ),
            ),

            const SizedBox(height: 40),
          ],
        ),
      ),
    );
  }

  Widget _buildSection(
    BuildContext context,
    String title,
    String content,
    ColorScheme colorScheme,
    ThemeData theme,
  ) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: theme.textTheme.titleLarge?.copyWith(
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 12),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: colorScheme.surfaceContainerHighest,
            borderRadius: BorderRadius.circular(12),
          ),
          child: Text(
            content,
            style: theme.textTheme.bodyMedium?.copyWith(height: 1.6),
          ),
        ),
      ],
    );
  }
}
