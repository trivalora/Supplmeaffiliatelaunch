'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Bone, Shield, Droplet } from 'lucide-react';

export function HydroxyprolinePage() {
  return (
    <GlossaryTemplate
      term="Hydroxyproline"
      pronunciation="hy-drok-see-proh-leen"
      definition="Hydroxyproline is a modified amino acid found almost exclusively in collagen, created through post-translational hydroxylation of proline residues. It comprises about 13% of collagen's amino acid content and is essential for collagen stability. Its presence in blood or urine serves as a biomarker of collagen turnover."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Hydroxyproline (Hyp, abbreviated as O or less commonly P with a circle) is unique because it's not directly incorporated during protein synthesis. Instead, proline residues are hydroxylated (an -OH group is added) after the collagen chain is formed, through a process called post-translational modification. This hydroxylation is absolutely critical for collagen stability.
          </p>
          <p className="mb-4">
            <strong>Formation of hydroxyproline:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Post-translational modification:</strong> After proline is incorporated into collagen chains, the enzyme prolyl hydroxylase adds a hydroxyl group (-OH) to specific proline residues, converting them to hydroxyproline. This occurs before the collagen triple helix forms.
            </li>
            <li>
              <strong>Vitamin C requirement:</strong> Prolyl hydroxylase requires vitamin C (ascorbic acid) as an essential cofactor. Without adequate vitamin C, prolyl hydroxylase cannot function, leading to defective collagen—the basis of scurvy.
            </li>
            <li>
              <strong>Co-factors needed:</strong> The hydroxylation reaction also requires iron (Fe²⁺), α-ketoglutarate, and oxygen as cofactors.
            </li>
            <li>
              <strong>Site-specific:</strong> Hydroxylation occurs primarily at proline residues in the Y position of collagen's Gly-X-Y repeat pattern.
            </li>
          </ul>
          <p className="mb-4">
            <strong>Critical role in collagen stability:</strong>
          </p>
          <p className="mb-4">
            Hydroxyproline is absolutely essential for collagen's structural integrity:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Stabilizes triple helix:</strong> The hydroxyl group forms additional hydrogen bonds that stabilize collagen's characteristic triple helix structure</li>
            <li><strong>Increases melting temperature:</strong> Collagen with adequate hydroxyproline is stable at body temperature; without it, collagen becomes unstable and denatures</li>
            <li><strong>Tissue-specific variation:</strong> The amount of hydroxyproline varies by tissue—skin and bone collagen typically have high hydroxyproline content</li>
          </ul>
          <p className="mb-4">
            In scurvy (vitamin C deficiency), lack of hydroxyproline leads to weak, unstable collagen that cannot maintain tissue integrity, causing symptoms like bleeding gums, poor wound healing, and fragile blood vessels.
          </p>
          <p className="mb-4">
            <strong>Hydroxyproline as a biomarker:</strong>
          </p>
          <p className="mb-4">
            Because hydroxyproline is found almost exclusively in collagen (and very little in other proteins), its levels in blood and urine reflect collagen metabolism:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Bone turnover marker:</strong> Urinary hydroxyproline has historically been used to assess bone resorption and collagen breakdown, though more specific markers are now preferred</li>
            <li><strong>Collagen degradation:</strong> When collagen is broken down (during bone resorption, tissue remodeling, or disease), hydroxyproline is released into blood and excreted in urine</li>
            <li><strong>Disease monitoring:</strong> Elevated levels may indicate excessive collagen breakdown in conditions like osteoporosis, Paget's disease, bone metastases, or rheumatoid arthritis</li>
            <li><strong>Dietary influence:</strong> Consuming collagen-rich foods or supplements increases urinary hydroxyproline (must be fasting for accurate clinical testing)</li>
          </ul>
          <p className="mb-4">
            <strong>Cannot be reutilized for new collagen:</strong>
          </p>
          <p className="mb-4">
            When collagen is degraded, the released hydroxyproline cannot be reused to make new collagen. Unlike standard amino acids that are recycled for protein synthesis, hydroxyproline must be produced anew through post-translational hydroxylation of proline. Hydroxyproline from degraded collagen is typically metabolized in the liver or excreted.
          </p>
          <p className="mb-4">
            <strong>Dietary sources and supplementation:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Collagen-rich foods:</strong> Bone broth, gelatin, animal skin, connective tissues contain hydroxyproline</li>
            <li><strong>Collagen supplements:</strong> Hydrolyzed collagen peptides contain hydroxyproline, which may signal fibroblasts to produce new collagen</li>
            <li><strong>Not synthesized directly:</strong> The body cannot use dietary hydroxyproline to build new collagen; instead, it must synthesize new proline and hydroxylate it with vitamin C</li>
          </ul>
          <p className="mb-4">
            Emerging research suggests that hydroxyproline-containing peptides from collagen supplements may act as signaling molecules that stimulate fibroblasts to produce new collagen, though the exact mechanisms are still being studied.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Bone, 
          title: "Essential for Collagen Stability", 
          description: "Hydroxyproline comprises ~13% of collagen and is critical for stabilizing the triple helix structure through additional hydrogen bonding. Without it (vitamin C deficiency), collagen becomes weak and unstable." 
        },
        { 
          icon: Shield, 
          title: "Requires Vitamin C", 
          description: "Formed by post-translational hydroxylation of proline residues in collagen chains. The enzyme prolyl hydroxylase absolutely requires vitamin C, iron, and α-ketoglutarate—explaining why scurvy causes collagen defects." 
        },
        { 
          icon: Droplet, 
          title: "Biomarker of Collagen Turnover", 
          description: "Found almost exclusively in collagen. Elevated urinary or blood hydroxyproline indicates increased collagen breakdown, used historically to assess bone resorption and in monitoring collagen-related diseases." 
        }
      ]}
      
      relatedTerms={['collagen', 'proline', 'glycine', 'biomarker', 'osteoporosis']}
    />
  );
}
