import { Metadata } from "next";
import Link from "next/link";
import { XCircle, Clock, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Waitlist Error | Suppl.me",
  description: "There was an issue with your waitlist confirmation.",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ reason?: string }>;
}

const errorMessages: Record<
  string,
  { icon: React.ReactNode; title: string; message: string }
> = {
  "missing-token": {
    icon: <AlertCircle className="w-10 h-10 text-yellow-600" />,
    title: "Missing Confirmation Link",
    message:
      "The confirmation link appears to be incomplete. Please check your email and click the full link, or try joining the waitlist again.",
  },
  "invalid-token": {
    icon: <XCircle className="w-10 h-10 text-red-600" />,
    title: "Invalid Confirmation Link",
    message:
      "This confirmation link is not valid. It may have already been used. Please try joining the waitlist again.",
  },
  "expired-token": {
    icon: <Clock className="w-10 h-10 text-orange-600" />,
    title: "Link Expired",
    message:
      "This confirmation link has expired. Confirmation links are valid for 24 hours. Please join the waitlist again to receive a new link.",
  },
  "update-failed": {
    icon: <XCircle className="w-10 h-10 text-red-600" />,
    title: "Confirmation Failed",
    message:
      "We couldn't complete your waitlist confirmation. Please try again or contact us if the issue persists.",
  },
  "server-error": {
    icon: <XCircle className="w-10 h-10 text-red-600" />,
    title: "Something Went Wrong",
    message:
      "We encountered an unexpected error. Please try again later or contact us if the issue persists.",
  },
};

export default async function WaitlistErrorPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const reason = params.reason || "server-error";
  const errorInfo = errorMessages[reason] || errorMessages["server-error"];

  return (
    <main className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
          {errorInfo.icon}
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          {errorInfo.title}
        </h1>

        {/* Message */}
        <p className="text-muted-foreground mb-8">{errorInfo.message}</p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Try Again
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
