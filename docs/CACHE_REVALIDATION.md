# On-Demand Cache Revalidation

## Overview

All database content APIs now use **24-hour cache** with **on-demand revalidation**. This means:

- ✅ **Cache forever** until content changes (24h primary, 7d stale-while-revalidate)
- ✅ **Instant purge** when database updates via revalidation webhook
- ✅ **Zero unnecessary rebuilds** - only revalidate what changed
- ✅ **Better performance** - longer cache times reduce database load

## Cache Strategy

### API Endpoints Cache Times

| Endpoint                           | Cache | Stale-While-Revalidate | Cache Tag     |
| ---------------------------------- | ----- | ---------------------- | ------------- |
| `/api/supplements`                 | 24h   | 7d                     | `supplements` |
| `/api/supplements/[slug]`          | 24h   | 7d                     | `supplements` |
| `/api/supplements/[slug]/products` | 24h   | 7d                     | `products`    |
| `/api/glossary`                    | 24h   | 7d                     | `glossary`    |
| `/api/glossary/[slug]`             | 24h   | 7d                     | `glossary`    |
| `/api/products/search`             | 24h   | 7d                     | `products`    |

### Previous vs New

**Before:**
- Supplements: 1 hour cache
- Products: 30 min cache
- Search: 10 min cache
- Glossary: 1 hour cache

**After:**
- All content: 24 hour cache
- Stale-while-revalidate: 7 days
- On-demand purge when content changes

**Benefits:**
- 24x longer cache = 96% fewer database queries
- Instant cache purge via webhook
- Better user experience (faster page loads)

---

## Revalidation API

### Endpoint

```
POST /api/revalidate
```

### Authentication

Requires `x-revalidation-secret` header matching `REVALIDATION_SECRET` env var.

### Request Body

```typescript
{
  "type": "glossary" | "supplement" | "product" | "all",  // Required
  "paths": ["/glossary/bioavailability"],                 // Optional
  "tags": ["glossary", "supplements"]                     // Optional
}
```

### Examples

#### 1. Revalidate Single Glossary Term

```bash
curl -X POST https://www.suppl.me/api/revalidate \
  -H "x-revalidation-secret: YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "glossary",
    "paths": ["/glossary/bioavailability", "/api/glossary/bioavailability"]
  }'
```

#### 2. Revalidate All Glossary Terms

```bash
curl -X POST https://www.suppl.me/api/revalidate \
  -H "x-revalidation-secret: YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"type": "glossary"}'
```

#### 3. Revalidate All Supplements

```bash
curl -X POST https://www.suppl.me/api/revalidate \
  -H "x-revalidation-secret: YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"type": "supplement"}'
```

#### 4. Revalidate Everything

```bash
curl -X POST https://www.suppl.me/api/revalidate \
  -H "x-revalidation-secret: YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"type": "all"}'
```

---

## Supabase Database Webhooks

### Setup in Supabase Dashboard

1. Go to **Database → Webhooks**
2. Create webhook for each table that needs cache invalidation

### Glossary Terms Webhook

**Trigger:** `INSERT`, `UPDATE`, `DELETE` on `api.glossary_terms`

**Webhook URL:**
```
https://www.suppl.me/api/revalidate
```

**HTTP Headers:**
```json
{
  "Content-Type": "application/json",
  "x-revalidation-secret": "YOUR_SECRET_FROM_ENV"
}
```

**Payload (for all operations):**
```json
{
  "type": "glossary"
}
```

**Advanced: Single term revalidation**
```json
{
  "type": "glossary",
  "paths": ["/glossary/{{ record.slug }}", "/api/glossary/{{ record.slug }}"]
}
```

### Supplements Webhook

**Trigger:** `INSERT`, `UPDATE`, `DELETE` on `api.supplements`

**Payload:**
```json
{
  "type": "supplement"
}
```

### Products Webhook

**Trigger:** `INSERT`, `UPDATE`, `DELETE` on `api.products`

**Payload:**
```json
{
  "type": "product"
}
```

---

## Alternative: Supabase Edge Function

For more control, create a Supabase Edge Function:

