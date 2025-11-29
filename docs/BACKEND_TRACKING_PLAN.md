# 🎯 Backend Tracking Implementation Plan

**Date**: November 29, 2025  
**Version**: 1.0  
**Priority**: HIGH - Revenue attribution and conversion optimization  
**Estimated Effort**: 3-4 weeks  

---

## 📊 Current State Analysis

### ✅ What You Have (Frontend-Only)
Your current analytics setup is **client-side only** via GTM/GA4:

| Component                    | Status        | Limitation                      |
| ---------------------------- | ------------- | ------------------------------- |
| GTM Container (GTM-NQWRNKFT) | ✅ Active      | No server-side backup           |
| GA4 (G-JHCPJYM37R)           | ✅ Active      | ~15-30% data loss from blockers |
| 24+ Frontend Events          | ✅ Implemented | Lost if user has ad blocker     |
| Session Tracking             | ✅ Client-side | No cross-device attribution     |
| Affiliate Clicks             | ✅ Client-side | No revenue reconciliation       |

### ❌ What's Missing (Critical Gaps)

1. **Ad Blocker Resilience**: ~30% of users block GTM/GA4
2. **Server-Side Event Validation**: No duplicate protection
3. **Revenue Attribution**: Can't reconcile affiliate commissions to users
4. **Bot Filtering**: No server-side bot detection
5. **Data Ownership**: All data in Google's hands, no raw access
6. **Real-time Analytics**: No internal dashboard capability
7. **Affiliate Commission Tracking**: No webhook integration for commissions
8. **A/B Testing Infrastructure**: No server-side experiment tracking

---

## 🏗️ Proposed Architecture

### High-Level Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          USER BROWSER                                    │
│  ┌─────────────────┐     ┌──────────────────┐                           │
│  │ Frontend Events │────▶│ GTM/GA4 (Client) │ ← 30% blocked            │
│  │ (analytics.ts)  │     └──────────────────┘                           │
│  │                 │                                                     │
│  │                 │     ┌──────────────────┐                           │
│  │                 │────▶│ /api/events      │ ← 100% captured (backup) │
│  └─────────────────┘     └────────┬─────────┘                           │
└───────────────────────────────────┼─────────────────────────────────────┘
                                    │
                                    ▼
┌───────────────────────────────────────────────────────────────────────┐
│                        NEXT.JS API ROUTES                             │
│  ┌─────────────────┐     ┌──────────────────┐     ┌────────────────┐ │
│  │ POST /api/events│────▶│ Event Validation │────▶│  Bot Filter    │ │
│  │                 │     │ & Deduplication  │     │  & Rate Limit  │ │
│  └─────────────────┘     └────────┬─────────┘     └───────┬────────┘ │
│                                   │                       │          │
│                                   ▼                       ▼          │
│                          ┌──────────────────────────────────┐        │
│                          │       Event Router               │        │
│                          │  (route to appropriate stores)   │        │
│                          └───────────────┬──────────────────┘        │
└──────────────────────────────────────────┼───────────────────────────┘
                                           │
         ┌─────────────────┬───────────────┼───────────────┬────────────────┐
         │                 │               │               │                │
         ▼                 ▼               ▼               ▼                ▼
┌─────────────┐   ┌──────────────┐  ┌───────────┐  ┌─────────────┐  ┌─────────────┐
│  Supabase   │   │   GA4 MP     │  │ Webhook   │  │  Redis      │  │  PostHog    │
│  (Raw Data) │   │ (Server-Side)│  │ (Affiliates)│ │ (Real-time) │  │ (Optional)  │
└─────────────┘   └──────────────┘  └───────────┘  └─────────────┘  └─────────────┘
      │                  │                │               │                │
      ▼                  ▼                ▼               ▼                ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              ANALYTICS OUTPUTS                                   │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐   │
│  │ Internal       │ │ GA4 Reports    │ │ Affiliate      │ │ Real-time      │   │
│  │ Dashboard      │ │ (Enhanced)     │ │ Reconciliation │ │ Metrics        │   │
│  └────────────────┘ └────────────────┘ └────────────────┘ └────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📋 Implementation Phases

### Phase 1: Database Schema & Core API (Week 1)
**Goal**: Store events server-side in Supabase

