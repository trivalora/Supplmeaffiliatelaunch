"use client";

import Link from "next/link";
import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ErrorContent() {
  const searchParams = useSearchParams();
  const errorType = searchParams.get("type") || "unknown";

  const errorMessages: Record<string, { title: string; description: string }> =
    {
      invalid: {
        title: "Invalid Link",
        description:
          "This confirmation link is invalid or malformed. Please try signing up for the reminder again.",
      },
      expired: {
        title: "Link Expired",
        description:
          "This confirmation link has expired. Confirmation links are valid for 24 hours. Please sign up for the reminder again.",
      },
      already_confirmed: {
        title: "Already Confirmed",
        description:
          "This reminder has already been confirmed. You'll receive your reminder email as scheduled.",
      },
      not_found: {
        title: "Reminder Not Found",
        description:
          "We couldn't find this reminder in our system. It may have been cancelled or the link is incorrect.",
      },
      unknown: {
        title: "Something Went Wrong",
        description:
          "An unexpected error occurred. Please try again or contact support if the problem persists.",
      },
    };

  const error = errorMessages[errorType] || errorMessages.unknown;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-foreground mb-4">
          {error.title}
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {error.description}
        </p>

        {/* Actions */}
        <div className="space-y-3">
          {errorType !== "already_confirmed" && (
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Browse Products
            </Link>
          )}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full text-muted-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function RefillErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      }
    >
      <ErrorContent />
    </Suspense>
  );
}
