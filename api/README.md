# Serverless API (Initial Scaffold)

This folder contains Vercel serverless function stubs to support future dynamic features.

## Endpoints

### `GET /api/health`
Simple health/status endpoint useful for uptime monitors.

### `GET /api/prices?supplement=<slug>`
Returns mock price data for a given supplement slug. Intended evolution:
- Replace in-memory mock with orchestrator that pulls cached retailer offers.
- Normalize product data (brand, strength, count) into a canonical model.
- Provide affiliate link mapping & tracking tokens.
- Include structured data eligible fields (aggregateOffer) for front-end JSON-LD.

## Near-Term Backend Use Cases
1. Dynamic price & availability refresh (scheduled fetch + cache).
2. Centralized structured data generation (Product / AggregateOffer) to keep front-end lean.
3. Server-side validation for outbound affiliate redirect tokens.
4. Event ingestion for advanced analytics (optional separate endpoint or 3rd party like Snowplow).
5. Feature flags & A/B test variants for UI copy / ranking algorithms.

## Future Expansion
- Authenticated user profiles (saved stacks, favorites, comparison history).
- Admin CMS for supplement monograph editing (markdown -> JSON pipeline).
- Background jobs (scraping, price normalization) using a queue (e.g., BullMQ on Redis or Vercel Cron + durable storage).
- Recommendation engine (similar supplements, synergistic stacks).

## Architectural Principles
- Keep front-end statically deployable & cache-friendly; offload mutating/dynamic concerns here.
- Favor small, purpose-built endpoints over monolithic API.
- Employ Edge Functions later for low-latency geolocated redirects if needed.
- Use consistent response envelope: `{ data?, error?, meta? }` (to be standardized soon).

## Next Steps (Planned)
1. Define response contract & types in a shared package (`/shared` or `src/shared`).
2. Add caching headers and ETag support to `prices`.
3. Introduce `/api/structured-data/supplement/:slug` for on-demand JSON-LD (optional if we embed at build time).
4. Add simple integration test script to verify endpoints locally.

---
Generated scaffold version: 0.0.1
