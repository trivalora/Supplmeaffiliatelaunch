"use client";

import { useState } from "react";
import { X, Bell, Calendar, Clock, Loader2, CheckCircle } from "lucide-react";

interface Product {
  id: string;
  name: string;
  brand: string;
  servings_per_container: number | null;
  url?: string;
}

interface RefillReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onContinue: () => void;
}

export function RefillReminderModal({
  isOpen,
  onClose,
  product,
  onContinue,
}: RefillReminderModalProps) {
  const [email, setEmail] = useState("");
  const [servingsPerDay, setServingsPerDay] = useState(1);
  const [purchaseDate, setPurchaseDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Calculate estimated runout date for preview
  const calculateRunoutPreview = () => {
    if (!product.servings_per_container || servingsPerDay <= 0) {
      return null;
    }
    const daysSupply = Math.floor(
      product.servings_per_container / servingsPerDay
    );
    const purchaseDateObj = new Date(purchaseDate);
    const runoutDate = new Date(purchaseDateObj);
    runoutDate.setDate(runoutDate.getDate() + daysSupply);
    return runoutDate;
  };

  const runoutDate = calculateRunoutPreview();
  const reminderDate = runoutDate
    ? new Date(runoutDate.getTime() - 7 * 24 * 60 * 60 * 1000)
    : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/refill-reminder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          email,
          servingsPerDay,
          purchaseDate,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to set reminder");
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinue = () => {
    onClose();
    onContinue();
  };

  const handleSkip = () => {
    onClose();
    onContinue();
  };

  if (!isOpen) return null;

  // No servings data available
  if (!product.servings_per_container) {
    // Just proceed without showing modal
    onContinue();
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleSkip}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-primary px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary-foreground">
            <Bell className="w-5 h-5" />
            <h2 className="font-semibold text-lg">Set Refill Reminder</h2>
          </div>
          <button
            onClick={handleSkip}
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Success State */
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Check Your Email!
            </h3>
            <p className="text-muted-foreground mb-6">
              We've sent a confirmation link to{" "}
              <strong className="text-foreground">{email}</strong>. Click the
              link to activate your reminder.
            </p>
            <button
              onClick={handleContinue}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Continue to Product
            </button>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="p-6">
            {/* Product Info */}
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <p className="font-medium text-foreground">{product.name}</p>
              <p className="text-sm text-muted-foreground">
                by {product.brand}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {product.servings_per_container} servings per container
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Servings Per Day */}
            <div className="mb-4">
              <label
                htmlFor="servingsPerDay"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Servings per Day
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setServingsPerDay((prev) => Math.max(1, prev - 1))
                  }
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-lg font-medium hover:bg-muted transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  id="servingsPerDay"
                  value={servingsPerDay}
                  onChange={(e) =>
                    setServingsPerDay(
                      Math.max(1, parseInt(e.target.value) || 1)
                    )
                  }
                  min="1"
                  className="w-20 text-center px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setServingsPerDay((prev) => prev + 1)}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-lg font-medium hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Purchase Date */}
            <div className="mb-6">
              <label
                htmlFor="purchaseDate"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Purchase Date
              </label>
              <input
                type="date"
                id="purchaseDate"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Preview */}
            {runoutDate && reminderDate && (
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                <p className="text-sm font-medium text-primary mb-2">
                  Reminder Preview
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>
                      Estimated runout:{" "}
                      <strong className="text-foreground">
                        {runoutDate.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Reminder on:{" "}
                      <strong className="text-foreground">
                        {reminderDate.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 mb-4">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleSkip}
                className="flex-1 py-3 rounded-lg font-medium text-muted-foreground hover:bg-muted transition-colors"
              >
                Skip
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Setting...
                  </>
                ) : (
                  <>
                    <Bell className="w-4 h-4" />
                    Set Reminder
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
