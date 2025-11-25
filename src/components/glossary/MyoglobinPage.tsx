'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Zap, Heart, AlertCircle } from 'lucide-react';

export function MyoglobinPage() {
  return (
    <GlossaryTemplate
      term="Myoglobin"
      pronunciation="my-uh-gloh-bin"
      definition="Myoglobin is an iron- and oxygen-binding protein found in cardiac and skeletal muscle tissue. It functions as an oxygen storage molecule, accepting oxygen from hemoglobin in the blood and releasing it to mitochondria in muscle cells for aerobic energy production. It gives muscle tissue its characteristic red color."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Myoglobin is structurally similar to hemoglobin but smaller and simpler. While hemoglobin transports oxygen through the bloodstream, myoglobin stores oxygen within muscle cells and facilitates oxygen diffusion to mitochondria during muscle contraction. It serves as an emergency oxygen reserve when blood oxygen delivery is insufficient.
          </p>
          <p className="mb-4">
            <strong>Structure of myoglobin:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Monomeric protein:</strong> Consists of a single polypeptide chain (153 amino acids) with one heme group, unlike hemoglobin which has four chains and four heme groups</li>
            <li><strong>Molecular weight:</strong> ~17,000 Da (much smaller than hemoglobin's ~64,500 Da)</li>
            <li><strong>Heme group:</strong> Contains one iron atom (Fe²⁺) at the center of a porphyrin ring, capable of binding one oxygen molecule</li>
            <li><strong>Globular structure:</strong> Eight alpha helices form a compact globular shape that protects the heme group</li>
            <li><strong>Hydrophobic interior:</strong> Creates a pocket for the heme group while maintaining solubility in the aqueous muscle cell environment</li>
          </ul>
          <p className="mb-4">
            <strong>Functions of myoglobin:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Oxygen storage:</strong> Stores oxygen in muscle tissue for use during periods of high demand or reduced blood flow
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Acts as an oxygen buffer during muscle contraction when blood vessels are compressed</li>
                <li>Particularly important in heart muscle (continuous contraction) and deep postural muscles</li>
              </ul>
            </li>
            <li>
              <strong>Facilitated oxygen diffusion:</strong> Enhances oxygen transport from cell membrane to mitochondria
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Picks up O₂ at the cell surface from hemoglobin</li>
                <li>Carries it through the cytoplasm to mitochondria</li>
                <li>Releases O₂ at mitochondria where it's needed for ATP production</li>
              </ul>
            </li>
            <li>
              <strong>Nitric oxide scavenging:</strong> May help regulate nitric oxide levels in muscle, protecting mitochondrial respiration
            </li>
            <li>
              <strong>Antioxidant function:</strong> May protect against oxidative stress in muscle tissue
            </li>
          </ul>
          <p className="mb-4">
            <strong>Myoglobin vs. Hemoglobin:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Structure:</strong> Myoglobin = 1 chain, 1 heme; Hemoglobin = 4 chains, 4 hemes</li>
            <li><strong>Location:</strong> Myoglobin in muscle cells; Hemoglobin in red blood cells</li>
            <li><strong>Function:</strong> Myoglobin stores/facilitates O₂; Hemoglobin transports O₂</li>
            <li><strong>Oxygen affinity:</strong> Myoglobin has higher affinity (holds onto O₂ more tightly) and a hyperbolic binding curve; Hemoglobin has lower affinity and sigmoidal (cooperative) binding</li>
            <li><strong>Oxygen release:</strong> Myoglobin releases O₂ only at very low tissue O₂ levels; Hemoglobin releases O₂ more readily as tissues consume oxygen</li>
          </ul>
          <p className="mb-4">
            This difference in oxygen affinity is physiologically important: hemoglobin's lower affinity allows it to pick up oxygen in the lungs and release it in tissues, while myoglobin's higher affinity allows it to accept oxygen from hemoglobin and hold it until muscle cells really need it (during intense contraction or low oxygen).
          </p>
          <p className="mb-4">
            <strong>Myoglobin as a cardiac biomarker:</strong>
          </p>
          <p className="mb-4">
            When muscle tissue is damaged (heart attack, severe muscle injury, rhabdomyolysis), myoglobin is released into the bloodstream:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Early marker of muscle damage:</strong> Myoglobin is one of the first biomarkers to rise after heart attack (within 1-4 hours), peaking at 6-12 hours</li>
            <li><strong>High sensitivity but low specificity:</strong> Elevated myoglobin indicates muscle damage but cannot distinguish between heart muscle and skeletal muscle damage</li>
            <li><strong>Replaced by troponins:</strong> Cardiac troponins (cTnI, cTnT) are now preferred for diagnosing heart attacks because they're specific to cardiac muscle</li>
            <li><strong>Rhabdomyolysis:</strong> Extremely high myoglobin levels (from extensive muscle breakdown) can cause kidney damage as myoglobin is filtered through kidneys and can precipitate in renal tubules</li>
            <li><strong>Normal serum levels:</strong> {'<'}90 ng/mL; levels {'>'}500 ng/mL suggest significant muscle injury</li>
          </ul>
          <p className="mb-4">
            <strong>Clinical significance:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Myoglobinuria:</strong> Myoglobin in urine (appears dark red/brown), indicates severe muscle breakdown; requires urgent treatment to prevent kidney failure</li>
            <li><strong>Muscle adaptation:</strong> Endurance training increases myoglobin content in muscles, improving oxygen storage and aerobic capacity</li>
            <li><strong>Altitude adaptation:</strong> Chronic hypoxia can increase muscle myoglobin concentration</li>
            <li><strong>Genetic myoglobin deficiency:</strong> Rare; associated with exercise intolerance and muscle fatigue</li>
          </ul>
        </>
      }
      
      keyPoints={[
        { 
          icon: Zap, 
          title: "Muscle Oxygen Storage", 
          description: "Myoglobin stores oxygen in cardiac and skeletal muscle cells, releasing it to mitochondria during muscle contraction when blood oxygen delivery is limited. Acts as an oxygen buffer during high-intensity exercise." 
        },
        { 
          icon: Heart, 
          title: "Higher Oxygen Affinity Than Hemoglobin", 
          description: "Single protein chain with one heme group (vs hemoglobin's four). Has higher oxygen affinity, allowing it to accept O₂ from hemoglobin and hold it until muscle cells experience very low oxygen levels." 
        },
        { 
          icon: AlertCircle, 
          title: "Biomarker of Muscle Damage", 
          description: "Released into blood during heart attack, severe muscle injury, or rhabdomyolysis. Rises within 1-4 hours of muscle damage but lacks specificity (can't distinguish cardiac from skeletal muscle). High levels can damage kidneys." 
        }
      ]}
      
      currentPage="myoglobin"

      
      relatedTerms={['hemoglobin', 'biomarker', 'atp', 'mitochondria', 'cardiovascular']}
    />
  );
}
