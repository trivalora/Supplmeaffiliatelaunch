"use client";

import Link from "next/link";
import { CheckCircle, Bell, Calendar, Package } from "lucide-react";

export default function RefillConfirmedPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Bell className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Reminder Confirmed!
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          You're all set! We'll send you an email reminder{" "}
          <strong className="text-foreground">7 days before</strong> your
          supplement runs out.
        </p>

        {/* Info Cards */}
        <div className="space-y-3 mb-8">
          <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3 text-left">
            <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground">
              Reminder scheduled based on your usage
            </span>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3 text-left">
            <Package className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground">
              Never run out of your supplements again
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Continue Browsing
          </Link>
          <p className="text-xs text-muted-foreground">
            You can cancel this reminder anytime via email
          </p>
        </div>
      </div>
    </div>
  );
}
