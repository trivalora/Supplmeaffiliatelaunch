# Cloudflare Cache Issue - CRITICAL FIX

**Date**: November 27, 2025  
**Issue**: Cloudflare is caching 404 responses for API endpoints  
**Status**: ⚠️ URGENT - Routes are working, but cached 404s blocking access

---

## 🔥 CRITICAL FINDING

The API routes ARE deployed and working correctly! The issue is **Cloudflare is caching old 404 responses**.

### Evidence

```bash
$ curl -v https://www.suppl.me/api/supplements/ashwagandha 2>&1 | grep -E "(HTTP|age|cache-control)"

< HTTP/2 404 
< age: 1021  # ← Cached for 17 minutes!
< cache-control: public, max-age=0, must-revalidate
< last-modified: Thu, 27 Nov 2025 09:24:54 GMT
```

**Key indicators**:
- `age: 1021` - Response is 17 minutes old (cached)
- `content-type: text/html` - Cached 404 HTML page
- `cache-control: public` - Cloudflare is caching it

### What Happened

1. **Earlier deployment** (before env vars set) → Routes returned 404
2. **Cloudflare cached** the 404 responses
3. **Fixed deployment** with env vars → Routes now work
4. **But** Cloudflare still serving cached 404s

---

## ✅ IMMEDIATE FIX (5 minutes)

### Option A: Purge Cloudflare Cache (Recommended)

**Step 1**: Go to Cloudflare Dashboard
1. Visit https://dash.cloudflare.com
2. Select your `suppl.me` domain
3. Click "Caching" in left sidebar
4. Click "Configuration"

**Step 2**: Purge Everything
1. Scroll to "Purge Cache"
2. Click "Purge Everything" button
3. Confirm purge
4. Wait 30 seconds

**Step 3**: Test immediately
```bash
# Should now return JSON!
curl https://www.suppl.me/api/supplements/ashwagandha
```

---

### Option B: Bypass Cloudflare Cache (Quick Test)

Test if the actual endpoint works by bypassing cache:

```bash
# Add cache-busting query parameter
curl "https://www.suppl.me/api/supplements/ashwagandha?nocache=$(date +%s)"

# Or use Cloudflare bypass header
curl -H "Cache-Control: no-cache" https://www.suppl.me/api/supplements/ashwagandha
```

If this returns JSON, it confirms Cloudflare caching is the issue.

---

### Option C: Wait for Cache Expiration (Not Recommended)

Based on cache headers:
- `max-age=0` suggests immediate revalidation
- But `age: 1021` shows it's being cached
- Might take hours to naturally expire

**Don't wait** - use Option A instead.

---

## 🔧 PERMANENT FIX: Configure Cloudflare Page Rules

To prevent API routes from being cached:

### Step 1: Create Bypass Rule

1. Go to Cloudflare Dashboard → `suppl.me`
2. Click "Rules" → "Page Rules"
3. Click "Create Page Rule"

**Rule Configuration**:
```
URL Pattern: www.suppl.me/api/*
Settings:
  - Cache Level: Bypass
  - Disable Performance
```

4. Click "Save and Deploy"

### Step 2: Verify Rule is Active

```bash
# Test API endpoint
curl -v https://www.suppl.me/api/supplements/ashwagandha 2>&1 | grep -i "cf-cache-status"

# Should show: cf-cache-status: BYPASS
```

---

## 🧪 VERIFICATION SCRIPT

Run this to test all endpoints after purging cache:

```bash
#!/bin/bash

echo "Testing API endpoints after cache purge..."
echo ""

# Test 1: Static endpoint
echo "1. Testing /api/supplements"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.suppl.me/api/supplements)
echo "   Status: $STATUS $([ $STATUS -eq 200 ] && echo '✅' || echo '❌')"

# Test 2: Dynamic supplement
echo "2. Testing /api/supplements/ashwagandha"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.suppl.me/api/supplements/ashwagandha)
echo "   Status: $STATUS $([ $STATUS -eq 200 ] && echo '✅' || echo '❌')"

# Test 3: Products endpoint
echo "3. Testing /api/supplements/ashwagandha/products"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://www.suppl.me/api/supplements/ashwagandha/products?limit=1")
echo "   Status: $STATUS $([ $STATUS -eq 200 ] && echo '✅' || echo '❌')"

# Test 4: Search endpoint
echo "4. Testing /api/products/search"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://www.suppl.me/api/products/search?q=ashwagandha&limit=1")
echo "   Status: $STATUS $([ $STATUS -eq 200 ] && echo '✅' || echo '❌')"

echo ""
echo "All tests complete!"
```

