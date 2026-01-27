# RecallBox - Release Credentials

**⚠️ IMPORTANT**: Keep this file secure! Losing the keystore means you cannot update the app on Play Store.

---

## Android Signing Credentials

### Keystore Information
- **File**: `recallbox-release.jks`
- **Alias**: `recallbox`
- **Store Password**: `recallbox123`
- **Key Password**: `recallbox123`
- **validity**: 10,000 days (expires ~2053)
- **Algorithm**: RSA 2048-bit

### Key Details
```
CN=RecallBox
OU=RecallBox  
O=RecallBox
L=Lagos
ST=Lagos
C=NG
```

---

## Package Information

- **Package Name**: `com.recallbox.app`
- **App Name**: RecallBox
- **Version**: 1.0.0+1

---

## File Locations

### Keystore Files
- Production keystore: `docs/release/recallbox-release.jks`
- Android app keystore: `android/app/recallbox-release.jks`
- Key properties: `android/key.properties`

### Important: Backup
Make sure to back up these files to a secure location:
1. `recallbox-release.jks`
2. `key.properties` 
3. This README file

---

## Building for Release

### Generate Release APK
```bash
flutter build apk --release
```

### Generate App Bundle (for Play Store)
```bash
flutter build appbundle --release
```

Output locations:
- APK: `build/app/outputs/apk/release/app-release.apk`
- AAB: `build/app/outputs/bundle/release/app-release.aab`

---

## Play Store Listing

See `play_store_listing.md` for:
- App descriptions
- Keywords
- Screenshots guidance
- Feature graphic specs

---

## Privacy Policy

See `privacy_policy.md` - must be hosted at:
`https://recallbox.app/privacy-policy`

---

## Version Updates

Before each release:
1. Update version in `pubspec.yaml`
   - Format: `major.minor.patch+buildNumber`
   - Example: `1.0.1+2`
2. Build app bundle
3. Test on multiple devices
4. Upload to Play Console

---

## Support Contacts

- **Email**: support@recallbox.app
- **Website**: https://recallbox.app

---

## Notes

- Never commit `key.properties` or `.jks` files to public repositories
- Store passwords securely (password manager recommended)
- Keep multiple backups of the keystore in different locations
- Document any changes to signing configuration

---

**Created**: January 27, 2026  
**Last Updated**: January  27, 2026
