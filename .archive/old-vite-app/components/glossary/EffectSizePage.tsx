'use client';
import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const EffectSizePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <section>
        <h2>What Is Effect Size?</h2>
        <p>
          Effect size is a statistical measure that quantifies the magnitude or strength of a relationship or the size of a difference between groups. Unlike statistical significance (p-values), which tells us whether an effect exists, effect size tells us <em>how large</em> that effect is. Effect sizes are crucial for interpreting research findings because they provide meaningful information about the practical or clinical importance of results, independent of sample size.
        </p>
      </section>

      <section>
        <h2>Why Effect Size Matters</h2>
        
        <h3>Limitations of P-Values Alone</h3>
        <ul>
          <li><strong>Sample Size Dependent:</strong> Large samples can make trivial effects statistically significant</li>
          <li><strong>Small samples:</strong> May fail to detect clinically important effects (false negatives)</li>
          <li><strong>Doesn't Indicate Magnitude:</strong> P-value tells you "is there an effect?" not "how big is it?"</li>
        </ul>

        <h3>Benefits of Effect Sizes</h3>
        <ul>
          <li><strong>Magnitude Assessment:</strong> Tells you the practical importance of findings</li>
          <li><strong>Standardized:</strong> Allows comparison across different studies and measures</li>
          <li><strong>Meta-Analysis:</strong> Essential for combining results from multiple studies</li>
          <li><strong>Clinical Relevance:</strong> Helps determine if statistically significant effects are clinically meaningful</li>
        </ul>
      </section>

      <section>
        <h2>Types of Effect Sizes</h2>
        
        <h3>1. Standardized Mean Difference (SMD)</h3>
        <p>
          Used when comparing means between two groups:
        </p>
        <ul>
          <li><strong>Cohen's d:</strong> (Mean₁ - Mean₂) / Pooled Standard Deviation</li>
          <li><strong>Hedges' g:</strong> Adjusted version of Cohen's d that corrects for small sample bias</li>
          <li><strong>Use:</strong> Common in meta-analyses of continuous outcomes</li>
        </ul>

        <h3>2. Mean Difference (MD) or Weighted Mean Difference (WMD)</h3>
        <ul>
          <li><strong>Formula:</strong> Simply the difference between group means</li>
          <li><strong>Use:</strong> When all studies use the same measurement scale</li>
          <li><strong>Advantage:</strong> Preserves original units (e.g., mg/dL, mmHg)</li>
          <li><strong>Example:</strong> "Curcumin reduced CRP by 1.55 mg/L" (WMD = -1.55 mg/L)</li>
        </ul>

        <h3>3. Correlation Coefficients</h3>
        <ul>
          <li><strong>Pearson's r:</strong> Ranges from -1 to +1</li>
          <li><strong>Use:</strong> Measures strength and direction of linear relationships</li>
        </ul>

        <h3>4. Odds Ratio (OR) and Risk Ratio (RR)</h3>
        <ul>
          <li><strong>Use:</strong> For binary/categorical outcomes</li>
          <li><strong>Example:</strong> Risk of disease in treatment vs. control group</li>
        </ul>
      </section>

      <section>
        <h2>Interpreting Standardized Effect Sizes</h2>
        
        <h3>Cohen's Conventions (for Cohen's d and Hedges' g)</h3>
        <ul>
          <li><strong>Small Effect:</strong> d or g ≈ 0.2</li>
          <li><strong>Medium Effect:</strong> d or g ≈ 0.5</li>
          <li><strong>Large Effect:</strong> d or g ≈ 0.8</li>
        </ul>

        <h3>Important Caveats</h3>
        <ul>
          <li><strong>Context-Dependent:</strong> What's "small" or "large" depends on the field and intervention</li>
          <li><strong>Not Absolute Rules:</strong> Cohen himself warned these are rough guidelines</li>
          <li><strong>Clinical Significance:</strong> A "small" statistical effect may be clinically important (e.g., mortality reduction)</li>
          <li><strong>Practical Significance:</strong> Consider real-world implications beyond arbitrary cutoffs</li>
        </ul>
      </section>

      <section>
        <h2>Examples from Supplement Research</h2>
        
        <h3>BCAAs and Muscle Soreness</h3>
        <ul>
          <li><strong>Finding:</strong> Hedges' g approximately −0.44 for muscle soreness</li>
          <li><strong>Interpretation:</strong> Medium effect size; BCAAs moderately reduce muscle soreness</li>
          <li><strong>Practical Meaning:</strong> Noticeable but not dramatic reduction in DOMS</li>
        </ul>

        <h3>Creatine and Cognitive Function</h3>
        <ul>
          <li><strong>Finding:</strong> Hedges' g = 0.396 for working memory in older adults</li>
          <li><strong>Interpretation:</strong> Small to medium effect</li>
          <li><strong>Practical Meaning:</strong> Modest improvement in cognitive performance</li>
        </ul>

        <h3>Curcumin and CRP</h3>
        <ul>
          <li><strong>Finding:</strong> WMD = −1.55 mg/L reduction in C-reactive protein</li>
          <li><strong>Interpretation:</strong> 1.55 mg/L decrease in inflammatory marker</li>
          <li><strong>Clinical Context:</strong> Levels &gt;3 mg/L indicate elevated inflammation; this represents a meaningful reduction</li>
        </ul>

        <h3>Magnesium and Blood Pressure</h3>
        <ul>
          <li><strong>Finding:</strong> MD = −3.49 mmHg systolic, −2.36 mmHg diastolic</li>
          <li><strong>Interpretation:</strong> Modest but potentially meaningful reduction</li>
          <li><strong>Clinical Context:</strong> Even small BP reductions can reduce cardiovascular risk at population level</li>
        </ul>
      </section>

      <section>
        <h2>Effect Size in Meta-Analyses</h2>
        
        <h3>Why Meta-Analyses Use Effect Sizes</h3>
        <ul>
          <li><strong>Combine Studies:</strong> Pool results from multiple studies with different sample sizes</li>
          <li><strong>Standardization:</strong> Convert different measurements to a common metric</li>
          <li><strong>Weighted Average:</strong> Larger studies contribute more to the pooled estimate</li>
          <li><strong>Overall Effect:</strong> Calculate an overall effect size with confidence intervals</li>
        </ul>

        <h3>Interpreting Meta-Analysis Results</h3>
        <ul>
          <li><strong>Pooled Effect Size:</strong> The combined effect across all studies</li>
          <li><strong>Confidence Intervals:</strong> Range of plausible values for the true effect
            <ul>
              <li>If CI excludes zero/null value → statistically significant effect</li>
              <li>Width of CI indicates precision of estimate</li>
            </ul>
          </li>
          <li><strong>Heterogeneity:</strong> Degree of variation across studies (I² statistic)
            <ul>
              <li>Low heterogeneity (I² &lt;25%): Studies agree well</li>
              <li>High heterogeneity (I² &gt;75%): Results vary substantially</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Converting Between Effect Sizes</h2>
        <p>
          Different effect size measures can sometimes be converted to others:
        </p>
        <ul>
          <li><strong>r to d:</strong> d = 2r / √(1 - r²)</li>
          <li><strong>d to r:</strong> r = d / √(d² + 4)</li>
          <li><strong>OR to d:</strong> Approximate conversions exist but depend on baseline risk</li>
        </ul>
      </section>

      <section>
        <h2>Common Misunderstandings</h2>
        
        <h3>Effect Size ≠ Percent Change</h3>
        <ul>
          <li>Effect size d = 0.5 doesn't mean 50% improvement</li>
          <li>It means the difference is half a standard deviation</li>
          <li>Actual percent change depends on the specific measure and baseline values</li>
        </ul>

        <h3>Statistical vs. Clinical Significance</h3>
        <ul>
          <li><strong>Statistical Significance:</strong> Is the effect different from zero? (P &lt;0.05)</li>
          <li><strong>Clinical Significance:</strong> Is the effect large enough to matter in practice?</li>
          <li><strong>Mismatch:</strong> Can have statistically significant but clinically trivial effects (large samples)</li>
          <li><strong>Or:</strong> Clinically important but non-significant effects (small samples, wide CIs)</li>
        </ul>

        <h3>Larger Isn't Always Better</h3>
        <ul>
          <li>Context matters—a small effect on mortality is more important than a large effect on a minor symptom</li>
          <li>Side effects must be weighed against benefits</li>
          <li>Cost and accessibility considerations</li>
        </ul>
      </section>

      <section>
        <h2>Calculating Effect Sizes</h2>
        
        <h3>Cohen's d Formula</h3>
        <p>
          d = (M₁ - M₂) / SD<sub>pooled</sub>
        </p>
        <p>
          Where:
        </p>
        <ul>
          <li>M₁ = Mean of group 1</li>
          <li>M₂ = Mean of group 2</li>
          <li>SD<sub>pooled</sub> = Pooled standard deviation</li>
        </ul>

        <h3>Hedges' g Adjustment</h3>
        <p>
          Hedges' g = Cohen's d × (1 - 3 / (4N - 9))
        </p>
        <p>
          This small correction factor adjusts for bias in small samples.
        </p>
      </section>

      <section>
        <h2>Practical Applications</h2>
        
        <h3>For Researchers</h3>
        <ul>
          <li>Report effect sizes alongside p-values</li>
          <li>Include confidence intervals for effect sizes</li>
          <li>Conduct power analyses using expected effect sizes</li>
          <li>Use effect sizes to compare results across studies</li>
        </ul>

        <h3>For Clinicians and Consumers</h3>
        <ul>
          <li>Look beyond "statistically significant" to ask "how much difference?"</li>
          <li>Compare effect sizes across different interventions</li>
          <li>Consider clinical context when interpreting magnitude</li>
          <li>Evaluate whether effect sizes justify cost, effort, or risk</li>
        </ul>

        <h3>Reading Research Papers</h3>
        <ul>
          <li><strong>Look for:</strong> Reported effect sizes (d, g, r, OR, RR, MD, SMD)</li>
          <li><strong>Confidence Intervals:</strong> Indicate precision and statistical significance</li>
          <li><strong>Forest Plots:</strong> Visual representation in meta-analyses</li>
          <li><strong>Context:</strong> Authors' interpretation of clinical importance</li>
        </ul>
      </section>

      <section>
        <h2>Limitations and Considerations</h2>
        <ul>
          <li><strong>Assumes Normal Distribution:</strong> Some effect sizes assume data are normally distributed</li>
          <li><strong>Outliers:</strong> Can influence mean-based effect sizes</li>
          <li><strong>Baseline Differences:</strong> Don't account for baseline differences between groups (unless using change scores)</li>
          <li><strong>Not a Complete Picture:</strong> Should be interpreted alongside other factors (study quality, clinical relevance, adverse effects)</li>
        </ul>
      </section>

      <section>
        <h2>Resources and Tools</h2>
        <ul>
          <li><strong>Online Calculators:</strong> Many free effect size calculators available online</li>
          <li><strong>Statistical Software:</strong> R, SPSS, SAS, Stata all can calculate effect sizes</li>
          <li><strong>Meta-Analysis Software:</strong> RevMan, Comprehensive Meta-Analysis, Stata</li>
        </ul>
      </section>

      <section>
        <h2>Summary</h2>
        <p>
          Effect sizes quantify the magnitude of effects, providing essential context beyond statistical significance. They enable:
        </p>
        <ul>
          <li>Comparison of results across different studies and measures</li>
          <li>Assessment of practical and clinical importance</li>
          <li>Meta-analytic synthesis of research findings</li>
          <li>Informed decision-making about interventions</li>
        </ul>
        <p>
          When evaluating supplement or treatment research, always consider both statistical significance (p-values) and effect sizes to fully understand the magnitude and importance of findings.
        </p>
      </section>
    </div>
  );
};

export default EffectSizePage;
