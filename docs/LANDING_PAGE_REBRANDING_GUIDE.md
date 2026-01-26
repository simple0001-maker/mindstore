# Landing Page Rebranding Guide

> **Purpose**: This document provides a step-by-step checklist for transforming the landing page to a new application. It is designed to be generic and reusable for any project that uses this landing page template.

---

## Overview

When rebranding the landing page for a new application, there are several categories of changes that need to be made:

1. **Brand Identity** - App name, logo, taglines
2. **Content & Copy** - Headlines, descriptions, features, FAQs
3. **Visual Assets** - Logo images, favicon, color scheme
4. **Configuration** - Package name, metadata, URLs
5. **Legal Pages** - Privacy policy, terms of service
6. **Contact Information** - Email addresses, social handles

---

## Pre-Rebranding Checklist

Before starting, gather the following information about your new app:

- [ ] New app name
- [ ] One-line description/tagline
- [ ] Core value proposition (what problem does it solve?)
- [ ] Primary brand color (currently emerald-500 `#10b981`)
- [ ] App logo/icon file (PNG recommended)
- [ ] Logo initial letter (for abbreviated logos)
- [ ] Support email address
- [ ] Social media handles (Twitter, GitHub, etc.)
- [ ] Feature list (3-6 main features)
- [ ] How it works steps (typically 3 steps)
- [ ] FAQ content (5-7 questions)

---

## Step-by-Step Rebranding Guide

### Phase 1: Configuration Files

#### 1.1 `landing_page/package.json`
| Line | What to Change | Example Current Value | Change To |
|------|----------------|----------------------|-----------|
| 2 | `"name"` | `"caply-web"` | Your new project name (lowercase, hyphens) |

#### 1.2 `landing_page/README.md`
| Section | What to Change |
|---------|----------------|
| Title | Update `# Caply Web` to your new app name |
| Description | Replace **all** references to previous app names (e.g., "TrimText", "Caply") |
| About section | Rewrite the app description to match your new app's purpose |

---

### Phase 2: Global Layout & Metadata

#### 2.1 `landing_page/app/layout.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 17 | `title` | `"Caply - AI Captions, Hashtags & Alt Text"` |
| 18 | `description` | `"Generate instant captions, hashtags, and alt text for your content. No signup required."` |

**Action Items:**
- [ ] Update the page title with new app name and tagline
- [ ] Update the meta description to match new app's functionality
- [ ] Ensure favicon comment is updated or removed

---

### Phase 3: Navigation & Branding Components

#### 3.1 `landing_page/components/layout/Navbar.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 42 | Logo letter | `<span>C</span>` |
| 44 | Brand name | `Caply` |

**Action Items:**
- [ ] Change the logo letter in the icon (line 42)
- [ ] Change the brand name text (line 44)

---

### Phase 4: Landing Page Sections

#### 4.1 `landing_page/components/landing/Hero.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 64 | Badge text | `"AI for Creators"` |
| 74-75 | Main headline | `"Describe and enhance what exists."` |
| 84 | Subtitle/description | References "Caply generates captions, hashtags, and alt text" |
| 176 | Textarea placeholder | `"Describe your content briefly..."` |
| 197 | CTA button text | `"Generate Content Pack"` |

**Action Items:**
- [ ] Update the badge text to match new app category
- [ ] Rewrite the main headline to reflect new app's core value
- [ ] Update the subtitle/description paragraph
- [ ] Update any placeholder text in inputs
- [ ] Update CTA button text
- [ ] Update any demo/sample output data (lines 32-36)

#### 4.2 `landing_page/components/landing/Features.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 44 | Section headline | `"Everything you need to press post."` |
| 47 | Section subheading | References "Caply handles the boring parts..." |
| 5-36 | Features array | All 6 feature objects with icons, titles, descriptions |

**Action Items:**
- [ ] Update the section headline
- [ ] Update the section subheading (remove app name reference)
- [ ] Replace all 6 features with your app's actual features:
  - Feature 1: icon, title, description
  - Feature 2: icon, title, description
  - Feature 3: icon, title, description
  - Feature 4: icon, title, description
  - Feature 5: icon, title, description
  - Feature 6: icon, title, description

