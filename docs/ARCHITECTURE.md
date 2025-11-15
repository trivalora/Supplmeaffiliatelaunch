# Architecture Overview

This document explains the high-level architecture of the suppl.me Affiliate Launch project.

## Frontend

- Framework: React 18 with Vite
- Routing: React Router with lazy-loaded routes
- Styling: Tailwind classes (utility-first), standard CSS where needed
- SEO: `SEOHead` component for meta tags, canonical, JSON-LD
- Analytics: Google Tag Manager via `AnalyticsProvider` and `pushPageView`
- Performance:
  - Code-splitting by route with `React.lazy`
  - Manual chunk grouping (glossary + vendor libraries) in `vite.config.ts`
  - Hover-based route prefetch utility

### Routing Details

- `src/routes.config.ts` defines all knowledgebase and glossary routes, including titles, descriptions, and component paths.
- `src/utils/routePaths.ts` maps internal keys to canonical URL slugs.
- `src/router/routeMap.tsx` converts the config into React Router routes and injects basic per-route SEO metadata including JSON-LD for v2 supplement pages.
- `src/router/RouterLayout.tsx` composes the app chrome (Header/Footer), handles pageview events, scroll restoration, and mounts route elements.
- Aliases like `/ashwaghandha` → `/ashwagandha` and `/bcaa` → `/bcaas` are handled as client-side redirects to preserve canonical analytics and SEO.

### SEO & Structured Data

- `SEOHead` updates document title and meta tags, sets canonical links, and injects JSON-LD.
- `scripts/generate-sitemap.mjs` builds `public/sitemap.xml` from route configs.
- `scripts/build-structured-data.mjs` pre-generates JSON-LD files under `public/structured-data` for supplements.

### Assets

- Images are bundled by Vite from `src/assets/`.
- Consider converting large PNGs to WebP/AVIF and using responsive `picture` sources.

## Backend (Serverless on Vercel)

- Endpoints live in `/api/*` as TypeScript files, built by Vercel.
- Common response helpers: `api/_lib/respond.ts` for consistent envelopes, cache headers, and ETag.
- Database layer: `api/_lib/db.ts` creates a lazy PostgreSQL pool using env vars and exports `query`/`safeQuery`.
- Example endpoints:
  - `GET /api/health` – simple health check
  - `GET /api/prices` – mock price aggregation (replace with real sources)
  - `POST /api/events` – event ingestion with optional DB persistence
  - `GET /api/auth/favorites` / `POST /api/auth/favorites` – favorites with API key auth
  - `GET /api/redirect` – affiliate redirect with basic validation
  - `GET /api/structured-data/supplement` and `/api/structured-data/glossary` – JSON-LD writers

## Build & Deployment

- Vite production build outputs to `build/` with manifest enabled.
- Postbuild scripts generate sitemap and structured data.
- Vercel deployment uses `vercel.json` rewrites to expose `/sitemap.xml` and `/robots.txt` while keeping SPA routing.

## Analytics

- Uses Google Tag Manager (GTM). Set `VITE_GTM_ID` in environment.
- Pageviews are pushed on route changes with page name, category, and path.
- Server-side `/api/events` can accept additional events and optionally persist them.

## Environment & Config

- Public (Vite) env vars typed in `src/env.d.ts` include `VITE_CANONICAL_BASE_URL`, `VITE_GTM_ID`, and optional `VITE_API_BASE_URL`.
- Server-side env vars include Postgres settings and `API_KEY_FAVORITES`.

## Performance Monitoring

- Run `npm run analyze` to generate a gzip/raw size report and spot large assets.
- Manual chunking in `vite.config.ts` can be adjusted as needed.
