import { GlossaryTemplate } from '../GlossaryTemplate';
import { Atom, Sparkles, TrendingUp } from 'lucide-react';

export function MineralPage() {
  return (
    <GlossaryTemplate
      term="Mineral"
      pronunciation="min-er-ul"
      definition="Minerals are inorganic chemical elements essential for various physiological functions in the human body. Unlike vitamins, minerals are not made by living organisms and must be obtained from diet or supplements. They remain unchanged during digestion and cannot be destroyed by heat or light."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Minerals are fundamental nutrients that the body cannot produce on its own. They originate from the earth and water, entering the food chain through plants that absorb them from soil and water, and animals that eat those plants. Approximately 4-5% of human body weight is composed of minerals.
          </p>
          <p className="mb-4">
            <strong>Classification of minerals:</strong>
          </p>
          <p className="mb-4">
            Minerals are categorized based on the amount required by the body:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Macrominerals (Major Minerals):</strong> Required in amounts greater than 100 mg per day. Includes calcium, phosphorus, magnesium, sodium, potassium, chloride, and sulfur. The body needs these in gram quantities.
            </li>
            <li>
              <strong>Trace Minerals (Microminerals):</strong> Required in amounts less than 100 mg per day. Includes iron, zinc, copper, manganese, iodine, selenium, fluoride, chromium, molybdenum, and others. Despite small quantities needed, they are equally essential.
            </li>
          </ul>
          <p className="mb-4">
            <strong>Key characteristics of minerals:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Inorganic:</strong> Do not contain carbon (unlike vitamins and other organic compounds)</li>
            <li><strong>Stable:</strong> Cannot be destroyed by heat, oxygen, or acid during cooking or storage</li>
            <li><strong>Elemental:</strong> Cannot be broken down into simpler substances</li>
            <li><strong>Interactive:</strong> Minerals can compete for absorption (e.g., calcium and iron) or work synergistically</li>
            <li><strong>Stored variably:</strong> Some minerals (like calcium) are stored in large amounts in bones; others have minimal storage</li>
          </ul>
          <p className="mb-4">
            <strong>Major functions of minerals:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Structural:</strong> Building bones and teeth (calcium, phosphorus, magnesium, fluoride)</li>
            <li><strong>Regulatory:</strong> Enzyme cofactors, hormone components, nerve transmission, muscle contraction</li>
            <li><strong>Fluid balance:</strong> Maintaining proper hydration and pH (sodium, potassium, chloride)</li>
            <li><strong>Oxygen transport:</strong> Component of hemoglobin (iron)</li>
            <li><strong>Antioxidant function:</strong> Component of antioxidant enzymes (selenium, zinc, copper, manganese)</li>
            <li><strong>Immune function:</strong> Support immune cell function (zinc, selenium, iron)</li>
            <li><strong>Thyroid function:</strong> Thyroid hormone synthesis (iodine, selenium)</li>
          </ul>
          <p className="mb-4">
            <strong>Mineral bioavailability:</strong> Not all minerals consumed are absorbed equally. Bioavailability depends on:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Chemical form (e.g., heme iron vs. non-heme iron)</li>
            <li>Presence of enhancers (vitamin C enhances iron absorption)</li>
            <li>Presence of inhibitors (phytates, oxalates reduce mineral absorption)</li>
            <li>Individual nutritional status (deficiency increases absorption)</li>
            <li>Interactions with other minerals (calcium inhibits iron and zinc absorption)</li>
          </ul>
          <p className="mb-4">
            Both deficiency and excess of minerals can cause health problems. Mineral deficiencies can lead to various conditions (iron deficiency anemia, iodine deficiency goiter, zinc deficiency impaired immunity). Excessive intake, particularly from supplements, can cause toxicity for some minerals.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Atom, 
          title: "Inorganic Essential Elements", 
          description: "Minerals are inorganic elements from earth and water that the body cannot produce. Unlike vitamins, they cannot be destroyed by heat or light and remain stable during cooking and storage." 
        },
        { 
          icon: Sparkles, 
          title: "Two Main Categories", 
          description: "Macrominerals are needed in amounts greater than 100 mg/day (calcium, magnesium, sodium, potassium, etc.), while trace minerals are needed in smaller amounts (iron, zinc, selenium, etc.). Both are essential." 
        },
        { 
          icon: TrendingUp, 
          title: "Diverse Critical Functions", 
          description: "Minerals serve as structural components (bones), enzyme cofactors, electrolytes for fluid balance, components of hormones and proteins, and support immune function, oxygen transport, and antioxidant systems." 
        }
      ]}
      
      relatedTerms={['macromineral', 'bioavailability', 'absorption', 'electrolytes']}
    />
  );
}
