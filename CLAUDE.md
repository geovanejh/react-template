# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `react-template/`:

```bash
npm run dev          # Start Vite dev server with HMR
npm run build        # Type-check (tsc -b) + production build
npm run lint         # Run ESLint on all TS/TSX files
npm run preview      # Preview production build locally
npm run format       # Format all files with Prettier
npm run format:check # Check formatting without writing
npm run test         # Run Vitest in watch mode
npm run test:run     # Run all tests once
npm run test:coverage # Run tests with coverage report
```

## Architecture

React 19 + TypeScript 5.9 + Vite 8 template with Tailwind CSS 4, React Router 7, and Zustand 5.

### Entry Flow

`index.html` → `src/main.tsx` → `ErrorBoundary` → `RouterProvider` → `RootLayout` (Header + Outlet + Footer) → Pages

### Source Structure

- **`src/components/layout/`** — RootLayout, Header, Footer (wraps all routes via `<Outlet />`)
- **`src/components/ui/`** — Reusable UI primitives (Button with variant/size props)
- **`src/components/ErrorBoundary.tsx`** — Class-based error boundary
- **`src/pages/`** — Route-level components (HomePage, AboutPage, NotFoundPage)
- **`src/router.tsx`** — createBrowserRouter config with nested routes
- **`src/stores/`** — Zustand stores (counterStore example)
- **`src/lib/httpClient.ts`** — Typed fetch wrapper with HttpError class
- **`src/services/`** — API service modules using httpClient
- **`src/hooks/`** — Custom hooks (useLocalStorage)
- **`src/config/env.ts`** — Type-safe environment variable access
- **`src/types/`** — Shared TypeScript interfaces

### Key Patterns

- **Named exports** everywhere (no default exports)
- **`@/` path alias** maps to `src/` (configured in both tsconfig.app.json and vite.config.ts)
- **No barrel exports** — use direct imports like `@/components/ui/Button`
- **Collocated tests** in `__tests__/` directories next to source
- **Test utilities** in `src/test/utils.tsx` — `renderWithProviders` wraps components with MemoryRouter

### Config

- **TypeScript**: Strict mode, noUnusedLocals, noUnusedParameters. Composite project (tsconfig.app.json for src/, tsconfig.node.json for vite.config.ts)
- **Tailwind**: v4 Vite plugin in vite.config.ts, imported via `src/index.css`
- **ESLint**: Flat config with typescript-eslint, react-hooks, react-refresh, eslint-config-prettier
- **Prettier**: singleQuote, no semi, trailingComma all
- **Husky**: Pre-commit hook runs lint-staged (ESLint + Prettier on staged files)
- **Env vars**: Prefixed with `VITE_`, typed in `src/vite-env.d.ts`, accessed via `src/config/env.ts`
