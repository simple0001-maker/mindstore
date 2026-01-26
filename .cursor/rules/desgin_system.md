# 🎨 SnapSort Design System

**Last Updated:** October 2025  
**Status:** Active - Reference this document when building any UI

---

## 📐 Design Philosophy

SnapSort follows a **minimalist, content-first design** that feels like a polished SaaS product. Our UI is:

- ✅ **Clean & Compact** - Small components that do one thing well
- ✅ **Subtle & Professional** - No heavy decorations or excessive animations
- ✅ **Consistent & Predictable** - Same patterns everywhere
- ✅ **Mobile-First** - Optimized for phones, scales to tablets
- ✅ **Theme-Aware** - Seamlessly adapts to light/dark mode
- ✅ do not use emoji in the app, do not use emoji in the ap only use icons from svgIcons, read through the icon and find any appropriate one for your use case

---

## 🎯 Core Principles

### 1. **Everything Should Be Compact But Not Cramped**
- Use smaller padding (12-16px instead of 20-24px)
- Keep components tight but ensure comfortable touch targets (min 44x44)
- Elements should feel "cozy" not "bloated"

### 2. **Subtle Separation Over Heavy Borders**
- 1px borders with 0.1-0.2 opacity
- Light shadows (0.03-0.04 opacity, 8px blur)
- Use color tints instead of harsh dividers

### 3. **Animations Enhance, Don't Distract**
- Use animations sparingly and purposefully
- 300-600ms duration with easing curves
- Shimmer for success states, fade for transitions
- Never animate everything at once

### 4. **Let Color Scheme Do The Work**
- Always use `colorScheme` colors, never hardcoded values
- Use opacity layers for backgrounds (0.12-0.15)
- Status colors: primary (blue), tertiary (green/success), error (red)

---

## 📏 Spacing System

Use these values consistently throughout the app:

```dart
// Standard spacing scale
4px   // Micro gaps (icon to text in tight spaces)
6px   // Small gaps within components
8px   // Default small spacing
10px  // Comfortable small-medium gap
12px  // Standard element bottom margin
16px  // Default padding for cards/containers
20px  // Large padding (use sparingly)
24px  // Extra large (rare - only for major sections)
```

### Vertical Rhythm
```dart
// Between elements (bottom margin)
margin: EdgeInsets.only(bottom: 12)

// Card padding
padding: EdgeInsets.all(16)

// List item padding
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12)
```

---

## 🎨 Color Usage

### Background Layers (Subtle Depth)

The app uses **layered surfaces** for visual hierarchy without heavy shadows:

```dart
// Light Mode Hierarchy
Scaffold background: colorScheme.surfaceContainerLow
Main cards: colorScheme.surface
Nested containers: colorScheme.surfaceContainerHighest
Input areas: colorScheme.surfaceContainer

// Dark Mode Hierarchy (Cool Dark Look)
Scaffold background: colorScheme.surface  // Darkest - sleek black
Main cards: colorScheme.surfaceContainerLow  // Subtle gray elevation
Nested containers: colorScheme.surfaceContainerHighest  // Lighter for nested content
Input areas: colorScheme.surfaceContainer
```

**Key Pattern:** Background and card colors should be **almost the same but with subtle difference**. The difference is noticeable but never harsh.

**Dark Mode Strategy:**
- Use `surface` (darkest) for page backgrounds → **Cool, sleek black look**
- Use `surfaceContainerLow` for main cards → **Subtle gray elevation**
- Use `surfaceContainerHighest` for nested/elevated elements → **More visible contrast**

```dart
// Example: Card on page background (Standard Pattern)
Container(
  decoration: BoxDecoration(
    color: theme.brightness == Brightness.dark
        ? colorScheme.surfaceContainerLow  // Dark mode: subtle gray
        : colorScheme.surface,              // Light mode: white/light
    borderRadius: BorderRadius.circular(12),
  ),
)
```

### Colored Backgrounds (Accents)

Use color tints with opacity for accent backgrounds:

```dart
// Primary accent container
color: colorScheme.primary.withOpacity(0.12)
border: colorScheme.primary.withOpacity(0.2-0.3)

// Success/Tertiary container
color: colorScheme.tertiary.withOpacity(0.15)
border: colorScheme.tertiary.withOpacity(0.2)

// Error container
color: colorScheme.error.withOpacity(0.12)
border: colorScheme.error.withOpacity(0.2)

// Info/Secondary container
color: colorScheme.secondary.withOpacity(0.12)
border: colorScheme.secondary.withOpacity(0.2)
```

### Text Colors

