# Analytics Implementation Roadmap

**Version**: 0.6.0  
**Last Updated**: November 29, 2025  
**Status**: Phase 1-3 Complete ✅ | Phase 4-5 Pending ⏳

---

## 📊 Overview

Complete backend analytics system with server-side tracking, bypassing ad blockers and enabling affiliate commission reconciliation.

---

## ✅ Phase 1-3: Complete (v0.6.0)

### 1. Database Infrastructure ✅
**Completed**: November 29, 2025

- ✅ `api.analytics_events` table - All events with full context
- ✅ `api.affiliate_clicks` table - Click tracking with `click_id`
- ✅ `api.api_requests` table - API performance metrics
- ✅ `api.session_stats` materialized view - Pre-aggregated analytics
- ✅ Indexes for efficient querying
- ✅ Functions: `get_analytics_summary()`, `refresh_session_stats()`

**Migration File**: `supabase/migrations/20251129100000_create_analytics_tables.sql`

---

### 2. API Endpoints ✅
**Completed**: November 29, 2025

#### Events Ingestion
- ✅ `POST /api/events` - Batched event ingestion
  - Rate limiting (100 req/min/IP)
  - Bot detection (12 patterns)
  - IP hashing for privacy
  - Event validation
  
#### Affiliate Tracking
- ✅ `POST /api/events/affiliate-click` - Click tracking with `click_id`
  - Generates unique click ID: `suppl_XXXXXX_XXXXXXXX`
  - Returns tracking URL with click_id appended
  - Full attribution context (UTM, landing page, time on site)
  
#### Analytics Dashboard
- ✅ `GET /api/analytics/summary` - Dashboard metrics
  - Period filtering: 24h, 7d, 30d, 90d
  - Totals: events, sessions, pageviews, clicks
  - Funnel: supplement_view → product_view → affiliate_click
  - Top supplements and retailers
  
- ✅ `GET /api/analytics/affiliate-clicks` - Click data
  - Commission status tracking
  - Revenue attribution
  - Filtering by supplement/retailer

**Files**: 
- `app/api/events/route.ts`
- `app/api/events/affiliate-click/route.ts`
- `app/api/analytics/summary/route.ts`
- `app/api/analytics/affiliate-clicks/route.ts`

---

### 3. Client Libraries ✅
**Completed**: November 29, 2025

#### Frontend Dual-Tracking
**File**: `src/lib/analytics-dual.ts`

- ✅ `trackEventDual()` - Send to GTM AND server
- ✅ `trackAffiliateClickDual()` - Get tracking URL with click_id
- ✅ `trackPageViewDual()`, `trackProductViewDual()`, `trackSearchDual()`
- ✅ Event batching (10 events or 2s delay)
- ✅ Visitor/session ID management (localStorage/sessionStorage)
- ✅ UTM parameter parsing
- ✅ Device detection (type, browser, OS)
- ✅ Auto-flush on page unload/visibility change

#### Server-Side Tracking
**File**: `src/lib/analytics-api.ts`

- ✅ `trackApiRequest()` - Track API endpoint performance
- ✅ `trackProductApiCall()` - Track product detail API calls
- ✅ `trackSearchApiCall()` - Track search API calls
- ✅ IP hashing utility

---

### 4. GTM Template ✅
**Completed**: November 29, 2025

**File**: `gtm_backend_tracking_extension.json` (in Downloads/input/)

#### Platform Integrations:
- ✅ **GA4** (G-JHCPJYM37R)
  - Configuration tag
  - Enhanced events (page_view, view_item, begin_checkout, search)
  - Session/visitor ID tracking
  
- ✅ **Facebook Pixel**
  - Base code initialization
  - ViewContent (product views)
  - InitiateCheckout (affiliate clicks)
  - Search events
  
- ✅ **LinkedIn Insight Tag**
  - Base code initialization
  - Conversion tracking (affiliate clicks)

#### Data Layer Variables:
- 17 new variables (clickId, sessionId, visitorId, price, etc.)
- All events include server reconciliation IDs

#### Import Instructions:
1. Get Facebook Pixel ID from Meta Business Manager
2. Get LinkedIn Partner ID from Campaign Manager
3. Import JSON to GTM container (GTM-NQWRNKFT)
4. Replace placeholder IDs
5. Test in Preview mode
6. Publish

---

## ⏳ Phase 4: GA4 Measurement Protocol (Pending)

