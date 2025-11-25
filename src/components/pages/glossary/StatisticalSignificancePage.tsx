import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function StatisticalSignificancePage() {
  return (
    <GlossaryTemplate
      term="Statistical Significance"
      definition="A measure indicating that a research finding is unlikely to have occurred by chance alone, typically represented by a p-value less than 0.05."
      detailedExplanation="Statistical significance is a mathematical measure used to determine whether the results of a study are likely due to the intervention being tested or simply due to random chance. A result is typically considered statistically significant when the p-value is less than 0.05, meaning there is less than a 5% probability that the observed effect occurred by chance.

In supplement research, statistical significance helps researchers determine whether observed differences between treatment and control groups are real effects of the supplement or just random variation. For example, if a study finds that vitamin D supplementation leads to statistically significant improvements in bone density, it means the improvement is unlikely to be due to chance alone.

However, statistical significance does not necessarily indicate clinical importance. A result can be statistically significant but have such a small effect size that it may not be meaningful in real-world applications. This is why clinical significance is also important to consider."
      examples={[
        "A creatine study showing a statistically significant increase in muscle strength (p=0.03) compared to placebo.",
        "Research finding that omega-3 supplementation leads to a statistically significant reduction in triglycerides (p&lt;0.001).",
        "A vitamin D trial demonstrating statistically significant improvements in immune markers (p=0.02)."
      ]}
      relatedTerms={[
        { term: "Clinical Significance", key: "clinicalsignificance" },
        { term: "RCT", key: "rct" },
        { term: "Meta-Analysis", key: "metaanalysis" }
      ]}
      currentPage="statisticalsignificance"
    />
  );
}
