# Routing Fix - November 25, 2025

## Issue
All glossary pages and other routes were returning 200 redirects instead of serving the actual pages. URLs like:
- `https://www.suppl.me/glossary/ldlcholesterol`
- `https://www.suppl.me/glossary/absorption`
- `https://www.suppl.me/indexnow-key.txt`

Were showing as "redirect 200" in analytics instead of being served directly.

## Root Cause
The `public/_redirects` file contained SPA (Single Page Application) redirect rules from an older architecture:

```
# Old configuration (WRONG for Next.js)
/api/*  /api/:splat  200
/*  /index.html  200
```

This configuration:
1. Caught ALL routes with the wildcard `/*`
2. Tried to redirect them to `/index.html` (which doesn't exist in Next.js)
3. Resulted in 200 status redirects being logged instead of direct page serves

## Solution
Updated `public/_redirects` to remove SPA fallback rules. Next.js App Router handles all routing automatically via:
- File-based routing (`app/[slug]/page.tsx`, `app/glossary/[term]/page.tsx`)
- Middleware (`middleware.ts` if configured)
- `next.config.mjs` redirects/rewrites if needed

New `_redirects` file:
```
# Next.js App Router - No SPA redirects needed
# Next.js handles routing automatically via middleware and file-based routing
# This file can be used for custom redirects if needed in the future

# Example custom redirects (currently none needed):
# /old-path /new-path 301
```

## Files Affected
- `public/_redirects` - Removed SPA redirect rules

## Verification
After deployment, verify:
1. Glossary pages load directly (no redirect): `https://www.suppl.me/glossary/absorption`
2. Static files load directly: `https://www.suppl.me/indexnow-key.txt`
3. Supplement pages load directly: `https://www.suppl.me/ashwagandha`
4. Product pages load directly: `https://www.suppl.me/ashwagandha/product/123`

All should return direct 200 responses without redirects.

## Related Files
- `app/glossary/[term]/page.tsx` - Dynamic glossary routing
- `app/[slug]/page.tsx` - Dynamic supplement routing
- `src/routes.config.ts` - Route configuration (198 glossary terms)
- `vercel.json` - Headers configuration (includes indexnow-key.txt)

## IndexNow Integration
The `indexnow-key.txt` file is properly configured:
- Location: `public/indexnow-key.txt`
- Content: 64-character hex key (f51c685e0038e3697d9817664ae7b51b8edb3e1c0e68d536930080a02db4f1b5)
- Headers: Configured in `vercel.json` for proper Content-Type and caching
- Used by: `scripts/web-build/ping-search-engines.mjs` for IndexNow API submissions

## Next Steps
1. Deploy to Vercel
2. Test random sample of glossary URLs
3. Check Vercel logs for proper 200 responses (no redirects)
4. Run IndexNow submission: `node scripts/web-build/ping-search-engines.mjs`