```dart
// Primary text
color: colorScheme.onSurface

// Secondary text (descriptions, labels)
color: colorScheme.onSurfaceVariant

// Disabled text
color: colorScheme.onSurface.withOpacity(0.5)

// On colored backgrounds
color: colorScheme.onPrimaryContainer
color: colorScheme.onTertiaryContainer
```

### Border Colors

```dart
// Default subtle border
border: Border.all(
  color: colorScheme.outline.withOpacity(0.1-0.15),
  width: 1,
)

// Focused/Selected border
border: Border.all(
  color: colorScheme.primary.withOpacity(0.3-0.4),
  width: 1.5-2,
)

// Dividers
color: colorScheme.outline.withOpacity(0.1)
width: 1
```

---

## 🧱 Component Anatomy

### Card Component Pattern

**Standard card structure** used throughout the app:

```dart
Container(
  width: double.infinity,
  margin: const EdgeInsets.only(bottom: 12),
  padding: const EdgeInsets.all(16),
  decoration: BoxDecoration(
    color: theme.brightness == Brightness.dark
        ? colorScheme.surfaceContainerLow
        : colorScheme.surface,
    borderRadius: BorderRadius.circular(12),
    border: Border.all(
      color: colorScheme.outline.withOpacity(0.12),
      width: 1,
    ),
    boxShadow: [
      BoxShadow(
        color: Colors.black.withOpacity(
          theme.brightness == Brightness.dark ? 0.1 : 0.04,
        ),
        blurRadius: 10,
        offset: const Offset(0, 2),
      ),
    ],
  ),
  child: content,
)
```

**Key measurements:**
- Border radius: `12px`
- Border: `1px` at `0.12` opacity
- Shadow: `0.04` opacity (light), `0.1` opacity (dark)
- Shadow blur: `10px` (dark), `10px` (light)
- Shadow offset: `Offset(0, 2)`
- Padding: `16px all sides`
- Bottom margin: `12px`

### Icon Badge Pattern

**Circular icon containers** for visual markers:

```dart
Container(
  width: 32-36,  // 32px for small, 36px for standard
  height: 32-36,
  decoration: BoxDecoration(
    shape: BoxShape.circle,
    color: colorScheme.primary.withOpacity(0.12),
  ),
  child: Center(
    child: SvgIcons.iconName(
      size: 16-18,  // 16px for small, 18px for standard
      color: colorScheme.primary,
    ),
  ),
)
```

**Always use:**
- Circle shape
- Color at 0.12 opacity for background
- Full color for icon
- Icon size: 16-18px
- Badge size: 32-36px

### App Bar Title Guidelines

**IMPORTANT:** Titles in `CollapsingAppBar` must be kept short to avoid UI disruption.

**Rules:**
- ✅ **Maximum 2 words** - Any longer will overlap with action buttons
- ✅ **Predictable length** - Static or short dynamic text only
- ✅ **Use generic page names** - 'Profile', 'Course Outline', 'Materials'
- ❌ **Never use long dynamic names** - No user names, full course titles

**Good Examples:**
```dart
title: 'Profile'           // ✅ 1 word
title: 'Course Outline'    // ✅ 2 words
title: 'Study Materials'   // ✅ 2 words
title: 'Mock Exams'        // ✅ 2 words
title: 'Settings'          // ✅ 1 word
```

**Bad Examples:**
```dart
title: 'John Doe\'s Profile'                          // ❌ Too long, use dynamic data
title: 'Introduction to Advanced Mathematics'         // ❌ Way too long
title: 'My Personal Study Materials and Resources'    // ❌ Disrupts UI
```

**Where to show dynamic data:**
- User names, course titles → Show in page content, not app bar
- Long descriptions → Show in cards below the header

### Button Pattern

**Small action buttons** for inline actions:

```dart
Container(
  height: 34-36,
  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
  decoration: BoxDecoration(
    color: isSelected
        ? colorScheme.primary.withOpacity(0.12)
        : colorScheme.surfaceContainer,
    borderRadius: BorderRadius.circular(16-18),
    border: Border.all(
      color: isSelected
          ? colorScheme.primary.withOpacity(0.4)
          : colorScheme.outline.withOpacity(0.2),
      width: isSelected ? 1.5 : 1,
    ),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      icon,  // 14-16px size
      const SizedBox(width: 6),
      Text(
        label,
        style: theme.textTheme.labelMedium?.copyWith(
          fontWeight: FontWeight.w600,
        ),
      ),
    ],
  ),
)
```

