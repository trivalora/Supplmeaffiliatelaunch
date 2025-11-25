import { GlossaryTemplate } from '../GlossaryTemplate';

export function TNFAlphaPage() {
  return (
    <GlossaryTemplate
      term="Tumor Necrosis Factor-Alpha"
      abbreviation="TNF-α"
      definition="A potent pro-inflammatory cytokine produced primarily by macrophages and adipose tissue that regulates immune responses, inflammation, cell survival, and apoptosis, playing a central role in systemic and chronic inflammation."
      detailedExplanation="Tumor Necrosis Factor-alpha (TNF-α) is one of the most important inflammatory mediators in the body. Originally named for its ability to cause tumor necrosis in animal models, TNF-α is now recognized as a master regulator of inflammation with wide-ranging effects on metabolism, immune function, and tissue homeostasis. It's produced mainly by activated macrophages but also by adipose tissue (fat cells), which explains why obesity is associated with elevated TNF-α and chronic inflammation.

TNF-α triggers inflammatory cascades by binding to cell surface receptors (TNFR1 and TNFR2), leading to activation of NF-κB and other inflammatory pathways. This results in production of additional cytokines (IL-1, IL-6), adhesion molecules, and inflammatory mediators, amplifying the inflammatory response. While essential for fighting infections and healing injuries, chronically elevated TNF-α contributes to insulin resistance, atherosclerosis, muscle wasting, bone loss, and various autoimmune and inflammatory diseases.

Normal serum TNF-α levels are typically very low (&lt;8.1 pg/mL) in healthy individuals. Elevated levels are associated with metabolic syndrome, type 2 diabetes, cardiovascular disease, rheumatoid arthritis, inflammatory bowel disease, and other chronic inflammatory conditions. In supplement research, TNF-α is a key biomarker for assessing anti-inflammatory effects. Omega-3 fatty acids, curcumin, vitamin D, probiotics, and various polyphenols have been studied for their ability to reduce TNF-α levels.

The success of TNF-α blocking drugs (like infliximab, adalimumab, etanercept) in treating autoimmune diseases demonstrates the critical role of TNF-α in inflammatory pathology. Supplements that effectively reduce TNF-α may offer similar but milder anti-inflammatory benefits. When interpreting research, consider baseline TNF-α levels, as populations with higher baseline inflammation typically show greater response to intervention."
      examples={[
        "A meta-analysis might show that omega-3 supplementation reduced TNF-α by -0.36 pg/mL (95% CI -0.68 to -0.04) across multiple studies",
        "In obesity studies, TNF-α might decrease from 12.5 pg/mL at baseline to 8.7 pg/mL after curcumin supplementation, indicating reduced inflammation",
        "Studies examining probiotic effects often report standardized mean differences in TNF-α (SMD = -0.52) rather than absolute changes due to assay variability"
      ]}
      relatedTerms={[
        { term: "Inflammation", key: "inflammation" },
        { term: "IL-6", key: "il6" },
        { term: "IL-1", key: "il1" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Insulin Resistance", key: "insulinresistance" }
      ]}
      currentPage="tnfalpha"
    />
  );
}
