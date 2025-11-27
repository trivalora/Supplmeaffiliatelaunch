# Supabase API Fix Plan - Complete Diagnosis & Solution

**Date**: November 27, 2025  
**Issue**: Production API endpoints returning 404 for dynamic routes  
**Status**: Root cause identified ✅ | Solution ready 🚀

---

## 🔍 Root Cause Analysis

### Current Situation

**Working ✅**:
- `/api/supplements` → 200 OK (returns 17 supplements)
- Local development → All endpoints work perfectly
- Database connection → Active and functional (1,000 products, 1,000 prices)

**Broken ❌**:
- `/api/supplements/[slug]` → 404 (dynamic route)
- `/api/supplements/[slug]/products` → 404 (dynamic route)
- `/api/products/[id]` → 404 (dynamic route)
- `/api/products/search` → 404 (static route, but part of products folder)

### Why It's Broken

**The dynamic API routes are returning Next.js 404 pages (HTML) instead of JSON**. This indicates:

1. ✅ **Database is accessible** - `/api/supplements` works and returns data
2. ✅ **Environment variables are set** - Otherwise the `/api/supplements` endpoint would fail too
3. ❌ **Dynamic routes aren't being recognized** - Next.js is treating them as missing pages

### Technical Investigation

**Test Results**:
```bash
# Local (Works):
curl http://localhost:3000/api/supplements → 200 OK (JSON)
curl http://localhost:3000/api/supplements/ashwagandha → 200 OK (JSON)

# Production (Broken):
curl https://www.suppl.me/api/supplements → 200 OK (JSON)
curl https://www.suppl.me/api/supplements/ashwagandha → 404 (HTML 404 page)
```

**Key Finding**: Production returns full HTML 404 page, not an API error. This means:
- Vercel isn't routing the request to the API function
- The route file might not be deployed correctly
- The dynamic segment `[slug]` isn't being recognized

---

## 🎯 Root Cause: Vercel Build/Routing Issue

### Primary Suspect: Route Configuration

Looking at your file structure:
```
app/api/
├── supplements/
│   ├── route.ts                           ← Works (static)
│   └── [slug]/
│       ├── route.ts                       ← 404 (dynamic)
│       └── products/
│           └── route.ts                   ← 404 (nested dynamic)
├── products/
│   ├── [id]/
│   │   └── route.ts                       ← 404 (dynamic)
│   └── search/
│       └── route.ts                       ← 404 (in products folder)
```

**Issue**: Next.js App Router dynamic routes might not be deploying correctly to Vercel.

### Possible Causes

1. **Build Output Issue**: Dynamic routes not included in `.vercel/output`
2. **Route Manifest Missing**: `next build` didn't register dynamic API routes
3. **Vercel Function Deployment**: Functions aren't being created for dynamic routes
4. **Path Conflicts**: Static site generation interfering with API routes

---

## 🔧 Solution Strategy

### Phase 1: Verify Vercel Configuration (5 minutes)

**Check 1**: Verify `vercel.json` configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

**Check 2**: Verify `next.config.mjs` doesn't exclude API routes
```javascript
const nextConfig = {
  // Should NOT have:
  // output: 'export' (this breaks API routes)
};
```

**Check 3**: Check if functions are deployed
- Go to Vercel Dashboard → Deployments → Latest → Functions tab
- Should see functions for each API route

---

### Phase 2: Fix Route Export Configuration (10 minutes)

**Problem**: If `route.ts` files are missing proper exports or runtime config

**Solution**: Ensure all dynamic route files have:
```typescript
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params; // MUST await in Next.js 15+
  // ...
}
```

**Files to check**:
1. `app/api/supplements/[slug]/route.ts` ✅ Already correct
2. `app/api/supplements/[slug]/products/route.ts` ✅ Already correct
3. `app/api/products/[id]/route.ts` ✅ Already correct
4. `app/api/products/search/route.ts` ✅ Already correct

---

### Phase 3: Rebuild and Redeploy (15 minutes)

**Step 1**: Clean build locally
```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3
rm -rf .next
npm run build
```

**Expected output**:
```
Route (app)                                Size     First Load JS
┌ ○ /api/supplements                       0 B            0 B
├ ƒ /api/supplements/[slug]                0 B            0 B
├ ƒ /api/supplements/[slug]/products       0 B            0 B
├ ƒ /api/products/[id]                     0 B            0 B
└ ○ /api/products/search                   0 B            0 B

ƒ = dynamic API route
○ = static API route
```

**Step 2**: Check for build errors
```bash
# Look for warnings like:
# "Route /api/supplements/[slug] is using dynamic params but..."
```

**Step 3**: Deploy to Vercel
```bash
# Option A: Git push (automatic)
git add .
git commit -m "Fix: Ensure dynamic API routes are deployed"
git push origin main

# Option B: Vercel CLI
vercel --prod
```

**Step 4**: Wait for deployment (2-3 minutes)

---

### Phase 4: Verify Deployment (5 minutes)

**Test all endpoints**:
```bash
# 1. Static route (should still work)
curl https://www.suppl.me/api/supplements

# 2. Dynamic routes (should now work)
curl https://www.suppl.me/api/supplements/ashwagandha
curl https://www.suppl.me/api/supplements/ashwagandha/products?limit=5
curl https://www.suppl.me/api/products/search?q=ashwagandha&limit=5

# 3. Get a product ID and test
PRODUCT_ID="eeb7b3e8-206d-4711-9596-8e8da332b2f0"
curl "https://www.suppl.me/api/products/$PRODUCT_ID"
```

**Expected**: All return JSON with 200 status

---

## 🚨 Alternative Solutions (If Phase 3 Fails)

### Solution A: Check Vercel Function Logs

