'use client';

import React from 'react';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Calculator, TrendingUp, Users, BarChart3, Target } from 'lucide-react';

export function HedgesgPage() {
  return (
    <GlossaryTemplate
      term="Hedges' g"
      pronunciation="hej-iz jee"
      definition="A standardized effect size measure similar to Cohen's d but with a correction for small sample bias, commonly used in meta-analyses to quantify the magnitude of differences between groups."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Hedges' g is a standardized measure of effect size that quantifies the difference between two group means in units of standard deviations. It is nearly identical to Cohen's d but includes a small correction factor that reduces bias when sample sizes are small (typically less than 20 per group). This makes Hedges' g particularly useful in meta-analyses where studies of varying sample sizes are combined.
          </p>

          <h3 className="mt-6 mb-3">Relationship to Cohen's d</h3>
          
          <p className="mb-3"><strong>Similarities:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Both measure standardized mean difference between two groups</li>
            <li>Both express the difference in standard deviation units</li>
            <li>Interpreted using the same general guidelines (small ≈ 0.2, medium ≈ 0.5, large ≈ 0.8)</li>
            <li>Values are nearly identical, especially in larger samples</li>
          </ul>

          <p className="mb-3"><strong>Key Difference:</strong></p>
          <p className="mb-3">
            Hedges' g includes a correction factor (J) that adjusts for small sample bias:
          </p>
          <div style={{ fontFamily: 'monospace', padding: '1em', background: 'var(--color-tertiary)', marginBottom: '1em' }}>
            Hedges' g = Cohen's d × J
          </div>
          <p className="mb-3">
            Where J = 1 - 3/(4N - 9) and N is the total sample size across both groups.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Small Samples:</strong> Correction can be substantial (5-10% reduction)</li>
            <li><strong>Large Samples:</strong> J approaches 1, making g ≈ d</li>
            <li><strong>Example:</strong> With total N = 20, J ≈ 0.96 (4% reduction)</li>
            <li><strong>Example:</strong> With total N = 100, J ≈ 0.99 (1% reduction)</li>
          </ul>

          <h3 className="mt-6 mb-3">Calculation</h3>
          
          <p className="mb-3"><strong>Step 1: Calculate Cohen's d</strong></p>
          <p className="mb-3">
            d = (M₁ - M₂) / SD<sub>pooled</sub>
          </p>
          <p className="mb-3">Where:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>M₁ = Mean of treatment group</li>
            <li>M₂ = Mean of control group</li>
            <li>SD<sub>pooled</sub> = √[((n₁-1)×SD₁² + (n₂-1)×SD₂²) / (n₁ + n₂ - 2)]</li>
          </ul>

          <p className="mb-3"><strong>Step 2: Apply Correction Factor</strong></p>
          <p className="mb-4">
            g = d × [1 - 3 / (4 × (n₁ + n₂) - 9)]
          </p>

          <p className="mb-3"><strong>Alternative Formulas:</strong></p>
          <p className="mb-4">
            Various slightly different formulas exist for specific designs (independent groups, repeated measures, pre-post designs). Statistical software typically handles these automatically.
          </p>

          <h3 className="mt-6 mb-3">Interpretation Guidelines</h3>
          
          <p className="mb-3"><strong>Cohen's Conventional Benchmarks:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Small Effect:</strong> g ≈ 0.2
              <ul className="list-circle pl-6 space-y-1 mt-1">
                <li>Difference is small but potentially meaningful</li>
                <li>May be difficult to detect without careful measurement</li>
              </ul>
            </li>
            <li><strong>Medium Effect:</strong> g ≈ 0.5
              <ul className="list-circle pl-6 space-y-1 mt-1">
                <li>Moderate difference, noticeable to careful observer</li>
                <li>Typical of many psychological and behavioral interventions</li>
              </ul>
            </li>
            <li><strong>Large Effect:</strong> g ≈ 0.8
              <ul className="list-circle pl-6 space-y-1 mt-1">
                <li>Substantial difference, obvious to casual observer</li>
                <li>Relatively uncommon in most intervention research</li>
              </ul>
            </li>
          </ul>

          <p className="mb-3"><strong>Important Caveats:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Field-Dependent:</strong> What's "large" in one field may be "small" in another</li>
            <li><strong>Not Absolute:</strong> Cohen himself warned these are rough rules of thumb</li>
            <li><strong>Clinical Context:</strong> A small g for a critical outcome (e.g., mortality) may be more important than a large g for a minor symptom</li>
            <li><strong>Baseline Considerations:</strong> Effect sizes should be interpreted in context of baseline severity</li>
          </ul>

          <h3 className="mt-6 mb-3">Examples from Supplement Research</h3>
          
          <p className="mb-3"><strong>BCAAs and Muscle Damage:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Finding:</strong> Hedges' g ≈ −0.44 for muscle soreness 24-72 hours post-exercise</li>
            <li><strong>Interpretation:</strong> Medium effect size; the negative sign indicates BCAAs reduce soreness</li>
            <li><strong>Practical Meaning:</strong> BCAAs moderately reduce delayed onset muscle soreness (DOMS)</li>
            <li><strong>Clinical Relevance:</strong> Noticeable but not dramatic reduction; may be worthwhile for athletes in heavy training</li>
          </ul>

          <p className="mb-3"><strong>Creatine and Cognitive Function:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Finding:</strong> Hedges' g = 0.396 for working memory in older adults</li>
            <li><strong>Interpretation:</strong> Small to medium effect (between 0.2 and 0.5)</li>
            <li><strong>Practical Meaning:</strong> Modest improvement in cognitive performance</li>
            <li><strong>Clinical Relevance:</strong> May be meaningful for older adults experiencing cognitive decline</li>
          </ul>

          <p className="mb-3"><strong>Curcumin and Cognitive Function:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Finding:</strong> Hedges' g = 0.81 for improved working memory in older adults with metabolic syndrome</li>
            <li><strong>Interpretation:</strong> Large effect size (exceeding 0.8 threshold)</li>
            <li><strong>Practical Meaning:</strong> Substantial improvement in cognitive performance</li>
            <li><strong>Clinical Relevance:</strong> Potentially clinically significant benefit in this specific population</li>
          </ul>

          <p className="mb-3"><strong>Curcumin and Anaerobic Performance:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Finding:</strong> Hedges' g = −0.23 for reduced decline during repeated sprint tests</li>
            <li><strong>Interpretation:</strong> Small effect size (close to 0.2)</li>
            <li><strong>Practical Meaning:</strong> Modest benefit for maintaining performance during high-intensity exercise</li>
            <li><strong>Clinical Relevance:</strong> Small but potentially valuable for competitive athletes</li>
          </ul>

          <h3 className="mt-6 mb-3">Hedges' g in Meta-Analyses</h3>
          
          <p className="mb-3"><strong>Why Meta-Analyses Prefer Hedges' g:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Small Study Bias:</strong> Many meta-analyses include studies with small samples; Hedges' g corrects for this</li>
            <li><strong>Statistical Rigor:</strong> More accurate pooled estimates when combining studies of varying sizes</li>
            <li><strong>Standard Practice:</strong> Widely accepted in meta-analytic methodology</li>
            <li><strong>Software Default:</strong> Many meta-analysis software packages use Hedges' g by default</li>
          </ul>

          <p className="mb-3"><strong>Reporting in Meta-Analyses:</strong></p>
          <p className="mb-3">Meta-analyses typically report:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Pooled Hedges' g:</strong> Overall effect size across all studies</li>
            <li><strong>95% Confidence Interval:</strong> Range of plausible values
              <ul className="list-circle pl-6 space-y-1 mt-1">
                <li>If CI excludes zero → statistically significant effect</li>
                <li>Narrow CI → more precise estimate</li>
                <li>Wide CI → less certainty about true effect size</li>
              </ul>
            </li>
            <li><strong>Forest Plot:</strong> Visual representation of individual study g values and pooled estimate</li>
            <li><strong>Heterogeneity Statistics:</strong> I² and τ² indicate variability across studies</li>
          </ul>

          <h3 className="mt-6 mb-3">Advantages of Hedges' g</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Less Biased:</strong> Corrects upward bias in Cohen's d for small samples</li>
            <li><strong>More Conservative:</strong> Slightly smaller values provide more conservative estimates</li>
            <li><strong>Better for Meta-Analysis:</strong> Improved accuracy when pooling studies</li>
            <li><strong>Standardized:</strong> Allows comparison across different measures and studies</li>
            <li><strong>Sample Size Independent:</strong> Not affected by sample size (after correction)</li>
          </ul>

          <h3 className="mt-6 mb-3">Limitations</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Assumes Normality:</strong> Assumes data are approximately normally distributed</li>
            <li><strong>Sensitive to Outliers:</strong> Extreme values can influence the pooled standard deviation</li>
            <li><strong>Homogeneity Assumption:</strong> Assumes similar variance in both groups</li>
            <li><strong>Doesn't Capture All Information:</strong> Focuses on mean differences, may miss other important patterns</li>
            <li><strong>Context Required:</strong> Numbers alone don't tell the full story—clinical context essential</li>
          </ul>

          <h3 className="mt-6 mb-3">When to Use Hedges' g vs. Other Effect Sizes</h3>
          
          <p className="mb-3"><strong>Use Hedges' g When:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Comparing means between two groups</li>
            <li>Sample sizes are small to moderate (&lt;50 per group)</li>
            <li>Conducting or reading a meta-analysis</li>
            <li>Wanting to standardize across different measurement scales</li>
          </ul>

          <p className="mb-3"><strong>Use Mean Difference (MD/WMD) When:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>All studies use the same measurement scale</li>
            <li>Preserving original units is important (e.g., mg/dL, mmHg)</li>
            <li>Clinicians prefer actual unit changes over standardized values</li>
          </ul>

          <p className="mb-3"><strong>Use Other Effect Sizes When:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Correlation:</strong> Examining relationships between continuous variables</li>
            <li><strong>Odds Ratio/Risk Ratio:</strong> Outcomes are binary (yes/no, diseased/healthy)</li>
            <li><strong>Hazard Ratio:</strong> Time-to-event outcomes (survival analysis)</li>
          </ul>

          <h3 className="mt-6 mb-3">Confidence Intervals</h3>
          <p className="mb-3">
            Hedges' g should always be reported with confidence intervals:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>95% CI:</strong> Most common; range containing true effect size 95% of the time (in repeated sampling)</li>
            <li><strong>Excludes Zero:</strong> If CI doesn't include zero, the effect is statistically significant at p &lt;0.05</li>
            <li><strong>Width Indicates Precision:</strong>
              <ul className="list-circle pl-6 space-y-1 mt-1">
                <li>Narrow CI (e.g., 0.3 to 0.5) → precise estimate</li>
                <li>Wide CI (e.g., −0.1 to 0.9) → uncertain estimate</li>
              </ul>
            </li>
          </ul>
          <p className="mb-3">
            <strong>Example:</strong> Hedges' g = 0.44 (95% CI: 0.21 to 0.67)
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Effect size is 0.44 (medium)</li>
            <li>We're 95% confident the true effect is between 0.21 and 0.67</li>
            <li>Statistically significant (CI excludes zero)</li>
            <li>Even the lower bound (0.21) represents a small-to-medium effect</li>
          </ul>

          <h3 className="mt-6 mb-3">Converting Hedges' g to Other Metrics</h3>
          
          <p className="mb-3"><strong>Approximate Conversions:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Hedges' g to correlation r:</strong> r ≈ g / √(g² + 4)</li>
            <li><strong>Hedges' g to odds ratio:</strong> More complex; depends on baseline probabilities</li>
            <li><strong>Percent of non-overlap:</strong> Can calculate overlap between two distributions</li>
          </ul>

          <p className="mb-3"><strong>Probability of Superiority:</strong></p>
          <p className="mb-3">
            Hedges' g can be converted to "probability that a randomly selected person from the treatment group will have a better outcome than a randomly selected person from the control group":
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>g = 0.2 → ~56% probability</li>
            <li>g = 0.5 → ~64% probability</li>
            <li>g = 0.8 → ~71% probability</li>
          </ul>

          <h3 className="mt-6 mb-3">Practical Tips for Reading Research</h3>
          
          <p className="mb-3"><strong>What to Look For:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Reported Value:</strong> Is Hedges' g (or effect size) reported?</li>
            <li><strong>Confidence Interval:</strong> Indicates precision and significance</li>
            <li><strong>Sample Size:</strong> Smaller samples → wider CIs, less certainty</li>
            <li><strong>Direction:</strong> Positive or negative (and what that means for the outcome)</li>
            <li><strong>Clinical Context:</strong> Authors' interpretation of practical significance</li>
          </ul>

          <p className="mb-3"><strong>Red Flags:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Only p-values reported without effect sizes</li>
            <li>Very wide confidence intervals suggesting imprecise estimates</li>
            <li>Conflation of statistical and clinical significance</li>
            <li>Cherry-picking of "significant" results while ignoring effect size magnitude</li>
          </ul>

          <h3 className="mt-6 mb-3">Software and Calculation</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Statistical Software:</strong> R (metafor package), Stata, SPSS, SAS</li>
            <li><strong>Meta-Analysis Software:</strong> RevMan (Cochrane), Comprehensive Meta-Analysis</li>
            <li><strong>Online Calculators:</strong> Many free effect size calculators available</li>
            <li><strong>Excel:</strong> Can calculate manually using formulas (requires statistical knowledge)</li>
          </ul>

          <h3 className="mt-6 mb-3">Summary</h3>
          <p className="mb-4">
            Hedges' g is a refined version of Cohen's d that corrects for small sample bias, making it ideal for meta-analyses and rigorous effect size reporting. When reading research:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Look for both statistical significance (p-values) and effect sizes (Hedges' g)</li>
            <li>Examine confidence intervals for precision and significance</li>
            <li>Interpret effect size magnitude in clinical context</li>
            <li>Remember that g ≈ 0.2 (small), 0.5 (medium), 0.8 (large) are rough guidelines, not absolute rules</li>
          </ul>
          <p className="mb-4">
            Understanding Hedges' g helps you evaluate whether statistically significant findings are large enough to be clinically meaningful and worth the intervention cost, effort, or risk.
          </p>
        </>
      }
      
      keyPoints={[
        {
          icon: Calculator,
          title: "Small Sample Correction",
          description: "Hedges' g applies a correction factor to Cohen's d that reduces bias in small samples, making it more accurate for meta-analyses"
        },
        {
          icon: BarChart3,
          title: "Standardized Comparison",
          description: "Expresses differences in standard deviation units, allowing comparison across studies using different measurement scales"
        },
        {
          icon: Target,
          title: "Clinical Context Matters",
          description: "Effect size benchmarks (0.2 small, 0.5 medium, 0.8 large) are guidelines—interpret in context of the outcome's importance"
        }
      ]}
      
      relatedTerms={[
        { term: "Standardized Mean Difference", key: "smd" },
        { term: "Effect Size", key: "effectsize" },
        { term: "Meta-Analysis", key: "metaanalysis" },
        { term: "Statistical Significance", key: "statisticalsignificance" },
        { term: "Clinical Significance", key: "clinicalsignificance" }
      ]}
    />
  );
}

export default HedgesgPage;