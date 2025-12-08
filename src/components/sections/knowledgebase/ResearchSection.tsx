import { autolinkGlossaryContent } from "@/lib/glossaryAutolink";
import { FootnotePopup } from "./FootnotePopup";
import { ResearchGrade, Reference } from "./types";
import { Fragment, ReactNode } from "react";

interface ResearchSectionProps {
  researchGrades?: ResearchGrade[];
  currentPage?: string;
  references?: Reference[];
}

export function ResearchSection({
  researchGrades,
  currentPage,
  references,
}: ResearchSectionProps) {
  if (!researchGrades) return null;

  const shouldUseAutolink = currentPage && !currentPage.startsWith("glossary-");

  // Helper function to apply both footnotes and glossary linking
  const processDescription = (description: string): ReactNode => {
    // First, split by footnotes
    const parts = description.split(/(\[\d+\](?:\[\d+\])*)/g);

    return parts.map((part, index) => {
      // If it's a footnote pattern
      if (/^\[\d+\](?:\[\d+\])*$/.test(part)) {
        // Extract footnote numbers
        const numbers = part.match(/\d+/g) || [];
        return (
          <sup key={index}>
            {numbers.map((num, idx) => {
              const refIndex = parseInt(num) - 1;
              const reference = references?.[refIndex];
              return (
                <Fragment key={idx}>
                  <FootnotePopup refNumber={num} reference={reference} />
                </Fragment>
              );
            })}
          </sup>
        );
      }

      // For text parts, apply glossary autolinking if enabled
      if (shouldUseAutolink && part.trim()) {
        return (
          <Fragment key={index}>
            {autolinkGlossaryContent(part, currentPage)}
          </Fragment>
        );
      }

      return <Fragment key={index}>{part}</Fragment>;
    });
  };

  const getGradeColor = (letter: "A" | "B" | "C" | "D") => {
    switch (letter) {
      case "A":
        return "bg-benefit text-benefit-accent";
      case "B":
        return "bg-benefit-b text-benefit-b-accent";
      case "C":
        return "bg-warning text-warning-accent";
      case "D":
        return "bg-[#FFEBEE] text-[#C62828]";
    }
  };

  return (
    <div data-knowledgebase-research>
      {/* Heading - matches Main Drawbacks heading style */}
      <h2 className="text-primary mb-6" data-knowledgebase-research-heading>
        Research Summary
      </h2>

      {/* Research Grade Cards */}
      {researchGrades && researchGrades.length > 0 && (
        <div
          data-knowledgebase-research-grid
          className="grid gap-4 md:grid-cols-2"
        >
          {researchGrades.map((grade, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-[14px] p-8 flex flex-col gap-3 overflow-hidden"
            >
              {/* Badge and Title Container */}
              <div className="flex items-start gap-4">
                {/* Grade Badge - Large for all cards */}
                <div
                  className={`w-[80px] h-[79px] rounded-[24px] flex items-center justify-center shrink-0 ${getGradeColor(
                    grade.letter
                  )}`}
                >
                  <span>{grade.letter}</span>
                </div>

                {/* Title - Aligned with badge, fixed height for consistency, LARGER font sizes */}
                <div
                  className="flex-1 wrap-break-word flex items-center"
                  style={{ height: "79px" }}
                >
                  <h3
                    className="text-primary leading-tight"
                    style={{
                      fontSize:
                        grade.title.length > 50
                          ? "1.15rem"
                          : grade.title.length > 35
                          ? "1.3rem"
                          : "1.45rem",
                    }}
                  >
                    {grade.title}
                  </h3>
                </div>
              </div>

              {/* Subtitle - Fixed 12px for all, only decrease if doesn't fit */}
              {grade.subtitle && (
                <p
                  className="text-muted-foreground"
                  style={{
                    fontSize: grade.subtitle.length > 55 ? "0.7rem" : "0.75rem", // 12px default, 11.2px if too long
                    lineHeight: "1.4",
                    marginTop: "0",
                    marginBottom: "0.25rem",
                  }}
                >
                  {grade.subtitle}
                </p>
              )}

              {/* Spacing placeholder when no subtitle - CORRECTED HEIGHT to match subtitle vertical space */}
              {!grade.subtitle && <div style={{ height: "0.8rem" }}></div>}

              {/* Description */}
              <p className="text-muted-foreground wrap-break-word">
                {processDescription(grade.description)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
