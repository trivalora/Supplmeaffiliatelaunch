# API Reference

All endpoints live under `/api/*` and are deployed as Vercel serverless functions.
Responses use a consistent envelope where applicable:

```
{
  "data": any,
  "error": { message: string, code?: string } | null,
  "meta": { generatedAt?: string, ttlSeconds?: number } | null
}
```

## Health

GET `/api/health`

- Purpose: Liveness probe
- Response: `{ status: 'ok', version: '0.0.1' }`
- Cache: 30s

## Prices (Mock)

GET `/api/prices?supplement=<slug>`

- Params:
  - `supplement` (required): e.g., `magnesium`
- Response:
  - `data`: `{ supplement, count, prices: PriceRecord[] }`
  - `PriceRecord`: `{ retailer, productName, brand, price, currency, url, lastUpdated }`
- Status codes: `200 OK`, `400 MISSING_PARAM`, `404 NOT_FOUND`

## Events

POST `/api/events`

- Body: `{ event: string; payload?: any }`
- Action: Returns accepted response (202) and attempts to persist to Postgres if DB is configured
- Status codes: `202`, `400 MISSING_EVENT`, `405 METHOD_NOT_ALLOWED`

## Favorites (Auth via API Key)

Headers: `x-api-key: <API_KEY_FAVORITES>`

GET `/api/auth/favorites?user=<id>`
- Response: `{ user, favorites: string[] }`

POST `/api/auth/favorites`
- Body: `{ user: string; supplement: string }`
- Response: `{ user, supplement, added: true }`
- Status codes: `200`, `401 UNAUTHORIZED`, `400 MISSING_FIELDS`, `405 METHOD_NOT_ALLOWED`

## Redirect

GET `/api/redirect?url=<https-url>&supplement=<key>&platform=<name>`

- Purpose: Validated affiliate redirects, issues `302` to target URL
- Notes: Only allows `https` targets. Consider extending with signed tokens/allowlist.
- Status codes: `302`, `400 MISSING_PARAM|INVALID_URL`

## Structured Data

GET `/api/structured-data/supplement`
- Returns JSON-LD for supplement pages (generated dynamically)

GET `/api/structured-data/glossary`
- Returns JSON-LD for glossary pages

## Database

- Connection: set `PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE, PGSSL`.
- Pooling: `api/_lib/db.ts` creates a small pool (max 4) on first use.
- Helpers: `query(sql, params)`, `safeQuery(sql, params)`.

## Response Helpers

- `sendSuccess(res, data, meta?, status=200)`
- `sendError(res, message, code?, status=400, meta?)`

These set Content-Type, ETag, cache headers, and ensure a consistent envelope.
