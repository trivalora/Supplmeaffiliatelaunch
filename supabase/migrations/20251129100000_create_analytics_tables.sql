-- ============================================
-- Analytics Tables for Backend Tracking
-- Version: 1.0
-- Date: November 29, 2025
-- ============================================

-- Core analytics events table
-- Stores all frontend + API events with full context
CREATE TABLE IF NOT EXISTS api.analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Event identification
    event_name VARCHAR(100) NOT NULL,
    event_category VARCHAR(50) NOT NULL DEFAULT 'general',
    
    -- Session & User tracking
    session_id VARCHAR(100),
    visitor_id VARCHAR(100),
    user_agent TEXT,
    ip_hash VARCHAR(64),
    
    -- Context
    page_url TEXT,
    page_path VARCHAR(500),
    referrer TEXT,
    
    -- UTM parameters
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(200),
    utm_content VARCHAR(200),
    utm_term VARCHAR(200),
    
    -- Device info
    device_type VARCHAR(20),
    browser VARCHAR(50),
    os VARCHAR(50),
    screen_resolution VARCHAR(20),
    viewport_size VARCHAR(20),
    
    -- Event-specific data (flexible JSON)
    event_data JSONB DEFAULT '{}',
    
    -- Revenue tracking
    revenue_value DECIMAL(10,2),
    currency VARCHAR(3) DEFAULT 'USD',
    
    -- Metadata
    is_bot BOOLEAN DEFAULT FALSE,
    source VARCHAR(20) DEFAULT 'frontend',
    processed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Validation
    CONSTRAINT valid_event_category CHECK (
        event_category IN ('pageview', 'product', 'affiliate', 'engagement', 
                           'search', 'form', 'error', 'session', 'conversion', 'api', 'general')
    ),
    CONSTRAINT valid_source CHECK (
        source IN ('frontend', 'api', 'webhook', 'server')
    )
);

-- Indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_events_created_at ON api.analytics_events (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_events_event_name ON api.analytics_events (event_name);
CREATE INDEX IF NOT EXISTS idx_events_session ON api.analytics_events (session_id);
CREATE INDEX IF NOT EXISTS idx_events_visitor ON api.analytics_events (visitor_id);
CREATE INDEX IF NOT EXISTS idx_events_page_path ON api.analytics_events (page_path);
CREATE INDEX IF NOT EXISTS idx_events_category ON api.analytics_events (event_category);
CREATE INDEX IF NOT EXISTS idx_events_source ON api.analytics_events (source);

-- Partial index for affiliate events (most important for revenue)
CREATE INDEX IF NOT EXISTS idx_events_affiliate ON api.analytics_events (created_at DESC) 
    WHERE event_category = 'affiliate';

-- GIN index for JSONB queries
CREATE INDEX IF NOT EXISTS idx_events_data ON api.analytics_events USING GIN (event_data);

-- ============================================
-- Dedicated affiliate clicks table
-- For revenue tracking and commission reconciliation
-- ============================================
CREATE TABLE IF NOT EXISTS api.affiliate_clicks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID REFERENCES api.analytics_events(id) ON DELETE SET NULL,
    
    -- Click identification (for affiliate network reconciliation)
    click_id VARCHAR(100) UNIQUE NOT NULL,
    
    -- Product info
    product_id UUID REFERENCES api.products(id) ON DELETE SET NULL,
    product_name TEXT,
    brand VARCHAR(200),
    supplement_slug VARCHAR(100),
    
    -- Retailer info
    retailer_id UUID REFERENCES api.retailers(id) ON DELETE SET NULL,
    retailer_slug VARCHAR(50) NOT NULL,
    
    -- Price at click time
    price DECIMAL(10,2),
    price_per_unit DECIMAL(10,4),
    currency VARCHAR(3) DEFAULT 'USD',
    
    -- Destination
    affiliate_url TEXT NOT NULL,
    
    -- Attribution
    session_id VARCHAR(100),
    visitor_id VARCHAR(100),
    utm_source VARCHAR(100),
    utm_campaign VARCHAR(200),
    landing_page TEXT,
    pages_before_click INTEGER DEFAULT 1,
    time_on_site_seconds INTEGER,
    
    -- Revenue (populated by webhook from affiliate networks)
    commission_status VARCHAR(20) DEFAULT 'pending',
    commission_amount DECIMAL(10,2),
    commission_currency VARCHAR(3),
    order_id VARCHAR(100),
    sale_amount DECIMAL(10,2),
    commissioned_at TIMESTAMPTZ,
    
    -- Timestamps
    clicked_at TIMESTAMPTZ DEFAULT NOW(),
    
    CONSTRAINT valid_commission_status CHECK (
        commission_status IN ('pending', 'approved', 'declined', 'paid')
    )
);