### `supabase/functions/revalidate-cache/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const { table, operation, record } = await req.json();
  
  // Determine revalidation type
  let type = "all";
  let paths: string[] = [];
  
  if (table === "glossary_terms") {
    type = "glossary";
    if (record?.slug) {
      paths = [
        `/glossary/${record.slug}`,
        `/api/glossary/${record.slug}`
      ];
    }
  } else if (table === "supplements") {
    type = "supplement";
    if (record?.slug) {
      paths = [
        `/${record.slug}`,
        `/api/supplements/${record.slug}`
      ];
    }
  } else if (table === "products") {
    type = "product";
  }
  
  // Call revalidation endpoint
  const response = await fetch("https://www.suppl.me/api/revalidate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-revalidation-secret": Deno.env.get("REVALIDATION_SECRET") || "",
    },
    body: JSON.stringify({ type, paths }),
  });
  
  return new Response(
    JSON.stringify({ success: response.ok }),
    { headers: { "Content-Type": "application/json" } }
  );
});
```

### Deploy Edge Function

```bash
npx supabase functions deploy revalidate-cache
```

### Database Trigger

```sql
-- Create function to call edge function
CREATE OR REPLACE FUNCTION notify_cache_revalidation()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'YOUR_SUPABASE_FUNCTION_URL',
    body := jsonb_build_object(
      'table', TG_TABLE_NAME,
      'operation', TG_OP,
      'record', row_to_json(NEW)
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attach to glossary_terms table
CREATE TRIGGER glossary_cache_revalidation
AFTER INSERT OR UPDATE OR DELETE ON api.glossary_terms
FOR EACH ROW EXECUTE FUNCTION notify_cache_revalidation();

-- Attach to supplements table
CREATE TRIGGER supplement_cache_revalidation
AFTER INSERT OR UPDATE OR DELETE ON api.supplements
FOR EACH ROW EXECUTE FUNCTION notify_cache_revalidation();
```

---

## Environment Variables

Add to `.env.local`:

```bash
# Revalidation secret (generate with: openssl rand -base64 32)
REVALIDATION_SECRET=your_random_secret_here
```

Add to Vercel:
```bash
vercel env add REVALIDATION_SECRET production
```

---

## Testing

### 1. Test Revalidation Endpoint

```bash
# Health check
curl https://www.suppl.me/api/revalidate

# Test revalidation
curl -X POST https://www.suppl.me/api/revalidate \
  -H "x-revalidation-secret: YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"type": "glossary"}'
```

### 2. Test Cache Purge

```bash
# 1. Load a page (should be cached)
curl -I https://www.suppl.me/api/glossary/bioavailability

# 2. Update database (trigger webhook)
# ... make change in Supabase

# 3. Load page again (should be fresh)
curl -I https://www.suppl.me/api/glossary/bioavailability
```

### 3. Monitor Cache Headers

```bash
curl -I https://www.suppl.me/api/glossary | grep -i cache
# Should show: Cache-Control: public, s-maxage=86400, stale-while-revalidate=604800
```

---

## Benefits

### Performance
- **96% fewer database queries** (1h → 24h cache = 24x less frequent)
- **Faster page loads** (CDN edge cache serves most requests)
- **Lower database load** (reduces Supabase usage/costs)

### Freshness
- **Instant updates** (webhook revalidates immediately after changes)
- **No manual rebuilds** (automatic cache purge)
- **Selective revalidation** (only purge what changed)

### Developer Experience
- **Set and forget** (automatic cache management)
- **Easy testing** (manual revalidation via API)
- **Simple debugging** (clear cache with POST request)

---

## Monitoring

### Vercel Analytics
Monitor cache hit rates in Vercel dashboard under **Analytics → Edge**

### Database Queries
Monitor reduction in database queries in Supabase dashboard under **Database → Query Performance**

### Expected Metrics
- **Cache hit rate**: ~95%+
- **Database queries**: -96% vs 1-hour cache
- **Page load time**: -30-50% vs uncached

---

## Troubleshooting

### Cache not purging after database change

1. Check webhook is configured in Supabase
2. Verify `REVALIDATION_SECRET` matches in both places
3. Check webhook logs in Supabase dashboard
4. Test revalidation endpoint manually

### Stale content still showing

1. CDN edge cache may take 1-2 minutes to propagate
2. Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Verify revalidation was successful: check webhook logs

### Revalidation failing

1. Check secret is correct: `echo $REVALIDATION_SECRET`
2. Verify endpoint is accessible: `curl https://www.suppl.me/api/revalidate`
3. Check Vercel function logs for errors

---

## Next Steps

1. ✅ **Deploy revalidation endpoint** (already done)
2. ⏳ **Add `REVALIDATION_SECRET` to env** (generate with `openssl rand -base64 32`)
3. ⏳ **Configure Supabase webhooks** (one per table)
4. ⏳ **Test with database change** (verify cache purges)
5. ⏳ **Monitor cache hit rates** (should see 95%+ hit rate)

---

## Related Documentation

- Next.js: [Revalidating Data](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)
- Vercel: [Cache-Tag Header](https://vercel.com/docs/edge-network/caching#cache-tag)
- Supabase: [Database Webhooks](https://supabase.com/docs/guides/database/webhooks)