#### 4.3 `landing_page/components/landing/HowItWorks.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 14 | Step 2 description | References "Caply analyzes the content" |
| 29-31 | Section headline | `"Three steps to better content."` |
| 34 | Section subheading | References "Let Caply handle the metadata" |
| 5-21 | Steps array | All 3 step objects |

**Action Items:**
- [ ] Update the section headline
- [ ] Update the section subheading (remove app name reference)
- [ ] Replace all 3 steps with your app's workflow:
  - Step 1: icon, title, description
  - Step 2: icon, title, description
  - Step 3: icon, title, description

#### 4.4 `landing_page/components/landing/FAQ.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 12 | FAQ question 1 | `"Do I need to create an account to use Caply?"` |
| 13 | FAQ answer 1 | References "Caply is designed to be a lightweight utility" |
| 21 | FAQ question 3 | `"What platforms does Caply support?"` |
| 22 | FAQ answer 3 | References "Caply generates content" |
| 25 | FAQ question 4 | `"Is Caply free to use?"` |
| 26 | FAQ answer 4 | References "Caply is currently free" |
| 29 | FAQ question 5 | How accurate is the AI? |
| 30 | FAQ answer 5 | References "Caply uses state-of-the-art" |
| 43 | Section subheading | `"Everything you need to know about Caply"` |

**Action Items:**
- [ ] Replace all FAQ questions (remove app name references)
- [ ] Replace all FAQ answers (remove app name references)
- [ ] Update section subheading
- [ ] Consider adding/removing FAQs based on new app's needs

#### 4.5 `landing_page/components/landing/Footer.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 14 | Logo letter | `<span>C</span>` |
| 17 | Brand name | `Caply` |
| 21 | Brand description | `"Caply generates captions, hashtags, and alt text..."` |
| 73 | Copyright | `"© 2026 Caply. All rights reserved."` |
| 76 | Tagline | `"Describe what exists."` |

**Action Items:**
- [ ] Update logo letter
- [ ] Update brand name
- [ ] Rewrite brand description in footer
- [ ] Update copyright with new app name
- [ ] Update tagline
- [ ] Update year if necessary

---

### Phase 5: Main Home Page

#### 5.1 `landing_page/app/page.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 41 | Bottom CTA headline | `"Stop guessing. Start posting."` |
| 44 | Bottom CTA description | `"Get the perfect caption, hashtags, and alt text in seconds."` |
| 52 | CTA button text | `"Describe it now"` |

**Action Items:**
- [ ] Update the bottom CTA section headline
- [ ] Update the bottom CTA description
- [ ] Update the CTA button text
- [ ] Review trust indicators section (lines 21-24) - update platform names if relevant

---

### Phase 6: Legal & Informational Pages (pls write a complete privacypolicy relevant to the app we are doing, shoudld be very long and look professional, do not just list stuff out)

#### 6.1 `landing_page/app/privacy-policy/page.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 11 | Page description | References general privacy approach |
| 19 | Content | `"Caply is designed with a 'Privacy First' approach"` |
| 57 | Support email | `support@caply.app` |
| 62 | Last updated date | `January 17, 2026` | 

**Action Items:**
- [ ] Replace all instances of app name with new name
- [ ] Update support email address
- [ ] Update "Last Updated" date
- [ ] Review and customize privacy policy content as needed

#### 6.2 `landing_page/app/terms/page.tsx` (pls write a complete terms of service relevant to the app we are doing, shoudld be very long and look professional, do not just list stuff out)
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 11 | Page description | References "Caply" |
| 19 | Section content | Multiple references to "Caply" |
| 24 | Section content | References "Caply is a utility" |
| 29 | Section content | References "The Caply brand, logo, and software" |
| 34 | Section content | References "Caply is provided 'as is'" |
| 39 | Section content | References "modify or discontinue Caply" |
| 44 | Effective date | `January 17, 2026` |

**Action Items:**
- [ ] Replace all instances of app name (~8 occurrences)
- [ ] Update the effective date
- [ ] Review and customize terms content as needed

#### 6.3 `landing_page/app/help/page.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 9 | Category description | `"Learn how to use Caply."` |
| 19 | Page description | `"Find answers, guides, and support for Caply."` |

**Action Items:**
- [ ] Update help category descriptions (remove app name references)
- [ ] Update page description