### Goal
Send events directly to GA4 server-side, bypassing client-side blockers entirely.

### Tasks

#### 1. Get GA4 API Secret
- [ ] Go to GA4 Admin → Data Streams → Choose web stream
- [ ] Click "Measurement Protocol API secrets"
- [ ] Create new secret, copy value
- [ ] Add to `.env.local`: `GA4_API_SECRET=...`

#### 2. Implement Server-Side GA4
**New File**: `src/lib/ga4-measurement-protocol.ts`

```typescript
/**
 * Send events to GA4 via Measurement Protocol
 * @see https://developers.google.com/analytics/devguides/collection/protocol/ga4
 */

const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const GA4_API_SECRET = process.env.GA4_API_SECRET;

interface GA4Event {
  name: string;
  params: Record<string, any>;
}

export async function sendToGA4(
  clientId: string,
  events: GA4Event[]
): Promise<boolean> {
  if (!GA4_MEASUREMENT_ID || !GA4_API_SECRET) {
    console.warn('[GA4 MP] Not configured');
    return false;
  }

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`;

  const payload = {
    client_id: clientId,
    events: events.map(e => ({
      name: e.name,
      params: {
        ...e.params,
        engagement_time_msec: 100,
        session_id: e.params.session_id,
      },
    })),
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error('[GA4 MP] Request failed:', response.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error('[GA4 MP] Error:', error);
    return false;
  }
}
```

#### 3. Integrate into Events API
Update `app/api/events/route.ts`:

```typescript
import { sendToGA4 } from '@/lib/ga4-measurement-protocol';

