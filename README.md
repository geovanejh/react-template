# React Template

A production-ready React + TypeScript template built with Vite, Tailwind CSS, React Router, and Zustand.

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

## Scripts

| Script             | Description                           |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Start Vite dev server with HMR        |
| `npm run build`    | Type-check + production build         |
| `npm run preview`  | Preview production build              |
| `npm run lint`     | Run ESLint                            |
| `npm run format`   | Format code with Prettier             |
| `npm run test`     | Run tests in watch mode               |
| `npm run test:run` | Run tests once                        |

## Project Structure

```
src/
  components/
    layout/       Root layout, Header, Footer
    ui/           Reusable UI components (Button, etc.)
  config/         App configuration (env variables)
  hooks/          Custom React hooks
  lib/            Low-level utilities (HTTP client)
  pages/          Route-level page components
  services/       API service modules
  stores/         Zustand stores
  test/           Test setup and utilities
  types/          Shared TypeScript types
```

## Architecture

- **Routing**: React Router v7 with nested layouts (`RootLayout` → pages)
- **State**: Zustand stores in `src/stores/` — no providers needed
- **API**: Typed `httpClient` wrapper over fetch in `src/lib/`, service modules in `src/services/`
- **Styling**: Tailwind CSS v4 with the Vite plugin
- **Testing**: Vitest + React Testing Library with global test utilities in `src/test/`

## Conventions

- **Named exports** over default exports
- **PascalCase** for component files, **camelCase** for everything else
- **Direct imports** with `@/` path alias (no barrel exports)
- **Collocated tests** in `__tests__/` directories next to source files

## Tech Stack

- React 19 + TypeScript 5.9
- Vite 8
- Tailwind CSS 4
- React Router 7
- Zustand 5
- Vitest + React Testing Library
- ESLint + Prettier + Husky + lint-staged
