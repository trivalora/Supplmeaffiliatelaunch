"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function GeoBlockedContent() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") || "your country";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary">
      <div className="max-w-md w-full px-6 py-8 text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">🌍</div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Not Available in Your Region
          </h1>
        </div>

        <div className="bg-tertiary border border-secondary rounded-lg p-6 mb-6">
          <p className="text-foreground mb-4">
            Currently, Suppl.me is only available in the{" "}
            <strong>United States</strong> and <strong>Germany</strong>.
          </p>
          <p className="text-sm text-foreground/70 mb-4">
            We detected your location as: <strong>{country}</strong>
          </p>
          <p className="text-sm text-foreground/70">
            We're working on expanding to more regions. Please check back soon!
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-foreground/60 text-sm mb-4">
            If you believe this is an error or have questions, please contact
            us:
          </p>
          <a
            href="mailto:support@suppl.me"
            className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-secondary">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 transition-colors text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function GeoBlockedPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🌍</div>
            <p>Loading...</p>
          </div>
        </div>
      }
    >
      <GeoBlockedContent />
    </Suspense>
  );
}
