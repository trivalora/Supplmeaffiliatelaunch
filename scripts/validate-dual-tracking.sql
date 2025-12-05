-- Dual Tracking Validation Script
-- Run this after testing all features to verify events are being captured
-- Usage: psql "$DATABASE_URL" -f scripts/validate-dual-tracking.sql

\echo '================================================'
\echo 'DUAL TRACKING VALIDATION REPORT'
\echo 'Generated: ' || now()
\echo '================================================'
\echo ''

-- 1. Event Distribution (Last Hour)
\echo '1. EVENT DISTRIBUTION (Last 1 Hour)'
\echo '------------------------------------'
SELECT 
  event,
  COUNT(*) as count,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 1) as percentage
FROM api.analytics_events
WHERE created_at > NOW() - INTERVAL '1 hour'
GROUP BY event
ORDER BY count DESC;

\echo ''
\echo '2. DATA QUALITY CHECK'
\echo '---------------------'
SELECT 
  COUNT(*) as total_events,
  COUNT(DISTINCT visitor_id) as unique_visitors,
  COUNT(DISTINCT session_id) as unique_sessions,
  ROUND(AVG(CASE WHEN visitor_id IS NOT NULL THEN 1 ELSE 0 END) * 100, 1) as visitor_id_coverage,
  ROUND(AVG(CASE WHEN session_id IS NOT NULL THEN 1 ELSE 0 END) * 100, 1) as session_id_coverage,
  ROUND(AVG(CASE WHEN (data->>'fbp') IS NOT NULL THEN 1 ELSE 0 END) * 100, 1) as fbp_coverage
FROM api.analytics_events
WHERE created_at > NOW() - INTERVAL '1 hour';

\echo ''
\echo '3. SEARCH EVENTS (Last 10)'
\echo '--------------------------'
SELECT 
  data->>'searchQuery' as query,
  data->>'resultsCount' as results,
  created_at
FROM api.analytics_events
WHERE event = 'search'
ORDER BY created_at DESC
LIMIT 10;

\echo ''
\echo '4. SUPPLEMENT VIEW EVENTS (Last 10)'
\echo '-----------------------------------'
SELECT 
  data->>'supplementName' as supplement,
  data->>'supplementSlug' as slug,
  created_at
FROM api.analytics_events
WHERE event = 'supplement_view'
ORDER BY created_at DESC
LIMIT 10;

\echo ''
\echo '5. COMPARISON VIEW EVENTS (Last 10)'
\echo '-----------------------------------'
SELECT 
  data->>'supplementSlug' as supplement,
  data->>'totalProducts' as products,
  data->'filters' as filters,
  created_at
FROM api.analytics_events
WHERE event = 'comparison_view'
ORDER BY created_at DESC
LIMIT 10;

\echo ''
\echo '6. AFFILIATE CLICKS (Last 10)'
\echo '-----------------------------'
SELECT 
  click_id,
  product_name,
  retailer_slug,
  price,
  created_at
FROM api.affiliate_clicks
ORDER BY created_at DESC
LIMIT 10;

\echo ''
\echo '7. TRACKING COVERAGE SUMMARY'
\echo '----------------------------'
WITH event_counts AS (
  SELECT 
    COUNT(*) FILTER (WHERE event = 'search') as search_count,
    COUNT(*) FILTER (WHERE event = 'supplement_view') as supplement_count,
    COUNT(*) FILTER (WHERE event = 'comparison_view') as comparison_count,
    COUNT(*) FILTER (WHERE event = 'product_view') as product_count
  FROM api.analytics_events
  WHERE created_at > NOW() - INTERVAL '1 hour'
)
SELECT 
  CASE 
    WHEN search_count > 0 THEN '✅ ACTIVE' 
    ELSE '❌ NO DATA' 
  END as search_tracking,
  CASE 
    WHEN supplement_count > 0 THEN '✅ ACTIVE' 
    ELSE '❌ NO DATA' 
  END as supplement_tracking,
  CASE 
    WHEN comparison_count > 0 THEN '✅ ACTIVE' 
    ELSE '❌ NO DATA' 
  END as comparison_tracking,
  CASE 
    WHEN product_count > 0 THEN '✅ ACTIVE' 
    ELSE '❌ NO DATA' 
  END as product_tracking
FROM event_counts;

\echo ''
\echo '8. UTM ATTRIBUTION (Sample)'
\echo '---------------------------'
SELECT 
  data->'utm' as utm_params,
  COUNT(*) as events_with_utm
FROM api.analytics_events
WHERE created_at > NOW() - INTERVAL '1 hour'
  AND data->'utm' IS NOT NULL
  AND data->'utm' != '{}'::jsonb
GROUP BY data->'utm'
LIMIT 5;

\echo ''
\echo '9. DEVICE BREAKDOWN'
\echo '-------------------'
SELECT 
  data->'device'->>'type' as device_type,
  data->'device'->>'browser' as browser,
  COUNT(*) as events
FROM api.analytics_events
WHERE created_at > NOW() - INTERVAL '1 hour'
GROUP BY device_type, browser
ORDER BY events DESC
LIMIT 10;

\echo ''
\echo '================================================'
\echo 'VALIDATION COMPLETE'
\echo '================================================'
