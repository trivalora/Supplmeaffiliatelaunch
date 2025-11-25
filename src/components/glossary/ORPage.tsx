import { GlossaryTemplate } from '../GlossaryTemplate';

export function ORPage() {
  return (
    <GlossaryTemplate
      term="Odds Ratio"
      abbreviation="OR"
      definition="A statistical measure that quantifies the odds of an outcome occurring in one group relative to the odds in another group, commonly used in case-control studies and logistic regression analyses."
      detailedExplanation="Odds Ratio (OR) compares the odds of an event in the treatment group to the odds in the control group. Unlike Risk Ratio which uses probabilities, OR uses odds—calculated as the probability of an event occurring divided by the probability of it not occurring. An OR of 1.0 indicates no difference between groups. An OR greater than 1.0 suggests increased odds in the treatment group, while an OR less than 1.0 suggests decreased odds.

For example, an OR of 0.28 for heart failure hospitalization means the odds of hospitalization in the treatment group are 28% of the odds in the control group. While this might seem similar to Risk Ratio, odds and risk are mathematically different. When the outcome is rare (occurs less than 10% of the time), OR approximates RR closely. However, as outcomes become more common, OR tends to overestimate the effect size compared to RR.

Odds Ratio is particularly useful in case-control studies where you cannot directly calculate risk because you don't know the total population at risk. It's also the primary measure in logistic regression analyses. In meta-analyses, OR is sometimes preferred for combining results across different study designs.

When interpreting OR in supplement research, be aware that ORs can appear more dramatic than RRs, especially for common outcomes. For instance, reducing an outcome from 50% to 33% yields an RR of 0.67 but an OR of 0.50. Both are valid measures, but OR should not be interpreted as if it were RR. Always check whether the reported measure is OR or RR, and consider the baseline rate of the outcome when assessing clinical significance."
      examples={[
        "In heart failure with iron deficiency, OR = 0.28 for hospitalization means patients receiving iron have 72% lower odds of hospitalization than controls",
        "An OR of 2.5 for adverse events would indicate the treatment group has 2.5 times the odds of experiencing adverse events compared to placebo",
        "In case-control studies of vitamin D deficiency and disease outcomes, OR quantifies the association when prospective risk calculations aren't possible"
      ]}
      relatedTerms={[
        { term: "Risk Ratio", key: "rr" },
        { term: "Meta-Analysis", key: "metaanalysis" },
        { term: "Statistical Significance", key: "statisticalsignificance" },
        { term: "Clinical Significance", key: "clinicalsignificance" }
      ]}
      currentPage="or"
    />
  );
}
