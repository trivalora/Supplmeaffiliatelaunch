import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import {
  sendRefillConfirmationEmail,
  generateConfirmationToken,
  getTokenExpiration,
} from "@/lib/mailersend";
import {
  calculateRefillDates,
  parseServingsPerContainer,
} from "@/lib/refill-calculator";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * POST /api/refill-reminder
 *
 * Subscribe to a refill reminder for a product
 *
 * Request body:
 * - email (string, required): Email address
 * - productId (string, required): Product UUID
 * - servingsPerDay (number, optional): How many servings they take daily (default: 1)
 * - reminderDaysBefore (number, optional): Days before runout to remind (default: 7)
 * - retailerName (string, optional): Which retailer they're buying from
 * - productUrl (string, optional): The affiliate link
 *
 * Returns:
 * - 201: Confirmation email sent
 * - 200: Already has active reminder for this product
 * - 400: Invalid input
 * - 404: Product not found
 * - 500: Server error
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      email,
      productId,
      servingsPerDay = 1,
      reminderDaysBefore = 7,
      retailerName,
      productUrl,
    } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
        { status: 400 }
      );
    }

    if (!productId) {
      return NextResponse.json(
        { ok: false, error: "Product ID is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const normalizedEmail = email.toLowerCase().trim();
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { ok: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Get client info
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    const supabase = createClient();

    // Fetch product details
    const { data: product, error: productError } = await supabase
      .from("products")
      .select(
        "id, product_name, brand, supplement_slug, servings_per_container"
      )
      .eq("id", productId)
      .single();

    if (productError || !product) {
      console.error("Product not found:", productError);
      return NextResponse.json(
        { ok: false, error: "Product not found" },
        { status: 404 }
      );
    }

    // Check for existing active reminder for this email + product
    const { data: existing } = await supabase
      .from("refill_reminders")
      .select("id, status, confirmed")
      .eq("email", normalizedEmail)
      .eq("product_id", productId)
      .in("status", ["pending"])
      .single();

    if (existing?.confirmed) {
      return NextResponse.json(
        {
          ok: true,
          message: "You already have an active reminder for this product!",
        },
        { status: 200 }
      );
    }

    // Calculate refill dates
    const servingsPerContainer = parseServingsPerContainer(
      product.servings_per_container
    );
    const calculation = calculateRefillDates({
      servingsPerContainer,
      servingsPerDay,
      reminderDaysBefore,
      purchaseDate: new Date(),
    });

    // Generate confirmation token
    const confirmationToken = generateConfirmationToken();
    const tokenExpiresAt = getTokenExpiration();

    if (existing) {
      // Update existing unconfirmed reminder
      const { error: updateError } = await supabase
        .from("refill_reminders")
        .update({
          servings_per_day: servingsPerDay,
          servings_per_container: servingsPerContainer,
          estimated_days_supply: calculation.estimatedDaysSupply,
          purchase_date: new Date().toISOString(),
          estimated_runout_date: calculation.estimatedRunoutDate.toISOString(),
          reminder_date: calculation.reminderDate.toISOString(),
          reminder_days_before: reminderDaysBefore,
          confirmation_token: confirmationToken,
          token_expires_at: tokenExpiresAt.toISOString(),
          retailer_name: retailerName || null,
          product_url: productUrl || null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", existing.id);

      if (updateError) {
        console.error("Refill reminder update error:", updateError);
        return NextResponse.json(
          { ok: false, error: "Failed to update reminder. Please try again." },
          { status: 500 }
        );
      }
    } else {
      // Create new reminder
      const { error: insertError } = await supabase
        .from("refill_reminders")
        .insert({
          email: normalizedEmail,
          product_id: productId,
          product_name: product.product_name,
          product_brand: product.brand,
          supplement_slug: product.supplement_slug,
          servings_per_container: servingsPerContainer,
          servings_per_day: servingsPerDay,
          estimated_days_supply: calculation.estimatedDaysSupply,
          purchase_date: new Date().toISOString(),
          estimated_runout_date: calculation.estimatedRunoutDate.toISOString(),
          reminder_date: calculation.reminderDate.toISOString(),
          reminder_days_before: reminderDaysBefore,
          confirmation_token: confirmationToken,
          token_expires_at: tokenExpiresAt.toISOString(),
          retailer_name: retailerName || null,
          product_url: productUrl || null,
          ip_address: ip,
          user_agent: userAgent,
        });

      if (insertError) {
        console.error("Refill reminder insert error:", insertError);
        return NextResponse.json(
          { ok: false, error: "Failed to create reminder. Please try again." },
          { status: 500 }
        );
      }
    }

    // Send confirmation email
    const emailResult = await sendRefillConfirmationEmail(
      normalizedEmail,
      confirmationToken,
      {
        productId: productId,
        productName: product.product_name,
        productBrand: product.brand,
        productUrl: productUrl || "",
        servingsPerContainer: servingsPerContainer,
        servingsPerDay: servingsPerDay,
        purchaseDate: new Date().toISOString(),
        estimatedRunoutDate: calculation.estimatedRunoutDate.toISOString(),
        reminderDate: calculation.reminderDate.toISOString(),
      }
    );

    if (!emailResult.success) {
      console.error(
        "Failed to send refill confirmation email:",
        emailResult.error
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Check your email to confirm your refill reminder!",
        requiresConfirmation: true,
        calculation: {
          daysSupply: calculation.estimatedDaysSupply,
          runoutDate: calculation.estimatedRunoutDate.toISOString(),
          reminderDate: calculation.reminderDate.toISOString(),
        },
      },
      {
        status: 201,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error: unknown) {
    console.error("Refill reminder API error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
