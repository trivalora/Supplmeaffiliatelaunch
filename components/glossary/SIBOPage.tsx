import { GlossaryTemplate } from '../GlossaryTemplate';

interface SIBOPageProps {
  onNavigate?: (key: string) => void;
}

export function SIBOPage({ onNavigate }: SIBOPageProps) {
  return (
    <GlossaryTemplate
      term="Small Intestinal Bacterial Overgrowth"
      abbreviation="SIBO"
      onNavigate={onNavigate}
      currentPage="sibo"
      definition="A condition characterized by excessive bacterial colonization of the small intestine (typically &gt;10³ colony-forming units per mL of jejunal aspirate or positive breath test), causing malabsorption, bloating, diarrhea, and other gastrointestinal symptoms."
      detailedExplanation="Small Intestinal Bacterial Overgrowth (SIBO) occurs when bacteria that normally reside predominantly in the colon proliferate abnormally in the small intestine. The small intestine typically maintains relatively low bacterial counts through mechanisms including gastric acid, bile salts, pancreatic enzymes, intestinal motility (especially the migrating motor complex), and the ileocecal valve. When these protective mechanisms fail, bacterial overgrowth can develop.

SIBO is classified by the predominant gas produced during bacterial fermentation: hydrogen-SIBO, methane-SIBO (now sometimes called intestinal methanogen overgrowth or IMO), or hydrogen sulfide-SIBO. The gas type influences symptoms: hydrogen-SIBO often causes diarrhea, methane-SIBO typically causes constipation, and hydrogen sulfide-SIBO may cause diarrhea with characteristic sulfurous belching.

Risk factors include conditions that slow motility (diabetes, scleroderma, hypothyroidism), structural abnormalities (diverticula, surgical blind loops, strictures), reduced gastric acid (chronic PPI use, atrophic gastritis), pancreatic insufficiency, and immune deficiency. There's significant overlap between SIBO and IBS, with studies reporting 4-78% SIBO prevalence in IBS patients (wide range reflects diagnostic variability).

Diagnosis is challenging. The gold standard is jejunal aspirate culture (>10³ CFU/mL), but this is invasive and rarely performed. Instead, breath tests measuring hydrogen and methane after lactulose or glucose ingestion are commonly used, though specificity and sensitivity are debated. Interpretation criteria vary, and false positives/negatives occur.

Treatment typically involves antibiotics (rifaximin is most studied, with 40-50% symptom improvement), sometimes combined with neomycin or metronidazole for methane-dominant SIBO. Dietary modifications (low fermentation diet, specific carbohydrate diet), prokinetics to restore motility, and addressing underlying causes are important. Probiotics' role is controversial—some evidence suggests benefit, but certain strains might theoretically worsen overgrowth. Herbal antimicrobials are studied as alternatives. Relapse rates are high (12-44% within 3-6 months), often necessitating maintenance strategies."
      examples={[
        "Patient with chronic diarrhea and bloating has positive lactulose breath test (hydrogen rise &gt;20 ppm within 90 minutes), responds to rifaximin treatment",
        "Meta-analysis shows rifaximin treatment leads to 50-70% breath test normalization and 40-50% symptom improvement in SIBO patients",
        "Person with constipation-predominant IBS has methane level &gt;10 ppm on breath test, suggesting IMO contributing to symptoms"
      ]}
      relatedTerms={[
        { term: "IBS (Irritable Bowel Syndrome)", key: "ibs" },
        { term: "Gut Microbiome", key: "gutmicrobiome" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Absorption", key: "absorption" }
      ]}
    />
  );
}
