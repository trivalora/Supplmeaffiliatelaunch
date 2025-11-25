import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function VitaminDeficiencyPage() {
  return (
    <GlossaryTemplate
      term="Vitamin Deficiency"
      definition="An insufficient level of one or more essential vitamins in the body, resulting from inadequate dietary intake, poor absorption, increased requirements, or excessive losses, leading to various health problems."
      detailedExplanation="Vitamin deficiencies occur when vitamin intake or absorption fails to meet the body's needs. Vitamins are organic compounds required in small amounts for normal metabolism, growth, and health maintenance. They function as cofactors for enzymes, antioxidants, hormone precursors, and gene regulators. Deficiencies can be primary (inadequate dietary intake) or secondary (adequate intake but impaired absorption, increased needs, or excessive losses).

Common vitamin deficiencies worldwide include vitamin D (affecting bone health, immune function), vitamin B12 (causing anemia and neurological problems, particularly in older adults and vegetarians), folate (linked to anemia and birth defects), vitamin A (leading to vision problems and immune dysfunction), and vitamin C (causing scurvy with bleeding gums and poor wound healing). Even in developed countries, subclinical deficiencies are surprisingly common, often causing subtle symptoms like fatigue, poor concentration, or frequent infections before progressing to overt disease.

Diagnosis involves blood tests measuring vitamin levels and assessing functional markers. Treatment typically involves supplementation along with addressing underlying causes. Some populations at higher risk include older adults (reduced absorption, limited sun exposure), pregnant women (increased requirements), people with malabsorption disorders (celiac disease, Crohn's disease), those on restricted diets (vegans, extreme dieters), and individuals taking certain medications that interfere with vitamin absorption or metabolism."
      examples={[
        "Vitamin D deficiency (levels below 20 ng/mL) affects an estimated 40% of US adults, impacting bone health, immune function, and mood",
        "Vitamin B12 deficiency is common in older adults due to reduced stomach acid production and in vegans due to lack of dietary sources",
        "Folate deficiency during early pregnancy significantly increases risk of neural tube defects, which is why folic acid supplementation is recommended"
      ]}
      relatedTerms={[
        { term: "Biomarker", key: "biomarker" },
        { term: "Absorption", key: "absorption" },
        { term: "Bioavailability", key: "bioavailability" }
      ]}
      currentPage="vitamindeficiency"
    />
  );
}