1. Go to: https://vercel.com/dashboard
2. Click your project → Deployments → Latest deployment
3. Click "Functions" tab
4. Look for errors in function deployment
5. Common issues:
   - "Function size too large" → Need to optimize
   - "Module not found" → Missing dependencies
   - "Timeout" → Function taking too long

### Solution B: Verify Next.js Version Compatibility

```bash
# Check Next.js version
npm list next

# Expected: next@16.0.3 or higher
```

**If using Next.js 15+**: MUST await params in dynamic routes
```typescript
// ❌ WRONG (Next.js 14 style)
export async function GET(request: Request, { params }) {
  const { slug } = params; // Direct access
}

// ✅ CORRECT (Next.js 15+ style)
export async function GET(request: Request, { params }) {
  const { slug } = await params; // Must await
}
```

### Solution C: Move API Routes to Pages Directory (Last Resort)

If App Router API routes continue failing, migrate to Pages API:

```
pages/api/
├── supplements.ts
├── supplements/
│   ├── [slug].ts
│   └── [slug]/
│       └── products.ts
```

**Note**: This is NOT recommended as it requires rewriting all endpoints.

---

## 📋 Implementation Checklist

### Pre-Deployment
- [x] Local API endpoints tested (all working)
- [x] Database connection verified (1,000 products)
- [x] Environment variables confirmed in `.env.local`
- [ ] `next.config.mjs` doesn't have `output: 'export'`
- [ ] All route files have `export const runtime = 'nodejs'`
- [ ] All dynamic routes await params correctly

### Deployment
- [ ] Clean local build (`rm -rf .next && npm run build`)
- [ ] Build output shows dynamic routes (ƒ symbol)
- [ ] No build errors or warnings
- [ ] Push to GitHub (triggers Vercel deployment)
- [ ] Deployment completes successfully

### Post-Deployment Verification
- [ ] `/api/supplements` returns 200 OK with JSON
- [ ] `/api/supplements/ashwagandha` returns 200 OK with JSON
- [ ] `/api/supplements/ashwagandha/products` returns 200 OK with JSON
- [ ] `/api/products/[id]` returns 200 OK with JSON
- [ ] `/api/products/search` returns 200 OK with JSON
- [ ] Browser console shows no 404 errors on comparison pages
- [ ] Products load correctly on frontend

---

## 🔍 Diagnostic Commands

### Local Testing
```bash
# Start dev server
npm run dev

# Test all endpoints
curl http://localhost:3000/api/supplements | jq
curl http://localhost:3000/api/supplements/ashwagandha | jq
curl "http://localhost:3000/api/supplements/ashwagandha/products?limit=2" | jq
curl "http://localhost:3000/api/products/search?q=ashwagandha&limit=2" | jq
```

### Production Testing
```bash
# Test production endpoints
curl https://www.suppl.me/api/supplements | jq
curl https://www.suppl.me/api/supplements/ashwagandha | jq
curl "https://www.suppl.me/api/supplements/ashwagandha/products?limit=2" | jq
curl "https://www.suppl.me/api/products/search?q=ashwagandha&limit=2" | jq

# Check HTTP status codes
curl -I https://www.suppl.me/api/supplements
curl -I https://www.suppl.me/api/supplements/ashwagandha
```

### Vercel Function Inspection
```bash
# Install Vercel CLI
npm i -g vercel

# Login and link project
vercel login
vercel link

# Check function logs
vercel logs --follow

# List all functions
vercel inspect [deployment-url]
```

---

## 📊 Expected Results After Fix

### API Responses
```json
// GET /api/supplements
{
  "supplements": [...],  // 17 supplements
  "total": 17
}

// GET /api/supplements/ashwagandha
{
  "supplement": {
    "id": "eeb7b3e8-206d-4711-9596-8e8da332b2f0",
    "slug": "ashwagandha",
    "name": "Ashwagandha",
    "product_count": 88
  }
}

// GET /api/supplements/ashwagandha/products
{
  "products": [...],  // Array of products
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 88,
    "totalPages": 2
  }
}
```

### Frontend Behavior
- ✅ Comparison pages load products
- ✅ No 404 errors in browser console
- ✅ Product cards display with prices
- ✅ Filters work correctly
- ✅ Pagination functions

---

## 🎯 Success Criteria

**Must Pass**:
1. All 5 API endpoints return JSON (not HTML)
2. HTTP status codes are 200 (not 404)
3. Product data matches database (88 Ashwagandha products)
4. Frontend pages load without errors
5. Analytics events fire correctly

**Nice to Have**:
1. Sub-200ms response times
2. Proper caching headers working
3. Search functionality responsive
4. All filters functional

---

## 📝 Next Steps After Fix

1. **Monitor Production**
   - Check Vercel Analytics for API errors
   - Monitor function execution times
   - Watch for rate limiting issues

2. **Frontend Integration** (Week 4)
   - Create React hooks for API calls
   - Update comparison pages to use API
   - Implement search UI
   - Add loading states

3. **Performance Optimization**
   - Add Redis caching layer
   - Implement CDN for API responses
   - Optimize database queries
   - Add API rate limiting

---

## 🆘 Emergency Contacts

**If deployment fails**:
1. Check Vercel Dashboard → Deployments → Errors
2. Review Function Logs for error messages
3. Test API routes locally first
4. Revert deployment if needed: `vercel rollback`

**Resources**:
- Next.js App Router API docs: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- Vercel Functions docs: https://vercel.com/docs/functions
- Supabase connection pooling: https://supabase.com/docs/guides/database/connecting-to-postgres

---

**Last Updated**: November 27, 2025  
**Status**: Ready for implementation  
**Priority**: 🔴 Critical (Blocks production readiness)
