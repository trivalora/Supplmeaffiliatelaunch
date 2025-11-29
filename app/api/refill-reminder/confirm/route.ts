import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * GET /api/refill-reminder/confirm
 *
 * Confirm a refill reminder subscription
 *
 * Query params:
 * - token (string, required): Confirmation token from email
 *
 * Returns:
 * - Redirect to /refill/confirmed on success
 * - Redirect to /refill/error on failure
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me";

  if (!token) {
    return NextResponse.redirect(
      `${baseUrl}/refill/error?reason=missing-token`
    );
  }

  try {
    const supabase = createClient();

    // Find reminder by token
    const { data: reminder, error: findError } = await supabase
      .from("refill_reminders")
      .select("id, email, product_name, confirmed, token_expires_at")
      .eq("confirmation_token", token)
      .single();

    if (findError || !reminder) {
      console.error("Refill confirmation token not found:", findError);
      return NextResponse.redirect(
        `${baseUrl}/refill/error?reason=invalid-token`
      );
    }

    // Already confirmed
    if (reminder.confirmed) {
      return NextResponse.redirect(
        `${baseUrl}/refill/confirmed?status=already`
      );
    }

    // Check expiration
    if (reminder.token_expires_at) {
      const expiresAt = new Date(reminder.token_expires_at);
      if (expiresAt < new Date()) {
        return NextResponse.redirect(
          `${baseUrl}/refill/error?reason=expired-token`
        );
      }
    }

    // Confirm the reminder
    const { error: updateError } = await supabase
      .from("refill_reminders")
      .update({
        confirmed: true,
        confirmed_at: new Date().toISOString(),
        confirmation_token: null,
        token_expires_at: null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", reminder.id);

    if (updateError) {
      console.error("Failed to confirm refill reminder:", updateError);
      return NextResponse.redirect(
        `${baseUrl}/refill/error?reason=update-failed`
      );
    }

    // Encode product name for URL
    const productName = encodeURIComponent(reminder.product_name || "");
    return NextResponse.redirect(
      `${baseUrl}/refill/confirmed?product=${productName}`
    );
  } catch (error: unknown) {
    console.error("Refill confirmation error:", error);
    return NextResponse.redirect(`${baseUrl}/refill/error?reason=server-error`);
  }
}
