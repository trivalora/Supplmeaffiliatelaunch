"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Cookie Consent Banner
 *
 * Shows banner for EU/UK visitors only (GDPR compliance)
 * US visitors: No banner (no federal cookie law)
 *
 * Features:
 * - Geo-detection via Vercel headers
 * - Accept all / Reject non-essential
 * - Persists choice in localStorage
 * - Blocks GTM until consent given
 */

interface CookieConsentProps {
  /** Override geo-detection (for testing) */
  forceShow?: boolean;
  /** Callback when user makes choice */
  onConsent?: (accepted: boolean) => void;
}

export function CookieConsent({ forceShow, onConsent }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [isGDPRRegion, setIsGDPRRegion] = useState(false);

  useEffect(() => {
    // Check if user already made choice
    const consentChoice = localStorage.getItem("cookie_consent");
    if (consentChoice) {
      // Already decided
      setShowBanner(false);
      // Re-apply their choice (in case GTM was blocked)
      if (consentChoice === "accepted") {
        enableTracking();
      }
      return;
    }

    // Check if we need to show banner (GDPR region)
    checkGDPRRegion().then((needsConsent) => {
      setIsGDPRRegion(needsConsent);
      if (needsConsent || forceShow) {
        setShowBanner(true);
        // Block GTM until consent
        blockTracking();
      } else {
        // US/non-GDPR: Enable tracking immediately
        enableTracking();
      }
    });
  }, [forceShow]);

  async function checkGDPRRegion(): Promise<boolean> {
    try {
      // Vercel provides geo headers, we can check via API
      const response = await fetch("/api/geo-check");
      const data = await response.json();
      return data.needsConsent || false;
    } catch (error) {
      console.warn("Geo-check failed, defaulting to no banner:", error);
      return false; // Default to US behavior
    }
  }

  function blockTracking() {
    // Prevent GTM from loading or firing events
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_default",
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  function enableTracking() {
    // Allow GTM to fire
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
  }

  function handleAccept() {
    localStorage.setItem("cookie_consent", "accepted");
    enableTracking();
    setShowBanner(false);
    onConsent?.(true);
  }

  function handleReject() {
    localStorage.setItem("cookie_consent", "rejected");
    // Keep tracking blocked (already blocked in useEffect)
    setShowBanner(false);
    onConsent?.(false);
  }

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Cookie Preferences
            </h3>
            <p className="text-sm text-gray-600">
              We use cookies to improve your experience and analyze site usage.
              Essential cookies are required for the site to function. Analytics
              and advertising cookies help us understand how you use our site
              and show relevant content.{" "}
              <a
                href="/cookie-policy"
                className="text-primary underline hover:text-primary-dark"
              >
                Learn more
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button
              variant="outline"
              onClick={handleReject}
              className="whitespace-nowrap"
            >
              Essential Only
            </Button>
            <Button
              onClick={handleAccept}
              className="whitespace-nowrap bg-primary hover:bg-primary-dark"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