**Key measurements:**
- Height: `34-36px`
- Padding: `12px horizontal, 8px vertical`
- Border radius: `16-18px`
- Icon size: `14-16px`
- Gap between icon and text: `6px`
- Font: `labelMedium` with `FontWeight.w600`

### Chip/Tag Pattern

**Small number badges** for topics, counts, etc:

```dart
Container(
  width: 16-20,
  height: 16-20,
  decoration: BoxDecoration(
    shape: BoxShape.circle,
    color: colorScheme.primary,
  ),
  child: Center(
    child: Text(
      '${number}',
      style: theme.textTheme.labelSmall?.copyWith(
        color: Colors.white,
        fontWeight: FontWeight.w700,
        fontSize: 9-10,
      ),
    ),
  ),
)
```

---

## 🎭 Animated Borders (Special UI)

### Flowing Gradient Border

**Use sparingly** for special components that need emphasis (like pathway indicator, topic headers):

```dart
// Top flowing border (TopicHeaderCard pattern)
Container(
  height: 3,
  decoration: BoxDecoration(
    gradient: LinearGradient(
      colors: [
        const Color(0xFF60A5FA), // Light blue
        const Color(0xFF3B82F6), // Blue
        const Color(0xFF2563EB), // Darker blue
        const Color(0xFF1D4ED8), // Even darker
        const Color(0xFF60A5FA), // Back to light
      ],
    ),
    borderRadius: const BorderRadius.only(
      topLeft: Radius.circular(16),
      topRight: Radius.circular(16),
    ),
  ),
)
    .animate(
      onPlay: (controller) => controller.repeat(),
    )
    .shimmer(
      duration: 3.seconds,
      color: Colors.white.withOpacity(0.3),
    )
```

**When to use:**
- ✅ Topic section headers (marks new section)
- ✅ Active pathway indicator (shows current learning position)
- ✅ Important status cards (success, completion)
- ❌ Regular cards (use simple borders)
- ❌ List items (too distracting)
- ❌ Buttons (keep them simple)

### Multi-Color Flowing Border

For the **SnapSortingPathwaySidebar** or special containers:

```dart
import 'package:learn/features/learn_ai/presentation/widgets/landing/flowing_gradient_border.dart';

FlowingGradientBorder(
  borderRadius: 16,
  borderWidth: 2,
  duration: const Duration(seconds: 4),
  gradientColors: [
    colorScheme.primary,
    colorScheme.secondary,
    colorScheme.tertiary,
    const Color(0xFFEC4899), // Pink accent
    const Color(0xFF8B5CF6), // Purple accent
    colorScheme.primary, // Loop back
  ],
  child: Container(
    padding: const EdgeInsets.all(16),
    decoration: BoxDecoration(
      color: colorScheme.surfaceContainerHighest,
      borderRadius: BorderRadius.circular(16),
    ),
    child: content,
  ),
)
```

