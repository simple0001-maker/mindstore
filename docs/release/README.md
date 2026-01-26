# ClapReply Release Credentials

**Project:** ClapReply  
**Created:** January 2026  
**Purpose:** Production release credentials and Play Store assets

---

## ⚠️ SECURITY WARNING

**This directory contains production-critical credentials.**

- **DO NOT** commit to public version control
- **DO** encrypt before storing externally
- **DO** limit access to authorized personnel only

When selling/transferring the app, zip this entire `docs/release/` folder and send to the client.

---

## Directory Structure

```
docs/release/
├── README.md                    (this file)
├── clapreply-release.jks        (production signing keystore)
├── key.properties               (Gradle signing config)
├── play_store_listing.md        (store description)
├── privacy_policy.md            (privacy policy content)
├── featured_graphic_clapreply.png (Play Store graphic)
└── screenshots/                 (store screenshots - to be added)
```

---

## 🔐 Keystore Credentials (PRODUCTION)

| Setting | Value |
|---------|-------|
| **Keystore File** | `clapreply-release.jks` |
| **Keystore Password** | `clapreply123` |
| **Key Alias** | `clapreply` |
| **Key Password** | `clapreply123` |
| **Validity** | 10,000 days |

### Generation Command (Reference)
```bash
keytool -genkey -v -keystore clapreply-release.jks -keyalg RSA -keysize 2048 -validity 10000 -alias clapreply -storepass clapreply123 -keypass clapreply123 -dname "CN=ClapReply, OU=ClapReply, O=ClapReply, L=City, ST=State, C=US"
```

---

## Setup Instructions

### Step 1: Copy Keystore to Android Project
```bash
cp docs/release/clapreply-release.jks android/app/clapreply-release.jks
```

### Step 2: Create key.properties in android/
Create `android/key.properties` with:
```properties
storePassword=clapreply123
keyPassword=clapreply123
keyAlias=clapreply
storeFile=clapreply-release.jks
```

### Step 3: Configure build.gradle.kts
Ensure `android/app/build.gradle.kts` has signing config:
```kotlin
android {
    signingConfigs {
        create("release") {
            val keystorePropertiesFile = rootProject.file("key.properties")
            if (keystorePropertiesFile.exists()) {
                val keystoreProperties = Properties()
                keystoreProperties.load(FileInputStream(keystorePropertiesFile))
                keyAlias = keystoreProperties["keyAlias"] as String
                keyPassword = keystoreProperties["keyPassword"] as String
                storeFile = file(keystoreProperties["storeFile"] as String)
                storePassword = keystoreProperties["storePassword"] as String
            }
        }
    }
    buildTypes {
        release {
            signingConfig = signingConfigs.getByName("release")
            // ...
        }
    }
}
```

### Step 4: Build Release Bundle
```bash
flutter build appbundle
```

---

## SHA Fingerprints

To get fingerprints for Play Store:
```bash
keytool -list -v -keystore docs/release/clapreply-release.jks -alias clapreply -storepass clapreply123
```

---

## Play Store Assets

| Asset | File | Status |
|-------|------|--------|
| Feature Graphic | `featured_graphic_clapreply.png` | ✅ Ready |
| App Icon | See `assets/app_logo.png` | ✅ Ready |
| Store Listing | `play_store_listing.md` | ✅ Ready |
| Privacy Policy | `privacy_policy.md` | ✅ Ready |
| Screenshots | `screenshots/` | ✅ Ready (Uploaded directly) |

---

## For Client Handoff

When transferring to a client:

1. **Create encrypted ZIP**:
   ```bash
   cd docs
   zip -r -e clapreply-release-credentials.zip release/
   ```

2. **Include in package**:
   - This entire `docs/release/` folder
   - `assets/app_logo.png`
   - Source code (if applicable)

3. **Share password separately** via secure channel

---

## Recovery Procedures

### If Credentials Are Lost:
1. Contact Google Play Support immediately
2. Provide proof of ownership
3. Follow Google's keystore recovery process

**⚠️ Losing this keystore means you CANNOT update the app on Play Store!**

---

*Last Updated: January 2026*
