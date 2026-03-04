# todo-app-ai-enhanced

A Next.js 15 todo application with AI-enhanced features, built with React 19, Zustand state management, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Bun** (latest version recommended) - [Install Bun](https://bun.sh/)
  - Bun is used as the package manager, runtime, and test runner for this project
- **Git** - For version control
- **Node.js** (v18 or higher) - Optional, but recommended for compatibility with certain tools

## Local Development Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd todo-app-ai-enhanced
```

### 2. Install dependencies

```bash
bun install
```

### 3. Start the development server

```bash
bun run dev
```

The application will be available at `http://localhost:3000`

## Available Commands

| Command | Description |
|---------|-------------|
| `bun install` | Install all project dependencies |
| `bun run dev` | Start the Next.js development server with hot reload |
| `bun run build` | Create an optimized production build |
| `bun run start` | Start the production server (run `build` first) |
| `bun run lint` | Run ESLint to check code quality |
| `bun test` | Run all tests using Bun's test runner |
| `bun test <file>` | Run a specific test file (e.g., `bun test tests/logic/todoLogic.test.ts`) |

## Project Structure

- `app/` - Next.js App Router pages and components
- `app/lib/types/` - TypeScript type definitions
- `app/lib/logic/` - Pure business logic functions
- `app/lib/store/` - Zustand state management
- `tests/` - Test files mirroring the `app/lib/` structure

## Development Workflow

1. Make changes to the code
2. Run tests: `bun test`
3. Run linter: `bun run lint`
4. Test locally: `bun run dev`
5. Create a PR (CI will run lint and tests automatically)

For more detailed information about the architecture and development patterns, see [CLAUDE.md](./CLAUDE.md).