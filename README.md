
  # suppl.me Affiliate Launch

  Evidence-based supplement guide built with React + Vite, React Router, and Vercel serverless functions. Includes SEO infrastructure (canonical URLs, sitemap, JSON-LD), analytics, and a small backend layer with PostgreSQL.

  • Demo: https://www.suppl.me
  • Design: https://www.figma.com/design/JACura7LAn8JQnSCEl8IH0/suppl.me-Affiliate-Launch

  ## Quick start

  1) Install Node 18+ (recommend via nvm)
  2) Install deps
  3) Start dev server

  ```
  npm install
  npm run dev
  ```

  The app runs at http://localhost:3000.

  ## Scripts

  - dev: start Vite dev server
  - build: production build to `build/`
  - postbuild: generate sitemap and structured data JSON-LD
  - analyze: build and print a bundle size report (gzip and raw sizes)
  - migrate: run DB migrations (see scripts/run-migrations.mjs)

  ```
  npm run dev
  npm run build
  npm run analyze
  ```

  ## Environment variables

  Create `.env` from `.env.example`. Minimum useful vars:

  - VITE_CANONICAL_BASE_URL: Base URL used for canonical and sitemap (e.g. https://www.suppl.me)
  - VITE_GTM_ID: Google Tag Manager ID (e.g. GTM-XXXXXXX)
  - API_KEY_FAVORITES: Simple shared secret for favorites API
  - PGHOST/PGPORT/PGUSER/PGPASSWORD/PGDATABASE/PGSSL: PostgreSQL connection vars if using DB-backed features

  The build scripts also accept `SITE_BASE_URL` as a fallback for the sitemap if `VITE_CANONICAL_BASE_URL` is not set.

  ## Project structure

  ```
  src/
    components/           // UI components including landing, header/footer
    router/               // React Router setup, route building, SEO injection
    utils/                // routePaths mapping, helpers
    assets/               // local assets used by Vite bundling
    env.d.ts              // public env var typings (Vite)
  api/                    // Vercel serverless functions
  scripts/                // build-time scripts (sitemap, structured data, migrations, bundle report)
  public/                 // static assets copied as-is (sitemap.xml generated postbuild)
  .vscode/                // workspace settings and recommended extensions
  ```

  ## Routing

  - Centralized route configuration lives in `src/routes.config.ts`.
  - Paths are mapped in `src/utils/routePaths.ts` to control canonical slugs.
  - React Router routes are constructed in `src/router/routeMap.tsx` and rendered via `RouterLayout.tsx`.
  - Non-canonical alias redirects (typos like `/ashwaghandha`, singular forms like `/bcaa`) are handled as client-side redirects in `RouterLayout.tsx` using `<Navigate replace>` so canonical analytics/SEO are preserved.

  ## SEO

  - `SEOHead` component injects meta tags, canonical link, and JSON-LD as needed.
  - `scripts/generate-sitemap.mjs` builds `public/sitemap.xml` from route configs.
  - Postbuild generates per-supplement structured data JSON: `public/structured-data/*.json`.
  - Canonical base URL is controlled via `VITE_CANONICAL_BASE_URL`.

  ## Analytics

  - `AnalyticsProvider` mounts Google Tag Manager using `VITE_GTM_ID`.
  - Pageviews fire on route changes in `RouterLayout.tsx` via `pushPageView`.
  - Additional event helpers and server-side ingestion are available at `/api/events`.

  ## Backend (Serverless)

  Deployed on Vercel under `/api/*`:

  - `GET /api/health` – liveness probe
  - `GET /api/prices?supplement=<slug>` – mock price data (to be backed by a fetch/cache pipeline)
  - `POST /api/events` – event ingestion (optionally persists to Postgres)
  - `GET/POST /api/auth/favorites` – favorites list and add (requires `x-api-key`)
  - `GET /api/structured-data/supplement` and `/api/structured-data/glossary` – JSON-LD feeds
  - `GET /api/redirect?url=...` – affiliate redirect with basic validation

  PostgreSQL pool is configured in `api/_lib/db.ts` and enabled by connection env vars.

  See `docs/API.md` for full request/response details.

  ## Performance

  - Route-based code splitting with React.lazy.
  - Manual chunk grouping for glossary and large vendor libs in `vite.config.ts`.
  - Hover-based prefetch for route components.
  - Bundle report script: `npm run analyze` to audit sizes.
  - Consider converting large PNGs to WebP/AVIF and adding responsive sources.

  ## Development workflow

  1) `npm run dev` and edit components/pages.
  2) Add new pages in `src/routes.config.ts` and map the slug in `src/utils/routePaths.ts`.
  3) Verify SEO: titles/canonical via `SEOHead` and route SEO metadata.
  4) For new endpoints, create under `api/` and use `sendSuccess/sendError` helpers.
  5) Run `npm run build && npm run analyze` before PR to check sizes and generate sitemap/structured data.

  ## Workspace & tooling

  This repo ships with `.vscode/settings.json` and recommended extensions. For more, see `docs/WORKSPACE.md`.

  ## Docs index

  - Architecture: `docs/ARCHITECTURE.md`
  - API reference: `docs/API.md`
  - Copilot collaboration guide: `docs/COPILOT.md`
  - Workspace setup and tips: `docs/WORKSPACE.md`

  ## Deployment

  - Vercel configuration (`vercel.json`) includes rewrites for SPA routing and direct access to `/sitemap.xml` and `/robots.txt`.
  - Ensure environment variables are configured in Vercel dashboard.
  - Optional Vercel Cron can trigger price refreshes under `/api/cron/*`.

  ## Troubleshooting

  - Blank page or 404 on deep link: verify `vercel.json` rewrites and that the path exists in `PAGE_PATHS`.
  - Missing canonical/OG tags: check `SEOHead` props in `RouteSEO` and ensure `VITE_CANONICAL_BASE_URL` is set.
  - Events not persisted: confirm Postgres env vars; see server logs for `[db]` messages.
  - Bundle report shows huge PNGs: convert to WebP/AVIF and add responsive `<picture>` sources.

  ---

  © 2025 suppl.me. All rights reserved.
  