#### 6.4 `landing_page/app/contact/page.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 33 | Contact email | `hello@caply.app` |
| 43 | Twitter handle | `@caplyapp` |
| 53 | GitHub handle | `caply` |

**Action Items:**
- [ ] Update contact email address
- [ ] Update Twitter/X handle
- [ ] Update GitHub username/org
- [ ] Add/remove social platforms as needed

---

### Phase 7: Mockup Components

#### 7.1 `landing_page/components/mockup/AppScreen.tsx`
| Line | What to Change | Current Value |
|------|----------------|---------------|
| 15 | Logo letter | `<span>C</span>` |
| 17 | App name in mockup | `Caply` |
| 29-31 | Sample input text | Example text for demo |
| 44-46 | Sample output text | Example generated content |

**Action Items:**
- [ ] Update logo letter in mockup
- [ ] Update app name in mockup app bar
- [ ] Update sample input/output text to match new app's functionality
- [ ] Update any labels (e.g., "Generated Caption")

---

### Phase 8: Visual Assets

#### 8.1 Logo Generation

**IMPORTANT**: The logo is a critical branding element that appears in:
- Navbar (desktop and mobile)
- Footer
- Mockup components
- Favicon (browser tab)
- Root `assets/` directory (for Flutter/mobile app use)

**Steps to create and add a new logo:**

1. **Generate a new logo** using an AI image generator or design tool:
   - Use a prompt like: "A modern, minimal app icon logo for [APP_NAME]. Clean geometric design with [PRIMARY_COLOR] as the accent color on a dark background. Professional, sleek, suitable for app stores. No text, just the icon mark. Flat design style."
   - Recommended size: 1024x1024 pixels (PNG format)

2. **Save the logo to these locations:**
   - `assets/app_logo.png` - For Flutter/mobile app use
   - `landing_page/public/app_logo.png` - For web landing page

3. **Generate favicon from logo:**
   ```bash
   # Using ffmpeg:
   ffmpeg -i assets/app_logo.png -vf scale=32:32 landing_page/public/favicon.ico -y
   
   # Or using ImageMagick:
   convert assets/app_logo.png -resize 32x32 landing_page/public/favicon.ico
   ```

4. **Update components to use the logo image:**

   **Navbar.tsx** - Update logo section:
   ```tsx
   import Image from "next/image";
   // ...
   <div className="w-10 h-10 relative overflow-hidden rounded-xl">
     <Image src="/app_logo.png" alt="[APP_NAME]" fill className="object-cover" />
   </div>
   ```

   **Footer.tsx** - Update logo section:
   ```tsx
   import Image from "next/image";
   // ...
   <div className="w-8 h-8 relative overflow-hidden rounded-lg">
     <Image src="/app_logo.png" alt="[APP_NAME]" fill className="object-cover" />
   </div>
   ```

   **AppScreen.tsx** (mockup) - Update logo section:
   ```tsx
   import Image from "next/image";
   // ...
   <div className="w-6 h-6 relative overflow-hidden rounded">
     <Image src="/app_logo.png" alt="[APP_NAME]" fill className="object-cover" />
   </div>
   ```

#### 8.2 `landing_page/public/` directory
| File | Description | Action |
|------|-------------|--------|
| `app_logo.png` | Main app logo (1024x1024 recommended) | Replace with new logo |
| `favicon.ico` | Browser tab icon (32x32) | Generate from app_logo.png |
| `google*.html` | Google Site Verification | Replace with new verification file if needed |

#### 8.3 `assets/` directory (root)
| File | Description | Action |
|------|-------------|--------|
| `app_logo.png` | Main app logo for mobile/Flutter app | Same logo as public folder |

**Action Items:**
- [ ] Generate new app logo (1024x1024 PNG)
- [ ] Copy logo to `assets/app_logo.png`
- [ ] Copy logo to `landing_page/public/app_logo.png`
- [ ] Generate favicon: `ffmpeg -i assets/app_logo.png -vf scale=32:32 landing_page/public/favicon.ico -y`
- [ ] Update `Navbar.tsx` to use `<Image src="/app_logo.png" ... />`
- [ ] Update `Footer.tsx` to use `<Image src="/app_logo.png" ... />`
- [ ] Update `AppScreen.tsx` to use `<Image src="/app_logo.png" ... />`
- [ ] Verify favicon appears in browser tab
- [ ] Update or remove Google Site Verification files

