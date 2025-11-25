import { GlossaryTemplate } from '../GlossaryTemplate';

export function IL6Page() {
  return (
    <GlossaryTemplate
      term="Interleukin-6"
      abbreviation="IL-6"
      definition="A pro-inflammatory cytokine produced by immune cells, muscle tissue, and fat cells that plays a dual role in immune response and chronic inflammation, commonly measured as a biomarker of systemic inflammation."
      detailedExplanation="Interleukin-6 (IL-6) is a signaling protein (cytokine) with complex functions in the body. During acute inflammation or infection, IL-6 is rapidly released by immune cells to help coordinate the immune response, promote fever, and stimulate the production of acute phase proteins like C-reactive protein (CRP). However, chronically elevated IL-6 is associated with numerous health problems including cardiovascular disease, diabetes, obesity, autoimmune conditions, and age-related decline.

Normal serum IL-6 levels are typically less than 5-7 pg/mL in healthy adults, though reference ranges vary by laboratory and population. Levels can spike dramatically during acute illness but should return to baseline once the condition resolves. Persistently elevated IL-6 indicates chronic low-grade inflammation, which is linked to metabolic dysfunction and increased disease risk.

In supplement research, IL-6 is frequently measured as an outcome to assess anti-inflammatory effects. Omega-3 fatty acids, curcumin, vitamin D, probiotics, and various antioxidants have been studied for their ability to reduce IL-6 levels. Reductions in IL-6 may indicate decreased systemic inflammation and improved metabolic health, though the clinical significance depends on baseline levels and the magnitude of change.

IL-6 can also increase temporarily after exercise, where it serves beneficial metabolic functions rather than indicating harmful inflammation. This context-dependent nature of IL-6 makes interpretation complex—the same elevated IL-6 level might be beneficial (post-exercise) or harmful (chronic elevation). When evaluating research, consider baseline IL-6 levels, the population studied, and whether changes represent acute or chronic patterns."
      examples={[
        "A meta-analysis might report that curcumin supplementation reduced IL-6 by -1.12 pg/mL (95% CI -1.92 to -0.33) in people with metabolic syndrome",
        "Baseline IL-6 of 8.5 pg/mL decreasing to 5.2 pg/mL after omega-3 supplementation indicates reduced chronic inflammation",
        "Studies often show greater IL-6 reductions in populations with elevated baseline inflammation (e.g., obesity, diabetes) compared to healthy individuals"
      ]}
      relatedTerms={[
        { term: "Inflammation", key: "inflammation" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Antioxidant", key: "antioxidant" }
      ]}
      currentPage="il6"
    />
  );
}