-- Indexes for affiliate_clicks
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_retailer ON api.affiliate_clicks (retailer_slug, clicked_at DESC);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_product ON api.affiliate_clicks (product_id);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_session ON api.affiliate_clicks (session_id);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_click_id ON api.affiliate_clicks (click_id);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_status ON api.affiliate_clicks (commission_status);
CREATE INDEX IF NOT EXISTS idx_affiliate_clicks_supplement ON api.affiliate_clicks (supplement_slug);

-- ============================================
-- API request tracking table
-- Track all API calls for analytics and debugging
-- ============================================
CREATE TABLE IF NOT EXISTS api.api_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Request identification
    request_id VARCHAR(100) UNIQUE,
    
    -- Endpoint info
    endpoint VARCHAR(200) NOT NULL,
    method VARCHAR(10) NOT NULL DEFAULT 'GET',
    
    -- Request context
    ip_hash VARCHAR(64),
    user_agent TEXT,
    referer TEXT,
    
    -- Query parameters (for debugging)
    query_params JSONB DEFAULT '{}',
    
    -- Response info
    status_code INTEGER,
    response_time_ms INTEGER,
    
    -- Resource accessed
    resource_type VARCHAR(50),
    resource_id VARCHAR(200),
    
    -- Metadata
    is_bot BOOLEAN DEFAULT FALSE,
    cache_hit BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for api_requests
CREATE INDEX IF NOT EXISTS idx_api_requests_created ON api.api_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_api_requests_endpoint ON api.api_requests (endpoint);
CREATE INDEX IF NOT EXISTS idx_api_requests_resource ON api.api_requests (resource_type, resource_id);

-- ============================================
-- Session aggregates view (materialized for performance)
-- ============================================
CREATE MATERIALIZED VIEW IF NOT EXISTS api.session_stats AS
SELECT 
    session_id,
    visitor_id,
    MIN(created_at) as session_start,
    MAX(created_at) as session_end,
    EXTRACT(EPOCH FROM (MAX(created_at) - MIN(created_at)))::INTEGER as duration_seconds,
    COUNT(*) FILTER (WHERE event_name = 'pageview') as page_views,
    COUNT(DISTINCT page_path) as unique_pages,
    COUNT(*) FILTER (WHERE event_category = 'product') as product_interactions,
    COUNT(*) FILTER (WHERE event_category = 'affiliate') as affiliate_clicks,
    COUNT(*) FILTER (WHERE event_name = 'search') as search_count,
    MAX((event_data->>'scrollDepth')::INTEGER) as max_scroll_depth,
    
    -- Funnel flags
    BOOL_OR(page_path = '/') as viewed_homepage,
    BOOL_OR(event_name = 'supplement_view') as viewed_supplement,
    BOOL_OR(page_path LIKE '%/compare%') as viewed_comparison,
    BOOL_OR(event_name = 'product_view') as viewed_product,
    BOOL_OR(event_category = 'affiliate') as clicked_affiliate,
    
    -- Attribution
    (array_agg(page_path ORDER BY created_at ASC))[1] as landing_page,
    (array_agg(referrer ORDER BY created_at ASC) FILTER (WHERE referrer IS NOT NULL))[1] as first_referrer,
    (array_agg(utm_source ORDER BY created_at ASC) FILTER (WHERE utm_source IS NOT NULL))[1] as utm_source,
    (array_agg(utm_campaign ORDER BY created_at ASC) FILTER (WHERE utm_campaign IS NOT NULL))[1] as utm_campaign,
    (array_agg(device_type ORDER BY created_at ASC) FILTER (WHERE device_type IS NOT NULL))[1] as device_type,
    (array_agg(browser ORDER BY created_at ASC) FILTER (WHERE browser IS NOT NULL))[1] as browser
FROM api.analytics_events
WHERE session_id IS NOT NULL
  AND is_bot = FALSE
  AND created_at > NOW() - INTERVAL '30 days'
GROUP BY session_id, visitor_id;

-- Index on materialized view
CREATE UNIQUE INDEX IF NOT EXISTS idx_session_stats_session ON api.session_stats (session_id);
CREATE INDEX IF NOT EXISTS idx_session_stats_visitor ON api.session_stats (visitor_id);

-- ============================================
-- Analytics summary function
-- ============================================
CREATE OR REPLACE FUNCTION api.get_analytics_summary(
    start_date TIMESTAMPTZ DEFAULT NOW() - INTERVAL '7 days',
    end_date TIMESTAMPTZ DEFAULT NOW()
)
RETURNS JSON AS $$
DECLARE
    result JSON;
