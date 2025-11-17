# Collaborating with GitHub Copilot (Chat)

This guide helps you get the most out of Copilot when working in this repository.

## General tips

- Be explicit. Reference filenames and symbols using backticks: `src/router/RouterLayout.tsx`, `SEOHead`.
- Provide acceptance criteria: what to change, how to verify (build/test), and any constraints.
- Prefer actionable requests over broad advice. Example: “Add a client-side redirect from `/bcaa` to `/bcaas` using React Router `<Navigate replace>` in `RouterLayout.tsx`.”
- Ask for small, iterative changes and let Copilot run builds/linters to validate.

## Common tasks in this repo

- Add a new supplement page
  1. Update `src/routes.config.ts` with a v2 entry (title, description, component path).
  2. Map the slug in `src/utils/routePaths.ts`.
  3. Ensure lazy route is picked up by `src/router/routeMap.tsx`.
  4. Verify SEO via `RouteSEO` and `SEOHead`.

- Create/modify an API endpoint
  - Place a new file under `api/` (e.g., `api/my-endpoint.ts`).
  - Use `sendSuccess`/`sendError` from `api/_lib/respond.ts`.
  - If needed, use `query`/`safeQuery` from `api/_lib/db.ts`.

- Run bundle analysis
  - `npm run analyze` to build and print gzip/raw sizes by file.

- Generate sitemap & structured data
  - Triggered automatically on `npm run build` via `postbuild`.

## Prompt templates

- Small refactor
  - “Open `src/components/Header.tsx`, remove unused imports, and ensure classNames are minimal; don’t alter behavior. Then run build.”

- Routing alias
  - “Implement a redirect from `/foo` to `/bar` in `RouterLayout.tsx` using `<Navigate replace>`. Do not include it in `buildRoutes()` so it’s not in the sitemap.”

- API addition
  - “Add `GET /api/hello?name=` endpoint that returns `{ greeting }` using `sendSuccess`. Document it in `docs/API.md`.”

## Guardrails

- Keep public URLs canonical; add non-canonical aliases as redirects, not as indexed routes.
- Avoid adding large image assets without optimization (prefer WebP/AVIF, responsive sources).
- Ensure environment variables are typed in `src/env.d.ts` and included in `.env.example`.
- For new build scripts, wire them into `package.json` and verify locally.

## Verification checklist (for Copilot)

- Build (Vite) succeeds without errors.
- No new TypeScript errors are introduced.
- Bundle report reveals no oversized app chunks (>200 KB gzip) unless expected.
- Routes resolve correctly and analytics pageview still fires on navigation.
