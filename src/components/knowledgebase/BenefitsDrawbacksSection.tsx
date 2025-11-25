import { LucideIcon } from 'lucide-react';
import { autolinkGlossaryTerms } from '../../lib/glossaryAutolink';

export interface BenefitDrawback {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsDrawbacksSectionProps {
  benefits: BenefitDrawback[];
  drawbacks: BenefitDrawback[];
  drawbacksIntro?: string;
  currentPage?: string;
}

export function BenefitsDrawbacksSection({
  benefits,
  drawbacks,
  drawbacksIntro,
  currentPage
}: BenefitsDrawbacksSectionProps) {
  const shouldUseAutolink = currentPage && !currentPage.startsWith('glossary-');

  // Process all benefits
  const linkedBenefits = benefits.map(benefit =>
    shouldUseAutolink ? autolinkGlossaryTerms(benefit.description, currentPage) : benefit.description
  );

  // Process drawbacks intro
  const linkedDrawbacksIntro = shouldUseAutolink && drawbacksIntro
    ? autolinkGlossaryTerms(drawbacksIntro, currentPage)
    : drawbacksIntro;

  // Process all drawbacks
  const linkedDrawbacks = drawbacks.map(drawback =>
    shouldUseAutolink ? autolinkGlossaryTerms(drawback.description, currentPage) : drawback.description
  );

  return (
    <div className="space-y-6">
      {/* Benefits */}
      <div data-knowledgebase-card-benefits className="bg-benefit-b rounded-[14px] border border-benefit-b-accent p-8">
        <h2 className="text-primary mb-6">Main Benefits</h2>
        <div data-knowledgebase-content-list className="space-y-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} data-knowledgebase-icon-list-item className="flex items-start gap-3">
                <IconComponent className="w-5 h-5 text-benefit-b-accent shrink-0" />
                <div>
                  <p className="text-foreground">
                    <span className="font-medium">{benefit.title}:</span>{' '}
                    {linkedBenefits[index]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Drawbacks */}
      <div data-knowledgebase-card-drawbacks className="bg-warning rounded-[14px] border border-warning-accent p-8">
        <h2 className="text-primary mb-6">Main Drawbacks</h2>
        {drawbacksIntro && (
          <p className="text-foreground leading-7 mb-4">
            {linkedDrawbacksIntro}
          </p>
        )}
        <div data-knowledgebase-content-list className="space-y-4">
          {drawbacks.map((drawback, index) => {
            const IconComponent = drawback.icon;
            return (
              <div key={index} data-knowledgebase-icon-list-item className="flex items-start gap-3">
                <IconComponent className="w-5 h-5 text-warning-accent shrink-0" />
                <div>
                  <p className="text-foreground">
                    <span className="font-medium">{drawback.title}:</span>{' '}
                    {linkedDrawbacks[index]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