BEGIN
    SELECT json_build_object(
        'period', json_build_object(
            'start', start_date,
            'end', end_date
        ),
        'totals', json_build_object(
            'sessions', COUNT(DISTINCT session_id),
            'visitors', COUNT(DISTINCT visitor_id),
            'pageviews', COUNT(*) FILTER (WHERE event_name = 'pageview'),
            'product_views', COUNT(*) FILTER (WHERE event_name = 'product_view'),
            'affiliate_clicks', COUNT(*) FILTER (WHERE event_category = 'affiliate'),
            'searches', COUNT(*) FILTER (WHERE event_name = 'search'),
            'api_events', COUNT(*) FILTER (WHERE source = 'api'),
            'frontend_events', COUNT(*) FILTER (WHERE source = 'frontend')
        ),
        'conversion_rate', ROUND(
            (COUNT(*) FILTER (WHERE event_category = 'affiliate')::NUMERIC / 
             NULLIF(COUNT(DISTINCT session_id), 0) * 100), 2
        ),
        'funnel', json_build_object(
            'landing', COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'pageview'),
            'supplement_view', COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'supplement_view'),
            'product_view', COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'product_view'),
            'affiliate_click', COUNT(DISTINCT session_id) FILTER (WHERE event_category = 'affiliate')
        ),
        'top_supplements', (
            SELECT COALESCE(json_agg(row_to_json(t)), '[]'::json)
            FROM (
                SELECT 
                    event_data->>'supplementSlug' as supplement,
                    COUNT(*) as views,
                    COUNT(*) FILTER (WHERE event_category = 'affiliate') as clicks
                FROM api.analytics_events
                WHERE created_at BETWEEN start_date AND end_date
                  AND event_data->>'supplementSlug' IS NOT NULL
                  AND is_bot = FALSE
                GROUP BY event_data->>'supplementSlug'
                ORDER BY views DESC
                LIMIT 10
            ) t
        ),
        'top_retailers', (
            SELECT COALESCE(json_agg(row_to_json(t)), '[]'::json)
            FROM (
                SELECT 
                    retailer_slug,
                    COUNT(*) as clicks,
                    COALESCE(SUM(commission_amount), 0) as revenue
                FROM api.affiliate_clicks
                WHERE clicked_at BETWEEN start_date AND end_date
                GROUP BY retailer_slug
                ORDER BY clicks DESC
            ) t
        ),
        'by_source', json_build_object(
            'frontend', COUNT(*) FILTER (WHERE source = 'frontend'),
            'api', COUNT(*) FILTER (WHERE source = 'api'),
            'server', COUNT(*) FILTER (WHERE source = 'server')
        ),
        'by_device', (
            SELECT COALESCE(json_agg(row_to_json(t)), '[]'::json)
            FROM (
                SELECT 
                    COALESCE(device_type, 'unknown') as device,
                    COUNT(*) as events,
                    COUNT(DISTINCT session_id) as sessions
                FROM api.analytics_events
                WHERE created_at BETWEEN start_date AND end_date
                  AND is_bot = FALSE
                GROUP BY device_type
            ) t
        )
    ) INTO result
    FROM api.analytics_events
    WHERE created_at BETWEEN start_date AND end_date
      AND is_bot = FALSE;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- Function to refresh session stats
-- ============================================
CREATE OR REPLACE FUNCTION api.refresh_session_stats()
RETURNS void AS $$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY api.session_stats;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- Row Level Security
-- ============================================
ALTER TABLE api.analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE api.affiliate_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE api.api_requests ENABLE ROW LEVEL SECURITY;

-- Policies: Allow service role full access
CREATE POLICY "Service role full access on analytics_events" ON api.analytics_events
    FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access on affiliate_clicks" ON api.affiliate_clicks
    FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access on api_requests" ON api.api_requests
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Policies: Anon can insert events (for frontend tracking)
CREATE POLICY "Anon can insert analytics_events" ON api.analytics_events
    FOR INSERT TO anon WITH CHECK (true);

-- Grant necessary permissions
GRANT SELECT, INSERT ON api.analytics_events TO anon;
GRANT SELECT, INSERT ON api.affiliate_clicks TO anon;
GRANT ALL ON api.analytics_events TO service_role;
GRANT ALL ON api.affiliate_clicks TO service_role;
GRANT ALL ON api.api_requests TO service_role;
GRANT SELECT ON api.session_stats TO service_role;
GRANT EXECUTE ON FUNCTION api.get_analytics_summary TO service_role;
GRANT EXECUTE ON FUNCTION api.refresh_session_stats TO service_role;

-- ============================================
-- Comments for documentation
-- ============================================
COMMENT ON TABLE api.analytics_events IS 'Core analytics events from frontend and API tracking';
COMMENT ON TABLE api.affiliate_clicks IS 'Dedicated table for affiliate link clicks with revenue attribution';
COMMENT ON TABLE api.api_requests IS 'API request logs for performance monitoring and debugging';
COMMENT ON MATERIALIZED VIEW api.session_stats IS 'Aggregated session statistics refreshed periodically';
COMMENT ON FUNCTION api.get_analytics_summary IS 'Returns comprehensive analytics summary for a date range';
