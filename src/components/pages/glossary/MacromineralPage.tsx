'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Pill, TrendingUp, Droplet } from 'lucide-react';

export function MacromineralPage() {
  return (
    <GlossaryTemplate
      term="Macromineral"
      pronunciation="mak-roh-min-er-ul"
      definition="Macrominerals (also called major minerals) are essential minerals required by the body in relatively large amounts—typically more than 100 milligrams per day. They include calcium, phosphorus, magnesium, sodium, potassium, chloride, and sulfur."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Macrominerals are distinguished from trace minerals (microminerals) based on the amount needed by the body. While both are essential for health, macrominerals are required in gram quantities (or at least hundreds of milligrams) per day, whereas trace minerals are needed in much smaller amounts (typically less than 100 mg per day).
          </p>
          <p className="mb-4">
            <strong>The seven macrominerals and their primary functions:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Calcium (Ca):</strong> Most abundant mineral in the body. Essential for bone and teeth structure, muscle contraction, nerve signaling, blood clotting, and cellular signaling. RDA: 1,000-1,300 mg/day. Found in dairy, leafy greens, fortified foods.
            </li>
            <li>
              <strong>Phosphorus (P):</strong> Second most abundant mineral. Component of bones, teeth, DNA, RNA, ATP (energy). Involved in acid-base balance and cell membranes. RDA: 700 mg/day. Found in meat, dairy, nuts, legumes.
            </li>
            <li>
              <strong>Magnesium (Mg):</strong> Cofactor for 300+ enzymes. Involved in energy production, protein synthesis, muscle and nerve function, blood pressure regulation, glucose control. RDA: 310-420 mg/day. Found in nuts, seeds, whole grains, leafy greens.
            </li>
            <li>
              <strong>Sodium (Na):</strong> Major extracellular electrolyte. Regulates fluid balance, blood pressure, nerve impulses, muscle contraction. Adequate intake: 1,500 mg/day; upper limit: 2,300 mg/day. Found in salt, processed foods.
            </li>
            <li>
              <strong>Potassium (K):</strong> Major intracellular electrolyte. Regulates fluid balance, nerve signals, muscle contractions, heart rhythm, blood pressure. RDA: 2,600-3,400 mg/day. Found in fruits, vegetables, potatoes, beans.
            </li>
            <li>
              <strong>Chloride (Cl):</strong> Major extracellular electrolyte (pairs with sodium). Maintains fluid balance, produces stomach acid (HCl), nerve function. Adequate intake: 2,300 mg/day. Found in salt, seaweed, tomatoes.
            </li>
            <li>
              <strong>Sulfur (S):</strong> Component of amino acids (methionine, cysteine), vitamins (thiamin, biotin), antioxidants (glutathione). No RDA established—obtained from protein. Found in meat, fish, eggs, legumes.
            </li>
          </ul>
          <p className="mb-4">
            Unlike vitamins, minerals are inorganic elements that cannot be destroyed by heat, light, or chemical reactions during cooking or storage. However, they can be leached into cooking water or lost through food processing.
          </p>
          <p className="mb-4">
            <strong>Deficiency risks:</strong> While rare in developed countries for most macrominerals, certain populations are at risk. Low calcium and magnesium intakes are relatively common. Sodium deficiency is rare (excess is the typical concern). Potassium intake is often below recommended levels.
          </p>
          <p className="mb-4">
            <strong>Supplementation considerations:</strong> Calcium and magnesium are commonly supplemented. Sodium, potassium, and chloride are usually obtained from diet (electrolyte supplements for athletes). Phosphorus and sulfur deficiency are extremely rare in those eating adequate protein.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Pill, 
          title: "Required in Large Amounts", 
          description: "Macrominerals are needed in quantities greater than 100 mg per day, distinguishing them from trace minerals. The body requires gram quantities of some macrominerals daily." 
        },
        { 
          icon: TrendingUp, 
          title: "Essential for Major Body Functions", 
          description: "Macrominerals play critical roles in bone structure, muscle contraction, nerve function, fluid balance, energy production, and maintaining pH balance. Deficiencies can significantly impact health." 
        },
        { 
          icon: Droplet, 
          title: "Seven Major Minerals", 
          description: "The seven macrominerals are calcium, phosphorus, magnesium, sodium, potassium, chloride, and sulfur. Each has specific functions but they often work together (e.g., electrolyte balance, bone health)." 
        }
      ]}
      
      currentPage="macromineral"

      
      relatedTerms={['mineral', 'electrolytes', 'bioavailability', 'absorption']}
    />
  );
}
