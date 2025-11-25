import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function InflammationPage() {
  return (
    <GlossaryTemplate
      term="Inflammation"
      definition="The body's natural immune response to injury, infection, or harmful stimuli, characterized by increased blood flow, immune cell activity, and the release of signaling molecules called cytokines."
      
      detailedExplanation="Inflammation serves as the body's protective mechanism to remove harmful stimuli and initiate healing. Acute inflammation is typically short-lived (hours to days) and resolves once the threat is eliminated—such as redness and swelling after a cut or during infection recovery. This type of inflammation is beneficial and necessary for survival.

Chronic inflammation occurs when the inflammatory response persists for months or years, often without an obvious external threat. This sustained activation can damage healthy tissues and is implicated in numerous diseases including cardiovascular disease, type 2 diabetes, arthritis, Alzheimer's disease, and certain cancers. Chronic inflammation can result from ongoing infections, autoimmune disorders, prolonged exposure to irritants, obesity, poor diet, stress, or lack of physical activity.

Inflammation is measured through biomarkers such as C-reactive protein (CRP), interleukin-6 (IL-6), and tumor necrosis factor-alpha (TNF-α). Elevated levels of these markers in blood tests indicate active inflammatory processes. Many supplements and lifestyle interventions aim to reduce chronic inflammation by modulating these inflammatory pathways without suppressing the acute immune responses needed for fighting infections and healing injuries."
      
      examples={[
        "Curcumin supplementation reduced C-reactive protein by 1.55 mg/L, interleukin-6 by 1.69 pg/mL, and tumor necrosis factor-α by 3.13 pg/mL in populations with chronic inflammation",
        "Magnesium reduces serum CRP (SMD -0.356) in individuals with baseline CRP &gt;3 mg/L, demonstrating anti-inflammatory effects",
        "Omega-3 fatty acids (EPA and DHA) reduce pro-inflammatory cytokines and increase anti-inflammatory mediators called resolvins"
      ]}
      
      relatedTerms={[
        { term: "Biomarker", key: "biomarker" },
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Clinical Significance", key: "clinicalsignificance" }
      ]}
      currentPage="inflammation"
    />
  );
}
