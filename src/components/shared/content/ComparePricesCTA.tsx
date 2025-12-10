"use client";

import { trackCTAClick } from "@/lib/analytics";

interface ComparePricesCTAProps {
  onScrollToSearch?: () => void;
}

/**
 * Reusable CTA section for "Compare Prices Now"
 * Used on landing page and glossary pages
 * Background color and button color are fixed (not affected by dark mode)
 */
export function ComparePricesCTA({ onScrollToSearch }: ComparePricesCTAProps) {
  const handleClick = () => {
    trackCTAClick("Compare Prices Now", "cta", "/#hero", "button");
    if (onScrollToSearch) {
      onScrollToSearch();
    } else {
      // Navigate to homepage
      window.location.href = "/#hero";
    }
  };

  return (
    <section
      data-layout-section
      className="dark:border-t dark:border-b dark:border-secondary/25"
      style={{ backgroundColor: "#162F1C", color: "#ffffff" }}
    >
      <div data-layout-container className="text-center">
        <p className="mb-8 max-w-2xl mx-auto" style={{ color: "#E0CBA8" }}>
          Join thousands of people who trust science-backed recommendations and
          transparent pricing.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={handleClick}
            className="px-8 py-4 rounded-xl transition-colors shadow-lg"
            style={{ backgroundColor: "#000000", color: "#ffffff" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1a1a1a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#000000")
            }
          >
            Compare Prices Now
          </button>
          <button className="bg-white/10 border-2 border-white/30 text-white/40 px-8 py-4 rounded-xl cursor-not-allowed relative group">
            Browse Health Goals
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-foreground px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Coming Soon
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
