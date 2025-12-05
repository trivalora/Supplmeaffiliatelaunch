-- Supabase Database Webhooks for Cache Revalidation
-- Run this SQL in the Supabase SQL Editor
-- These webhooks will automatically call /api/revalidate when data changes

-- =====================================================
-- 1. GLOSSARY TERMS WEBHOOK
-- =====================================================
-- Revalidates cache when glossary terms are added, updated, or deleted

-- Create webhook for glossary_terms table
-- Go to: Supabase Dashboard → Database → Webhooks → Create Webhook

/*
Name: Glossary Cache Revalidation
Table: api.glossary_terms
Events: INSERT, UPDATE, DELETE
Type: HTTP Request
Method: POST
URL: https://www.suppl.me/api/revalidate

HTTP Headers:
{
  "Content-Type": "application/json",
  "x-revalidation-secret": "2W/k241G5wxIRi9OtfrE/t5104z9Y9Pm3W3q1fxcDsc="
}

HTTP Params (Body):
{
  "type": "glossary"
}

Advanced (Optional - for single term revalidation):
{
  "type": "glossary",
  "paths": [
    "/glossary/{{ record.slug }}",
    "/api/glossary/{{ record.slug }}"
  ]
}
*/

-- =====================================================
-- 2. SUPPLEMENTS WEBHOOK
-- =====================================================
-- Revalidates cache when supplements are added, updated, or deleted

/*
Name: Supplement Cache Revalidation
Table: api.supplements
Events: INSERT, UPDATE, DELETE
Type: HTTP Request
Method: POST
URL: https://www.suppl.me/api/revalidate

HTTP Headers:
{
  "Content-Type": "application/json",
  "x-revalidation-secret": "2W/k241G5wxIRi9OtfrE/t5104z9Y9Pm3W3q1fxcDsc="
}

HTTP Params (Body):
{
  "type": "supplement"
}

Advanced (Optional - for single supplement revalidation):
{
  "type": "supplement",
  "paths": [
    "/{{ record.slug }}",
    "/api/supplements/{{ record.slug }}"
  ]
}
*/

-- =====================================================
-- 3. PRODUCTS WEBHOOK
-- =====================================================
-- Revalidates cache when products are added, updated, or deleted

/*
Name: Product Cache Revalidation
Table: api.products
Events: INSERT, UPDATE, DELETE
Type: HTTP Request
Method: POST
URL: https://www.suppl.me/api/revalidate

HTTP Headers:
{
  "Content-Type": "application/json",
  "x-revalidation-secret": "2W/k241G5wxIRi9OtfrE/t5104z9Y9Pm3W3q1fxcDsc="
}

HTTP Params (Body):
{
  "type": "product"
}
*/

-- =====================================================
-- 4. PRICES WEBHOOK (Optional)
-- =====================================================
-- Revalidates product cache when prices change

/*
Name: Price Cache Revalidation
Table: api.prices
Events: INSERT, UPDATE, DELETE
Type: HTTP Request
Method: POST
URL: https://www.suppl.me/api/revalidate

HTTP Headers:
{
  "Content-Type": "application/json",
  "x-revalidation-secret": "2W/k241G5wxIRi9OtfrE/t5104z9Y9Pm3W3q1fxcDsc="
}

HTTP Params (Body):
{
  "type": "product"
}
*/

-- =====================================================
-- TESTING WEBHOOKS
-- =====================================================

-- Test glossary webhook by updating a term
UPDATE api.glossary_terms 
SET updated_at = NOW() 
WHERE slug = 'bioavailability';

-- Test supplement webhook by updating a supplement
UPDATE api.supplements 
SET updated_at = NOW() 
WHERE slug = 'magnesium';

-- Test product webhook by updating a product
UPDATE api.products 
SET updated_at = NOW() 
WHERE id = (SELECT id FROM api.products LIMIT 1);

-- =====================================================
-- VERIFY WEBHOOKS ARE WORKING
-- =====================================================

-- Check webhook delivery logs in Supabase Dashboard:
-- Database → Webhooks → Select webhook → View logs

-- Test revalidation endpoint manually:
/*
curl -X POST https://www.suppl.me/api/revalidate \
  -H "Content-Type: application/json" \
  -H "x-revalidation-secret: 2W/k241G5wxIRi9OtfrE/t5104z9Y9Pm3W3q1fxcDsc=" \
  -d '{"type": "glossary"}'
*/

-- =====================================================
-- NOTES
-- =====================================================

-- 1. Webhooks fire AFTER the database operation completes
-- 2. Webhooks are async - they don't block the database operation
-- 3. Failed webhooks will retry automatically (Supabase handles this)
-- 4. Check webhook logs in Supabase Dashboard for debugging
-- 5. The revalidation is instant - CDN cache purges in 1-2 seconds
-- 6. Use "Advanced" single-record revalidation only if you need granular control
--    - Simpler to revalidate entire type (glossary, supplement, product)
--    - Supabase replaces {{ record.slug }} with actual slug value

-- =====================================================
-- SECURITY
-- =====================================================

-- The revalidation secret is required for all webhook calls
-- This prevents unauthorized cache purging
-- Never commit the secret to git (already in .env.local and Vercel)
-- Rotate the secret if compromised:
--   1. Generate new secret: openssl rand -base64 32
--   2. Update .env.local
--   3. Update Vercel: vercel env add REVALIDATION_SECRET production
--   4. Update all Supabase webhooks with new secret
