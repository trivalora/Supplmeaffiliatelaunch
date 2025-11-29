import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * GET /api/newsletter/confirm
 *
 * Confirm a newsletter subscription via double opt-in
 *
 * Query params:
 * - token (string, required): Confirmation token from email
 *
 * Flow:
 * 1. Validate token exists and is not expired
 * 2. Update subscriber: confirmed=true, clear token
 * 3. Redirect to success page
 *
 * Returns:
 * - Redirect to /newsletter/confirmed on success
 * - Redirect to /newsletter/error on failure
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me";

  // Validate token is provided
  if (!token) {
    return NextResponse.redirect(
      `${baseUrl}/newsletter/error?reason=missing-token`
    );
  }

  try {
    const supabase = createClient();

    // Find subscriber by token
    const { data: subscriber, error: findError } = await supabase
      .from("newsletter_subscribers")
      .select("id, email, confirmed, token_expires_at")
      .eq("confirmation_token", token)
      .single();

    if (findError || !subscriber) {
      console.error("Confirmation token not found:", findError);
      return NextResponse.redirect(
        `${baseUrl}/newsletter/error?reason=invalid-token`
      );
    }

    // Check if already confirmed
    if (subscriber.confirmed) {
      // Already confirmed - redirect to success
      return NextResponse.redirect(
        `${baseUrl}/newsletter/confirmed?status=already`
      );
    }

    // Check if token is expired
    if (subscriber.token_expires_at) {
      const expiresAt = new Date(subscriber.token_expires_at);
      if (expiresAt < new Date()) {
        return NextResponse.redirect(
          `${baseUrl}/newsletter/error?reason=expired-token`
        );
      }
    }

    // Confirm the subscription
    const { error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({
        confirmed: true,
        confirmed_at: new Date().toISOString(),
        confirmation_token: null, // Clear token after use
        token_expires_at: null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", subscriber.id);

    if (updateError) {
      console.error("Failed to confirm subscription:", updateError);
      return NextResponse.redirect(
        `${baseUrl}/newsletter/error?reason=update-failed`
      );
    }

    // Success - redirect to confirmation page
    return NextResponse.redirect(`${baseUrl}/newsletter/confirmed`);
  } catch (error: any) {
    console.error("Newsletter confirmation error:", error);
    return NextResponse.redirect(
      `${baseUrl}/newsletter/error?reason=server-error`
    );
  }
}
