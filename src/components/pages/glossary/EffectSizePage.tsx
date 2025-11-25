'use client';

import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function EffectSizePage() {
  return (
    <GlossaryTemplate
      term="Effect Size"
      currentPage="effectsize"
      definition="A quantitative measure of the magnitude of a phenomenon or the strength of a relationship, allowing comparison across different studies, outcome measures, and units of measurement."
      expandedExplanation={
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Why Effect Size Matters</h3>
            <p className="mb-4">
              While p-values tell us whether an effect is statistically significant (unlikely due to chance), they don't reveal how large or meaningful that effect is. A tiny, clinically irrelevant difference can be statistically significant with a large enough sample size, while a substantial, meaningful effect might not reach significance in a small study.
            </p>
            <p className="mb-4">
              Effect sizes solve this problem by quantifying the magnitude of effects in standardized units, allowing us to:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Compare results across studies using different measurement scales</li>
              <li>Assess practical significance, not just statistical significance</li>
              <li>Conduct meta-analyses that synthesize findings from multiple studies</li>
              <li>Estimate statistical power and required sample sizes for future research</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Cohen's d: The Most Common Effect Size</h3>
            <p className="mb-4">
              Cohen's d expresses the difference between two groups in terms of standard deviations. It's calculated as:
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg mb-4 text-center">
              <p className="font-mono text-lg">d = (M₁ - M₂) / SD<sub>pooled</sub></p>
              <p className="text-sm mt-2">Where M₁ and M₂ are group means, and SD<sub>pooled</sub> is the pooled standard deviation</p>
            </div>
            <p className="mb-4">
              Jacob Cohen proposed conventional benchmarks for interpreting d:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li><strong>Small effect: d = 0.2</strong> - Subtle difference, difficult to detect without measurement</li>
              <li><strong>Medium effect: d = 0.5</strong> - Noticeable to careful observer, moderate practical significance</li>
              <li><strong>Large effect: d = 0.8</strong> - Obvious difference, substantial practical importance</li>
            </ul>
            <p className="mb-4">
              However, these are rough guidelines. What constitutes a "meaningful" effect depends heavily on context. In education, d = 0.4 might represent a year's worth of learning. In clinical depression treatment, d = 0.5 is often considered clinically meaningful.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Other Common Effect Size Measures</h3>
            <p className="mb-4">
              <strong>Correlation coefficient (r):</strong> Measures association strength between two continuous variables, ranging from -1 to +1. Interpretations: 0.1 = small, 0.3 = medium, 0.5 = large. r² (coefficient of determination) indicates the proportion of variance in one variable explained by another.
            </p>
            <p className="mb-4">
              <strong>Hedges' g:</strong> Similar to Cohen's d but corrected for small sample bias, providing more accurate estimates when n < 20. Often used interchangeably with d in meta-analyses.
            </p>
            <p className="mb-4">
              <strong>Odds ratios and risk ratios:</strong> Used for dichotomous outcomes (yes/no, disease/no disease). Values >1 indicate increased likelihood; <1 indicate decreased likelihood. Common in epidemiology and clinical research.
            </p>
            <p className="mb-4">
              <strong>Percentage of non-overlap:</strong> Illustrates practical significance by showing how much two distributions overlap. Cohen's d of 0.8 corresponds to about 47% non-overlap, meaning treatment group members score higher than 79% of control group members.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Effect Sizes in Supplement Research</h3>
            <p className="mb-4">
              Effect sizes are particularly valuable for evaluating supplement efficacy. Consider vitamin D supplementation for depression:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>A meta-analysis might report d = 0.61, a medium-to-large effect on depression scores</li>
              <li>This standardization allows comparison to antidepressants (typically d = 0.3-0.5 vs. placebo)</li>
              <li>Individual studies with different depression scales (PHQ-9, BDI-II, MADRS) can be combined</li>
              <li>The effect size helps determine if supplementation is clinically worthwhile, not just statistically significant</li>
            </ul>
            <p className="mb-4">
              When evaluating supplement research, look for effect sizes alongside p-values. A supplement showing p < 0.001 but d = 0.1 may be statistically significant yet practically trivial. Conversely, d = 0.6 with p = 0.06 might represent a meaningful effect that merely failed to reach arbitrary significance thresholds in a small trial.
            </p>
          </section>
        </>
      }
      relatedTerms={['meta-analysis', 'statistical-significance', 'clinical-significance']}
    />
  );
}
