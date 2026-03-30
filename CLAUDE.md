# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server with HMR
npm run build      # Type-check + production build (outputs to dist/)
npm run lint       # Run ESLint on all TS/TSX files
npm run preview    # Preview production build locally
```

There are no tests configured in this template.

## Architecture

Minimal React 19 + TypeScript + Vite starter template. Single-component structure with no routing or state management library.

- **Entry**: `index.html` → `src/main.tsx` (mounts `<App>` into `#root`)
- **TypeScript**: Composite project — `tsconfig.app.json` for `src/`, `tsconfig.node.json` for `vite.config.ts`. Both use strict mode with `noUnusedLocals` and `noUnusedParameters`.
- **Styling**: CSS custom properties in `src/index.css` for global theming (light/dark via `prefers-color-scheme`); component-scoped styles in `src/App.css`.
- **ESLint**: Flat config (`eslint.config.js`) with typescript-eslint, react-hooks, and react-refresh plugins.

## Expanding This Template

- **React Compiler**: Not enabled by default. To enable, install `babel-plugin-react-compiler` and add it to `vite.config.ts`.
- **Type-aware lint rules**: Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` in `eslint.config.js` and add `parserOptions.project`.
- **SWC**: Swap `@vitejs/plugin-react` for `@vitejs/plugin-react-swc` in `vite.config.ts` for faster builds.
