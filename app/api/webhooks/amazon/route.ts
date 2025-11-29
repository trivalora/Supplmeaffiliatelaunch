import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ===========================================
// Types
// ===========================================
interface AmazonCommission {
  // Amazon Associates uses 'tag' parameter for tracking
  tag: string; // Our click_id (format: supplme-20_suppl_XXXXXX_XXXXXXXX)
  orderId: string;
  transactionId?: string;
  saleAmount: number;
  commission: number;
  currency: string;
  status: "pending" | "approved" | "declined" | "returned";
  transactionDate: string;
  asin?: string; // Amazon product ID
  productTitle?: string;
  quantity?: number;
  category?: string;
}

// ===========================================
// Verify Webhook Signature (Amazon SNS style)
// ===========================================
function verifyAmazonSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  if (!signature || !secret) return false;

  try {
    // Amazon uses base64-encoded HMAC SHA256
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(payload)
      .digest("base64");

    return signature === expectedSignature;
  } catch (error) {
    console.error("[Amazon Webhook] Signature verification error:", error);
    return false;
  }
}

// ===========================================
// Extract click_id from Amazon tag
// ===========================================
function extractClickId(tag: string): string | null {
  // Amazon tag format: supplme-20_suppl_XXXXXX_XXXXXXXX
  // We need to extract: suppl_XXXXXX_XXXXXXXX
  const match = tag.match(/(suppl_[a-z0-9]+_[a-z0-9]+)/i);
  return match ? match[1] : null;
}

// ===========================================
// POST /api/webhooks/amazon - Receive Commission Callbacks
// ===========================================
/**
 * POST /api/webhooks/amazon
 *
 * Receives commission updates from Amazon Associates.
 * Updates affiliate_clicks table with commission status and amount.
 *
 * Security:
 * - HMAC SHA256 signature verification (Amazon SNS style)
 * - SNS subscription confirmation handling
 *
 * Request Body (Amazon SNS format):
 *   {
 *     Type: 'Notification' | 'SubscriptionConfirmation',
 *     Message: string (JSON-encoded commission data),
 *     MessageId: string,
 *     Signature: string,
 *     SigningCertURL: string,
 *     SubscribeURL?: string (for confirmation)
 *   }
 *
 * Commission Data (in Message):
 *   {
 *     tag: string (our tracking tag with click_id),
 *     orderId: string,
 *     saleAmount: number,
 *     commission: number,
 *     currency: string,
 *     status: 'pending' | 'approved' | 'declined' | 'returned',
 *     transactionDate: string,
 *     asin?: string,
 *     productTitle?: string,
 *     quantity?: number
 *   }
 *
 * Response:
 *   {
 *     success: true,
 *     clickId: string,
 *     updated: boolean
 *   }
 */
export async function POST(request: NextRequest) {
  try {
    // Get raw body
    const rawBody = await request.text();
    let body: any;

    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    // Handle SNS subscription confirmation
    if (body.Type === "SubscriptionConfirmation") {
      console.log("[Amazon Webhook] Subscription confirmation received");
      console.log("[Amazon Webhook] Subscribe URL:", body.SubscribeURL);

      // In production, you should automatically confirm by making GET request to SubscribeURL
      // For now, log it for manual confirmation
      return NextResponse.json({
        success: true,
        message:
          "Subscription confirmation received. Please visit SubscribeURL to confirm.",
        subscribeUrl: body.SubscribeURL,
      });
    }

    // Verify signature (if secret is configured)
    const webhookSecret = process.env.AMAZON_WEBHOOK_SECRET;
    if (webhookSecret && body.Signature) {
      if (!verifyAmazonSignature(rawBody, body.Signature, webhookSecret)) {
        console.error("[Amazon Webhook] Invalid signature");
        return NextResponse.json(
          { success: false, error: "Invalid signature" },
          { status: 401 }
        );
      }
    } else if (!webhookSecret) {
      console.warn(
        "[Amazon Webhook] AMAZON_WEBHOOK_SECRET not configured - skipping signature verification"
      );
    }

    // Parse commission data from Message field
    let commission: AmazonCommission;
    try {
      commission = JSON.parse(body.Message || "{}");
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid commission data in Message" },
        { status: 400 }
      );
    }

    // Extract click_id from Amazon tag
    const clickId = extractClickId(commission.tag);
    if (!clickId) {
      return NextResponse.json(
        { success: false, error: "Could not extract click_id from tag" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!commission.orderId || !commission.status) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (orderId, status)" },
        { status: 400 }
      );
    }

    // Update affiliate click record
    const supabase = createClient();

    const { data, error } = await supabase
      .from("affiliate_clicks")
      .update({
        commission_status: commission.status,
        commission_amount: commission.commission || 0,
        commission_currency: commission.currency || "USD",
        order_id: commission.orderId,
        sale_amount: commission.saleAmount || 0,
        commissioned_at: commission.transactionDate,
        // Store additional Amazon metadata
        metadata: {
          asin: commission.asin,
          product_title: commission.productTitle,
          quantity: commission.quantity,
          category: commission.category,
          transaction_id: commission.transactionId,
          webhook_received_at: new Date().toISOString(),
        },
      })
      .eq("click_id", clickId)
      .select("id, click_id, commission_status");

    if (error) {
      console.error("[Amazon Webhook] Update failed:", error);
      return NextResponse.json(
        { success: false, error: "Database error" },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      console.warn("[Amazon Webhook] Click ID not found:", clickId);
      return NextResponse.json(
        { success: false, error: "Click ID not found" },
        { status: 404 }
      );
    }

    console.log(
      `[Amazon Webhook] Commission updated: ${clickId} → ${commission.status} ($${commission.commission})`
    );

    // Return success
    return NextResponse.json({
      success: true,
      clickId: data[0].click_id,
      updated: true,
      status: data[0].commission_status,
    });
  } catch (error) {
    console.error("[Amazon Webhook] Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ===========================================
// GET - Health check endpoint
// ===========================================
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Amazon Associates webhook endpoint is active",
    configured: !!process.env.AMAZON_WEBHOOK_SECRET,
  });
}
