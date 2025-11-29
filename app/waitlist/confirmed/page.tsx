import { Metadata } from "next";
import Link from "next/link";
import { PartyPopper } from "lucide-react";

export const metadata: Metadata = {
  title: "You're on the Waitlist! | Suppl.me",
  description: "Your spot on the Suppl.me waitlist has been confirmed.",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ status?: string }>;
}

export default async function WaitlistConfirmedPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const alreadyConfirmed = params.status === "already";

  return (
    <main className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <PartyPopper className="w-10 h-10 text-green-600" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          {alreadyConfirmed
            ? "You're Already on the List!"
            : "You're on the Waitlist! 🎉"}
        </h1>

        {/* Message */}
        <p className="text-muted-foreground mb-4">
          {alreadyConfirmed ? (
            <>
              Your spot was already confirmed. We&apos;ll notify you as soon as
              we&apos;re ready to welcome you!
            </>
          ) : (
            <>
              Thanks for confirming! You&apos;re officially on the Suppl.me
              waitlist. We&apos;ll be in touch as soon as we&apos;re ready to
              welcome you.
            </>
          )}
        </p>

        <p className="text-sm text-muted-foreground mb-8">
          Keep an eye on your inbox—you&apos;ll be among the first to know when
          we launch.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Explore Suppl.me
          </Link>
        </div>

        {/* Social sharing prompt */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">
            Know someone who&apos;d love Suppl.me?
          </p>
          <p className="text-sm font-medium text-foreground">
            Share the link and help them join the waitlist too!
          </p>
        </div>
      </div>
    </main>
  );
}
