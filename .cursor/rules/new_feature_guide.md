# Feature Implementation Guide: BLoC & Dependency Injection Architecture

> **Critical Guide**: Follow this pattern for ALL new features to maintain consistency and avoid common mistakes.

> **📚 Note**: This guide focuses on BLoC lifecycle and DI patterns. For overall feature architecture, see [feature_implementation.md](feature_implementation.md).

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Module Structure](#module-structure)
3. [Dependency Injection Pattern](#dependency-injection-pattern)
4. [BLoC Lifecycle Management](#bloc-lifecycle-management)
5. [Route Management](#route-management)
6. [Common Mistakes to AVOID](#common-mistakes-to-avoid)
7. [Complete Example](#complete-example)

---

## Architecture Overview

Our app follows **MVVM with feature-first architecture** and uses:
- **GetIt** for dependency injection
- **BLoC** for state management
- **Repositories** as data sources (singleton)
- **BLoCs** as state managers (factory instances)

### Key Principle: Shared Data, Separate State

```
┌─────────────────┐
│   Screen A      │ creates → BLoC Instance A ┐
└─────────────────┘                           │
                                              ├─→ Shared Repository (Singleton)
┌─────────────────┐                           │
│   Screen B      │ creates → BLoC Instance B ┘
└─────────────────┘
```

**Each screen gets its own BLoC instance, but they all share the same repository singleton.**

---

## Module Structure

Every feature should have a DI module following this structure:

```
lib/features/your_feature/
├── data/
│   └── your_feature_repository.dart
├── domain/
│   └── i_your_feature_repository.dart
├── presentation/
│   ├── bloc/
│   │   ├── your_bloc.dart
│   │   ├── your_event.dart
│   │   └── your_state.dart
│   └── views/
│       └── your_view.dart
└── di/
    └── your_feature_module.dart
```

---

## Dependency Injection Pattern

### Step 1: Create the Module Class

```dart
// lib/features/your_feature/di/your_feature_module.dart

import 'package:get_it/get_it.dart';
import 'package:learn/core/logger/app_logger.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class YourFeatureModule {
  static final GetIt _getIt = GetIt.instance;
  static const String _moduleName = 'YourFeatureModule';

  static Future<void> init() async {
    logger.info('🔄 $_moduleName: Initializing module');

    try {
      await _registerDependencies();
      logger.info('✅ $_moduleName: Module initialized successfully');
    } catch (e, stackTrace) {
      logger.error(
        '❌ $_moduleName: Failed to initialize module',
        error: e,
        stackTrace: stackTrace,
      );
      rethrow;
    }
  }

  static Future<void> _registerDependencies() async {
    await _registerRepositories();
    await _registerServices();
    await _registerBlocs();
  }
}
```

### Step 2: Register Repositories as Singletons

**Repositories should ALWAYS be singletons** because they manage data access and caching.

```dart
static Future<void> _registerRepositories() async {
  // Register repository as SINGLETON
  if (!_getIt.isRegistered<IYourFeatureRepository>()) {
    _getIt.registerSingleton<IYourFeatureRepository>(
      YourFeatureRepository(
        supabase: Supabase.instance.client,
      ),
    );
    logger.info('✅ $_moduleName: Repository registered as singleton');
  }
}
```

### Step 3: Register Services (if needed)

Services can be singletons or lazy singletons depending on usage:

```dart
static Future<void> _registerServices() async {
  if (!_getIt.isRegistered<YourFeatureService>()) {
    _getIt.registerLazySingleton<YourFeatureService>(
      () => YourFeatureService(
        repository: _getIt<IYourFeatureRepository>(),
      ),
    );
    logger.info('✅ $_moduleName: Service registered');
  }
}
```

### Step 4: Register BLoCs as Factories

**BLoCs should ALWAYS be factories** to create new instances for each screen.

```dart
static Future<void> _registerBlocs() async {
  // Register BLoC as FACTORY (not singleton!)
  if (!_getIt.isRegistered<YourFeatureBloc>()) {
    _getIt.registerFactory<YourFeatureBloc>(
      () => YourFeatureBloc(
        repository: _getIt<IYourFeatureRepository>(),
        // Or inject services if needed
        service: _getIt<YourFeatureService>(),
      ),
    );
    logger.info('✅ $_moduleName: BLoC registered as factory');
  }
}
```

### Step 5: Create Factory Methods

Provide convenience methods to create bloc instances:

```dart
// Factory methods for creating BLoC instances
static YourFeatureBloc createYourFeatureBloc() => _getIt<YourFeatureBloc>();

// Getter methods for services (if needed)
static IYourFeatureRepository getRepository() => _getIt<IYourFeatureRepository>();

// Expose GetIt instance
static GetIt get getIt => _getIt;

// Cleanup method
static Future<void> dispose() async {
  logger.info('🔄 $_moduleName: Disposing module');
  // Add any cleanup logic here
  logger.info('✅ $_moduleName: Module disposed');
}
```

---

## BLoC Lifecycle Management

### In Route Methods: ALWAYS Create New Instances

**✅ CORRECT WAY:**

```dart
class YourFeatureView extends StatelessWidget {
  const YourFeatureView({super.key});

  static Route<void> route() {
    return MaterialPageRoute(
      builder: (context) => BlocProvider(
        // Create new instance using module factory
        create: (context) => YourFeatureModule.createYourFeatureBloc(),
        child: const YourFeatureView(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // Your UI here
    );
  }
}
```

### Multiple BLoCs in One Screen

```dart
static Route<void> route() {
  return MaterialPageRoute(
    builder: (context) => MultiBlocProvider(
      providers: [
        BlocProvider(
          create: (context) => YourFeatureModule.createYourFeatureBloc(),
        ),
        BlocProvider(
          create: (context) => YourFeatureModule.createAnotherBloc(),
        ),
        // You can also use GetIt directly for other modules
        BlocProvider(
          create: (context) => GetIt.I<SomeOtherBloc>(),
        ),
      ],
      child: const YourFeatureView(),
    ),
  );
}
```

### Passing Data to Views

Pass data as **constructor parameters**, not via bloc:

```dart
class YourFeatureDetailView extends StatelessWidget {
  const YourFeatureDetailView({
    super.key,
    required this.item,
  });

  final YourItem item;

  static Route<void> route(YourItem item) {
    return MaterialPageRoute(
      builder: (context) => BlocProvider(
        create: (context) => YourFeatureModule.createYourFeatureBloc()
          ..add(LoadItemDetails(itemId: item.id)), // Initialize with event
        child: YourFeatureDetailView(item: item),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    // Use item data here
    return Scaffold(
      appBar: AppBar(title: Text(item.name)),
      // Rest of UI
    );
  }
}
```

---

## Route Management

### Navigating Between Screens

**✅ CORRECT: Call the static route method**

```dart
// In your widget:
void _navigateToDetail() {
  Navigator.push(
    context,
    YourFeatureDetailView.route(item),
  );
}
```

### Navigation with Result

```dart
class YourFeatureSelectionView extends StatelessWidget {
  static Route<YourItem?> route() {
    return MaterialPageRoute<YourItem?>(
      builder: (context) => BlocProvider(
        create: (context) => YourFeatureModule.createYourFeatureBloc(),
        child: const YourFeatureSelectionView(),
      ),
    );
  }

  void _selectItem(YourItem item) {
    Navigator.pop(context, item); // Return result
  }
}

// Usage:
final result = await Navigator.push<YourItem?>(
  context,
  YourFeatureSelectionView.route(),
);
if (result != null) {
  // Handle selected item
}
```

---

## Common Mistakes to AVOID

### ❌ MISTAKE 1: Passing BLoC as Parameter

```dart
// ❌ WRONG - Don't do this!
static Route<void> route({
  required YourItem item,
  required YourFeatureBloc bloc, // ❌ NO!
}) {
  return MaterialPageRoute(
    builder: (context) => BlocProvider.value(
      value: bloc, // ❌ NO!
      child: YourFeatureDetailView(item: item),
    ),
  );
}

// ❌ WRONG - Calling with bloc parameter
Navigator.push(
  context,
  YourFeatureDetailView.route(
    item: item,
    bloc: context.read<YourFeatureBloc>(), // ❌ NO!
  ),
);
```

**Why it's wrong:** This creates tight coupling and makes screens dependent on parent context.

### ❌ MISTAKE 2: Reading from Parent Context in Route Builder

```dart
// ❌ WRONG - Don't do this!
static Route<void> route(YourItem item) {
  return MaterialPageRoute(
    builder: (context) => BlocProvider.value(
      value: context.read<YourFeatureBloc>(), // ❌ NO! context doesn't have access to parent bloc
      child: YourFeatureDetailView(item: item),
    ),
  );
}
```

**Why it's wrong:** The `context` in the route builder is NOT the same as your parent screen's context. It will throw `ProviderNotFoundException`.

### ❌ MISTAKE 3: Registering BLoCs as Singletons

```dart
// ❌ WRONG - Don't do this!
static Future<void> _registerBlocs() async {
  _getIt.registerSingleton<YourFeatureBloc>( // ❌ NO!
    YourFeatureBloc(repository: _getIt<IYourFeatureRepository>()),
  );
}
```

**Why it's wrong:** All screens would share the same bloc instance, causing state conflicts.

### ❌ MISTAKE 4: Creating Repository Instances in BLoC

```dart
// ❌ WRONG - Don't do this!
class YourFeatureBloc extends Bloc<YourFeatureEvent, YourFeatureState> {
  YourFeatureBloc() : super(YourFeatureState.initial()) {
    // ❌ NO! Don't create repository here
    final repository = YourFeatureRepository(
      supabase: Supabase.instance.client,
    );
  }
}
```

**Why it's wrong:** Each bloc would have its own repository, losing data consistency.

---

## Complete Example

### Real Example: SnapSort Spaces Module

#### 1. Module Setup (`learn_space_module.dart`)

```dart
import 'package:get_it/get_it.dart';
import 'package:learn/core/logger/app_logger.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class SnapSortSpaceModule {
  static final GetIt _getIt = GetIt.instance;
  static const String _moduleName = 'SnapSortSpaceModule';

  static Future<void> init() async {
    logger.info('🔄 $_moduleName: Initializing SnapSort Spaces module');

    try {
      await _registerDependencies();
      logger.info('✅ $_moduleName: SnapSort Spaces module initialized successfully');
    } catch (e, stackTrace) {
      logger.error(
        '❌ $_moduleName: Failed to initialize SnapSort Spaces module',
        error: e,
        stackTrace: stackTrace,
      );
      rethrow;
    }
  }

  static Future<void> _registerDependencies() async {
    await _registerRepositories();
    await _registerBlocs();
  }

  static Future<void> _registerRepositories() async {
    // Repository as SINGLETON
    if (!_getIt.isRegistered<ISnapSortSpaceRepository>()) {
      _getIt.registerSingleton<ISnapSortSpaceRepository>(
        SnapSortSpaceCloudRepository(supabase: Supabase.instance.client),
      );
      logger.info('✅ $_moduleName: SnapSortSpaceCloudRepository registered');
    }
  }

  static Future<void> _registerBlocs() async {
    // SpaceBloc as FACTORY
    if (!_getIt.isRegistered<SpaceBloc>()) {
      _getIt.registerFactory<SpaceBloc>(
        () => SpaceBloc(repository: _getIt<ISnapSortSpaceRepository>()),
      );
      logger.info('✅ $_moduleName: SpaceBloc registered');
    }

    // SpaceMemberBloc as FACTORY
    if (!_getIt.isRegistered<SpaceMemberBloc>()) {
      _getIt.registerFactory<SpaceMemberBloc>(
        () => SpaceMemberBloc(repository: _getIt<ISnapSortSpaceRepository>()),
      );
      logger.info('✅ $_moduleName: SpaceMemberBloc registered');
    }
  }

  // Factory methods
  static SpaceBloc createSpaceBloc() => _getIt<SpaceBloc>();
  static SpaceMemberBloc createSpaceMemberBloc() => _getIt<SpaceMemberBloc>();
  
  // Getter for repository
  static ISnapSortSpaceRepository getRepository() => _getIt<ISnapSortSpaceRepository>();
}
```

#### 2. List View (`spaces_list_view.dart`)

```dart
class SpacesListView extends StatefulWidget {
  const SpacesListView({super.key});

  static Route<void> route() {
    return MaterialPageRoute(
      builder: (context) => const SpacesListView(),
    );
  }

  @override
  State<SpacesListView> createState() => _SpacesListViewState();
}
```

#### 3. Detail View (`space_detail_view.dart`)

```dart
class SpaceDetailView extends StatefulWidget {
  const SpaceDetailView({
    super.key,
    required this.space,
  });

  final SnapSortSpace space;

  static Route<void> route(SnapSortSpace space) {
    return MaterialPageRoute(
      builder: (context) => MultiBlocProvider(
        providers: [
          BlocProvider(
            create: (context) => SnapSortSpaceModule.createSpaceBloc()
              ..add(RefreshSpaces(context: context)),
          ),
          BlocProvider(
            create: (context) => SnapSortSpaceModule.createCategoryBloc()
              ..add(LoadCategories(spaceId: space.id)),
          ),
          BlocProvider(
            create: (context) => SnapSortSpaceModule.createSpaceCourseBloc()
              ..add(LoadSpaceCourses(spaceId: space.id)),
          ),
        ],
        child: SpaceDetailView(space: space),
      ),
    );
  }

  @override
  State<SpaceDetailView> createState() => _SpaceDetailViewState();
}
```

#### 4. Settings View (`space_settings_view.dart`)

```dart
class SpaceSettingsView extends StatelessWidget {
  const SpaceSettingsView({
    super.key,
    required this.space,
  });

  final SnapSortSpace space;

  static Route<void> route(SnapSortSpace space) {
    return MaterialPageRoute(
      builder: (context) => MultiBlocProvider(
        providers: [
          BlocProvider(
            create: (context) => SnapSortSpaceModule.createSpaceBloc(),
          ),
          BlocProvider(
            create: (context) => SnapSortSpaceModule.createSpaceMemberBloc()
              ..add(LoadSpaceMembers(spaceId: space.id)),
          ),
        ],
        child: SpaceSettingsView(space: space),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    // UI implementation
  }
}
```

#### 5. Navigating from Detail to Settings

```dart
// In SpaceDetailView
void _navigateToSettings() {
  Navigator.push(
    context,
    SpaceSettingsView.route(space),
  );
}
```

**Notice:** We don't pass the bloc! Each screen creates its own, but they share the same repository.

---

## Checklist for New Features

When implementing a new feature, verify:

### Module Setup
- [ ] Created `di/your_feature_module.dart`
- [ ] Repositories registered as **singletons**
- [ ] BLoCs registered as **factories**
- [ ] Factory methods provided for creating bloc instances
- [ ] Module initialized in `main.dart`

### View Setup
- [ ] Each view has a static `route()` method
- [ ] Route method creates **new bloc instances** using module factory
- [ ] Data passed as **constructor parameters**, not via bloc
- [ ] Navigation uses static `route()` methods
- [ ] No bloc instances passed as parameters

### Testing
- [ ] Can navigate to screen multiple times without errors
- [ ] Changes persist across screens (shared repository)
- [ ] No `ProviderNotFoundException` errors
- [ ] BLoC state is independent per screen instance

---

## Quick Reference

| Component | Registration Type | Why |
|-----------|------------------|-----|
| Repository | `registerSingleton` | Shared data access |
| Service | `registerLazySingleton` or `registerSingleton` | Shared logic |
| BLoC | `registerFactory` | Independent state per screen |
| Local DB Service | `registerSingleton` | Shared database connection |

### Pattern Summary

```dart
// ✅ DO THIS
static Route<void> route(Item item) {
  return MaterialPageRoute(
    builder: (context) => BlocProvider(
      create: (context) => YourModule.createYourBloc(),
      child: YourView(item: item),
    ),
  );
}

// ❌ NOT THIS
static Route<void> route(Item item, YourBloc bloc) {
  return MaterialPageRoute(
    builder: (context) => BlocProvider.value(
      value: bloc,
      child: YourView(item: item),
    ),
  );
}
```

---

## Additional Resources

- **SnapSort AI Module**: `lib/features/learn_ai/di/learn_ai_modules.dart` - Reference implementation
- **SnapSort Space Module**: `lib/features/learn_space/di/learn_space_module.dart` - Reference implementation
- **GetIt Documentation**: https://pub.dev/packages/get_it
- **BLoC Pattern**: https://bloclibrary.dev/

---

**Remember:** When in doubt, look at existing modules like `learn_ai` or `learn_space` and follow the same pattern!