// After inserting into Supabase...
if (data && data.length > 0) {
  // Send to GA4 Measurement Protocol (server-side)
  const ga4Events = eventRecords.map(e => ({
    name: e.event_name,
    params: {
      ...e.event_data,
      session_id: e.session_id,
      visitor_id: e.visitor_id,
    },
  }));

  // Fire and forget (don't block response)
  sendToGA4(eventRecords[0].visitor_id, ga4Events).catch(console.error);
}
```

#### 4. Test GA4 Measurement Protocol
- [ ] Use GA4 DebugView (set `debug_mode: true` in params)
- [ ] Verify events appear in GA4 Realtime report
- [ ] Compare client-side vs server-side event counts

**Estimated Effort**: 4-6 hours  
**Priority**: High (fills remaining 2-5% data gap)

---

## ⏳ Phase 5: Affiliate Commission Webhooks (Pending)

### Goal
Receive commission callbacks from affiliate networks to update `commission_status` in database.

### Tasks

#### 1. iHerb Webhook
**New File**: `app/api/webhooks/iherb/route.ts`

```typescript
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
    if (!verifySignature(
      rawBody,
      signature || '',
      process.env.IHERB_WEBHOOK_SECRET || ''
    )) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const commission: iHerbCommission = JSON.parse(rawBody);

    if (!commission.sub_id) {
      return NextResponse.json(
        { error: 'Missing sub_id' },
        { status: 400 }
      );
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
      console.error('[iHerb Webhook] Update failed:', error);
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }

    console.log('[iHerb Webhook] Commission updated:', commission.sub_id);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('[iHerb Webhook] Error:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
```

#### 2. Amazon Associates Webhook
**New File**: `app/api/webhooks/amazon/route.ts`

Similar structure to iHerb, adapted for Amazon's webhook format.

#### 3. Configure Webhooks
- [ ] iHerb: Go to affiliate dashboard → Settings → Postback URL
- [ ] Amazon: Configure Product Advertising API callbacks
- [ ] Set webhook URLs:
  - iHerb: `https://www.suppl.me/api/webhooks/iherb`
  - Amazon: `https://www.suppl.me/api/webhooks/amazon`
- [ ] Add webhook secrets to environment variables

#### 4. Test Webhooks
- [ ] Use webhook testing tools (e.g., webhook.site)
- [ ] Simulate commission callbacks
- [ ] Verify `commission_status` updates in database
- [ ] Test signature verification

**Estimated Effort**: 6-8 hours  
**Priority**: Medium (revenue attribution, but not blocking)

---

## ⏳ Phase 6: Analytics Dashboard UI (Pending)

### Goal
Build internal dashboard at `/admin/analytics` for visualizing metrics.

### Tasks

#### 1. Create Dashboard Page
**New File**: `app/admin/analytics/page.tsx`

```typescript
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AnalyticsSummary {
  period: string;
  totals: {
    events: number;
    sessions: number;
    pageviews: number;
    affiliate_clicks: number;
  };
  funnel: {
    supplement_views: number;
    product_views: number;
    affiliate_clicks: number;
    conversion_rate: string;
  };
  top_supplements: Array<{ supplement: string; clicks: number }>;
  top_retailers: Array<{ retailer_slug: string; clicks: number; revenue: number }>;
}

export default function AnalyticsDashboard() {
  const [period, setPeriod] = useState('7d');
  const [data, setData] = useState<AnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, [period]);

  async function fetchAnalytics() {
    setLoading(true);
    try {
      const res = await fetch(`/api/analytics/summary?period=${period}`);
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="border rounded px-4 py-2"
        >
          <option value="24h">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      {/* Totals */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.totals.sessions.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Page Views</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.totals.pageviews.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Affiliate Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.totals.affiliate_clicks.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.funnel.conversion_rate}</p>
          </CardContent>
        </Card>
      </div>

      {/* Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Conversion Funnel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-32">Supplement Views</div>
              <div className="flex-1 bg-gray-200 rounded-full h-8">
                <div
                  className="bg-primary h-8 rounded-full"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="w-24 text-right">{data.funnel.supplement_views}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32">Product Views</div>
              <div className="flex-1 bg-gray-200 rounded-full h-8">
                <div
                  className="bg-primary h-8 rounded-full"
                  style={{
                    width: `${(data.funnel.product_views / data.funnel.supplement_views) * 100}%`,
                  }}
                />
              </div>
              <div className="w-24 text-right">{data.funnel.product_views}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32">Affiliate Clicks</div>
              <div className="flex-1 bg-gray-200 rounded-full h-8">
                <div
                  className="bg-primary h-8 rounded-full"
                  style={{
                    width: `${(data.funnel.affiliate_clicks / data.funnel.supplement_views) * 100}%`,
                  }}
                />
              </div>
              <div className="w-24 text-right">{data.funnel.affiliate_clicks}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Supplements */}
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Supplements</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Supplement</th>
                  <th className="text-right">Clicks</th>
                </tr>
              </thead>
              <tbody>
                {data.top_supplements.map((s, i) => (
                  <tr key={i}>
                    <td>{s.supplement}</td>
                    <td className="text-right">{s.clicks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Top Retailers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Retailers</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Retailer</th>
                  <th className="text-right">Clicks</th>
                  <th className="text-right">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {data.top_retailers.map((r, i) => (
                  <tr key={i}>
                    <td>{r.retailer_slug}</td>
                    <td className="text-right">{r.clicks}</td>
                    <td className="text-right">${r.revenue.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

#### 2. Add Charts (Optional)
- [ ] Install charting library (recharts or chart.js)
- [ ] Add line chart for clicks over time
- [ ] Add pie chart for traffic sources
- [ ] Add bar chart for top products

#### 3. Add Authentication
- [ ] Protect `/admin/*` routes with authentication
- [ ] Use NextAuth.js or similar
- [ ] Restrict to admin users only

**Estimated Effort**: 8-12 hours  
**Priority**: Low (nice-to-have, can use direct database queries for now)

---

## 📈 Impact Summary

### Current State (v0.6.0)
- ✅ ~30% more data captured (server-side bypasses ad blockers)
- ✅ Full click → commission reconciliation capability
- ✅ Bot filtering (saves on fake clicks)
- ✅ Raw event data for custom analysis
- ✅ Multi-platform tracking (GA4, Facebook, LinkedIn)

### After Phase 4-6
- 📈 ~35-40% more data (GA4 Measurement Protocol)
- 💰 Automated revenue attribution
- 📊 Visual analytics dashboard
- 🔍 Faster debugging and optimization

---

## 🎯 Next Steps

**Recommended Order:**

1. **GA4 Measurement Protocol** (Phase 4) - Highest ROI, easiest to implement
2. **Affiliate Webhooks** (Phase 5) - Revenue attribution
3. **Dashboard UI** (Phase 6) - Nice-to-have, can wait

**Start with**: Phase 4 (GA4 Measurement Protocol)  
**Estimated Time**: 4-6 hours  
**Blocker**: Need GA4 API Secret from GA4 Admin panel

Ready to start Phase 4? 🚀
