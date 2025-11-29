import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * GET /api/newsletter/unsubscribe
 *
 * Unsubscribe from the newsletter via link in email
 *
 * Query params:
 * - email (string, required): Email address to unsubscribe
 * - token (string, optional): Confirmation token for verification
 *
 * Returns:
 * - Redirect to unsubscribe confirmation page
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me";

  // Validate email is provided
  if (!email) {
    return NextResponse.redirect(
      `${baseUrl}/newsletter/unsubscribe?status=error&reason=missing-email`
    );
  }

  try {
    const supabase = createClient();
    const normalizedEmail = email.toLowerCase().trim();

    // Find subscriber
    const { data: subscriber, error: findError } = await supabase
      .from("newsletter_subscribers")
      .select("id, email, status, confirmation_token")
      .eq("email", normalizedEmail)
      .single();

    if (findError || !subscriber) {
      // Email not found - still show success to prevent enumeration
      return NextResponse.redirect(
        `${baseUrl}/newsletter/unsubscribe?status=success`
      );
    }

    // If token provided, verify it matches (extra security)
    if (token && subscriber.confirmation_token !== token) {
      // Token mismatch but we don't reveal this
      return NextResponse.redirect(
        `${baseUrl}/newsletter/unsubscribe?status=success`
      );
    }

    // Already unsubscribed
    if (subscriber.status === "unsubscribed") {
      return NextResponse.redirect(
        `${baseUrl}/newsletter/unsubscribe?status=already`
      );
    }

    // Unsubscribe the user
    const { error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({
        status: "unsubscribed",
        unsubscribed_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", subscriber.id);

    if (updateError) {
      console.error("Failed to unsubscribe:", updateError);
      return NextResponse.redirect(
        `${baseUrl}/newsletter/unsubscribe?status=error&reason=update-failed`
      );
    }

    // Success
    return NextResponse.redirect(
      `${baseUrl}/newsletter/unsubscribe?status=success`
    );
  } catch (error: any) {
    console.error("Newsletter unsubscribe error:", error);
    return NextResponse.redirect(
      `${baseUrl}/newsletter/unsubscribe?status=error&reason=server-error`
    );
  }
}
