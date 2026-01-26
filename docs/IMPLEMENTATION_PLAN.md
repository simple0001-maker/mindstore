# Implementation Plan - ClapReply

This plan outlines the steps to build **ClapReply**, an AI-powered utility that generates high-impact, engaging replies to tweets. The app helps users enter X/Twitter conversations with witty, insightful, and playful responses.

> **Architecture**: Feature-First + Minimal MVVM  
> **AI Model**: `gemma-27b-it` (Gemini free tier)  
> **See also**: `docs/rules.md` for development standards

---

## Phase 1: Project Setup & Branding

- [ ] **Project Initialization**:
    - Update package name to `com.clapreply.app`
    - Configure app name in `AndroidManifest.xml` and `Info.plist`
- [ ] **Assets**:
    - Add `assets/app_logo.png` (ClapReply logo)
    - Configure `flutter_launcher_icons` for app icons
    - Configure `flutter_native_splash` for splash screen
- [ ] **Theme System** (in `core/theme/app_theme.dart`):
    - Primary: Emerald Green (#10B981)
    - Support Light and Dark modes
    - Use `Theme.of(context).colorScheme` throughout
- [ ] **Folder Structure**:
    ```
    lib/
    ├── core/
    │   ├── theme/app_theme.dart
    │   ├── constants/app_constants.dart
    │   └── services/
    │       ├── ai_service.dart
    │       └── storage_service.dart
    ├── features/
    │   ├── home/
    │   ├── history/
    │   ├── settings/
    │   └── about/
    └── main.dart
    ```

---

## Phase 2: Core Services

### 2.1 AI Service (Gemini Integration)
- [ ] **Model Configuration**:
    - Use `gemma-27b-it` model ID (DO NOT use Flash/Pro)
    - Store API key in `.env` file
- [ ] **Prompt Engineering** for 5 Reply Styles:
    ```
    WITTY: "Generate a clever, short, likeable reply to this tweet. Be witty but not mean."
    INSIGHTFUL: "Generate a smart, thoughtful reply that adds a new angle to the conversation."
    PLAYFUL: "Generate a light, fun reply with optional emoji. Keep it friendly."
    AMPLIFY: "Generate a reply that strongly agrees with and amplifies the original tweet's message."
    CONTRARIAN: "Generate a respectful, thought-provoking reply that gently challenges the tweet."
    ```
- [ ] **Safety Rules**:
    - No insults, no personal attacks
    - No political content
    - No harassment or dogpiling language
- [ ] **Error Handling**:
    - Rate limit handling with retry
    - Offline state detection
    - Graceful error messages

### 2.2 Storage Service (Hive)
- [ ] **Setup**:
    - Initialize Hive in `main.dart`
    - Create `history` box for past generations
    - Create `settings` box for preferences
- [ ] **History Storage**:
    - Store: tweet text, selected style, generated replies, timestamp
    - Max 50 history items (auto-cleanup oldest)
    - Use JSON strings (no adapters)

---

## Phase 3: Home Screen (Main Feature)

- [ ] **Input Section**:
    - Tab selector: "Paste Tweet" | "Screenshot"
    - Text input for pasting tweet content
    - Image picker for screenshot upload (optional MVP+)
- [ ] **Style Selector**:
    - 5 buttons: Witty, Insightful, Playful, Agree & Amplify, Contrarian
    - Visual indication of selected style
- [ ] **Generate Action**:
    - "Generate Replies" button
    - Loading state with animation
- [ ] **Results Display**:
    - Show 3-5 reply options
    - Copy button for each reply
    - Regenerate option
- [ ] **UX Polish**:
    - Haptic feedback on copy
    - Success toast on copy
    - Empty state when no input

---

## Phase 4: History Screen

- [ ] **List View**:
    - Show past tweet + replies
    - Display timestamp and style used
    - Tap to expand and see all replies
- [ ] **Actions**:
    - Copy any past reply
    - Delete individual history items
- [ ] **Empty State**:
    - Friendly message when no history
    - Link to home screen

---

## Phase 5: Settings Screen

- [ ] **Appearance**:
    - Theme toggle (Light / Dark / System)
- [ ] **Data**:
    - Clear History button with confirmation
    - History count display
- [ ] **Default Preferences**:
    - Default reply style selection
- [ ] **Legal & Links**:
    - Privacy Policy link → `https://clapreply.app/privacy-policy`
    - Terms of Service link → `https://clapreply.app/terms`
    - Rate App (Play Store link)
- [ ] **App Info**:
    - Version number
    - Build number

---

## Phase 6: About Screen

- [ ] **Content**:
    - ClapReply name and logo
    - "AI Tweet Reply Generator" tagline
    - Version info
- [ ] **Core Principle**:
    - Display: "Engage, don't harass"
    - Brief explanation of app's safety approach
- [ ] **Links**:
    - Website link
    - Support email
    - Social media handles

---

## Phase 7: Play Store Readiness

- [ ] **Branding**:
    - App icon generated (all sizes)
    - Splash screen configured
    - App name: "ClapReply"
- [ ] **Release Signing**:
    - Generate keystore: `clapreply-release.jks`
    - Create `key.properties`
    - Configure `build.gradle.kts`
- [ ] **Store Listing**:
    - Short description (80 chars)
    - Full description (4000 chars)
    - Screenshots (phone, tablet)
    - Feature graphic
- [ ] **Privacy & Compliance**:
    - Privacy policy published
    - Terms of service published
    - No data collection declaration
- [ ] **Build & Test**:
    - `flutter build appbundle`
    - Test on multiple devices
    - Internal testing track

---

## Phase 8: Final Polish

- [ ] **Performance**:
    - Input → Generate → Copy flow under 10 seconds
    - Smooth animations (60fps)
- [ ] **Edge Cases**:
    - Very long tweets handling
    - Network error recovery
    - Empty input validation
- [ ] **Visual Refinement**:
    - Consistent spacing and typography
    - Proper dark mode colors
    - Loading shimmer effects

---

## Quick Reference

| Aspect | Value |
|--------|-------|
| Package Name | `com.clapreply.app` |
| AI Model | `gemma-27b-it` |
| Primary Color | Emerald (#10B981) |
| Required Screens | Home, History, Settings, About |
| Storage | Hive (no adapters) |
| Auth | None |
| Data Collection | None |

---

*Last Updated: January 2026*
