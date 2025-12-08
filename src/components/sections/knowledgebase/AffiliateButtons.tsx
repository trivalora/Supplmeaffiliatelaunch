"use client";

import Link from "next/link";
import IHerbBadgeLogoRgb from "@/imports/IHerbBadgeLogoRgb1-106-1526";
import { useAffiliateTooltip } from "@/components/shared/ui-extensions/AffiliateTooltip";
import { trackAffiliateClickDual } from "@/lib/analytics-dual";

interface AffiliateButtonsProps {
  amazonLink: string;
  iherbLink?: string;
  iherbUnavailable?: boolean;
  supplementName: string;
  productName: string;
  brand: string;
}

export function AffiliateButtons({
  amazonLink,
  iherbLink,
  iherbUnavailable,
  supplementName,
  productName,
  brand,
}: AffiliateButtonsProps) {
  const tooltipHandlers = useAffiliateTooltip();

  // Convert supplement name to URL-friendly slug (e.g., "Vitamin D" -> "vitamin-d")
  const supplementSlug = supplementName.toLowerCase().replace(/\s+/g, "-");

  const handleAmazonClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent immediate navigation

    try {
      const { trackingUrl } = await trackAffiliateClickDual({
        productName: productName,
        brand: brand,
        supplementSlug: supplementSlug,
        retailerSlug: "amazon",
        price: 0, // Unknown price on knowledgebase pages
        affiliateUrl: amazonLink,
      });

      // Open tracking URL with click_id (or fallback to original)
      window.open(trackingUrl || amazonLink, "_blank");
    } catch (error) {
      console.error("Failed to track Amazon click:", error);
      window.open(amazonLink, "_blank"); // Fallback to original URL
    }
  };

  const handleIHerbClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent immediate navigation

    try {
      const { trackingUrl } = await trackAffiliateClickDual({
        productName: productName,
        brand: brand,
        supplementSlug: supplementSlug,
        retailerSlug: "iherb",
        price: 0, // Unknown price on knowledgebase pages
        affiliateUrl: iherbLink || "",
      });

      // Open tracking URL with click_id (or fallback to original)
      window.open(trackingUrl || iherbLink, "_blank");
    } catch (error) {
      console.error("Failed to track iHerb click:", error);
      window.open(iherbLink, "_blank"); // Fallback to original URL
    }
  };

  return (
    <div className="flex gap-2">
      <a
        href={amazonLink}
        target="_blank"
        rel="nofollow noreferrer"
        data-button-height="md"
        className="flex-1 rounded-lg overflow-hidden hover:opacity-90 transition-opacity flex items-center justify-center px-3"
        {...tooltipHandlers}
        onClick={handleAmazonClick}
      >
        <img
          src="/images/amazon-button.png"
          alt="Amazon"
          className="h-full w-auto object-contain"
        />
      </a>
      {iherbUnavailable || !iherbLink ? (
        <div
          data-button-height="md"
          className="flex-1 px-3 rounded-lg flex items-center justify-center bg-tertiary border border-secondary opacity-50 cursor-not-allowed relative group"
        >
          <div className="h-6 w-6 opacity-50">
            <IHerbBadgeLogoRgb />
          </div>
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Currently Unavailable
          </span>
        </div>
      ) : (
        <a
          href={iherbLink}
          target="_blank"
          rel="nofollow noreferrer"
          data-button-height="md"
          className="flex-1 px-3 rounded-lg transition-opacity hover:opacity-90 flex items-center justify-center bg-tertiary border border-secondary"
          {...tooltipHandlers}
          onClick={handleIHerbClick}
        >
          <div className="h-6 w-6">
            <IHerbBadgeLogoRgb />
          </div>
        </a>
      )}
      {/* Compare All button - no tracking needed, internal navigation */}
      <Link
        href={`/comparison/${supplementSlug}`}
        data-button-height="md"
        className="flex-1 px-3 rounded-lg text-center bg-tertiary text-primary border border-secondary hover:opacity-90 transition-opacity text-sm flex items-center justify-center"
      >
        Compare All
      </Link>
    </div>
  );
}