**Guidelines:**
- Border width: `2px` (thicker than normal since it's animated)
- Duration: `4 seconds` (slow, smooth flow)
- Colors: Use theme colors + 1-2 accent colors
- Always loop back to first color for seamless animation

---

## 📝 Typography System

### Text Styles

```dart
// Page Title / Main Heading
theme.textTheme.titleLarge?.copyWith(
  fontWeight: FontWeight.bold, // or w700
)

// Section Headers / Card Titles
theme.textTheme.titleMedium?.copyWith(
  fontWeight: FontWeight.w600,
)

// Subsection / Small Headers
theme.textTheme.titleSmall?.copyWith(
  fontWeight: FontWeight.w600-w700,
)

// Body Text / Descriptions
theme.textTheme.bodyMedium?.copyWith(
  height: 1.5, // Line height for readability
)

// Captions / Helper Text
theme.textTheme.bodySmall?.copyWith(
  color: colorScheme.onSurfaceVariant,
)

// Button / Action Text
theme.textTheme.labelMedium?.copyWith(
  fontWeight: FontWeight.w600,
)

// Chip / Tag Text
theme.textTheme.labelSmall?.copyWith(
  fontWeight: FontWeight.w600,
  fontSize: 11-12,
)
```

### Text Hierarchy

```dart
// Headers: w700 (bold) or w600 (semi-bold)
fontWeight: FontWeight.w700  // Main titles
fontWeight: FontWeight.w600  // Section headers

// Body: w500 (medium) or w400 (regular)
fontWeight: FontWeight.w500  // Important body text
fontWeight: FontWeight.w400  // Regular body text (default)

// Labels: w600
fontWeight: FontWeight.w600  // All labels, buttons, chips
```

### Line Height

```dart
// Body text - always set line height for readability
style: theme.textTheme.bodyMedium?.copyWith(
  height: 1.5, // 150% line height
)

// Headers - tighter line height
style: theme.textTheme.titleMedium?.copyWith(
  height: 1.2-1.3,
)
```

---

## 🎬 Animation Guidelines

**Philosophy:** Animations should enhance, not distract. Use them sparingly and purposefully to guide attention and provide feedback.

### When to Use Animations

✅ **DO animate:**
- **Special emphasis cards** - Use flowing/shimmer borders ONLY for:
  - Featured content (e.g., Mock Exams card on Practice tab)
  - Important status cards (success, completion)
  - Primary call-to-action cards
- **New content appearing** - Subtle fade-in + slide (300ms)
- **Success states** - Shimmer effect on completion
- **User feedback** - Tap responses, state changes
- **Navigation transitions** - Smooth page transitions

❌ **DON'T animate:**
- Regular list items and cards
- Text changes or updates
- Every component on the page
- Loading states (use progress indicators instead)
- Static content cards
- Default buttons and inputs
- Color changes on hover

### Animation Types & Usage

**1. Flowing Gradient Border (SPECIAL USE ONLY)**

Use the `FlowingGradientBorder` component **ONLY** for:
- Featured cards that need maximum emphasis
- Primary navigation or important sections
- **Limit:** Max 1-2 per screen

```dart
import 'package:learn/features/learn_ai/presentation/widgets/landing/flowing_gradient_border.dart';

FlowingGradientBorder(
  borderRadius: 16,
  borderWidth: 2,
  duration: const Duration(seconds: 4),
  gradientColors: [accentColor, color2, color3, accentColor],
  child: YourContent(),
)
```

**2. Shimmer Border (MODERATE USE)**

Use shimmer on ALL SIDES of card border for:
- Practice/quiz cards
- Interactive selection cards
- **Limit:** Max 3-4 per screen

```dart
Container(
  decoration: BoxDecoration(
    border: Border.all(color: accentColor.withOpacity(0.3), width: 1.5),
    borderRadius: BorderRadius.circular(12),
  ),
  child: content,
)
  .animate(onPlay: (controller) => controller.repeat())
  .shimmer(
    duration: 3.seconds,
    color: Colors.white.withOpacity(0.3),
  )
```

**3. Fade In + Slide (COMMON)**

Use for list items and new content:

```dart
.animate()
.fadeIn(duration: 300.ms, delay: 50.ms)
.slideX(begin: 0.1, end: 0, duration: 300.ms, delay: 50.ms)
```

**4. Success Shimmer (COMPLETION)**

Use only for completed/success states:

```dart
.animate(target: isCompleted ? 1 : 0)
.shimmer(
  duration: 2.seconds,
  color: colorScheme.tertiary.withOpacity(0.4),
)
```

### Animation Durations

```dart
// Quick feedback
duration: 200-300.ms  // Button press, list item appear

// Standard transitions
duration: 400-500.ms  // Card appearance, navigation

// Ambient animations
duration: 3-4.seconds  // Flowing borders, subtle shimmer
```

### Animation Curves

```dart
// Standard (most common)
curve: Curves.easeInOutCubic

// Quick entry
curve: Curves.easeOut

// Smooth deceleration
curve: Curves.easeOutCubic
```

### Best Practices

1. **Less is More** - Not every component needs animation
2. **Purpose over Decoration** - Animate to guide, not to impress
3. **Performance** - Avoid animating too many elements simultaneously
4. **Consistency** - Same animation types for similar interactions
5. **Accessibility** - Ensure animations don't cause motion sickness

---

## 🔲 Layout Patterns

### Colored Bar + Content Row (Preferred)

**Premium pattern** for list cards - use this instead of leading icons:

```dart
Row(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    // Colored vertical bar indicator
    Container(
      width: 3,
      height: 44,  // Matches content height
      decoration: BoxDecoration(
        color: colorScheme.primary,
        borderRadius: BorderRadius.circular(2),
      ),
    ),
    const SizedBox(width: 12),
    Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title),
          const SizedBox(height: 4),
          Text(description),
        ],
      ),
    ),
  ],
)
```

**Why use colored bars:**
- ✅ More minimal and premium feel
- ✅ Less visual clutter than icon badges
- ✅ Better for scannable lists
- ✅ Color-coding is clearer at a glance
- ✅ Saves horizontal space

**IMPORTANT:** 
- ⚠️ **The colored bar REPLACES the icon badge** - Never use both together
- ⚠️ **Do NOT add icon badges when using colored bars** - Choose one pattern, not both  (alway use color bar, its more preferable )

**When to use:**
- List items (exams, materials, sessions)
- Recent activity cards
- History items
- Any scannable vertical list

### Icon + Content Row (Alternative)

**Use icon badges only when:**
- The icon provides essential context
- For empty states or special sections
- Not in repeated list items

```dart
Row(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Container(
      width: 36,
      height: 36,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: colorScheme.primary.withOpacity(0.12),
      ),
      child: Center(
        child: SvgIcons.iconName(
          size: 18,
          color: colorScheme.primary,
        ),
      ),
    ),
    const SizedBox(width: 12),
    Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title),
          const SizedBox(height: 6),
          Text(description),
        ],
      ),
    ),
  ],
)
```

### Horizontal Scrolling Lists

For **action buttons, chips, filters**:

```dart
SizedBox(
  height: 36,
  child: ListView(
    scrollDirection: Axis.horizontal,
    padding: const EdgeInsets.symmetric(horizontal: 16),
    children: [
      button1,
      const SizedBox(width: 8),
      button2,
      const SizedBox(width: 8),
      button3,
    ],
  ),
)
```

### Bottom Sheets (Not Dialogs)

**Prefer bottom sheets** for selections and options:

```dart
showModalBottomSheet(
  context: context,
  isScrollControlled: true,
  shape: const RoundedRectangleBorder(
    borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
  ),
  builder: (context) => DraggableScrollableSheet(
    initialChildSize: 0.6,
    minChildSize: 0.4,
    maxChildSize: 0.9,
    expand: false,
    builder: (context, scrollController) {
      return Container(
        padding: const EdgeInsets.symmetric(vertical: 20),
        child: Column(
          children: [
            // Handle bar
            Container(
              margin: const EdgeInsets.only(top: 12, bottom: 16),
              width: 40,
              height: 4,
              decoration: BoxDecoration(
                color: colorScheme.onSurfaceVariant.withOpacity(0.4),
                borderRadius: BorderRadius.circular(2),
              ),
            ),
            // Content
          ],
        ),
      );
    },
  ),
)
```

### Collapsing App Bar (Standard Pattern)

**🚨 CRITICAL: ALWAYS use CollapsingAppBar for all list/detail screens. NEVER create custom app bars.**

Import and use the standard component:
```dart
import 'package:learn/core/widgets/collapsing_app_bar.dart';

// Title only (recommended - collapses fully)
CollapsingAppBar(
  title: 'Profile',  // ✅ 1 word - perfect
  actions: [...],
)

CollapsingAppBar(
  title: 'SnapSort Spaces',  // ✅ 2 words - perfect
  actions: [...],
)

// With many action buttons - set collapsedHeight to prevent overlap
CollapsingAppBar(
  title: 'Study Materials',
  collapsedHeight: 100,  // Prevents overlap with 3+ action buttons
  actions: [action1, action2, action3, action4],
)

// With subtitle
CollapsingAppBar(
  title: 'Materials',
  subtitle: 'Engineering',
  actions: [...],
)

// ❌ BAD - Custom app bar
Container(
  padding: const EdgeInsets.all(16),
  child: Text('My Custom AppBar'),  // ❌ NEVER do this
)
```

**Key Features:**
- ✅ **Static page titles** - Use descriptive page names, not dynamic data
- ✅ **Optional subtitle** - Add context when needed (e.g., category, department)
- ✅ **Expanded height:** 150px (customizable)
- ✅ **Auto-collapsing** - Collapses fully to toolbar height by default
- ✅ **Title alignment:** Starts right after back button (left: 60px)
- ✅ **Gradient background:** Smooth transition from primary color to surface
- ✅ **Decorative circles:** Subtle background elements for visual interest
- ✅ **Circular action buttons:** With shadows and proper touch targets
- ✅ **Pinned:** Stays at top when scrolling

**Standard Measurements:**
```dart
expandedHeight: 150,        // Full height when not scrolled
collapsedHeight: null,      // Default - collapses fully to toolbar height
collapsedHeight: 100,       // Only use if 3+ action buttons might overlap
```

**Collapsed Height:**
- **null (default):** App bar collapses fully to standard toolbar height (~56px)
- **100:** Use only when you have many action buttons that might overlap with title
- Title is now aligned after back button (left: 60px), so overlap rarely happens

**Title Best Practices:**
- ✅ **Keep it short** - Two words maximum (e.g., 'Course Outline', 'Profile', 'Study Materials')
- ✅ **Predictable text only** - Static or short dynamic text that won't disrupt UI
- ✅ Use static descriptive titles when possible
- ✅ Show detailed dynamic data (names, codes) in the page content below
- ✅ Avoid subtitles unless adding necessary context
- ❌ Don't use long dynamic names in the app bar
- ❌ Don't repeat user/course names that are already shown in content

**Action Button Pattern:**
```dart
AppBarActionButton(
  icon: SvgIcons.iconName(size: 18, color: colorScheme.primary),
  onPressed: () {},
  showBorder: true, // Optional border for emphasis
  borderColor: colorScheme.primary.withOpacity(0.3),
)
```

**Custom Decorative Elements:**
```dart
CollapsingAppBar(
  title: 'My Title',
  decorativeElements: Stack(
    children: [
      // Your custom decorative elements
      Positioned(
        top: 20,
        right: 30,
        child: CustomDecoration(),
      ),
    ],
  ),
)
```

---

## 🎨 Shadow System

### Subtle Shadows (Default)

```dart
boxShadow: [
  BoxShadow(
    color: Colors.black.withOpacity(0.03), // Very light
    blurRadius: 8,
    offset: const Offset(0, 2),
  ),
]
```

### Medium Shadows (Elevated Cards)

```dart
boxShadow: [
  BoxShadow(
    color: Colors.black.withOpacity(0.06),
    blurRadius: 12,
    offset: const Offset(0, 4),
  ),
]
```

### Emphasis Shadows (Active/Selected)

```dart
boxShadow: [
  BoxShadow(
    color: colorScheme.primary.withOpacity(0.3),
    blurRadius: 12,
    spreadRadius: 2,
  ),
]
```

### Dark Mode Shadows

```dart
boxShadow: [
  BoxShadow(
    color: Colors.black.withOpacity(isDark ? 0.1 : 0.04),
    blurRadius: 10,
    offset: const Offset(0, 2),
  ),
]
```

**Rule:** Dark mode gets stronger shadows (0.1 vs 0.04) and more blur (10px vs 8px) for better depth perception on dark backgrounds.

---

## 🎯 Component Size Reference

### Icons

```dart
// In icon badges
size: 16-18px

// In small buttons
size: 14-16px

// In list items
size: 20-24px

// In large actions
size: 24-28px
```

### Badges/Circles

```dart
// Small number badge
width/height: 16-20px

// Icon badge
width/height: 32-36px

// Profile/avatar
width/height: 40-48px
```

### Buttons

```dart
// Small inline button
height: 34-36px
padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8)

// Standard button
height: 44-48px
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12)

// Large primary button
height: 52-56px
padding: EdgeInsets.symmetric(horizontal: 20, vertical: 16)
```

### Cards

```dart
// Compact card
padding: EdgeInsets.all(12)

// Standard card
padding: EdgeInsets.all(16)

// Spacious card (rare)
padding: EdgeInsets.all(20)
```

### Border Radius

```dart
// Small elements (chips, badges)
borderRadius: BorderRadius.circular(8-10)

// Standard (cards, buttons)
borderRadius: BorderRadius.circular(12)

// Large (bottom sheets, modals)
borderRadius: BorderRadius.circular(16-20)

// Pills (buttons, tags)
borderRadius: BorderRadius.circular(16-18)

// Circles (badges, avatars)
shape: BoxShape.circle
```

---

## 🚫 Anti-Patterns (DON'T DO THIS)

### ❌ Floating Action Buttons (FABs) - NEVER USE
```dart
// ❌ BAD - FABs are forbidden
floatingActionButton: FloatingActionButton(
  onPressed: () {},
  child: Icon(Icons.add),
)

// ✅ GOOD - Add actions to app bar instead
CollapsingAppBar(
  title: 'Page Title',
  actions: [
    IconButton(
      icon: SvgIcons.add(size: 20, color: colorScheme.primary),
      onPressed: () => _showAddMenu(context),
      tooltip: 'Add',
    ),
  ],
)
```

**Rule:** 
- 🚫 **NEVER use FloatingActionButton** - They clutter the UI and interfere with scrolling
- ✅ **ALWAYS add actions to the app bar** - Use IconButton in CollapsingAppBar actions
- ✅ **For multiple actions** - Use a "more" icon button that opens a bottom sheet
- ✅ **For primary actions** - Add directly as app bar action buttons

### ❌ Excessive Padding
```dart
// BAD - Too much padding wastes space
padding: const EdgeInsets.all(24)

// GOOD - Compact but comfortable
padding: const EdgeInsets.all(16)
```

### ❌ Heavy Borders
```dart
// BAD - Border too thick and dark
border: Border.all(
  color: Colors.grey,
  width: 2,
)

// GOOD - Subtle 1px border
border: Border.all(
  color: colorScheme.outline.withOpacity(0.1),
  width: 1,
)
```

### ❌ Gradient Backgrounds Everywhere
```dart
// BAD - Gradients on every card
decoration: BoxDecoration(
  gradient: LinearGradient(colors: [blue, purple]),
)

// GOOD - Solid colors, gradients only for special elements
decoration: BoxDecoration(
  color: colorScheme.surface,
)
```

### ❌ Large Icons Everywhere
```dart
// BAD - Icons too big for UI density
SvgIcons.icon(size: 32)

// GOOD - Appropriate size for context
SvgIcons.icon(size: 18)
```

### ❌ Animating Everything
```dart
// BAD - Every element animates on build
child: Text('Hello').animate().fadeIn().scale().shimmer()

// GOOD - Animate purposefully
child: Text('Success!').animate(target: isSuccess ? 1 : 0).shimmer()
```

### ❌ Hardcoded Colors
```dart
// BAD - Hardcoded color values
color: Color(0xFF2196F3)

// GOOD - Theme colors
color: colorScheme.primary
```

### ❌ Using Default Flutter Components
```dart
// BAD - Generic Material button
ElevatedButton(
  onPressed: () {},
  child: Text('Action'),
)

// GOOD - Custom styled with our system
Container(
  height: 36,
  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
  decoration: BoxDecoration(
    color: colorScheme.primary,
    borderRadius: BorderRadius.circular(18),
  ),
  child: Text('Action'),
)
```

---

## ✅ Best Practices Checklist

Before considering a component "complete", verify:

- [ ] Uses `colorScheme` colors (no hardcoded values)
- [ ] Has appropriate padding (12-16px for most cards)
- [ ] Border is 1px with 0.1-0.2 opacity
- [ ] Shadow is subtle (0.03-0.04 opacity)
- [ ] Border radius is 12px for cards
- [ ] Icons are 16-18px in badges, 14-16px in buttons
- [ ] Text uses proper hierarchy (w600-w700 for headers)
- [ ] Bottom margin is 12px between elements
- [ ] Animations are purposeful (300-600ms)
- [ ] Works in both light and dark mode
- [ ] Touch targets are at least 44x44
- [ ] Uses SvgIcons (not default Flutter icons)
- [ ] Separate widget file if reusable

---

## 🎨 Quick Reference: Common Patterns

### Standard Card
```dart
Container(
  margin: const EdgeInsets.only(bottom: 12),
  padding: const EdgeInsets.all(16),
  decoration: BoxDecoration(
    color: isDark ? colorScheme.surfaceContainer : colorScheme.surface,
    borderRadius: BorderRadius.circular(12),
    border: Border.all(color: colorScheme.outline.withOpacity(0.12), width: 1),
    boxShadow: [BoxShadow(color: Colors.black.withOpacity(isDark ? 0.1 : 0.04), blurRadius: 10, offset: Offset(0, 2))],
  ),
)
```

### Icon Badge
```dart
Container(
  width: 36, height: 36,
  decoration: BoxDecoration(shape: BoxShape.circle, color: colorScheme.primary.withOpacity(0.12)),
  child: Center(child: SvgIcons.icon(size: 18, color: colorScheme.primary)),
)
```

### Small Button
```dart
Container(
  height: 36,
  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
  decoration: BoxDecoration(
    color: colorScheme.surfaceContainer,
    borderRadius: BorderRadius.circular(18),
    border: Border.all(color: colorScheme.outline.withOpacity(0.2), width: 1),
  ),
)
```

### Number Badge
```dart
Container(
  width: 20, height: 20,
  decoration: BoxDecoration(shape: BoxShape.circle, color: colorScheme.primary),
  child: Center(child: Text('1', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w700))),
)
```

### Collapsing App Bar
```dart
// Default - collapses fully (recommended)
CollapsingAppBar(
  title: 'Profile',
  expandedHeight: 150,
  actions: [...],
)

// With many actions - prevent overlap
CollapsingAppBar(
  title: 'Materials',
  expandedHeight: 150,
  collapsedHeight: 100,  // Only if 3+ action buttons
  actions: [action1, action2, action3, action4],
)
```

---

## 📱 Responsive Considerations

### Mobile First (< 768px)
- Compact components (34-36px buttons)
- Bottom sheets for selections
- Horizontal scrolling for overflow
- Sticky headers at top

### Tablet (≥ 768px)
- Sidebar navigation (if applicable)
- Slightly larger touch targets (40-44px)
- Multi-column layouts
- More horizontal space usage

### Desktop (≥ 1024px)
- Wider max-width containers (1200-1400px)
- Hover states for interactive elements
- Tooltips for context
- Keyboard shortcuts

---

## 🎯 Component Checklist

When creating a new component, ensure:

1. **Structure**
   - [ ] Separate file if reusable (not inline in page)
   - [ ] Clear widget name (TopicHeaderCard, not Card1)
   - [ ] Private helper widgets prefixed with `_`

2. **Styling**
   - [ ] Uses theme colors exclusively
   - [ ] Appropriate padding (12-16px)
   - [ ] 1px borders at 0.1-0.2 opacity
   - [ ] 12px border radius for cards
   - [ ] Subtle shadows (0.03-0.04 opacity)

3. **Typography**
   - [ ] Uses theme text styles
   - [ ] Proper font weights (w600-w700 headers)
   - [ ] Line height 1.5 for body text

4. **Icons**
   - [ ] **ALWAYS check `lib/core/icons/svg_icons.dart` first** - Read the file to see available icons
   - [ ] Uses SvgIcons only (never Icons.* or custom SVG imports)
   - [ ] If icon doesn't exist: Add method to SvgIcons with `// TO DOWNLOAD` comment OR create beautiful inline SVG following existing patterns
   - [ ] Appropriate sizes (16-18px in badges, 14-16px in buttons)
   - [ ] Icons in circular containers when used as badges

5. **Interactions**
   - [ ] InkWell for taps (not GestureDetector)
   - [ ] Proper touch targets (44x44 min)
   - [ ] Visual feedback on interaction

6. **Responsive**
   - [ ] Works on mobile (primary target)
   - [ ] Scales to tablet/desktop
   - [ ] No horizontal overflow

7. **Accessibility**
   - [ ] Semantic widgets where applicable
   - [ ] Sufficient color contrast
   - [ ] Touch targets sized properly

---

## 🎨 Example: Building a New Card

Here's a complete example following all system rules:

```dart
import 'package:flutter/material.dart';
import 'package:learn/core/extensions/context_extension.dart';
import 'package:learn/core/icons/svg_icons.dart';

class ExampleInfoCard extends StatelessWidget {
  const ExampleInfoCard({
    super.key,
    required this.title,
    required this.description,
    this.onTap,
  });

  final String title;
  final String description;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;
    final colorScheme = theme.colorScheme;
    final isDark = theme.brightness == Brightness.dark;

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Container(
          width: double.infinity,
          margin: const EdgeInsets.only(bottom: 12),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: isDark
                ? colorScheme.surfaceContainer
                : colorScheme.surface,
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color: colorScheme.outline.withOpacity(0.12),
              width: 1,
            ),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(isDark ? 0.1 : 0.04),
                blurRadius: 10,
                offset: const Offset(0, 2),
              ),
            ],
          ),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Icon badge
              Container(
                width: 36,
                height: 36,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: colorScheme.primary.withOpacity(0.12),
                ),
                child: Center(
                  child: SvgIcons.info(
                    size: 18,
                    color: colorScheme.primary,
                  ),
                ),
              ),
              const SizedBox(width: 12),
              
              // Content
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: theme.textTheme.titleSmall?.copyWith(
                        fontWeight: FontWeight.w600,
                        color: colorScheme.onSurface,
                      ),
                    ),
                    const SizedBox(height: 6),
                    Text(
                      description,
                      style: theme.textTheme.bodyMedium?.copyWith(
                        height: 1.5,
                        color: colorScheme.onSurfaceVariant,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

**This example demonstrates:**
✅ Proper imports  
✅ Theme-aware colors  
✅ Icon badge pattern  
✅ Correct spacing (12px, 16px, 6px)  
✅ Typography hierarchy  
✅ InkWell for tap feedback  
✅ Subtle shadows and borders  
✅ Light/dark mode support  

---

## 📚 Related Resources

- **SvgIcons Library:** `lib/core/icons/svg_icons.dart`
- **Theme Extensions:** `lib/core/extensions/context_extension.dart`
- **Custom Widgets:** `lib/core/widgets/`
- **SnapSort AI Elements:** `lib/features/learn_ai/presentation/widgets/learn_elements/`

---

**Remember:** This design system is a living document. When you discover new patterns or make improvements, update this file so the team (and AI agents) can reference the latest standards.

*Built with ❤️ by SnapSort Team*