---

### Phase 9: Color Scheme (Optional)

The current landing page uses **emerald** (`emerald-500`, `emerald-600`, etc.) as the primary accent color.

**Files containing color references:**
- `app/page.tsx` - Background patterns, text colors
- `app/globals.css` - Any custom color definitions
- `components/landing/Hero.tsx` - Accent colors for badges, buttons, decorations
- `components/landing/Features.tsx` - Icon backgrounds, hovers
- `components/landing/HowItWorks.tsx` - Decorative elements
- `components/landing/FAQ.tsx` - Section headings
- `components/landing/Footer.tsx` - Hover states
- `components/layout/Navbar.tsx` - CTA button accents

**To change the color scheme:**
1. Search and replace color class names (e.g., `emerald-500` → `blue-500`)
2. Update any hex color values in CSS or inline styles
3. Ensure consistent application across all components

---

## Post-Rebranding Verification Checklist

After completing all changes, verify the following:

### Visual Verification
- [ ] All instances of old app name are removed
- [ ] Logo displays correctly in navbar, footer, and mockups
- [ ] Favicon appears correctly in browser tab
- [ ] Color scheme is consistent across all pages
- [ ] All links work correctly (navigation, CTAs, footer)

### Content Verification
- [ ] Headlines and descriptions make sense for new app
- [ ] Features accurately describe new app's functionality
- [ ] FAQ content is relevant to new app
- [ ] Legal pages reference correct app name and contact info

### Technical Verification
- [ ] `npm run dev` or `pnpm dev` runs without errors
- [ ] `npm run build` completes successfully
- [ ] No console errors in browser
- [ ] Mobile responsiveness is intact

### Pages to Test
- [ ] Home page (`/`)
- [ ] Privacy Policy (`/privacy-policy`)
- [ ] Terms of Service (`/terms`)
- [ ] Help Center (`/help`)
- [ ] Contact Page (`/contact`)

---

## Quick Reference: Files to Update

| Priority | File Path | Key Changes |
|----------|-----------|-------------|
| 🔴 High | `app/layout.tsx` | Title, meta description |
| 🔴 High | `components/layout/Navbar.tsx` | Logo letter, brand name |
| 🔴 High | `components/landing/Footer.tsx` | Logo, brand name, copyright |
| 🔴 High | `components/landing/Hero.tsx` | Headlines, descriptions, CTAs |
| 🟡 Medium | `components/landing/Features.tsx` | Feature list |
| 🟡 Medium | `components/landing/HowItWorks.tsx` | Steps |
| 🟡 Medium | `components/landing/FAQ.tsx` | All Q&A content |
| 🟡 Medium | `app/page.tsx` | Bottom CTA section |
| 🟢 Lower | `app/privacy-policy/page.tsx` | Legal content, email |
| 🟢 Lower | `app/terms/page.tsx` | Legal content |
| 🟢 Lower | `app/help/page.tsx` | Help categories |
| 🟢 Lower | `app/contact/page.tsx` | Contact info |
| 🟢 Lower | `components/mockup/AppScreen.tsx` | Demo content |
| 🔵 Config | `package.json` | Project name |
| 🔵 Config | `README.md` | Documentation |
| 🔵 Assets | `public/app_logo.png` | Logo image |
| 🔵 Assets | `public/favicon.ico` | Favicon |

---

## Search & Replace Reference

Use these search terms to find all instances of the old branding:

| Search Term | Expected Occurrences | Files |
|-------------|---------------------|-------|
| `Caply` (case-sensitive) | ~20+ | Multiple |
| `caply` (lowercase) | ~5+ | package.json, contact info |
| `caply.app` | ~3 | Privacy, Contact pages |
| `@caplyapp` | 1 | Contact page |
| `emerald-500` | ~10+ | Various components |
| `emerald-600` | ~5+ | Various components |

---

## Notes

- Always back up the original files before making changes
- Test thoroughly on both desktop and mobile after rebranding
- Consider creating a rebranding branch in version control
- Update any external documentation, README files, or deployment configs

---

*Last Updated: January 2026*
