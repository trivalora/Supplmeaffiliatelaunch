import { GlossaryTemplate } from '../GlossaryTemplate';

export function OxidativeStressPage() {
  return (
    <GlossaryTemplate
      term="Oxidative Stress"
      definition="An imbalance between the production of reactive oxygen species (free radicals) and the body's ability to neutralize them with antioxidants, leading to cellular damage."
      
      detailedExplanation="Oxidative stress occurs when free radicals—highly reactive molecules with unpaired electrons—accumulate faster than the body's antioxidant defense systems can neutralize them. Free radicals are normal byproducts of cellular metabolism, particularly energy production in mitochondria, but their levels increase with exposure to pollution, radiation, cigarette smoke, certain foods, and during intense exercise or inflammation.

When unchecked, free radicals damage cellular components including DNA, proteins, and lipid membranes. This damage accumulates over time and contributes to aging and chronic diseases such as cardiovascular disease, neurodegenerative disorders, cancer, and diabetes. Lipid peroxidation—the oxidative degradation of fats in cell membranes—is particularly damaging and measured through markers like malondialdehyde (MDA).

The body maintains several antioxidant defense mechanisms including enzymes (superoxide dismutase, catalase, glutathione peroxidase) and molecules from diet (vitamins C and E, polyphenols, carotenoids). Measuring oxidative stress involves assessing both oxidative damage markers (MDA, 8-OHdG) and antioxidant capacity. Reducing oxidative stress through diet, supplements, and lifestyle can protect cellular health and potentially slow disease progression."
      
      examples={[
        "Curcumin supplementation decreased malondialdehyde (MDA) levels with SMD -0.46, indicating reduced lipid peroxidation and oxidative damage",
        "Vitamin C neutralizes free radicals directly and regenerates vitamin E, providing comprehensive antioxidant protection",
        "Excessive iron supplementation can increase oxidative stress by promoting free radical formation through the Fenton reaction"
      ]}
      
      relatedTerms={[
        { term: "Antioxidant", key: "antioxidant" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Inflammation", key: "inflammation" }
      ]}
      currentPage="oxidativestress"
    />
  );
}
