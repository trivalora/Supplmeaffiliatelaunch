import { GlossaryTemplate } from '../GlossaryTemplate';
import { Dna, TrendingUp, Zap } from 'lucide-react';

export function ProteinSynthesisPage() {
  return (
    <GlossaryTemplate
      term="Protein Synthesis"
      pronunciation="proh-teen sin-thuh-sis"
      definition="Protein synthesis is the biological process by which cells build new proteins from amino acids. It involves two main stages: transcription (DNA to mRNA) and translation (mRNA to protein), and is essential for growth, repair, and maintenance of all body tissues."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Protein synthesis is one of the most fundamental processes in biology. Every cell in your body constantly synthesizes proteins to replace damaged or worn-out proteins, support growth, and carry out countless cellular functions. Proteins serve as enzymes, structural components, signaling molecules, transport carriers, and much more.
          </p>
          <p className="mb-4">
            The process occurs in two main stages:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Transcription:</strong> In the cell nucleus, a section of DNA is "read" and copied into messenger RNA (mRNA). This mRNA carries the genetic instructions from the nucleus to the ribosomes in the cytoplasm.</li>
            <li><strong>Translation:</strong> At the ribosome, transfer RNA (tRNA) molecules bring amino acids that match the mRNA code. The ribosome links these amino acids together in the correct sequence to form a protein chain, which then folds into its functional three-dimensional shape.</li>
          </ul>
          <p className="mb-4">
            Protein synthesis is regulated by multiple factors:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Amino acid availability:</strong> All 20 amino acids must be present, including the 9 essential amino acids that must come from diet</li>
            <li><strong>Hormones:</strong> Insulin, growth hormone, and IGF-1 stimulate protein synthesis; cortisol can inhibit it</li>
            <li><strong>Energy status:</strong> ATP and GTP are required for the process to occur</li>
            <li><strong>mTOR pathway:</strong> A key signaling pathway that senses nutrients and growth signals to regulate protein synthesis</li>
            <li><strong>Exercise:</strong> Particularly resistance training, which signals the body to increase muscle protein synthesis</li>
          </ul>
          <p className="mb-4">
            Muscle protein synthesis (MPS) is a specific type of protein synthesis focused on building muscle tissue. After resistance exercise, MPS increases for 24-48 hours, especially when adequate protein is consumed. The balance between muscle protein synthesis and muscle protein breakdown determines whether you gain, maintain, or lose muscle mass.
          </p>
          <p className="mb-4">
            Maximizing protein synthesis requires:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Adequate total protein intake (1.6-2.2 g/kg body weight for muscle building)</li>
            <li>Distribution of protein throughout the day (20-40g per meal)</li>
            <li>High-quality protein sources containing all essential amino acids</li>
            <li>Leucine (a branched-chain amino acid) appears particularly important for triggering protein synthesis</li>
            <li>Resistance exercise to signal the need for new muscle protein</li>
            <li>Adequate calories and nutrients to support the process</li>
          </ul>
          <p className="mb-4">
            Supplements like whey protein, creatine, and branched-chain amino acids (BCAAs) are popular for supporting protein synthesis, though whole food protein sources are generally sufficient for most people.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Dna, 
          title: "Fundamental Biological Process", 
          description: "Protein synthesis is how cells build new proteins from genetic instructions. It occurs constantly in every cell and is essential for life, growth, repair, and maintenance of all tissues." 
        },
        { 
          icon: TrendingUp, 
          title: "Regulated by Nutrients & Signals", 
          description: "Protein synthesis is stimulated by amino acids (especially leucine), insulin, growth signals, and exercise. It requires adequate energy, all essential amino acids, and activation of the mTOR pathway." 
        },
        { 
          icon: Zap, 
          title: "Key for Muscle Growth", 
          description: "Muscle protein synthesis increases dramatically after resistance exercise and protein consumption. The balance between synthesis and breakdown determines whether muscle is gained, maintained, or lost." 
        }
      ]}
      
      relatedTerms={['muscleproteinsynthesis', 'metabolism', 'absorption', 'bioavailability']}
    />
  );
}
