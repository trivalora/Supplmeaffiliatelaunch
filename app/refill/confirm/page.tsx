"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

function ConfirmContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    const confirmReminder = async () => {
      const token = searchParams.get("token");

      if (!token) {
        router.replace("/refill/error?type=invalid");
        return;
      }

      try {
        const response = await fetch(
          `/api/refill-reminder/confirm?token=${token}`
        );
        const data = await response.json();

        if (response.ok && data.success) {
          setStatus("success");
          router.replace("/refill/confirmed");
        } else {
          // Handle specific error types
          const errorType = data.error?.includes("expired")
            ? "expired"
            : data.error?.includes("already")
            ? "already_confirmed"
            : data.error?.includes("not found")
            ? "not_found"
            : "unknown";
          router.replace(`/refill/error?type=${errorType}`);
        }
      } catch {
        router.replace("/refill/error?type=unknown");
      }
    };

    confirmReminder();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
        <h1 className="text-xl font-semibold text-foreground mb-2">
          Confirming your reminder...
        </h1>
        <p className="text-muted-foreground">Please wait a moment</p>
      </div>
    </div>
  );
}

export default function RefillConfirmPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>
      }
    >
      <ConfirmContent />
    </Suspense>
  );
}
