# Workspace Setup

This repository includes VS Code settings and recommended extensions to streamline development.

## Prerequisites

- Node.js 18+ (recommend using `nvm`)
- npm 9+

Optional:
- PostgreSQL (local or remote) if you want to test DB-backed endpoints

## VS Code

The `.vscode` folder includes:

- `settings.json` – format on save, TypeScript preferences, Tailwind suggestions
- `extensions.json` – recommended extensions list
- `tasks.json` – handy tasks for dev/build/analyze

Install recommendations when prompted by VS Code or open the Extensions tab and select “Install Workspace Recommendations”.

## Environment variables

Copy `.env.example` to `.env` and set values as needed. Minimum for local dev:

- `VITE_CANONICAL_BASE_URL=http://localhost:3000`
- `VITE_GTM_ID=GTM-XXXXXXX` (optional; site will still work without real GTM)

If using DB-backed endpoints:
- Set `PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE, PGSSL` and `API_KEY_FAVORITES`.

## Running locally

- Start dev server: `npm run dev` (opens on http://localhost:3000)
- Production build: `npm run build`
- Bundle analysis: `npm run analyze`

## Deployment (Vercel)

- Import the repo into Vercel.
- Ensure the following env vars are set in Vercel Project Settings:
  - `VITE_CANONICAL_BASE_URL=https://www.suppl.me` (or your custom domain)
  - `VITE_GTM_ID=GTM-XXXXXXX`
  - Optional: Postgres vars for DB features
- `vercel.json` already contains SPA rewrites and allows `/sitemap.xml` and `/robots.txt` direct access.

## Troubleshooting

- TypeScript complains about `VITE_GTM_ID`: ensure it’s typed in `src/env.d.ts` and restart TS Server.
- Alias routes not working: check `RouterLayout.tsx` for `<Navigate>` aliases.
- Missing sitemap: ensure `postbuild` ran (sitemap is generated to `public/sitemap.xml`).
