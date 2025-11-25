import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function IL1Page() {
  return (
    <GlossaryTemplate
      term="Interleukin-1"
      abbreviation="IL-1"
      definition="A pro-inflammatory cytokine that exists in two primary forms (IL-1α and IL-1β) and plays a crucial role in initiating and amplifying inflammatory responses, fever, and immune cell activation."
      detailedExplanation="Interleukin-1 (IL-1) is one of the first cytokines to be released during inflammation or immune activation. It exists primarily as two forms: IL-1α (typically associated with localized inflammation) and IL-1β (the predominant circulating form). IL-1β is produced mainly by activated macrophages and monocytes in response to infection, injury, or inflammatory triggers. Once released, IL-1β triggers a cascade of inflammatory responses including fever, acute phase protein production, immune cell recruitment, and activation of other inflammatory pathways.

IL-1β production is tightly regulated through the inflammasome pathway. Inactive pro-IL-1β must be cleaved by caspase-1 to become active IL-1β. This regulation prevents excessive inflammation under normal conditions but can become dysregulated in chronic inflammatory states. Chronically elevated IL-1 is implicated in conditions like rheumatoid arthritis, inflammatory bowel disease, type 2 diabetes, atherosclerosis, and neurodegenerative diseases.

Normal circulating IL-1β levels are very low in healthy individuals (often &lt;1 pg/mL or undetectable), as IL-1 primarily acts locally at sites of inflammation. Detectable or elevated serum IL-1β indicates systemic inflammation. In supplement research, IL-1β is measured to assess anti-inflammatory effects. Omega-3 fatty acids, curcumin, probiotics, and various antioxidants have been studied for their ability to reduce IL-1β levels or inhibit IL-1 signaling pathways.

Therapeutic drugs that block IL-1 signaling (IL-1 receptor antagonists like anakinra, or IL-1β antibodies like canakinumab) have proven effective for certain inflammatory conditions, demonstrating IL-1's importance in disease pathology. When evaluating supplement research on IL-1, look for baseline inflammation status, as benefits are typically greater in populations with elevated baseline markers."
      examples={[
        "A study might report that curcumin supplementation reduced IL-1β by -2.54 pg/mL (95% CI -4.28 to -0.80) in patients with metabolic syndrome",
        "Meta-analyses examining omega-3 fatty acids often show significant reductions in IL-1β (SMD = -0.45) particularly in inflammatory conditions",
        "Baseline IL-1β of 5.8 pg/mL decreasing to 2.1 pg/mL after probiotic supplementation indicates reduced systemic inflammation"
      ]}
      relatedTerms={[
        { term: "Inflammation", key: "inflammation" },
        { term: "IL-6", key: "il6" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Oxidative Stress", key: "oxidativestress" }
      ]}
      currentPage="il1"
    />
  );
}