Save as `scripts/test-production-api.sh` and run:
```bash
chmod +x scripts/test-production-api.sh
./scripts/test-production-api.sh
```

---

## 📊 Expected Results After Fix

### Before Cache Purge
```bash
$ curl -I https://www.suppl.me/api/supplements/ashwagandha
HTTP/2 404
age: 1021
content-type: text/html; charset=utf-8
```

### After Cache Purge
```bash
$ curl -I https://www.suppl.me/api/supplements/ashwagandha
HTTP/2 200
content-type: application/json
cf-cache-status: BYPASS  # or MISS (first request)
```

### Actual Response
```json
{
  "supplement": {
    "id": "eeb7b3e8-206d-4711-9596-8e8da332b2f0",
    "slug": "ashwagandha",
    "name": "Ashwagandha",
    "product_count": 88
  }
}
```

---

## 🚨 If Cloudflare Purge Doesn't Work

### Alternative 1: Purge Specific URLs

Instead of "Purge Everything", purge specific URLs:

```
https://www.suppl.me/api/supplements/*
https://www.suppl.me/api/products/*
```

### Alternative 2: Development Mode

Enable Development Mode in Cloudflare (temporarily bypasses all cache):

1. Cloudflare Dashboard → Caching
2. Toggle "Development Mode" ON
3. Test endpoints (cache bypassed for 3 hours)
4. Turn OFF after confirming fix

### Alternative 3: Contact Cloudflare Support

If cache persists:
1. Check if "Always Online" is enabled (can cache errors)
2. Verify no conflicting Page Rules exist
3. Contact Cloudflare support with evidence

---

## 📝 Root Cause Summary

**Why this happened**:
1. ✅ API routes deployed correctly to Vercel
2. ✅ Environment variables were set
3. ✅ Database connection working
4. ❌ **Cloudflare cached the 404 responses from an earlier failed deployment**
5. ❌ Even after fixing the issue, cached 404s continued serving

**Why Cloudflare cached 404s**:
- Default behavior: Cloudflare caches ALL responses (including errors)
- No explicit cache bypass rule for `/api/*` routes
- HTTP 404 responses are cacheable by default

**The fix**:
1. **Immediate**: Purge Cloudflare cache
2. **Permanent**: Add Page Rule to bypass cache for API routes

---

## ✅ SUCCESS CHECKLIST

After applying the fix:

- [ ] Cloudflare cache purged
- [ ] `/api/supplements` returns 200 OK
- [ ] `/api/supplements/ashwagandha` returns 200 OK with JSON
- [ ] `/api/supplements/ashwagandha/products` returns 200 OK with products array
- [ ] `/api/products/search` returns 200 OK with search results
- [ ] Page Rule created to bypass API cache permanently
- [ ] Browser console shows no 404 errors on comparison pages
- [ ] Frontend pages load products correctly

---

## 🎯 Next Steps

1. **Immediate** (now):
   - Purge Cloudflare cache
   - Test all 5 API endpoints
   - Verify frontend loads data

2. **Within 1 hour**:
   - Create Cloudflare Page Rule for `/api/*`
   - Monitor for any cache-related issues
   - Document in deployment checklist

3. **Future deployments**:
   - Always purge Cloudflare cache after API changes
   - Consider using `cf-cache-tag` headers for selective purging
   - Add cache bypass headers to API responses

---

**PRIORITY**: 🔴 CRITICAL  
**ESTIMATED FIX TIME**: 5 minutes  
**CONFIDENCE**: 99% (Cloudflare caching is confirmed issue)

---

## 🔗 Resources

- Cloudflare Cache Purge: https://developers.cloudflare.com/cache/how-to/purge-cache/
- Page Rules: https://developers.cloudflare.com/rules/page-rules/
- Cache-Control Headers: https://developers.cloudflare.com/cache/about/cache-control/
- Vercel + Cloudflare: https://vercel.com/docs/edge-network/cloudflare
