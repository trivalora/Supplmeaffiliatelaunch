import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function ImmuneSystemPage() {
  return (
    <GlossaryTemplate
      term="Immune System"
      definition="The body's defense network of cells, tissues, and organs that protect against pathogens, foreign substances, and abnormal cells, comprising both innate and adaptive immune responses."
      detailedExplanation="The immune system consists of two main components: the innate immune system (first line of defense including physical barriers like skin, and cells like neutrophils and macrophages that respond quickly but non-specifically) and the adaptive immune system (specialized responses involving B cells that produce antibodies and T cells that kill infected cells or coordinate immune responses). These systems work together to detect and eliminate threats while avoiding attacks on the body's own cells.

Immune function can be assessed through various biomarkers including white blood cell counts, immunoglobulin levels, inflammatory markers (CRP, IL-6), and functional tests measuring immune cell activity. A balanced immune system is crucial—too little activity increases infection and cancer risk, while excessive or misdirected activity causes autoimmune diseases, allergies, and chronic inflammation.

Numerous factors affect immune function including nutrition (vitamins C, D, A, zinc, selenium, protein), sleep quality and duration, physical activity level, stress, age, gut microbiome health, and chronic health conditions. Certain supplements may support immune function, particularly vitamin D, vitamin C, zinc, and probiotics, though claims often exceed evidence. A healthy lifestyle remains the foundation of good immune health."
      examples={[
        "Vitamin D sufficiency (blood levels 30-50 ng/mL) supports immune cell function and may reduce respiratory infection risk",
        "Zinc supplementation (75-100mg daily at symptom onset) may reduce common cold duration by approximately one day",
        "Chronic sleep deprivation (less than 6 hours nightly) significantly impairs immune function and increases infection susceptibility"
      ]}
      relatedTerms={[
        { term: "Inflammation", key: "inflammation" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Clinical Significance", key: "clinicalsignificance" }
      ]}
      currentPage="immunesystem"
    />
  );
}
