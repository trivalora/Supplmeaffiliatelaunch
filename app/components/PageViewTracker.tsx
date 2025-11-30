"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageViewDual } from "@/lib/analytics-dual";

interface PageViewTrackerProps {
  pageName: string;
  pageCategory:
    | "landing"
    | "supplement"
    | "product"
    | "comparison"
    | "glossary"
    | "static";
}

export function PageViewTracker({
  pageName,
  pageCategory,
}: PageViewTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view with dual tracking (GTM + Server backup)
    trackPageViewDual(pageName, pageCategory);
  }, [pageName, pageCategory, pathname]);

  return null; // This component doesn't render anything
}