#### 1.1 Create Events Table
```sql
-- supabase/migrations/20251130000001_create_analytics_tables.sql

-- Core events table (partitioned by month for performance)
CREATE TABLE api.analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Event identification
    event_name VARCHAR(100) NOT NULL,
    event_category VARCHAR(50) NOT NULL DEFAULT 'general',
    
    -- Session & User tracking
    session_id VARCHAR(100),
    visitor_id VARCHAR(100), -- Anonymous, persisted in localStorage
    user_agent TEXT,
    ip_hash VARCHAR(64), -- Hashed for privacy
    
    -- Context
    page_url TEXT,
    page_path VARCHAR(500),
    referrer TEXT,
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(200),
    utm_content VARCHAR(200),
    utm_term VARCHAR(200),
    
    -- Device info
    device_type VARCHAR(20), -- mobile, tablet, desktop
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
    processed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Indexes for common queries
    CONSTRAINT valid_event_category CHECK (
        event_category IN ('pageview', 'product', 'affiliate', 'engagement', 
                           'search', 'form', 'error', 'session', 'conversion')
    )
);

-- Indexes for efficient querying
CREATE INDEX idx_events_created_at ON api.analytics_events (created_at DESC);
CREATE INDEX idx_events_event_name ON api.analytics_events (event_name);
CREATE INDEX idx_events_session ON api.analytics_events (session_id);
CREATE INDEX idx_events_visitor ON api.analytics_events (visitor_id);
CREATE INDEX idx_events_page_path ON api.analytics_events (page_path);
CREATE INDEX idx_events_category ON api.analytics_events (event_category);

-- Partial index for affiliate events (most important for revenue)
CREATE INDEX idx_events_affiliate ON api.analytics_events (created_at DESC) 
    WHERE event_category = 'affiliate';

-- GIN index for JSONB queries
CREATE INDEX idx_events_data ON api.analytics_events USING GIN (event_data);

-- Enable Row Level Security
ALTER TABLE api.analytics_events ENABLE ROW LEVEL SECURITY;

-- Policy: Only server can insert (via service role)
CREATE POLICY "Service role can insert events" ON api.analytics_events
    FOR INSERT TO service_role WITH CHECK (true);

-- Policy: Authenticated users can read (for future admin dashboard)
CREATE POLICY "Authenticated can read events" ON api.analytics_events
    FOR SELECT TO authenticated USING (true);
```

#### 1.2 Affiliate Clicks Table (For Revenue Tracking)
```sql
-- Dedicated table for affiliate clicks with revenue attribution
CREATE TABLE api.affiliate_clicks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID REFERENCES api.analytics_events(id),
    
    -- Click identification
    click_id VARCHAR(100) UNIQUE NOT NULL, -- For affiliate network reconciliation
    
    -- Product info
    product_id UUID REFERENCES api.products(id),
    product_name TEXT,
    brand VARCHAR(200),
    supplement_slug VARCHAR(100),
    
    -- Retailer info
    retailer_id UUID REFERENCES api.retailers(id),
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
    
    -- Revenue (populated by webhook)
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

-- Indexes
CREATE INDEX idx_affiliate_clicks_retailer ON api.affiliate_clicks (retailer_slug, clicked_at DESC);
CREATE INDEX idx_affiliate_clicks_product ON api.affiliate_clicks (product_id);
CREATE INDEX idx_affiliate_clicks_session ON api.affiliate_clicks (session_id);
CREATE INDEX idx_affiliate_clicks_click_id ON api.affiliate_clicks (click_id);
CREATE INDEX idx_affiliate_clicks_status ON api.affiliate_clicks (commission_status);
```

