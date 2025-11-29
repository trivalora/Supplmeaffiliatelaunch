"use client";

import Link from "next/link";
import { CheckCircle, BellOff } from "lucide-react";

export default function RefillCancelledPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-muted-foreground" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-muted-foreground/20 rounded-full flex items-center justify-center">
              <BellOff className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Reminder Cancelled
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          You've been unsubscribed from this refill reminder. You won't receive
          any more emails about this product.
        </p>

        {/* CTA */}
        <div className="space-y-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Continue Browsing
          </Link>
          <p className="text-xs text-muted-foreground">
            Changed your mind? You can set up a new reminder anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
