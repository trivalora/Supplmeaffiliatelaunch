"use client";

import { Check, Clock, TrendingUp, Info } from "lucide-react";
import type { ProductPageContent } from "@/lib/product-content-generator";

interface ProductContextSectionProps {
  content: ProductPageContent;
  supplementName: string;
}

/**
 * Mini intensity bar for What to Expect (smaller than knowledgebase version)
 */
function MiniIntensityBar({ intensity }: { intensity: string }) {
  let coloredBars = [true, false, false];

  if (intensity === "High") {
    coloredBars = [true, true, true];
  } else if (intensity === "Moderate to High") {
    coloredBars = [true, true, true]; // Show all but third is partial
  } else if (intensity === "Moderate") {
    coloredBars = [true, true, false];
  } else if (intensity === "Low to Moderate") {
    coloredBars = [true, true, false]; // Second is partial
  } else if (intensity === "Low") {
    coloredBars = [true, false, false];
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-[3px] items-end h-4">
        <div
          className="w-1 rounded-full transition-colors"
          style={{
            height: "8px",
            backgroundColor: coloredBars[0]
              ? "var(--primary)"
              : "var(--border)",
          }}
        />
        <div
          className="w-1 rounded-full transition-colors"
          style={{
            height: "11px",
            backgroundColor: coloredBars[1]
              ? "var(--primary)"
              : "var(--border)",
            opacity: intensity === "Low to Moderate" ? 0.6 : 1,
          }}
        />
        <div
          className="w-1 rounded-full transition-colors"
          style={{
            height: "14px",
            backgroundColor: coloredBars[2]
              ? "var(--primary)"
              : "var(--border)",
            opacity: intensity === "Moderate to High" ? 0.6 : 1,
          }}
        />
      </div>
      <span className="text-xs text-muted-foreground ml-1">{intensity}</span>
    </div>
  );
}

/**
 * ProductContextSection - Displays unique, dynamically generated content on product pages
 *
 * This component shows:
 * - Overview paragraph (unique per product)
 * - Key benefits (selected subset)
 * - Mini "What to Expect" section
 * - Timing and quality notes
 */
export function ProductContextSection({
  content,
  supplementName,
}: ProductContextSectionProps) {
  return (
    <div className="bg-card rounded-xl shadow-sm border border-secondary/20 overflow-hidden mb-6">
      {/* Header */}
      <div className="p-6 border-b border-secondary/20">
        <h2 className="text-2xl font-serif text-primary">
          About {supplementName}
        </h2>
        <p className="text-muted-foreground mt-1">
          What to know about this supplement
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Overview Paragraphs - Two distinct paragraphs for SEO */}
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            {content.overviewParagraph}
          </p>
          <p className="text-foreground leading-relaxed">
            {content.detailsParagraph}
          </p>
        </div>

        {/* Key Benefits - Compact List */}
        {content.keyBenefits.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
              Key Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {content.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mini What to Expect */}
        {content.whatToExpect && (
          <div className="border-t border-secondary/20 pt-6">
            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              What to Expect
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Primary Outcome */}
              <div className="bg-tertiary rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">
                    {content.whatToExpect.primaryOutcome.label}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Timeframe
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {content.whatToExpect.primaryOutcome.timeframe}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Effect Level
                    </span>
                    <MiniIntensityBar
                      intensity={content.whatToExpect.primaryOutcome.intensity}
                    />
                  </div>
                </div>
              </div>

              {/* Secondary Outcome (if exists) */}
              {content.whatToExpect.secondaryOutcome && (
                <div className="bg-tertiary rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">
                      {content.whatToExpect.secondaryOutcome.label}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Timeframe
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {content.whatToExpect.secondaryOutcome.timeframe}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Effect Level
                      </span>
                      <MiniIntensityBar
                        intensity={
                          content.whatToExpect.secondaryOutcome.intensity
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* What to Expect Summary */}
            {content.whatToExpectSummary &&
              content.whatToExpectSummary.length > 0 && (
                <div className="mt-4 bg-tertiary/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    What You Should Know
                  </h4>
                  <ul className="space-y-2">
                    {content.whatToExpectSummary.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        )}

        {/* Timing & Usage Tips */}
        {(content.timingTip || content.idealFor) && (
          <div className="border-t border-secondary/20 pt-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
              <div className="space-y-2">
                {content.timingTip && (
                  <p className="text-sm text-muted-foreground">
                    {content.timingTip}
                  </p>
                )}
                {content.idealFor && (
                  <p className="text-sm text-muted-foreground">
                    {content.idealFor}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Quality Note */}
        {content.qualityNote && (
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-foreground">
              <span className="font-medium">Quality tip:</span>{" "}
              {content.qualityNote}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
