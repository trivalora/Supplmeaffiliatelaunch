import { GlossaryTemplate } from '../GlossaryTemplate';

export function HomocysteinePage() {
  return (
    <GlossaryTemplate
      term="Homocysteine"
      definition="An amino acid produced during the metabolism of methionine that, when elevated in the blood, is associated with increased risk of cardiovascular disease and other health problems."
      detailedExplanation="Homocysteine is an intermediate product in the metabolism of the essential amino acid methionine. Under normal conditions, homocysteine is quickly converted to other beneficial compounds through pathways requiring vitamins B6, B12, and folate. When these vitamins are deficient or when genetic variations affect these pathways, homocysteine accumulates in the blood—a condition called hyperhomocysteinemia.

Elevated homocysteine levels are associated with increased cardiovascular disease risk, including atherosclerosis, heart attack, and stroke. High homocysteine may damage blood vessel walls, promote blood clot formation, and contribute to oxidative stress and inflammation. Normal homocysteine levels are typically below 15 micromol/L, with levels above this threshold considered elevated and potentially concerning.

B-vitamin supplementation, particularly with folate, vitamin B12, and vitamin B6, can effectively lower homocysteine levels. However, clinical trials have shown mixed results regarding whether lowering homocysteine through supplementation actually reduces cardiovascular events, suggesting that elevated homocysteine may be a marker of risk rather than a direct cause. Nonetheless, maintaining adequate B-vitamin status appears beneficial for overall health."
      examples={[
        "Folate (folic acid) supplementation can reduce homocysteine levels by 25% or more in individuals with elevated baseline levels",
        "Vitamin B12 deficiency is a common cause of elevated homocysteine, particularly in older adults and vegetarians/vegans",
        "Genetic variations in the MTHFR gene affect homocysteine metabolism and may require higher folate intake to maintain normal levels"
      ]}
      relatedTerms={[
        { term: "Cardiovascular", key: "cardiovascular" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Metabolism", key: "metabolism" }
      ]}
      currentPage="homocysteine"
    />
  );
}
