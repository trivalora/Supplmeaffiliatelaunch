import { GlossaryTemplate } from '../GlossaryTemplate';

export function MuscleProteinSynthesisPage() {
  return (
    <GlossaryTemplate
      term="Muscle Protein Synthesis"
      abbreviation="MPS"
      definition="The metabolic process by which amino acids are incorporated into muscle proteins, essential for muscle growth, repair, and maintenance after exercise or injury."
      detailedExplanation="Muscle protein synthesis (MPS) and muscle protein breakdown (MPB) occur continuously, with the balance between them determining whether muscle mass increases, decreases, or remains stable (net protein balance). Resistance exercise creates microscopic muscle damage that triggers an elevated MPS response lasting 24-48 hours. Consuming protein provides amino acids as building blocks, further stimulating MPS, particularly when combined with resistance training.

The amino acid leucine is particularly important for triggering MPS through activation of the mTOR signaling pathway. A leucine threshold of approximately 2-3g per meal appears necessary to maximally stimulate MPS in younger adults, with older adults potentially requiring higher amounts due to anabolic resistance. Total daily protein intake, timing relative to exercise, and distribution across meals all influence MPS and muscle adaptation.

Maximizing MPS for muscle growth and maintenance requires adequate protein intake (1.6-2.2g/kg body weight for active individuals), regular resistance training, sufficient calories, quality sleep, and recovery time. While whey protein is particularly effective due to its leucine content and rapid absorption, total daily protein intake matters most. Other supplements that may support MPS include creatine (enhances training stimulus) and beta-hydroxy-beta-methylbutyrate (HMB, reduces muscle protein breakdown)."
      examples={[
        "Consuming 20-40g of high-quality protein after resistance training maximally stimulates muscle protein synthesis in most individuals",
        "Creatine supplementation (5g daily) enhances muscle protein synthesis indirectly by allowing greater training volume and intensity",
        "Distributing protein across 4-5 meals (rather than concentrating in 1-2 meals) may optimize muscle protein synthesis over 24 hours"
      ]}
      relatedTerms={[
        { term: "Metabolism", key: "metabolism" },
        { term: "Bioavailability", key: "bioavailability" },
        { term: "Dose-Dependent", key: "dosedependent" }
      ]}
    />
  );
}