#### 1.3 Session Aggregates Table (For Funnel Analysis)
```sql
-- Aggregated session data for faster queries
CREATE TABLE api.session_aggregates (
    session_id VARCHAR(100) PRIMARY KEY,
    visitor_id VARCHAR(100),
    
    -- Session timing
    session_start TIMESTAMPTZ NOT NULL,
    session_end TIMESTAMPTZ,
    duration_seconds INTEGER,
    
    -- Engagement metrics
    page_views INTEGER DEFAULT 0,
    unique_pages INTEGER DEFAULT 0,
    product_views INTEGER DEFAULT 0,
    supplement_views INTEGER DEFAULT 0,
    affiliate_clicks INTEGER DEFAULT 0,
    search_count INTEGER DEFAULT 0,
    max_scroll_depth INTEGER DEFAULT 0,
    
    -- Funnel progression (booleans for fast filtering)
    viewed_homepage BOOLEAN DEFAULT FALSE,
    viewed_supplement BOOLEAN DEFAULT FALSE,
    viewed_comparison BOOLEAN DEFAULT FALSE,
    viewed_product BOOLEAN DEFAULT FALSE,
    clicked_affiliate BOOLEAN DEFAULT FALSE,
    
    -- First touch attribution
    landing_page TEXT,
    referrer TEXT,
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(200),
    
    -- Device
    device_type VARCHAR(20),
    browser VARCHAR(50),
    country VARCHAR(2),
    
    -- Conversion value
    total_affiliate_clicks INTEGER DEFAULT 0,
    estimated_revenue DECIMAL(10,2) DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_sessions_visitor ON api.session_aggregates (visitor_id);
CREATE INDEX idx_sessions_start ON api.session_aggregates (session_start DESC);
CREATE INDEX idx_sessions_funnel ON api.session_aggregates (
    viewed_homepage, viewed_supplement, viewed_comparison, 
    viewed_product, clicked_affiliate
);
```

---

### Phase 2: Events API Endpoints (Week 1-2)

#### 2.1 Core Events API Route
```typescript
// app/api/events/route.ts

import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Rate limiting: Simple in-memory (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 100; // requests per minute per IP
const RATE_WINDOW = 60000; // 1 minute

// Bot detection patterns
const BOT_PATTERNS = [
  /bot|crawler|spider|scraper|curl|wget|python|go-http|java|php/i,
  /facebookexternalhit|twitterbot|linkedinbot|slackbot/i,
  /googlebot|bingbot|yandex|baidu|duckduck/i,
];

interface EventPayload {
  event: string;
  category?: string;
  sessionId?: string;
  visitorId?: string;
  pageUrl?: string;
  pagePath?: string;
  referrer?: string;
  data?: Record<string, any>;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
  };
  device?: {
    type?: string;
    browser?: string;
    os?: string;
    screenResolution?: string;
    viewportSize?: string;
  };
}

function isBot(userAgent: string): boolean {
  return BOT_PATTERNS.some(pattern => pattern.test(userAgent));
}

function hashIP(ip: string): string {
  // Simple hash - in production use crypto
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for')?.split(',')[0] || 
               headersList.get('x-real-ip') || 
               'unknown';
    const userAgent = headersList.get('user-agent') || '';
    
    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }
    
    // Parse body
    const body: EventPayload | EventPayload[] = await request.json();
    const events = Array.isArray(body) ? body : [body];
    
    if (events.length === 0) {
      return NextResponse.json({ error: 'No events provided' }, { status: 400 });
    }
    
    if (events.length > 50) {
      return NextResponse.json({ error: 'Too many events (max 50)' }, { status: 400 });
    }
    
    // Detect bot
    const isBotRequest = isBot(userAgent);
    
    // Prepare events for insertion
    const eventRecords = events.map(event => ({
      event_name: event.event,
      event_category: event.category || 'general',
      session_id: event.sessionId,
      visitor_id: event.visitorId,
      user_agent: userAgent,
      ip_hash: hashIP(ip),
      page_url: event.pageUrl,
      page_path: event.pagePath,
      referrer: event.referrer,
      utm_source: event.utm?.source,
      utm_medium: event.utm?.medium,
      utm_campaign: event.utm?.campaign,
      utm_content: event.utm?.content,
      utm_term: event.utm?.term,
      device_type: event.device?.type,
      browser: event.device?.browser,
      os: event.device?.os,
      screen_resolution: event.device?.screenResolution,
      viewport_size: event.device?.viewportSize,
      event_data: event.data || {},
      is_bot: isBotRequest,
    }));
    
    // Insert into Supabase
    const supabase = createClient();
    const { data, error } = await supabase
      .from('analytics_events')
      .insert(eventRecords)
      .select('id');
    
    if (error) {
      console.error('Failed to insert events:', error);
      return NextResponse.json(
        { error: 'Failed to store events' },
        { status: 500 }
      );
    }
    
    // Return success with event IDs
    return NextResponse.json({
      success: true,
      eventIds: data?.map(e => e.id) || [],
      count: events.length,
    });
    
  } catch (error) {
    console.error('Events API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

#### 2.2 Affiliate Click Tracking Endpoint
```typescript
// app/api/events/affiliate-click/route.ts

