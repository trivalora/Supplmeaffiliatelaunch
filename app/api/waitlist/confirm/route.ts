import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * GET /api/waitlist/confirm
 *
 * Confirm a waitlist signup via double opt-in
 *
 * Query params:
 * - token (string, required): Confirmation token from email
 *
 * Returns:
 * - Redirect to /waitlist/confirmed on success
 * - Redirect to /waitlist/error on failure
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me";

  // Validate token is provided
  if (!token) {
    return NextResponse.redirect(
      `${baseUrl}/waitlist/error?reason=missing-token`
    );
  }

  try {
    const supabase = createClient();

    // Find signup by token
    const { data: signup, error: findError } = await supabase
      .from("waitlist_signups")
      .select("id, email, name, confirmed, token_expires_at, wants_newsletter")
      .eq("confirmation_token", token)
      .single();

    if (findError || !signup) {
      console.error("Waitlist confirmation token not found:", findError);
      return NextResponse.redirect(
        `${baseUrl}/waitlist/error?reason=invalid-token`
      );
    }

    // Check if already confirmed
    if (signup.confirmed) {
      return NextResponse.redirect(
        `${baseUrl}/waitlist/confirmed?status=already`
      );
    }

    // Check if token is expired
    if (signup.token_expires_at) {
      const expiresAt = new Date(signup.token_expires_at);
      if (expiresAt < new Date()) {
        return NextResponse.redirect(
          `${baseUrl}/waitlist/error?reason=expired-token`
        );
      }
    }

    // Confirm the waitlist signup
    const { error: updateError } = await supabase
      .from("waitlist_signups")
      .update({
        confirmed: true,
        confirmed_at: new Date().toISOString(),
        confirmation_token: null,
        token_expires_at: null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", signup.id);

    if (updateError) {
      console.error("Failed to confirm waitlist signup:", updateError);
      return NextResponse.redirect(
        `${baseUrl}/waitlist/error?reason=update-failed`
      );
    }

    // If user also wants newsletter, add them (already confirmed since they just confirmed waitlist)
    if (signup.wants_newsletter) {
      const { error: newsletterError } = await supabase
        .from("newsletter_subscribers")
        .upsert(
          {
            email: signup.email,
            source: "waitlist",
            confirmed: true,
            confirmed_at: new Date().toISOString(),
            status: "active",
          },
          { onConflict: "email" }
        );

      if (newsletterError) {
        console.error(
          "Failed to add waitlist user to newsletter:",
          newsletterError
        );
        // Don't fail the waitlist confirmation for this
      }
    }

    // Success - redirect to confirmation page
    return NextResponse.redirect(`${baseUrl}/waitlist/confirmed`);
  } catch (error: unknown) {
    console.error("Waitlist confirmation error:", error);
    return NextResponse.redirect(
      `${baseUrl}/waitlist/error?reason=server-error`
    );
  }
}
