import { LucideIcon } from "lucide-react";
import { autolinkGlossaryTerms } from "@/lib/glossaryAutolink";

export interface DietarySource {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface OverviewSectionProps {
  overviewTitle?: string;
  overviewContent: string | React.ReactNode; // Support both string (from DB) and ReactNode (legacy TSX)
  dietarySources?: DietarySource[];
  additionalOverviewContent?: string | React.ReactNode; // Support both formats
  currentPage?: string; // For self-link prevention in autolinking
}

export function OverviewSection({
  overviewTitle = "What is this supplement?",
  overviewContent,
  dietarySources,
  additionalOverviewContent,
  currentPage,
}: OverviewSectionProps) {
  // Process autolinking for plain text content from database
  // If content is already JSX (legacy), pass through unchanged
  const linkedOverview =
    typeof overviewContent === "string"
      ? autolinkGlossaryTerms(overviewContent, currentPage)
      : overviewContent;

  const linkedAdditional =
    typeof additionalOverviewContent === "string"
      ? autolinkGlossaryTerms(additionalOverviewContent, currentPage)
      : additionalOverviewContent;

  return (
    <div
      data-knowledgebase-card-info
      className="bg-card rounded-[14px] border border-border p-8"
    >
      <h2 className="text-primary mb-6">{overviewTitle}</h2>

      <div data-knowledgebase-content-text className="space-y-4">
        <div className="text-foreground leading-7 overview-text">
          {linkedOverview}
        </div>

        {dietarySources && dietarySources.length > 0 && (
          <div className="bg-tertiary rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-primary mb-3">Main Dietary Sources:</h3>
              <div className="space-y-3">
                {dietarySources.map((source, index) => {
                  const IconComponent = source.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <IconComponent className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="text-foreground mb-1">
                          <span className="font-medium">{source.title}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {source.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {additionalOverviewContent && (
          <div className="text-foreground leading-7 overview-text">
            {linkedAdditional}
          </div>
        )}
      </div>
    </div>
  );
}
