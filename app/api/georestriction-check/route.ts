/**
 * Georestriction Check API
 * Returns whether the user's country is allowed to access the site
 *
 * Response:
 * - allowed: boolean - true if US or Germany
 * - country: string - ISO country code
 * - availableCountries: string[] - List of allowed countries
 */

import { NextRequest, NextResponse } from "next/server";

const ALLOWED_COUNTRIES = ["US", "DE"];

export async function GET(request: NextRequest) {
  try {
    const country = request.headers.get("x-vercel-ip-country") || "US";
    const allowed = ALLOWED_COUNTRIES.includes(country);

    return NextResponse.json({
      allowed,
      country,
      availableCountries: ALLOWED_COUNTRIES,
      message: allowed
        ? "Access granted"
        : `Access restricted. Available in: ${ALLOWED_COUNTRIES.join(", ")}`,
    });
  } catch (error) {
    console.error("[Georestriction-Check] Error:", error);

    // Default to allowed on error
    return NextResponse.json({
      allowed: true,
      country: "US",
      availableCountries: ALLOWED_COUNTRIES,
      error: "Georestriction check failed",
    });
  }
}

export const runtime = "edge";
