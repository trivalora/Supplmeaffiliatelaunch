import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ===========================================
// Types
// ===========================================
interface iHerbCommission {
  sub_id: string; // Our click_id (suppl_XXXXXX_XXXXXXXX)
  order_id: string;
  transaction_id?: string;
  sale_amount: number;
  commission: number;
  currency: string;
  status: "pending" | "approved" | "declined" | "cancelled";
  transaction_date: string;
  product_id?: string;
  product_name?: string;
  quantity?: number;
}

// ===========================================
// Verify Webhook Signature (HMAC SHA256)
// ===========================================
function verifySignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  if (!signature || !secret) return false;

  try {
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(payload)
      .digest("hex");

    // Timing-safe comparison to prevent timing attacks
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  } catch (error) {
    console.error("[iHerb Webhook] Signature verification error:", error);
    return false;
  }
}

// ===========================================
// POST /api/webhooks/iherb - Receive Commission Callbacks
// ===========================================
/**
 * POST /api/webhooks/iherb
 *
 * Receives commission updates from iHerb affiliate network.
 * Updates affiliate_clicks table with commission status and amount.
 *
 * Security:
 * - HMAC SHA256 signature verification
 * - IP whitelist (optional, configure in iHerb dashboard)
 *
 * Request Body (iHerb webhook format):
 *   {
 *     sub_id: string (our click_id),
 *     order_id: string,
 *     transaction_id?: string,
 *     sale_amount: number,
 *     commission: number,
 *     currency: string,
 *     status: 'pending' | 'approved' | 'declined' | 'cancelled',
 *     transaction_date: string (ISO 8601),
 *     product_id?: string,
 *     product_name?: string,
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
    // Get signature from header
    const signature = request.headers.get("x-iherb-signature") || "";

    // Get raw body for signature verification
    const rawBody = await request.text();

    // Verify webhook signature (if secret is configured)
    const webhookSecret = process.env.IHERB_WEBHOOK_SECRET;
    if (webhookSecret) {
      if (!verifySignature(rawBody, signature, webhookSecret)) {
        console.error("[iHerb Webhook] Invalid signature");
        return NextResponse.json(
          { success: false, error: "Invalid signature" },
          { status: 401 }
        );
      }
    } else {
      console.warn(
        "[iHerb Webhook] IHERB_WEBHOOK_SECRET not configured - skipping signature verification"
      );
    }

    // Parse commission data
    let commission: iHerbCommission;
    try {
      commission = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!commission.sub_id) {
      return NextResponse.json(
        { success: false, error: "Missing sub_id (click_id)" },
        { status: 400 }
      );
    }

    if (!commission.order_id || !commission.status) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (order_id, status)" },
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
        order_id: commission.order_id,
        sale_amount: commission.sale_amount || 0,
        commissioned_at: commission.transaction_date,
        // Store additional metadata
        metadata: {
          transaction_id: commission.transaction_id,
          product_id: commission.product_id,
          product_name: commission.product_name,
          quantity: commission.quantity,
          webhook_received_at: new Date().toISOString(),
        },
      })
      .eq("click_id", commission.sub_id)
      .select("id, click_id, commission_status");

    if (error) {
      console.error("[iHerb Webhook] Update failed:", error);
      return NextResponse.json(
        { success: false, error: "Database error" },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      console.warn("[iHerb Webhook] Click ID not found:", commission.sub_id);
      return NextResponse.json(
        { success: false, error: "Click ID not found" },
        { status: 404 }
      );
    }

    console.log(
      `[iHerb Webhook] Commission updated: ${commission.sub_id} → ${commission.status} ($${commission.commission})`
    );

    // Return success
    return NextResponse.json({
      success: true,
      clickId: data[0].click_id,
      updated: true,
      status: data[0].commission_status,
    });
  } catch (error) {
    console.error("[iHerb Webhook] Unexpected error:", error);
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
    message: "iHerb webhook endpoint is active",
    configured: !!process.env.IHERB_WEBHOOK_SECRET,
  });
}
