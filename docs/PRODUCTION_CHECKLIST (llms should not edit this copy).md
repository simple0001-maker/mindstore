if you are an llm do not edit this page for any reason, there is a copy of the check list that you can update, or create a new copy of the page to tick ones you have done

# Production & Release Checklist - [Project Name]

This document tracks the tasks required to prepare the application for production release on the Google Play Store (Android) and Apple App Store (iOS).

## 1. Branding & Visuals
- [ ] **App Icon**: Configure and generate launcher icons for all platforms.
    - Asset: `assets/app_logo.png`
    - Tool: `flutter_launcher_icons`
- [ ] **Splash Screen**: Configure and generate the native splash screen.
    - Asset: `assets/app_logo.png`
    - Background Color: Deep Navy (#0A192F - current theme)
    - Tool: `flutter_native_splash`
- [] **App Name**: Confirm the user-facing name is correct in `AndroidManifest.xml` and `Info.plist`.
- [] **Package Name / Bundle ID**: Verify the application ID is updated to `com.appname.ai`.
 [] setup https://pub.dev/packages/device_preview 

## 2. Android Release Signing (Keystore)
- [ ] **Generate Key**: Run `keytool` to generate a release keystore.
- [ ] **Create `key.properties`**: Separate file for credentials (ensure this is in `.gitignore`).
- [ ] **Configure Build**: Update `android/app/build.gradle` to use the signing configuration.
- [ ] **Backup**: 
    - [ ] Securely store `[app-name]-release.jks`.
    - [ ] Create `key.properties.example` for documentation.
    - [ ] Document SHA fingerprints and instructions (NO PASSWORDS) in a secure internal location.
Move all keystoren and playstore upload file to docs/release, (copy them and update the ones that are already there do not just write place holders) when are seeling off the app so we need to be able to give users all the info in a zip file
ensure only necessary permissions are requested.
  > [!TIP]
  > Added `INTERNET` permission to `main/AndroidManifest.xml` (required for Google Fonts & AI).
- [ ] **Version Bump**: Increment version number and build number in `pubspec.yaml`.

## 3. App Metadata & Store Presence
- [ ] **Store Listing Copy**: Short and long descriptions prepared for all supported languages.
- [ ] **Screenshots**: High-quality screenshots for required device sizes (Phone, 7-inch, 10-inch, etc.).
- [ ] **Privacy Policy**: Hosted URL for the privacy policy.
- [ ] **Support/Contact Email**: Dedicated support address.

## 4. Technical Readiness
- [ ] **Environment Variables**: Ensure production API keys and endpoints are configured (e.g., `.env` or `dart-define`).
- [ ] **ProGuard/R8**: Test the release build to ensure code shrinking/obfuscation doesn't break dependencies (e.g., JSON serialization, local databases).
- [ ] **Permissions**: Audit `AndroidManifest.xml` and `Info.plist` to ensure only necessary permissions are requested.
- [ ] **Version Bump**: Increment version number and build number in `pubspec.yaml`.

## 5. Deployment
 [ ]  create playstore listing in docs
- [ ] **Android Build**: `flutter build appbundle`.
- [ ] **Internal Testing**: Upload to Play Console (Internal Track) and App Store Connect (TestFlight).
- [ ] **Production Release**: Submit for review.

---
