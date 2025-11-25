import { GlossaryTemplate } from '../GlossaryTemplate';

export function SMDPage() {
  return (
    <GlossaryTemplate
      term="Standardized Mean Difference"
      abbreviation="SMD"
      definition="A statistical measure used in meta-analyses to express the size of an intervention effect relative to the variability in the data, allowing comparison across studies using different measurement scales."
      detailedExplanation="Standardized Mean Difference (SMD) is calculated by dividing the difference between two group means by the pooled standard deviation. This standardization allows researchers to combine and compare results from studies that measured the same construct using different scales or instruments. For example, if multiple studies examined the effect of a supplement on anxiety using different anxiety questionnaires, SMD allows all these results to be pooled into a single analysis.

SMD is interpreted using effect size conventions established by Cohen: small effect (SMD = 0.2), medium effect (SMD = 0.5), and large effect (SMD = 0.8 or higher). A positive SMD typically indicates the intervention group performed better than the control group, while a negative SMD favors the control. However, the direction can vary depending on how outcomes are measured—for example, when measuring anxiety or depression, a negative SMD might indicate improvement (lower scores = less symptoms).

SMD is particularly valuable in systematic reviews and meta-analyses where multiple studies investigate the same question but use different measurement tools. It provides a common metric for synthesizing evidence across diverse studies. When reading research, SMD helps quantify not just whether an effect exists (statistical significance) but how large and meaningful that effect is (clinical significance). SMDs should be interpreted alongside confidence intervals to understand the precision and reliability of the estimate."
      examples={[
        "In ashwagandha research, an SMD of -0.63 for stress reduction indicates a medium-to-large beneficial effect, with lower stress scores in the treatment group",
        "A meta-analysis showing magnesium reduced depression with SMD = -0.71 suggests a large effect size, indicating substantial improvement compared to placebo",
        "When comparing studies using different cognitive tests, SMD allows researchers to determine the overall effect of a supplement on cognition despite varied assessment methods"
      ]}
      relatedTerms={[
        { term: "Hedges' g", key: "hedgesg" },
        { term: "Meta-Analysis", key: "metaanalysis" },
        { term: "Statistical Significance", key: "statisticalsignificance" },
        { term: "Clinical Significance", key: "clinicalsignificance" },
        { term: "Effect Size", key: "effectsize" }
      ]}
    />
  );
}
