/**
 * Geo-Check API Endpoint
 *
 * Determines if visitor is in GDPR region (EU/UK)
 * Uses Vercel's geo headers (x-vercel-ip-country)
 *
 * Returns:
 * - needsConsent: true if EU/UK, false otherwise
 * - country: ISO country code
 */

import { NextRequest, NextResponse } from "next/server";

const GDPR_COUNTRIES = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "GB",
  "NO",
  "IS",
  "LI",
];

export async function GET(request: NextRequest) {
  try {
    // Get country from Vercel geo headers
    const country = request.headers.get("x-vercel-ip-country") || "US";
    const needsConsent = GDPR_COUNTRIES.includes(country);

    return NextResponse.json({
      needsConsent,
      country,
      region: needsConsent ? "GDPR" : "Non-GDPR",
    });
  } catch (error) {
    console.error("[Geo-Check] Error:", error);

    // Default to non-GDPR (US behavior) on error
    return NextResponse.json({
      needsConsent: false,
      country: "US",
      region: "Non-GDPR",
      error: "Geo-detection failed",
    });
  }
}

export const runtime = "edge";
