import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function PlasmaPage() {
  return (
    <GlossaryTemplate
      term="Plasma"
      definition="The liquid component of blood obtained by centrifuging blood collected with anticoagulants. It contains water, electrolytes, nutrients, hormones, proteins (including clotting factors like fibrinogen), antibodies, and waste products. Plasma makes up about 55% of total blood volume."
      
      detailedExplanation="Composition:

Plasma consists of:
• ~90% Water
• ~7% Proteins (albumin, globulins, fibrinogen)
• ~1% Electrolytes, nutrients, hormones
• &lt;1% Gases, waste products

Plasma vs. Serum:

Characteristic | Plasma | Serum
Clotting | Prevented (anticoagulant used) | Allowed to occur
Fibrinogen | Present | Absent
Volume | Slightly more (includes clotting factors) | Slightly less
Processing Time | Faster (15-20 minutes) | Slower (30-60 minutes)
Preferred For | Coagulation studies, urgent tests | Most routine chemistry tests

Use in Supplement Research:

Plasma is commonly used to measure:
• Plasma amino acid profiles (post-protein supplementation)
• Plasma glucose and insulin (metabolic studies)
• Plasma omega-3 fatty acid levels
• Plasma antioxidant capacity
• Plasma concentrations of supplements after absorption
• Plasma vitamin K (clotting factor studies)

Common Anticoagulants:

EDTA (Purple/Lavender top tube):
Used for hematology tests and some chemistry tests

Heparin (Green top tube):
Used for many chemistry and molecular tests

Citrate (Light blue top tube):
Used for coagulation studies"
      
      exampleContext="Plasma samples were collected at baseline and 1, 2, 4, and 6 hours post-supplementation. Plasma leucine concentrations peaked at 90 minutes (mean ± SD: 287 ± 43 µmol/L) and returned to baseline by 6 hours."
      
      relatedTerms={[
        { term: "Serum", key: "serum" },
        { term: "Biomarker", key: "biomarker" }
      ]}
      currentPage="plasma"
    />
  );
}
