import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function BiomarkerPage() {
  return (
    <GlossaryTemplate
      term="Biomarker"
      definition="A measurable biological indicator that reflects normal biological processes, disease states, or responses to therapeutic interventions. Biomarkers can be measured in blood, urine, tissues, or other biological samples."
      
      expandedExplanation={
        <>
          <p>
            Biomarkers serve as objective, quantifiable indicators of biological or pathological processes. They can indicate disease risk (risk biomarkers), confirm disease presence (diagnostic biomarkers), predict disease progression (prognostic biomarkers), or assess treatment effectiveness (pharmacodynamic biomarkers). Common types include proteins, hormones, enzymes, metabolites, genes, or even physiological measurements like blood pressure.
          </p>
          <p>
            In supplement research, biomarkers play a crucial role in establishing efficacy and mechanisms of action. For example, inflammatory biomarkers (C-reactive protein, interleukin-6, tumor necrosis factor-α) measure immune system activation; lipid biomarkers (total cholesterol, LDL, HDL, triglycerides) assess cardiovascular risk; glucose metabolism biomarkers (fasting glucose, HbA1c, insulin) evaluate diabetes risk; and oxidative stress biomarkers (malondialdehyde, antioxidant enzyme levels) indicate cellular damage and protection.
          </p>
          <p>
            The value of a biomarker depends on its validity (does it accurately measure what it claims?), reliability (consistent results when repeated), sensitivity (detecting small changes), specificity (distinguishing between different conditions), and clinical relevance (does a change in the biomarker predict meaningful health outcomes?). Not all biomarker changes translate to clinical benefits—a supplement may improve a biomarker without necessarily improving actual health outcomes, which is why clinical endpoint studies remain important.
          </p>
        </>
      }
      
      examples={[
        "C-reactive protein (CRP) serves as an inflammatory biomarker; levels &gt;3 mg/L indicate elevated inflammation and increased cardiovascular risk",
        "Hemoglobin A1c (HbA1c) biomarker reflects average blood glucose levels over the past 2-3 months, used to diagnose and monitor diabetes",
        "Serum 25-hydroxyvitamin D measures vitamin D status, with levels below 20 ng/mL indicating deficiency"
      ]}
      
      currentPage="biomarker"

      
      relatedTerms={[
        { term: "Inflammation", key: "inflammation" },
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Clinical Significance", key: "clinicalsignificance" },
        { term: "Statistical Significance", key: "statisticalsignificance" }
      ]}
    />
  );
}
