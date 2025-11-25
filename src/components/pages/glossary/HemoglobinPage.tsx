'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Droplet, Heart, Activity } from 'lucide-react';

export function HemoglobinPage() {
  return (
    <GlossaryTemplate
      term="Hemoglobin"
      pronunciation="hee-muh-gloh-bin"
      definition="Hemoglobin (Hb or Hgb) is the iron-containing protein in red blood cells responsible for transporting oxygen from the lungs to tissues throughout the body and returning carbon dioxide from tissues to the lungs. Each hemoglobin molecule can carry up to four oxygen molecules."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Hemoglobin is one of the most important proteins in the human body, making up about 96% of red blood cell content. A single red blood cell contains approximately 270 million hemoglobin molecules, and the average adult has about 15 grams of hemoglobin per 100 mL of blood (15 g/dL).
          </p>
          <p className="mb-4">
            <strong>Structure of hemoglobin:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Quaternary structure:</strong> Hemoglobin is a tetramer composed of four polypeptide chains (globins):
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Adult hemoglobin (HbA): Two alpha (α) chains and two beta (β) chains</li>
                <li>Each chain wraps around a heme group</li>
                <li>Total molecular weight: ~64,500 Da</li>
              </ul>
            </li>
            <li>
              <strong>Heme group:</strong> Each of the four globin chains contains one heme group
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Consists of a porphyrin ring with an iron (Fe²⁺) atom at its center</li>
                <li>The iron atom binds reversibly to oxygen</li>
                <li>Requires iron, glycine, and vitamin B6 for synthesis</li>
                <li>Without the iron, heme cannot bind oxygen</li>
              </ul>
            </li>
          </ul>
          <p className="mb-4">
            <strong>Functions of hemoglobin:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Oxygen transport:</strong> Primary function is carrying oxygen (O₂) from lungs to tissues
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>In lungs (high O₂): Hemoglobin binds oxygen forming oxyhemoglobin (bright red)</li>
                <li>In tissues (low O₂): Oxygen is released where needed</li>
                <li>Cooperative binding: Binding of first O₂ makes subsequent binding easier (sigmoidal binding curve)</li>
              </ul>
            </li>
            <li>
              <strong>Carbon dioxide transport:</strong> Carries about 20-25% of CO₂ from tissues back to lungs (most CO₂ is transported as bicarbonate)
            </li>
            <li>
              <strong>Blood pH regulation:</strong> Acts as a buffer, helping maintain blood pH through the chloride shift and bicarbonate buffering system
            </li>
            <li>
              <strong>Nitric oxide transport:</strong> Can carry and release nitric oxide, affecting blood vessel dilation
            </li>
          </ul>
          <p className="mb-4">
            <strong>Types of hemoglobin:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>HbA (Adult hemoglobin):</strong> 95-98% of adult hemoglobin; α₂β₂ structure</li>
            <li><strong>HbA2:</strong> 2-3% of adult hemoglobin; α₂δ₂ structure</li>
            <li><strong>HbF (Fetal hemoglobin):</strong> Predominant before birth; α₂γ₂ structure; has higher oxygen affinity than HbA; normally {'<'}1% in adults</li>
            <li><strong>HbS (Sickle hemoglobin):</strong> Abnormal variant causing sickle cell disease; single amino acid substitution in beta chain</li>
            <li><strong>HbC, HbE, etc.:</strong> Various other genetic variants</li>
          </ul>
          <p className="mb-4">
            <strong>Normal hemoglobin levels:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Adult men:</strong> 13.5-17.5 g/dL</li>
            <li><strong>Adult women:</strong> 12.0-15.5 g/dL</li>
            <li><strong>Pregnant women:</strong> 11.0-14.0 g/dL (lower due to blood volume expansion)</li>
            <li><strong>Children:</strong> Varies by age (generally 11-16 g/dL)</li>
            <li><strong>Newborns:</strong> 14-24 g/dL (higher at birth, gradually decreases)</li>
          </ul>
          <p className="mb-4">
            <strong>Abnormal hemoglobin levels:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Low hemoglobin (Anemia):</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Causes: Iron deficiency, vitamin B12/folate deficiency, blood loss, chronic disease, bone marrow disorders, hemolytic conditions</li>
                <li>Symptoms: Fatigue, weakness, pale skin, shortness of breath, dizziness, cold extremities</li>
              </ul>
            </li>
            <li>
              <strong>High hemoglobin (Polycythemia):</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Causes: Living at high altitude, smoking, dehydration, lung disease, polycythemia vera, testosterone use</li>
                <li>Concerns: Increased blood viscosity, higher risk of blood clots, stroke, heart attack</li>
              </ul>
            </li>
          </ul>
          <p className="mb-4">
            <strong>Related measurements:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Hematocrit:</strong> Percentage of blood volume occupied by red blood cells (typically 3× hemoglobin value)</li>
            <li><strong>HbA1c (Glycated hemoglobin):</strong> Measures average blood glucose over 2-3 months; used to diagnose and monitor diabetes</li>
            <li><strong>Carboxyhemoglobin:</strong> Hemoglobin bound to carbon monoxide (CO); elevated in CO poisoning</li>
            <li><strong>Methemoglobin:</strong> Oxidized form (Fe³⁺) that cannot bind oxygen; elevated in methemoglobinemia</li>
          </ul>
        </>
      }
      
      keyPoints={[
        { 
          icon: Droplet, 
          title: "Oxygen Transport Protein", 
          description: "Hemoglobin in red blood cells carries oxygen from lungs to tissues and returns CO₂ to lungs. Each molecule has four iron-containing heme groups that reversibly bind oxygen. Makes up ~96% of RBC content." 
        },
        { 
          icon: Heart, 
          title: "Normal Levels Essential for Health", 
          description: "Normal levels: 13.5-17.5 g/dL (men), 12.0-15.5 g/dL (women). Low hemoglobin (anemia) causes fatigue and poor oxygen delivery. High hemoglobin increases blood viscosity and clotting risk." 
        },
        { 
          icon: Activity, 
          title: "Requires Iron and B Vitamins", 
          description: "Hemoglobin synthesis requires iron (for heme), vitamin B6 (for heme synthesis), vitamin B12 and folate (for RBC production). Deficiencies in any of these nutrients can cause anemia and reduced hemoglobin." 
        }
      ]}
      
      currentPage="hemoglobin"

      
      relatedTerms={['anemia', 'myoglobin', 'bloodglucose', 'biomarker', 'mineral']}
    />
  );
}
