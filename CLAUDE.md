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

React 19 + TypeScript 5.9 + Vite 8 template with Tailwind CSS 4, shadcn/ui, React Router 7, Zustand 5, Zod, and React Hook Form.

**Feature-based architecture** — code is organized by domain/feature, not by file type.

### Entry Flow

`index.html` → `src/app/main.tsx` → `ErrorBoundary` → `RouterProvider` → `RootLayout` (Header + Outlet + Footer) → Pages

### Source Structure

```
src/
├── app/                          # App shell (entry point, router, global CSS)
│   ├── main.tsx                  # Application entry point
│   ├── router.tsx                # createBrowserRouter config with nested routes
│   └── index.css                 # Tailwind + shadcn/ui theme (CSS variables, dark mode)
├── features/                     # Domain-specific modules
│   ├── about/pages/              # About page
│   ├── counter/stores/           # Zustand counter store
│   ├── home/pages/               # Home page + __tests__/
│   ├── layout/components/        # RootLayout, Header, Footer (wraps routes via Outlet)
│   └── user/                     # User domain (services/, types/)
├── shared/                       # Cross-feature shared code
│   ├── components/               # ErrorBoundary, NotFoundPage
│   │   └── ui/                   # shadcn/ui components (Button, etc.) + __tests__/
│   ├── hooks/                    # Custom hooks (useLocalStorage) + __tests__/
│   ├── lib/                      # httpClient (typed fetch + HttpError), utils (cn helper)
│   ├── config/                   # Type-safe env variable access
│   └── test/                     # Test setup + renderWithProviders utility
└── vite-env.d.ts                 # Vite/env type declarations
```

### Key Patterns

- **Feature-based organization** — each feature has its own `components/`, `stores/`, `services/`, `types/`, `pages/` as needed
- **shared/** contains only code used across multiple features (UI primitives, hooks, lib, config)
- **Named exports** everywhere (no default exports)
- **`@/` path alias** maps to `src/` (configured in tsconfig.app.json, tsconfig.json, and vite.config.ts)
- **No barrel exports** — use direct imports like `@/shared/components/ui/Button`
- **Collocated tests** in `__tests__/` directories next to source
- **Test utilities** in `src/shared/test/utils.tsx` — `renderWithProviders` wraps components with MemoryRouter
- **Forms** — use React Hook Form + `@hookform/resolvers` with Zod schemas for validation
- **Validation** — use Zod for schema validation (API responses, form data, environment)

### Adding New Features

Create a new directory under `src/features/<feature-name>/` with only the subdirectories you need:

```
src/features/<feature-name>/
├── components/    # Feature-specific components
├── hooks/         # Feature-specific hooks
├── pages/         # Route-level components
├── services/      # API service modules
├── stores/        # Zustand stores
├── types/         # TypeScript interfaces
└── __tests__/     # Feature tests
```

Then register routes in `src/app/router.tsx`.

### Config

- **TypeScript**: Strict mode, noUnusedLocals, noUnusedParameters. Composite project (tsconfig.app.json for src/, tsconfig.node.json for vite.config.ts)
- **Tailwind**: v4 Vite plugin in vite.config.ts, imported via `src/app/index.css` with shadcn/ui CSS variables and theme
- **shadcn/ui**: Config in `components.json` (style: base-nova, baseColor: neutral, icons: lucide). Components are installed into `src/shared/components/ui/` and can be customized directly. Add new components via `npx shadcn@latest add <component>`
- **ESLint**: Flat config with typescript-eslint, react-hooks, react-refresh, eslint-config-prettier
- **Prettier**: singleQuote, no semi, trailingComma all
- **Husky**: Pre-commit hook runs lint-staged (ESLint + Prettier on staged files)
- **Env vars**: Prefixed with `VITE_`, typed in `src/vite-env.d.ts`, accessed via `src/shared/config/env.ts`
