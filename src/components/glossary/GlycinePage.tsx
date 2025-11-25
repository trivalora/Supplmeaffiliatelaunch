'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Sparkles, Moon, Shield } from 'lucide-react';

export function GlycinePage() {
  return (
    <GlossaryTemplate
      term="Glycine"
      pronunciation="gly-seen"
      definition="Glycine is the smallest and simplest amino acid, classified as a non-essential (or conditionally essential) amino acid because the body can produce it, though dietary intake may be beneficial. It serves as a building block for proteins and plays numerous important roles in metabolism, neurotransmission, and tissue structure."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Glycine has the chemical formula C₂H₅NO₂ and is unique among amino acids because its side chain is just a single hydrogen atom, making it the smallest amino acid. This small size allows glycine to fit into tight spaces in protein structures, giving it special structural roles that other amino acids cannot fulfill.
          </p>
          <p className="mb-4">
            <strong>Biological functions of glycine:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Protein synthesis:</strong> Essential component of many proteins, particularly collagen (where glycine comprises about 33% of amino acids). The repeating pattern in collagen is Gly-X-Y, where X is often proline and Y is often hydroxyproline.
            </li>
            <li>
              <strong>Neurotransmitter:</strong> Functions as an inhibitory neurotransmitter in the central nervous system, particularly in the brainstem and spinal cord. Helps regulate muscle movement and sensory processing.
            </li>
            <li>
              <strong>Glutathione synthesis:</strong> One of three amino acids (along with cysteine and glutamate) that make up glutathione, the body's master antioxidant.
            </li>
            <li>
              <strong>Creatine synthesis:</strong> Combines with arginine and methionine to form creatine, important for energy production in muscles.
            </li>
            <li>
              <strong>Heme synthesis:</strong> Required for producing heme, the iron-containing component of hemoglobin in red blood cells.
            </li>
            <li>
              <strong>Bile acid conjugation:</strong> Glycine combines with bile acids to improve their solubility and function in fat digestion.
            </li>
            <li>
              <strong>Detoxification:</strong> Helps neutralize and eliminate toxins and foreign substances through conjugation reactions in the liver.
            </li>
          </ul>
          <p className="mb-4">
            <strong>Sources of glycine:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Endogenous production:</strong> The body synthesizes glycine primarily from serine (via the enzyme serine hydroxymethyltransferase) and from threonine and choline</li>
            <li><strong>Dietary sources:</strong> Animal proteins (meat, poultry, fish), especially collagen-rich foods (bone broth, skin, connective tissues), gelatin, dairy products</li>
            <li><strong>Supplements:</strong> Available as pure glycine powder or in collagen/gelatin supplements</li>
          </ul>
          <p className="mb-4">
            <strong>Conditionally essential status:</strong>
          </p>
          <p className="mb-4">
            While classified as non-essential, emerging research suggests that endogenous glycine production may not always meet the body's demands, particularly during growth, pregnancy, wound healing, or illness. Some researchers now consider glycine "conditionally essential," meaning dietary intake becomes important under certain conditions.
          </p>
          <p className="mb-4">
            <strong>Potential health benefits and supplementation:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Sleep quality:</strong> 3 grams before bed may improve sleep quality and reduce daytime sleepiness, possibly through its action as an inhibitory neurotransmitter and effects on body temperature</li>
            <li><strong>Collagen production:</strong> Essential for collagen synthesis, supporting skin, joint, and bone health</li>
            <li><strong>Metabolic health:</strong> May improve insulin sensitivity and glucose metabolism</li>
            <li><strong>Muscle protection:</strong> May help prevent muscle breakdown and support muscle protein synthesis</li>
            <li><strong>Liver health:</strong> Supports detoxification processes and may protect against liver damage</li>
            <li><strong>Joint health:</strong> As a major component of collagen, supports cartilage and joint function</li>
          </ul>
          <p className="mb-4">
            Typical supplementation doses range from 3-5 grams per day, often taken before bed for sleep benefits. Glycine is generally well-tolerated with few side effects, though very high doses may cause mild gastrointestinal upset in some individuals.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Sparkles, 
          title: "Simplest Amino Acid", 
          description: "Glycine is the smallest amino acid with unique structural properties. It's a major component of collagen (33%), essential for glutathione synthesis, and serves as an inhibitory neurotransmitter in the nervous system." 
        },
        { 
          icon: Moon, 
          title: "Supports Sleep and Recovery", 
          description: "3 grams before bed may improve sleep quality and reduce daytime fatigue. Also supports muscle recovery, wound healing, and collagen production for skin, joints, and bones." 
        },
        { 
          icon: Shield, 
          title: "Conditionally Essential", 
          description: "While the body can produce glycine, dietary intake may be insufficient during growth, pregnancy, illness, or wound healing. Found abundantly in collagen-rich foods like bone broth, gelatin, and animal connective tissues." 
        }
      ]}
      
      relatedTerms={['protein', 'collagen', 'proline', 'hydroxyproline', 'proteinsynthesis']}
    />
  );
}
