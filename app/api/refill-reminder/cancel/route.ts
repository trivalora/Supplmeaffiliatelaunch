import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(
        new URL("/refill/error?type=invalid", request.url),
      );
    }

    const supabase = createClient(supabaseUrl, supabaseSecretKey);

    // Find the reminder by token
    const { data: reminder, error: fetchError } = await supabase
      .from("refill_reminders")
      .select("id, status")
      .eq("confirmation_token", token)
      .single();

    if (fetchError || !reminder) {
      return NextResponse.redirect(
        new URL("/refill/error?type=not_found", request.url),
      );
    }

    if (reminder.status === "cancelled") {
      // Already cancelled - still show success
      return NextResponse.redirect(new URL("/refill/cancelled", request.url));
    }

    // Cancel the reminder
    const { error: updateError } = await supabase
      .from("refill_reminders")
      .update({
        status: "cancelled",
        updated_at: new Date().toISOString(),
      })
      .eq("id", reminder.id);

    if (updateError) {
      console.error("Error cancelling refill reminder:", updateError);
      return NextResponse.redirect(
        new URL("/refill/error?type=unknown", request.url),
      );
    }

    return NextResponse.redirect(new URL("/refill/cancelled", request.url));
  } catch (error) {
    console.error("Cancel refill reminder error:", error);
    return NextResponse.redirect(
      new URL("/refill/error?type=unknown", request.url),
    );
  }
}
