# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
bun install          # Install dependencies
bun run dev          # Start development server (Next.js with Bun)
bun run build        # Production build
bun run lint         # Run ESLint
bun test             # Run all tests
bun test tests/logic/todoLogic.test.ts  # Run a single test file
```

## Architecture

This is a Next.js 15 todo app using the App Router, React 19, Zustand for state management, and Tailwind CSS for styling. Tests use Bun's built-in test runner.

### State Management Pattern

The app separates concerns into three layers:

1. **Types** (`app/lib/types/todo.ts`) - Data interfaces (`Todo`, `FilterType`)
2. **Pure Logic** (`app/lib/logic/todoLogic.ts`) - Stateless functions for todo operations (add, delete, toggle). These are easily testable without store setup.
3. **Store** (`app/lib/store/todoStore.ts`) - Zustand store that wraps the pure logic functions. Uses a factory pattern (`createTodoStore()`) for easy testing.

The store is provided to components via React Context (`StoreProvider.tsx`), accessed through the `useTodoStore` hook with selectors.

### Test Structure

Tests mirror the `app/lib/` structure under `tests/`:
- `tests/logic/` - Unit tests for pure logic functions
- `tests/store/` - Integration tests for Zustand store behavior