import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface AffiliateClickPayload {
  productId?: string;
  productName: string;
  brand: string;
  supplementSlug: string;
  retailerSlug: string;
  price: number;
  pricePerUnit?: number;
  affiliateUrl: string;
  sessionId: string;
  visitorId: string;
  utmSource?: string;
  utmCampaign?: string;
  landingPage?: string;
  pagesBeforeClick?: number;
  timeOnSiteSeconds?: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: AffiliateClickPayload = await request.json();
    
    // Validate required fields
    if (!body.affiliateUrl || !body.retailerSlug || !body.sessionId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Generate unique click ID for affiliate network reconciliation
    const clickId = `suppl_${Date.now()}_${uuidv4().slice(0, 8)}`;
    
    // Append click_id to affiliate URL for tracking
    const trackingUrl = new URL(body.affiliateUrl);
    trackingUrl.searchParams.set('subid', clickId);
    
    const supabase = createClient();
    
    // Insert affiliate click record
    const { data, error } = await supabase
      .from('affiliate_clicks')
      .insert({
        click_id: clickId,
        product_id: body.productId,
        product_name: body.productName,
        brand: body.brand,
        supplement_slug: body.supplementSlug,
        retailer_slug: body.retailerSlug,
        price: body.price,
        price_per_unit: body.pricePerUnit,
        affiliate_url: trackingUrl.toString(),
        session_id: body.sessionId,
        visitor_id: body.visitorId,
        utm_source: body.utmSource,
        utm_campaign: body.utmCampaign,
        landing_page: body.landingPage,
        pages_before_click: body.pagesBeforeClick || 1,
        time_on_site_seconds: body.timeOnSiteSeconds,
      })
      .select('id, click_id')
      .single();
    
    if (error) {
      console.error('Failed to record affiliate click:', error);
      return NextResponse.json(
        { error: 'Failed to record click' },
        { status: 500 }
      );
    }
    
    // Return the tracking URL with click_id appended
    return NextResponse.json({
      success: true,
      clickId: data.click_id,
      trackingUrl: trackingUrl.toString(),
    });
    
  } catch (error) {
    console.error('Affiliate click API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

### Phase 3: Frontend Integration (Week 2)

#### 3.1 Server-Side Analytics Client
```typescript
// src/lib/analytics-server.ts
// Client-side module that sends events to both GTM AND server

'use client';

import { pushToDataLayer, DataLayerEvent } from './analytics';

interface ServerEventOptions {
  sendToServer?: boolean;
  sendToGTM?: boolean;
}

// Anonymous visitor ID (persisted in localStorage)
function getVisitorId(): string {
  if (typeof window === 'undefined') return '';
  
  let visitorId = localStorage.getItem('suppl_visitor_id');
  if (!visitorId) {
    visitorId = `v_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    localStorage.setItem('suppl_visitor_id', visitorId);
  }
  return visitorId;
}

// Session ID (persisted in sessionStorage)
function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  
  let sessionId = sessionStorage.getItem('suppl_session_id');
  if (!sessionId) {
    sessionId = `s_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    sessionStorage.setItem('suppl_session_id', sessionId);
  }
  return sessionId;
}

// Parse UTM parameters from URL
function getUTMParams() {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get('utm_source') || undefined,
    medium: params.get('utm_medium') || undefined,
    campaign: params.get('utm_campaign') || undefined,
    content: params.get('utm_content') || undefined,
    term: params.get('utm_term') || undefined,
  };
}

// Get device info
function getDeviceInfo() {
  if (typeof window === 'undefined') return {};
  
  const ua = navigator.userAgent;
  let deviceType = 'desktop';
  if (/Mobi|Android/i.test(ua)) deviceType = 'mobile';
  else if (/Tablet|iPad/i.test(ua)) deviceType = 'tablet';
  
  return {
    type: deviceType,
    browser: getBrowserName(ua),
    os: getOSName(ua),
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
  };
}

function getBrowserName(ua: string): string {
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('SamsungBrowser')) return 'Samsung';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
  if (ua.includes('Edge')) return 'Edge';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Safari')) return 'Safari';
  return 'Other';
}

function getOSName(ua: string): string {
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac')) return 'macOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  return 'Other';
}

// Event queue for batching
let eventQueue: any[] = [];
let flushTimeout: NodeJS.Timeout | null = null;

async function flushEventQueue() {
  if (eventQueue.length === 0) return;
  
  const events = [...eventQueue];
  eventQueue = [];
  
  try {
    await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(events),
      keepalive: true, // Ensure events are sent even on page unload
    });
  } catch (error) {
    console.error('Failed to send events to server:', error);
    // Re-queue failed events (up to a limit)
    if (eventQueue.length < 100) {
      eventQueue.push(...events);
    }
  }
}

function queueServerEvent(event: any) {
  eventQueue.push(event);
  
  // Flush after 2 seconds or when queue reaches 10 events
  if (eventQueue.length >= 10) {
    if (flushTimeout) clearTimeout(flushTimeout);
    flushEventQueue();
  } else if (!flushTimeout) {
    flushTimeout = setTimeout(() => {
      flushTimeout = null;
      flushEventQueue();
    }, 2000);
  }
}

// Main tracking function - sends to both GTM and server
export function trackEvent(
  eventName: string,
  category: string,
  data: Record<string, any> = {},
  options: ServerEventOptions = { sendToServer: true, sendToGTM: true }
) {
  const visitorId = getVisitorId();
  const sessionId = getSessionId();
  const utm = getUTMParams();
  const device = getDeviceInfo();
  
  // Send to GTM (original behavior)
  if (options.sendToGTM) {
    pushToDataLayer({
      event: eventName,
      ...data,
      timestamp: new Date().toISOString(),
    });
  }
  
  // Send to server (backup tracking)
  if (options.sendToServer) {
    queueServerEvent({
      event: eventName,
      category,
      sessionId,
      visitorId,
      pageUrl: window.location.href,
      pagePath: window.location.pathname,
      referrer: document.referrer,
      utm,
      device,
      data,
    });
  }
}

// Specialized tracking functions with proper categorization

export function trackPageViewServer(pageName: string, pageCategory: string = 'general') {
  trackEvent('pageview', 'pageview', {
    pageName,
    pageCategory,
    pageTitle: document.title,
  });
}

export function trackProductViewServer(
  productId: string,
  productName: string,
  brand: string,
  supplementSlug: string,
  retailerCount: number,
  minPrice: number
) {
  trackEvent('product_view', 'product', {
    productId,
    productName,
    brand,
    supplementSlug,
    retailerCount,
    minPrice,
  });
}

export function trackAffiliateClickServer(
  productId: string,
  productName: string,
  brand: string,
  supplementSlug: string,
  retailerSlug: string,
  price: number,
  affiliateUrl: string
): Promise<{ clickId: string; trackingUrl: string }> {
  // For affiliate clicks, use dedicated endpoint
  return fetch('/api/events/affiliate-click', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      productId,
      productName,
      brand,
      supplementSlug,
      retailerSlug,
      price,
      affiliateUrl,
      sessionId: getSessionId(),
      visitorId: getVisitorId(),
      utmSource: getUTMParams().source,
      utmCampaign: getUTMParams().campaign,
      landingPage: sessionStorage.getItem('landing_page') || window.location.pathname,
      pagesBeforeClick: parseInt(sessionStorage.getItem('page_count') || '1'),
      timeOnSiteSeconds: Math.floor(
        (Date.now() - parseInt(sessionStorage.getItem('session_start') || Date.now().toString())) / 1000
      ),
    }),
  }).then(res => res.json());
}

export function trackSearchServer(query: string, resultsCount: number) {
  trackEvent('search', 'search', { query, resultsCount });
}

export function trackErrorServer(errorType: string, errorMessage: string, errorLocation: string) {
  trackEvent('error', 'error', { errorType, errorMessage, errorLocation });
}

// Flush events on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', flushEventQueue);
  window.addEventListener('pagehide', flushEventQueue);
  
  // Track session start
  if (!sessionStorage.getItem('session_start')) {
    sessionStorage.setItem('session_start', Date.now().toString());
    sessionStorage.setItem('landing_page', window.location.pathname);
    sessionStorage.setItem('page_count', '1');
  } else {
    const count = parseInt(sessionStorage.getItem('page_count') || '0');
    sessionStorage.setItem('page_count', (count + 1).toString());
  }
}
```

---

### Phase 4: GA4 Measurement Protocol (Week 2-3)

For events to appear in GA4 even when GTM is blocked, send server-side:

```typescript
// src/lib/ga4-server.ts
// Server-side GA4 Measurement Protocol integration

const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA4_API_SECRET = process.env.GA4_API_SECRET; // Get from GA4 Admin

interface GA4Event {
  name: string;
  params?: Record<string, any>;
}

export async function sendToGA4(
  clientId: string,
  events: GA4Event[]
) {
  if (!GA4_MEASUREMENT_ID || !GA4_API_SECRET) {
    console.warn('GA4 Measurement Protocol not configured');
    return;
  }
  
  const payload = {
    client_id: clientId,
    events: events.map(event => ({
      name: event.name,
      params: {
        ...event.params,
        engagement_time_msec: 100,
        session_id: event.params?.session_id,
      },
    })),
  };
  
  try {
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );
    
    if (!response.ok) {
      console.error('GA4 MP request failed:', response.status);
    }
  } catch (error) {
    console.error('GA4 MP error:', error);
  }
}
```

---

### Phase 5: Affiliate Commission Webhooks (Week 3)

#### 5.1 iHerb Commission Webhook
```typescript
// app/api/webhooks/iherb/route.ts

import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Verify webhook signature
function verifySignature(
  payload: string, 
  signature: string, 
  secret: string
): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

interface iHerbCommission {
  sub_id: string; // Our click_id
  order_id: string;
  sale_amount: number;
  commission: number;
  currency: string;
  status: 'pending' | 'approved' | 'declined';
  transaction_date: string;
}

export async function POST(request: NextRequest) {
  try {
    const signature = request.headers.get('x-iherb-signature');
    const rawBody = await request.text();
    
    // Verify webhook authenticity
    if (!verifySignature(rawBody, signature || '', process.env.IHERB_WEBHOOK_SECRET || '')) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }
    
    const commission: iHerbCommission = JSON.parse(rawBody);
    
    if (!commission.sub_id) {
      return NextResponse.json({ error: 'Missing sub_id' }, { status: 400 });
    }
    
    const supabase = createClient();
    
    // Update affiliate click with commission data
    const { error } = await supabase
      .from('affiliate_clicks')
      .update({
        commission_status: commission.status,
        commission_amount: commission.commission,
        commission_currency: commission.currency,
        order_id: commission.order_id,
        sale_amount: commission.sale_amount,
        commissioned_at: commission.transaction_date,
      })
      .eq('click_id', commission.sub_id);
    
    if (error) {
      console.error('Failed to update commission:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
```

---

### Phase 6: Analytics Dashboard API (Week 3-4)

#### 6.1 Summary Stats Endpoint
```typescript
// app/api/analytics/summary/route.ts

import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '7d'; // 7d, 30d, 90d
  
  const supabase = createClient();
  
  // Calculate date range
  const days = parseInt(period) || 7;
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  // Get summary metrics
  const { data: metrics, error } = await supabase.rpc('get_analytics_summary', {
    start_date: startDate.toISOString(),
  });
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  return NextResponse.json({
    period,
    ...metrics,
  });
}
```

#### 6.2 Funnel Analysis Function
```sql
-- Add to migrations: analytics functions

CREATE OR REPLACE FUNCTION api.get_analytics_summary(start_date TIMESTAMPTZ)
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'total_sessions', COUNT(DISTINCT session_id),
    'total_pageviews', COUNT(*) FILTER (WHERE event_name = 'pageview'),
    'unique_visitors', COUNT(DISTINCT visitor_id),
    'affiliate_clicks', COUNT(*) FILTER (WHERE event_category = 'affiliate'),
    'product_views', COUNT(*) FILTER (WHERE event_name = 'product_view'),
    'search_count', COUNT(*) FILTER (WHERE event_name = 'search'),
    'conversion_rate', ROUND(
      (COUNT(*) FILTER (WHERE event_category = 'affiliate')::NUMERIC / 
       NULLIF(COUNT(DISTINCT session_id), 0) * 100), 2
    ),
    'top_supplements', (
      SELECT json_agg(row_to_json(t))
      FROM (
        SELECT 
          event_data->>'supplementSlug' as supplement,
          COUNT(*) as clicks
        FROM api.analytics_events
        WHERE event_category = 'affiliate'
          AND created_at >= start_date
        GROUP BY event_data->>'supplementSlug'
        ORDER BY clicks DESC
        LIMIT 10
      ) t
    ),
    'top_retailers', (
      SELECT json_agg(row_to_json(t))
      FROM (
        SELECT 
          retailer_slug,
          COUNT(*) as clicks,
          SUM(COALESCE(commission_amount, 0)) as revenue
        FROM api.affiliate_clicks
        WHERE clicked_at >= start_date
        GROUP BY retailer_slug
        ORDER BY clicks DESC
      ) t
    ),
    'funnel', json_build_object(
      'landing', COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'pageview'),
      'supplement_view', COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'supplement_view'),
      'product_view', COUNT(DISTINCT session_id) FILTER (WHERE event_name = 'product_view'),
      'affiliate_click', COUNT(DISTINCT session_id) FILTER (WHERE event_category = 'affiliate')
    )
  ) INTO result
  FROM api.analytics_events
  WHERE created_at >= start_date
    AND is_bot = FALSE;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

## 📁 File Structure Summary

```
affiliate-launch/
├── app/api/
│   ├── events/
│   │   ├── route.ts                    # Core events API
│   │   └── affiliate-click/
│   │       └── route.ts                # Dedicated affiliate tracking
│   ├── webhooks/
│   │   ├── iherb/route.ts              # iHerb commission webhook
│   │   └── amazon/route.ts             # Amazon commission webhook
│   └── analytics/
│       ├── summary/route.ts            # Dashboard metrics
│       └── funnel/route.ts             # Funnel analysis
├── src/lib/
│   ├── analytics.ts                    # Existing GTM client
│   ├── analytics-server.ts             # NEW: Dual-send client
│   └── ga4-server.ts                   # NEW: Server-side GA4
├── supabase/migrations/
│   ├── 20251130000001_create_analytics_tables.sql
│   └── 20251130000002_create_analytics_functions.sql
└── docs/
    └── BACKEND_TRACKING_PLAN.md        # This document
```

---

## 🎯 Success Metrics

After implementation, you'll be able to:

| Metric                | Current            | After Implementation    |
| --------------------- | ------------------ | ----------------------- |
| Data capture rate     | ~70% (ad blockers) | ~98%+                   |
| Revenue attribution   | None               | Full click → commission |
| Real-time analytics   | None               | Yes (API endpoints)     |
| Bot filtering         | None               | Server-side detection   |
| Cross-device tracking | None               | Visitor ID based        |
| Funnel visibility     | GA4 only           | Raw data + GA4          |
| A/B test capability   | None               | Infrastructure ready    |

---

## 💰 Estimated Business Impact

| Enhancement                      | Value                            | Timeline |
| -------------------------------- | -------------------------------- | -------- |
| **30% more tracked conversions** | +30% attribution clarity         | Week 2   |
| **Revenue reconciliation**       | Know actual commission per click | Week 3   |
| **Bot filtering**                | Save on fake clicks              | Week 1   |
| **Faster debugging**             | Query raw events directly        | Week 1   |
| **Custom reporting**             | SQL access to all data           | Week 2   |

---

## 🚀 Quick Start

**Start with Phase 1 & 2** (Database + API):
1. Run the migrations to create tables
2. Implement `/api/events` endpoint
3. Add dual-tracking to existing analytics calls
4. Verify events in Supabase dashboard

**Timeline for MVP**: 1 week for basic server-side tracking

---

## Next Steps

1. **Approve plan** - Confirm scope and priorities
2. **Set up environment** - Get GA4 API secret, configure webhook URLs
3. **Run migrations** - Create database tables
4. **Implement API** - Start with `/api/events` 
5. **Test integration** - Verify events flowing to both GTM and Supabase
6. **Deploy** - Push to production

Want me to start implementing Phase 1 now? 🎯
