"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * Georestriction Check Component
 * Verifies user's location is US or Germany
 * Redirects to geo-blocked page if not allowed
 */
export function GeorestrictionCheck() {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  const ALLOWED_COUNTRIES = ["US", "DE"];
  const EXCLUDED_PATHS = ["/geo-blocked", "/api", "/_next", "/favicon.ico"];

  useEffect(() => {
    // Skip check for certain paths
    if (EXCLUDED_PATHS.some((path) => pathname.startsWith(path))) {
      setChecked(true);
      return;
    }

    const checkGeorestriction = async () => {
      try {
        const response = await fetch("/api/georestriction-check", {
          cache: "no-store",
        });
        const data = await response.json();

        // If country not allowed, redirect to geo-blocked page
        if (!data.allowed) {
          router.push(`/geo-blocked?country=${data.country}`);
          return;
        }

        setChecked(true);
      } catch (error) {
        console.error("Georestriction check failed:", error);
        // Allow access on error (fail open for better UX)
        setChecked(true);
      }
    };

    checkGeorestriction();
  }, [pathname, router]);

  // Don't render anything - just perform the check
  return null;
}
