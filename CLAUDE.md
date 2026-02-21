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

## Pull Requests and Code Review

### PR Requirements
- PRs must pass CI (lint + tests) before merge
- At least one approving review required
- Keep PRs focused: one feature or fix per PR
- Include a short description explaining the change and testing steps

### Code Review Checklist
- **Tests:** New behavior has test coverage, all tests pass
- **Correctness:** Logic handles edge cases and error states
- **Security:** Inputs validated, no secrets or unsafe operations
- **Readability:** Clear naming, easy to understand
- **Style:** Follows project lint rules, no unused imports/variables

### Review Process
1. Author creates focused PR with description
2. CI runs (lint, tests, type checks)
3. Reviewer checks diffs, runs tests locally if needed
4. Author addresses comments with edits or replies
5. After approval and green CI, merge per repo rules
