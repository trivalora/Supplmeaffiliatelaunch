import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function MetabolismPage() {
  return (
    <GlossaryTemplate
      term="Metabolism"
      definition="The sum of all chemical reactions in the body that convert nutrients into energy and building blocks for growth, repair, and maintenance of tissues. Includes both catabolic (breakdown) and anabolic (synthesis) processes."
      
      detailedExplanation="Metabolism encompasses thousands of coordinated chemical reactions organized into metabolic pathways. Catabolism breaks down molecules (carbohydrates, fats, proteins) to release energy stored in chemical bonds, producing ATP (adenosine triphosphate)—the cell's energy currency. Anabolism uses energy and simple molecules to build complex structures like proteins, nucleic acids, and cell membranes. These processes are tightly regulated by enzymes, hormones, and cellular signals to maintain homeostasis.

Metabolic rate—often measured as basal metabolic rate (BMR) or resting metabolic rate (RMR)—represents the energy expenditure needed for basic physiological functions like breathing, circulation, temperature regulation, and cellular processes. Total daily energy expenditure includes BMR plus activity and thermogenesis. Metabolic rate varies based on age, sex, body composition (muscle burns more calories than fat), genetics, hormones (thyroid hormones strongly influence metabolism), activity level, diet composition, and environmental temperature.

Metabolic health refers to the body's ability to efficiently process and utilize nutrients, maintain stable blood sugar and lipid levels, and respond appropriately to insulin signaling. Poor metabolic health (metabolic syndrome) involves insulin resistance, elevated blood pressure, abnormal cholesterol, and increased waist circumference. Supplements and lifestyle interventions can influence metabolic pathways—for example, magnesium supports glucose metabolism, omega-3s affect lipid metabolism, and creatine enhances energy metabolism in muscles and brain."
      
      examples={[
        "Magnesium acts as a cofactor in over 300 enzymatic reactions involved in energy metabolism, protein synthesis, and glucose control",
        "Creatine supports energy metabolism by regenerating ATP during high-intensity activities, allowing rapid energy availability",
        "Iron is essential for energy metabolism as a component of cytochromes in the electron transport chain that produces ATP"
      ]}
      
      relatedTerms={[
        { term: "Insulin Resistance", key: "insulinresistance" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Absorption", key: "absorption" }
      ]}
      currentPage="metabolism"
    />
  );
}
