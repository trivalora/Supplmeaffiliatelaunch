import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscription Confirmed | Suppl.me",
  description: "Your newsletter subscription has been confirmed.",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ status?: string }>;
}

export default async function NewsletterConfirmedPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const alreadyConfirmed = params.status === "already";

  return (
    <main className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          {alreadyConfirmed ? "Already Subscribed!" : "Subscription Confirmed!"}
        </h1>

        {/* Message */}
        <p className="text-muted-foreground mb-8">
          {alreadyConfirmed ? (
            <>
              Your email was already confirmed. You&apos;re all set to receive
              our curated supplement news—maximum one email per week.
            </>
          ) : (
            <>
              Thank you for confirming your subscription! You&apos;ll now
              receive our curated supplement news—maximum one email per week, no
              spam.
            </>
          )}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
          <Link
            href="/supplements"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
          >
            Explore Supplements
          </Link>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-sm text-muted-foreground">
          Questions?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </main>
  );
}
