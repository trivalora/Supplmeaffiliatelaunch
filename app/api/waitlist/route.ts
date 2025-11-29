import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import {
  sendWaitlistConfirmationEmail,
  generateConfirmationToken,
  getTokenExpiration,
} from "@/lib/mailersend";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * POST /api/waitlist
 *
 * Add a user to the waitlist (with double opt-in)
 *
 * Request body:
 * - email (string, required): Email address
 * - name (string, optional): User's name
 * - interest (string, optional): What they're interested in
 * - referralSource (string, optional): How they heard about us
 * - wantsNewsletter (boolean, optional): Also subscribe to newsletter
 * - metadata (object, optional): Any additional custom data
 *
 * Returns:
 * - 201: Confirmation email sent
 * - 200: Already on waitlist (and confirmed)
 * - 202: Confirmation email resent (existing unconfirmed)
 * - 400: Invalid email
 * - 500: Server error
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, interest, referralSource, wantsNewsletter, metadata } =
      body;

    // Validation: Check if email is provided
    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
        { status: 400 }
      );
    }

    // Validation: Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const normalizedEmail = email.toLowerCase().trim();
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { ok: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Get client info for compliance tracking
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Create Supabase client
    const supabase = createClient();

    // Check if already on waitlist
    const { data: existing } = await supabase
      .from("waitlist_signups")
      .select("id, email, confirmed, status")
      .eq("email", normalizedEmail)
      .single();

    // Already confirmed and waiting
    if (existing?.confirmed && existing?.status === "waiting") {
      return NextResponse.json(
        {
          ok: true,
          message: "You're already on our waitlist! We'll be in touch soon.",
        },
        { status: 200 }
      );
    }

    // Already converted
    if (existing?.status === "converted") {
      return NextResponse.json(
        { ok: true, message: "Great news—you already have access!" },
        { status: 200 }
      );
    }

    // Generate confirmation token and expiration
    const confirmationToken = generateConfirmationToken();
    const tokenExpiresAt = getTokenExpiration();

    if (existing) {
      // Existing unconfirmed signup - update token and resend
      const { error: updateError } = await supabase
        .from("waitlist_signups")
        .update({
          name: name?.trim() || null,
          confirmation_token: confirmationToken,
          token_expires_at: tokenExpiresAt.toISOString(),
          status: "waiting",
          updated_at: new Date().toISOString(),
        })
        .eq("id", existing.id);

      if (updateError) {
        console.error("Waitlist update error:", updateError);
        return NextResponse.json(
          { ok: false, error: "Failed to process signup. Please try again." },
          { status: 500 }
        );
      }
    } else {
      // New signup - insert with confirmation token
      const { error: insertError } = await supabase
        .from("waitlist_signups")
        .insert({
          email: normalizedEmail,
          name: name?.trim() || null,
          interest: interest?.trim() || null,
          referral_source: referralSource?.trim() || null,
          wants_newsletter: wantsNewsletter || false,
          source: "waitlist",
          ip_address: ip,
          user_agent: userAgent,
          confirmed: false,
          confirmation_token: confirmationToken,
          token_expires_at: tokenExpiresAt.toISOString(),
          metadata: metadata || {},
        });

      if (insertError) {
        // Handle race condition
        if (insertError.code === "23505") {
          return NextResponse.json(
            {
              ok: true,
              message: "Please check your email to confirm your spot.",
            },
            { status: 200 }
          );
        }

        console.error("Waitlist signup error:", insertError);
        return NextResponse.json(
          { ok: false, error: "Failed to join waitlist. Please try again." },
          { status: 500 }
        );
      }
    }

    // Send confirmation email via MailerSend
    const emailResult = await sendWaitlistConfirmationEmail(
      normalizedEmail,
      confirmationToken,
      name?.trim()
    );

    if (!emailResult.success) {
      console.error(
        "Failed to send waitlist confirmation email:",
        emailResult.error
      );
      return NextResponse.json(
        {
          ok: true,
          message:
            "Almost there! Please check your email to confirm your spot.",
          warning:
            "If you don't receive the email, please try again in a few minutes.",
        },
        {
          status: 201,
          headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate",
          },
        }
      );
    }

    // Success
    return NextResponse.json(
      {
        ok: true,
        message:
          "Almost there! Please check your email to confirm your spot on the waitlist.",
        requiresConfirmation: true,
      },
      {
        status: existing ? 202 : 201,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error: unknown) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
