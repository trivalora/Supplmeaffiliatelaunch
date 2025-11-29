"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, CheckCircle, Sparkles } from "lucide-react";

interface WaitlistSignupProps {
  /** Section title */
  title?: string;
  /** Section subtitle/description */
  subtitle?: string;
  /** Placeholder text for email input */
  placeholder?: string;
  /** Button text */
  buttonText?: string;
  /** Optional interest field to track what they're signing up for */
  interest?: string;
  /** Visual variant */
  variant?: "default" | "compact" | "card";
  /** Optional className for custom styling */
  className?: string;
}

export function WaitlistSignup({
  title = "Join the Waitlist",
  subtitle = "Be the first to know when new features launch. Early access, exclusive updates, no spam.",
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  interest,
  variant = "default",
  className = "",
}: WaitlistSignupProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || undefined,
          interest,
          referralSource: "website",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
      setName("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to join waitlist"
      );
    }
  };

  // Compact variant - just email input inline
  if (variant === "compact") {
    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {status === "loading" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : status === "success" ? (
              <CheckCircle className="w-4 h-4" />
            ) : null}
            {status === "success" ? "Check Email" : buttonText}
          </button>
        </form>
        <AnimatePresence>
          {status === "error" && errorMessage && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-destructive mt-2"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Card variant - contained card style
  if (variant === "card") {
    return (
      <div
        className={`bg-card border border-border rounded-xl p-6 ${className}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 text-primary"
          >
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Check your email to confirm!</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              disabled={status === "loading"}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "loading" && (
                <Loader2 className="w-4 h-4 animate-spin" />
              )}
              {buttonText}
            </button>
            <AnimatePresence>
              {status === "error" && errorMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-destructive"
                >
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        )}
      </div>
    );
  }

  // Default variant - full section style
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>

          {/* Success State */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-6"
            >
              <div className="flex items-center justify-center gap-3 text-primary mb-2">
                <CheckCircle className="w-6 h-6" />
                <span className="text-xl font-semibold">
                  You're on the list!
                </span>
              </div>
              <p className="text-muted-foreground">
                Check your email to confirm your spot. We'll keep you updated!
              </p>
            </motion.div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-4"
            >
              {/* Name field (optional) */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                disabled={status === "loading"}
                className="w-full px-5 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
              />

              {/* Email field */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                disabled={status === "loading"}
                className="w-full px-5 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
              />

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" && (
                  <Loader2 className="w-5 h-5 animate-spin" />
                )}
                {buttonText}
              </button>

              {/* Error message */}
              <AnimatePresence>
                {status === "error" && errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-destructive"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Privacy note */}
              <p className="text-xs text-muted-foreground">
                No spam, ever. Unsubscribe anytime.{" "}
                <a
                  href="/privacy-policy"
                  className="underline hover:text-foreground"
                >
                  Privacy Policy
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
