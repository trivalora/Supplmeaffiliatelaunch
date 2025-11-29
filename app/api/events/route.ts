import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { sendToGA4, convertToGA4Events } from "@/lib/ga4-measurement-protocol";
import {
  sendToFacebookCAPI,
  convertToFacebookEvent,
} from "@/lib/facebook-conversions-api";
import { sendToTikTokAPI, convertToTikTokEvent } from "@/lib/tiktok-events-api";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ===========================================
// Rate Limiting (In-memory, use Redis in prod for scale)
// ===========================================
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 100; // requests per minute per IP
const RATE_WINDOW = 60000; // 1 minute

// ===========================================
// Bot Detection Patterns
// ===========================================
const BOT_PATTERNS = [
  /bot|crawler|spider|scraper|curl|wget|python-requests|go-http|java|php|ruby/i,
  /facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot/i,
  /googlebot|bingbot|yandex|baidu|duckduck|sogou|exabot/i,
  /semrush|ahrefs|moz|majestic|screaming/i,
  /headless|phantom|selenium|puppeteer|playwright/i,
];

// ===========================================
// Types
// ===========================================
interface EventPayload {
  event: string;
  category?: string;
  sessionId?: string;
  visitorId?: string;
  pageUrl?: string;
  pagePath?: string;
  referrer?: string;
  data?: Record<string, unknown>;
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
  timestamp?: string;
}

// ===========================================
// Utility Functions
// ===========================================
function isBot(userAgent: string): boolean {
  if (!userAgent) return true; // No UA = suspicious
  return BOT_PATTERNS.some((pattern) => pattern.test(userAgent));
}

function hashIP(ip: string): string {
  // Simple hash for privacy - not cryptographic, just for grouping
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, "0");
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

function validateEvent(event: EventPayload): string | null {
  if (!event.event || typeof event.event !== "string") {
    return "Event name is required";
  }
  if (event.event.length > 100) {
    return "Event name too long (max 100 chars)";
  }
  if (event.category && event.category.length > 50) {
    return "Category too long (max 50 chars)";
  }
  return null;
}

// ===========================================
// POST /api/events - Record analytics events
// ===========================================
/**
 * POST /api/events
 *
 * Records analytics events from frontend (backup for GTM/GA4).
 * Supports single event or batch of up to 50 events.
 *
 * Request Body:
 *   Single event or array of events:
 *   {
 *     event: string (required),
 *     category?: string,
 *     sessionId?: string,
 *     visitorId?: string,
 *     pageUrl?: string,
 *     pagePath?: string,
 *     referrer?: string,
 *     data?: object,
 *     utm?: { source?, medium?, campaign?, content?, term? },
 *     device?: { type?, browser?, os?, screenResolution?, viewportSize? }
 *   }
 *
 * Response:
 *   {
 *     success: true,
 *     eventIds: string[],
 *     count: number
 *   }
 */
export async function POST(request: NextRequest) {
  try {
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "unknown";
    const userAgent = headersList.get("user-agent") || "";

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Max 100 requests per minute.",
        },
        { status: 429 }
      );
    }

    // Parse body
    let body: EventPayload | EventPayload[];
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const events = Array.isArray(body) ? body : [body];

    // Validate
    if (events.length === 0) {
      return NextResponse.json(
        { success: false, error: "No events provided" },
        { status: 400 }
      );
    }

    if (events.length > 50) {
      return NextResponse.json(
        { success: false, error: "Too many events in batch (max 50)" },
        { status: 400 }
      );
    }

    // Validate each event
    for (const event of events) {
      const validationError = validateEvent(event);
      if (validationError) {
        return NextResponse.json(
          { success: false, error: validationError },
          { status: 400 }
        );
      }
    }

    // Detect bot
    const isBotRequest = isBot(userAgent);
    const ipHash = hashIP(ip);

    // Prepare events for insertion
    const eventRecords = events.map((event) => ({
      event_name: event.event,
      event_category: event.category || "general",
      session_id: event.sessionId || null,
      visitor_id: event.visitorId || null,
      user_agent: userAgent,
      ip_hash: ipHash,
      page_url: event.pageUrl || null,
      page_path: event.pagePath || null,
      referrer: event.referrer || null,
      utm_source: event.utm?.source || null,
      utm_medium: event.utm?.medium || null,
      utm_campaign: event.utm?.campaign || null,
      utm_content: event.utm?.content || null,
      utm_term: event.utm?.term || null,
      device_type: event.device?.type || null,
      browser: event.device?.browser || null,
      os: event.device?.os || null,
      screen_resolution: event.device?.screenResolution || null,
      viewport_size: event.device?.viewportSize || null,
      event_data: (event.data || {}) as any,
      is_bot: isBotRequest,
      source: "frontend",
    }));

    // Insert into Supabase
    const supabase = createClient();
    const { data, error } = await supabase
      .from("analytics_events")
      .insert(eventRecords)
      .select("id");

    if (error) {
      console.error("[Events API] Insert error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to store events" },
        { status: 500 }
      );
    }

    // Send to GA4 Measurement Protocol (server-side, bypasses ad blockers)
    // Fire and forget - don't block the response
    if (data && data.length > 0 && !isBotRequest) {
      const visitorId = events[0]?.visitorId;
      if (visitorId) {
        const ga4Events = convertToGA4Events(eventRecords);
        sendToGA4(visitorId, ga4Events, {
          userId: events[0]?.data?.userId as string | undefined,
        }).catch((err) => {
          console.error("[Events API] GA4 MP send failed:", err);
        });
      }
    }

    // Send to Facebook Conversions API (server-side, bypasses ad blockers)
    // Fire and forget - don't block the response
    if (data && data.length > 0 && !isBotRequest) {
      const fbEvents = eventRecords.map((record) =>
        convertToFacebookEvent(record, {
          ipAddress:
            headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            headersList.get("x-real-ip") ||
            undefined,
          fbp: events[0]?.data?.fbp as string | undefined,
          fbc: events[0]?.data?.fbc as string | undefined,
          userEmail: events[0]?.data?.userEmail as string | undefined,
          userId: events[0]?.data?.userId as string | undefined,
        })
      );

      sendToFacebookCAPI(fbEvents).catch((err) => {
        console.error("[Events API] Facebook CAPI send failed:", err);
      });
    }

    // Send to TikTok Events API (server-side, bypasses ad blockers)
    // Fire and forget - don't block the response
    if (data && data.length > 0 && !isBotRequest) {
      const tiktokEvents = eventRecords.map((record) =>
        convertToTikTokEvent(record, {
          ipAddress:
            headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            headersList.get("x-real-ip") ||
            undefined,
          ttp: events[0]?.data?.ttp as string | undefined,
          userEmail: events[0]?.data?.userEmail as string | undefined,
          userId: events[0]?.data?.userId as string | undefined,
        })
      );

      sendToTikTokAPI(tiktokEvents).catch((err) => {
        console.error("[Events API] TikTok API send failed:", err);
      });
    }

    // Success response
    return NextResponse.json({
      success: true,
      eventIds: data?.map((e) => e.id) || [],
      count: events.length,
    });
  } catch (error) {
    console.error("[Events API] Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ===========================================
// GET /api/events - Not allowed (POST only)
// ===========================================
export async function GET() {
  return NextResponse.json(
    { success: false, error: "Method not allowed. Use POST to submit events." },
    { status: 405 }
  );
}
