'use client';

import Link from 'next/link';
import IHerbBadgeLogoRgb from '../../imports/IHerbBadgeLogoRgb1-106-1526';
import { useAffiliateTooltip } from '../AffiliateTooltip';
import {
  trackAffiliateClick,
  trackRetailerClick,
  trackProductClick
} from '../../lib/analytics';

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
  brand
}: AffiliateButtonsProps) {
  const tooltipHandlers = useAffiliateTooltip();

  const handleAmazonClick = () => {
    trackAffiliateClick('Amazon', supplementName, 'product_card');
    trackRetailerClick('Amazon', supplementName, 'bottom');
    trackProductClick(productName, brand, 'Amazon', supplementName, 0, 'comparison');
  };

  const handleIHerbClick = () => {
    trackAffiliateClick('iHerb', supplementName, 'product_card');
    trackRetailerClick('iHerb', supplementName, 'bottom');
    trackProductClick(productName, brand, 'iHerb', supplementName, 0, 'comparison');
  };

  const handleCompareClick = () => {
    trackAffiliateClick('Compare All', supplementName, 'product_card');
  };

  // Convert supplement name to URL-friendly slug (e.g., "Vitamin D" -> "vitamin-d")
  const supplementSlug = supplementName.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex gap-2">
      <a
        href={amazonLink}
        target="_blank"
        rel="nofollow noreferrer"
        data-button-height="md"
        className="flex-1 bg-[#FF9900] rounded-lg overflow-hidden hover:opacity-90 transition-opacity flex items-center justify-center px-3"
        {...tooltipHandlers}
        onClick={handleAmazonClick}
      >
        <img
          src="/optimized/2f3309a930da536601e44619e42e44f89c102eb7-48.webp"
          alt="Amazon"
          className="h-5 w-auto invert"
          style={{ filter: 'invert(1)' }}
        />
      </a>
      {(iherbUnavailable || !iherbLink) ? (
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
      {/* Compare All button */}
      <Link
        href={`/comparison/${supplementSlug}`}
        data-button-height="md"
        className="flex-1 px-3 rounded-lg text-center bg-tertiary text-primary border border-secondary hover:opacity-90 transition-opacity text-sm flex items-center justify-center"
        onClick={handleCompareClick}
      >
        Compare All
      </Link>
    </div>
  );
}
