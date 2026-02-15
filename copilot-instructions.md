**GitHub Copilot Instructions — To-Do Project & Code Reviews**

Purpose
-------

This file explains how to use GitHub Copilot effectively in the `todo` project and documents the team's code-review workflow. Use these guidelines to get consistent, safe, and reviewable contributions.

**Project Overview**
- **Scope:** : A simple to-do web app (API, frontend, tests, CI).
- **Key files:** : `package.json`, `src/`, `tests/`, `README.md`.

**How to use Copilot (developer-focused)**
- **Prompting:** : Ask Copilot concise prompts. Include the task, language, and constraints. Example: "Implement `updateTodo()` function to update a todo's text and completed status, TypeScript, validate input, return updated todo object."
- **Iterative requests:** : Start with small, testable prompts (single function or test). Review generated code and re-prompt to refine edge cases.
- **Prefer examples:** : When possible, show a one-line example or an expected output shape in your prompt.
- **Avoid blind acceptance:** : Always read generated code. Verify logic, error handling, and security (input validation, auth, escaping).
- **Tests first:** : When adding behavior, prefer asking Copilot to generate tests (unit/integration) first, then the implementation.

**Code style & quality rules for generated code**
- **Follow existing style:** : Match the project's conventions (ESLint, Prettier). If a rule is unclear, run linters and fix accordingly.
- **No commented-out dead code:** : Remove unused code before committing.
- **Small commits:** : Keep PRs focused — one feature or fix per PR.
- **Document decisions:** : If accepting non-obvious Copilot suggestions, add a short comment explaining why.

**Security & Privacy**
- **Never include secrets:** : Do not let Copilot generate API keys, credentials, or secrets inline. Replace placeholders with environment variables.
- **Sanitize inputs:** : Validate and sanitize all external inputs; prefer library validators over ad-hoc checks.

**CI / Tests**
- **Automate checks:** : PRs must pass CI: linters, unit tests, and any security scans.
- **Copilot + tests:** : Ask Copilot to produce tests for new code; run them locally and in CI.

**Suggested Copilot prompts (examples)**
- "Write a Bun test for `createTodo()` that ensures title is required and trimmed."
- "Generate Next.js API route `GET /api/todos` that supports query `?completed=true|false` and returns filtered results with proper types."
- "Refactor `app/lib/logic/todoLogic.ts` to extract validation into `validateTodo()` function and update callers."

**Code Review Guidelines**
- **Overview:** : Reviews ensure correctness, readability, maintainability, and safety.
- **Reviewer selection:** : Prefer at least one reviewer familiar with the touched area.

PR Checklist (what reviewers look for)
- **Purpose & Scope:** : Does the PR description explain why the change exists and what it affects?
- **Tests:** : Are there tests covering new behavior and edge cases? Do all tests pass locally/CI?
- **Correctness:** : Is logic correct? Are edge cases and error states handled?
- **Security:** : Are inputs validated and sanitized? No secrets or unsafe operations introduced?
- **Performance:** : Any obvious performance regressions? Any heavy sync operations on request paths?
- **Readability:** : Is the code easy to understand? Are function names and variable names clear?
- **Style & Linting:** : Does code follow project lint rules? No unused imports/variables?
- **Docs & Comments:** : Are important decisions documented in the PR or code comments?
- **Backward compat:** : Will the change break existing public behavior (APIs)? If so, is this intentional and documented?

Review process (step-by-step)
1. **Author:** Create a focused PR, include a short description and testing steps.
2. **Automated checks run:** Wait for CI (lint, tests, type checks, security). Fix failures before review.
3. **Reviewer:** Run tests locally for the changed area when needed; review diffs and leave targeted comments.
4. **Author:** Address comments with edits or clear replies. For substantial changes, push follow-up commits and notify reviewers.
5. **Approval & Merge:** After approvals and passing CI, merge according to repository rules (squash/merge or merge commit).

Reviewer etiquette
- **Be constructive:** : Explain why something should change and, when possible, propose an actionable alternative.
- **Small, focused comments:** : One issue per comment keeps feedback clear.
- **Ask clarifying questions:** : If intent is unclear, ask instead of assuming.

Special notes on Copilot-generated code in PRs
- **Label usage:** : If a PR includes significant Copilot-generated code, mention it in the PR description (e.g., "Generated parts with GitHub Copilot").
- **Highlight review focus:** : Call out areas where Copilot produced code and ask reviewers to pay extra attention to correctness and security.
- **Avoid 'robotic' trust:** : Treat Copilot as a helpful assistant, not an authority. Validate and test all generated code.

Merge rules
- **Green CI required:** : Do not merge unless all required checks pass.
- **One approving review at minimum:** : Unless the change is trivial and the repo's rules allow auto-merge.

Appendix: Quick prompts cheat-sheet
- **Tests first:** : "Write tests for X behavior using Bun test."
- **Implement:** : "Implement X so tests pass. Use Express and Joi."
- **Refactor:** : "Refactor function Y to improve naming and extract validation."
- **Docs:** : "Add a short README section describing the todo management features, expected data types, and usage examples."

