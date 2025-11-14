import { GlossaryTemplate } from '../GlossaryTemplate';

interface ClinicalSignificancePageProps {
  onNavigate?: (key: string) => void;
}

export function ClinicalSignificancePage({ onNavigate }: ClinicalSignificancePageProps) {
  return (
    <GlossaryTemplate
      onNavigate={onNavigate}
      currentPage="clinicalsignificance"
      term="Clinical Significance"
      definition="The practical importance of a treatment effect—whether it makes a real, noticeable difference in people's health and daily lives."
      detailedExplanation="Clinical significance refers to whether a research finding has practical, meaningful implications for patient care and health outcomes. Unlike statistical significance, which is a mathematical measure, clinical significance considers whether the magnitude of an effect is large enough to matter in real-world settings.

A study result can be statistically significant but not clinically significant. For example, a supplement might produce a statistically significant 2% improvement in a health marker, but this small change may not translate to noticeable health benefits or be worth the cost and effort of supplementation.

In supplement research, clinical significance helps bridge the gap between laboratory findings and practical recommendations. It considers factors like the size of the effect, the importance of the outcome, potential side effects, cost, and how the results compare to other available interventions. Clinically significant results are those that would reasonably influence clinical practice or personal health decisions."
      examples={[
        "A calcium supplement showing both statistically and clinically significant reduction in fracture risk in elderly populations.",
        "Omega-3 supplementation producing a statistically significant but clinically insignificant 1% change in cholesterol levels.",
        "Vitamin D supplementation leading to clinically meaningful improvements in muscle strength and fall prevention in older adults."
      ]}
      relatedTerms={[
        { term: "Statistical Significance", key: "statisticalsignificance" },
        { term: "Efficacy", key: "efficacy" },
        { term: "RCT", key: "rct" }
      ]}
    />
  );
}
