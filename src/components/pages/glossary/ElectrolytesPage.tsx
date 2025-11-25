import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function ElectrolytesPage() {
  return (
    <GlossaryTemplate
      term="Electrolytes"
      definition="Minerals in the blood and body fluids that carry an electrical charge, essential for nerve function, muscle contraction, hydration, pH balance, and numerous other physiological processes."
      detailedExplanation="The major electrolytes include sodium, potassium, chloride, calcium, magnesium, bicarbonate, and phosphate. These minerals exist as ions (charged particles) in body fluids and must be maintained within narrow ranges for proper cellular function. Electrolytes regulate fluid balance between intracellular and extracellular compartments, enable nerve impulse transmission, trigger muscle contractions (including the heartbeat), maintain blood pH, support enzyme activity, and facilitate nutrient transport across cell membranes.

Electrolyte imbalances can be caused by dehydration, excessive sweating, vomiting, diarrhea, kidney disease, certain medications (diuretics), hormonal disorders, or inadequate dietary intake. Symptoms vary by which electrolyte is imbalanced but may include muscle cramps, weakness, fatigue, irregular heartbeat, confusion, seizures, or in severe cases, life-threatening cardiac or neurological complications.

Maintaining electrolyte balance involves adequate hydration, consuming a varied diet rich in fruits, vegetables, whole grains, and minerals, and replacing electrolytes lost during prolonged exercise or illness. Most healthy individuals eating a balanced diet don't require electrolyte supplements, though athletes during endurance events, people in hot climates, or those with certain medical conditions may benefit. Sports drinks, electrolyte powders, or specific mineral supplements can restore electrolyte balance when needed."
      examples={[
        "Magnesium supplementation (300-400mg daily) can alleviate muscle cramps and support heart rhythm in people with low magnesium status",
        "During prolonged exercise exceeding 60-90 minutes, consuming electrolyte-containing beverages helps maintain performance and prevents hyponatremia",
        "Potassium-rich foods (bananas, sweet potatoes, spinach) help counterbalance high sodium intake and support healthy blood pressure"
      ]}
      relatedTerms={[
        { term: "Biomarker", key: "biomarker" },
        { term: "Cardiovascular", key: "cardiovascular" },
        { term: "Metabolism", key: "metabolism" }
      ]}
      currentPage="electrolytes"
    />
  );
}
