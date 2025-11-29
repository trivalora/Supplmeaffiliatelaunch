import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Unsubscribe | Suppl.me",
  description: "Manage your newsletter subscription preferences.",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ status?: string; reason?: string }>;
}

export default async function NewsletterUnsubscribePage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const status = params.status || "pending";
  const reason = params.reason;

  // Success states
  if (status === "success" || status === "already") {
    return (
      <main className="min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            {status === "already"
              ? "Already Unsubscribed"
              : "Unsubscribed Successfully"}
          </h1>

          {/* Message */}
          <p className="text-muted-foreground mb-8">
            {status === "already" ? (
              <>
                You were already unsubscribed from our newsletter. You
                won&apos;t receive any more emails from us.
              </>
            ) : (
              <>
                You&apos;ve been removed from our newsletter. We&apos;re sorry
                to see you go!
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
          </div>

          {/* Resubscribe option */}
          <p className="mt-8 text-sm text-muted-foreground">
            Changed your mind?{" "}
            <Link href="/#newsletter" className="text-primary hover:underline">
              Subscribe again
            </Link>
          </p>
        </div>
      </main>
    );
  }

  // Error state
  if (status === "error") {
    return (
      <main className="min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          {/* Error Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
            <XCircle className="w-10 h-10 text-red-600" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Unable to Unsubscribe
          </h1>

          {/* Message */}
          <p className="text-muted-foreground mb-8">
            We couldn&apos;t process your unsubscribe request. Please try again
            or contact us for help.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Pending/initial state (shouldn't normally be seen)
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center">
        {/* Info Icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
          <AlertCircle className="w-10 h-10 text-blue-600" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Manage Subscription
        </h1>

        {/* Message */}
        <p className="text-muted-foreground mb-8">
          To unsubscribe, please click the unsubscribe link in any of our
          newsletter emails.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
