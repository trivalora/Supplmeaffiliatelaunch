'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Bone, Activity, Zap } from 'lucide-react';

export function ProlinePage() {
  return (
    <GlossaryTemplate
      term="Proline"
      pronunciation="proh-leen"
      definition="Proline is a non-essential amino acid with a unique cyclic structure that plays critical roles in protein structure, particularly in collagen where it comprises approximately 15% of amino acid residues. Its distinctive ring structure makes it important for protein stability and flexibility."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Proline (abbreviated as Pro or P) is chemically unique among the standard amino acids because its side chain connects back to the backbone nitrogen atom, forming a five-membered pyrrolidine ring. This cyclic structure restricts the flexibility of the protein backbone and plays a crucial role in determining protein folding and stability.
          </p>
          <p className="mb-4">
            <strong>Structural characteristics:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Imino acid:</strong> Technically an imino acid rather than a true amino acid because its nitrogen is part of a ring (secondary amine rather than primary amine)</li>
            <li><strong>Helix breaker:</strong> Disrupts alpha-helix structures in proteins due to its rigid cyclic structure</li>
            <li><strong>Collagen structure:</strong> Essential for the triple helix structure of collagen, appearing in the characteristic Gly-X-Y repeat pattern (where X is often proline and Y is often hydroxyproline)</li>
            <li><strong>Conformational rigidity:</strong> The ring structure restricts rotation, providing structural stability to proteins</li>
          </ul>
          <p className="mb-4">
            <strong>Biological functions:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Collagen synthesis:</strong> Proline and its hydroxylated form (hydroxyproline) are the most abundant amino acids in collagen after glycine. The body synthesizes proline primarily from glutamate, and it can be hydroxylated to hydroxyproline (requiring vitamin C) for stable collagen structure.
            </li>
            <li>
              <strong>Wound healing:</strong> Increased proline availability supports collagen formation during tissue repair and wound healing processes.
            </li>
            <li>
              <strong>Protein structure:</strong> Creates "kinks" and turns in proteins, important for protein folding and three-dimensional structure.
            </li>
            <li>
              <strong>Energy production:</strong> Can be converted to glutamate and then enter the citric acid cycle for energy production.
            </li>
            <li>
              <strong>Neurotransmitter synthesis:</strong> Serves as a precursor for glutamate, which can be converted to GABA (an inhibitory neurotransmitter).
            </li>
            <li>
              <strong>Cellular stress response:</strong> Proline accumulation may help cells cope with various stresses (osmotic stress, oxidative stress).
            </li>
          </ul>
          <p className="mb-4">
            <strong>Synthesis and metabolism:</strong>
          </p>
          <p className="mb-4">
            As a non-essential amino acid, the body can synthesize proline from:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Glutamate:</strong> Primary pathway involves conversion of glutamate to glutamate-5-semialdehyde, then to proline</li>
            <li><strong>Ornithine:</strong> Alternative pathway from the amino acid ornithine</li>
            <li><strong>Dietary intake:</strong> Also obtained from protein-containing foods</li>
          </ul>
          <p className="mb-4">
            Proline can be hydroxylated to hydroxyproline through post-translational modification after it's incorporated into collagen chains. This hydroxylation requires vitamin C as a cofactor, which is why vitamin C deficiency (scurvy) impairs collagen synthesis.
          </p>
          <p className="mb-4">
            <strong>Dietary sources:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Animal proteins:</strong> Meat, poultry, fish, eggs, dairy products</li>
            <li><strong>Collagen-rich foods:</strong> Bone broth, gelatin, skin, cartilage, connective tissues (especially abundant)</li>
            <li><strong>Plant proteins:</strong> Wheat germ, soy, asparagus, beans, cabbage, mushrooms</li>
            <li><strong>Supplements:</strong> Available in collagen supplements, gelatin, and as isolated proline</li>
          </ul>
          <p className="mb-4">
            <strong>Supplementation and health applications:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Joint health:</strong> As a collagen component, may support cartilage and joint function</li>
            <li><strong>Skin health:</strong> Supports collagen in skin for elasticity and wound healing</li>
            <li><strong>Bone health:</strong> Important for bone matrix collagen</li>
            <li><strong>Gut health:</strong> May support intestinal barrier function and healing</li>
          </ul>
          <p className="mb-4">
            Proline is most commonly consumed through collagen or gelatin supplements rather than as isolated proline. When taken as part of collagen peptides, typical doses range from 2.5-15 grams per day. Proline is generally safe and well-tolerated.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Bone, 
          title: "Critical for Collagen Structure", 
          description: "Proline comprises about 15% of collagen amino acids and is essential for collagen's triple helix structure. Along with glycine and hydroxyproline, it forms the characteristic Gly-X-Y repeat pattern in collagen." 
        },
        { 
          icon: Activity, 
          title: "Unique Cyclic Structure", 
          description: "The only standard amino acid with a cyclic side chain forming a five-membered ring. This structure restricts protein backbone flexibility and is crucial for protein stability and folding patterns." 
        },
        { 
          icon: Zap, 
          title: "Synthesized from Glutamate", 
          description: "As a non-essential amino acid, the body produces proline primarily from glutamate. It can be hydroxylated to hydroxyproline (requiring vitamin C) after incorporation into collagen chains." 
        }
      ]}
      
      relatedTerms={['collagen', 'glycine', 'hydroxyproline', 'protein', 'proteinsynthesis']}
    />
  );
}
