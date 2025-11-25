import { GlossaryTemplate } from '../GlossaryTemplate';

export function SubgroupAnalysisPage() {
  return (
    <GlossaryTemplate
      term="Subgroup Analysis"
      definition="An examination of treatment effects within specific subsets of a study population, such as by age, sex, or baseline health status."
      detailedExplanation="Subgroup analysis involves analyzing whether a treatment has different effects in specific groups of participants within a larger study. Researchers might examine whether a supplement works better in men versus women, in older versus younger adults, or in people with certain health conditions versus healthy individuals.

Subgroup analyses are valuable because they can reveal important differences in how people respond to supplements. For example, vitamin D supplementation might be more effective in people with low baseline vitamin D levels than in those with adequate levels. Or calcium supplements might provide greater benefits for postmenopausal women than for younger adults.

However, subgroup analyses must be interpreted cautiously. They are often exploratory and can produce false-positive findings, especially when many subgroups are examined. The most reliable subgroup findings are those that were pre-specified before the study began and are confirmed in multiple independent studies."
      examples={[
        "Analyzing whether omega-3 supplements are more effective for heart health in people over 65 compared to younger adults.",
        "Examining if vitamin D supplementation has different effects on bone health in men versus women.",
        "Investigating whether probiotic benefits differ between people with and without digestive disorders."
      ]}
      relatedTerms={[
        { term: "RCT", key: "rct" },
        { term: "Meta-Analysis", key: "metaanalysis" },
        { term: "Statistical Significance", key: "statisticalsignificance" }
      ]}
    />
  );
}
