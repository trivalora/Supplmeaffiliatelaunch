import React from 'react';
import { GlossaryTemplate } from '../GlossaryTemplate';

interface AminoAcidsPageProps {
  onNavigate?: (key: string) => void;
}

export function AminoAcidsPage({ onNavigate }: AminoAcidsPageProps) {
  return (
    <GlossaryTemplate
      term="Amino Acids"
      onNavigate={onNavigate}
      currentPage="aminoacids"
      definition="Organic compounds that serve as the building blocks of proteins, each containing an amino group (-NH₂), a carboxyl group (-COOH), and a unique side chain that determines its properties and function."
      
      detailedExplanation="Amino acids are fundamental molecules in biology, combining in various sequences to form the proteins that make up muscles, enzymes, hormones, antibodies, and countless other vital structures and functions in the body. There are 20 standard amino acids that combine to create all human proteins.

**Classification by Nutritional Essentiality:**

**Essential Amino Acids (EAAs):** Must be obtained from diet—the body cannot synthesize them

- **Histidine:** Important for growth, tissue repair, and making histamine
- **Isoleucine:** Branched-chain amino acid (BCAA); involved in muscle metabolism and energy
- **Leucine:** BCAA; primary trigger for muscle protein synthesis
- **Lysine:** Critical for protein synthesis, calcium absorption, and collagen formation
- **Methionine:** Contains sulfur; important for metabolism and detoxification
- **Phenylalanine:** Precursor to neurotransmitters like dopamine and norepinephrine
- **Threonine:** Important for protein balance, immune function, and collagen
- **Tryptophan:** Precursor to serotonin and melatonin
- **Valine:** BCAA; involved in muscle metabolism and tissue repair

**Conditionally Essential Amino Acids:** Can be synthesized but may become essential under certain conditions (stress, illness, growth)

- **Arginine:** Important for wound healing, immune function, and nitric oxide production
- **Cysteine:** Contains sulfur; component of glutathione (major antioxidant)
- **Glutamine:** Fuel for immune cells and intestinal cells; most abundant amino acid in blood
- **Glycine:** Smallest amino acid; major component of collagen
- **Proline:** Important for collagen structure and skin health
- **Tyrosine:** Precursor to thyroid hormones and neurotransmitters

**Non-Essential Amino Acids:** The body can synthesize these from other compounds

- **Alanine:** Important for glucose metabolism
- **Asparagine:** Required for nervous system function
- **Aspartic Acid:** Involved in hormone production and neurotransmission
- **Glutamic Acid:** Important neurotransmitter; involved in learning and memory
- **Serine:** Important for metabolism and nerve function

**Classification by Chemical Properties:**

- **Polar (hydrophilic):** Serine, threonine, asparagine, glutamine
- **Nonpolar (hydrophobic):** Glycine, alanine, valine, leucine, isoleucine, proline, phenylalanine, tryptophan, methionine
- **Charged (acidic):** Aspartic acid, glutamic acid
- **Charged (basic):** Lysine, arginine, histidine
- **Sulfur-containing:** Cysteine, methionine
- **Aromatic:** Phenylalanine, tyrosine, tryptophan

**Functions in the Body:**

- **Protein Synthesis:** Build and repair muscle, skin, organs, enzymes, and hormones
- **Energy Production:** Can be broken down for energy when needed
- **Neurotransmitter Precursors:** Several amino acids are converted to brain chemicals
- **Immune Function:** Components of antibodies and immune cells
- **Nutrient Transport:** Help move vitamins, minerals, and other nutrients
- **Metabolic Regulation:** Involved in countless metabolic pathways

**Dietary Sources:**

**Complete Proteins:** Contain all nine essential amino acids in adequate amounts
- Animal sources: meat, poultry, fish, eggs, dairy
- Plant sources: quinoa, soy, buckwheat, hemp seeds

**Incomplete Proteins:** Lack one or more essential amino acids
- Most plant sources: grains, legumes, nuts, vegetables
- Can be combined to create complete protein profiles"
      
      examples={[
        "Whey protein provides all essential amino acids in optimal ratios for muscle protein synthesis, making it a popular post-workout supplement.",
        "A complete protein source like whey provides all nine essential amino acids, with particularly high levels of leucine (3g per serving) to trigger muscle protein synthesis.",
        "Eating only rice would provide incomplete protein, but combining it with beans creates a complementary amino acid profile that meets all essential amino acid requirements."
      ]}
      
      relatedTerms={[
        { term: "Protein", key: "protein" },
        { term: "Muscle Protein Synthesis", key: "muscleproteinsynthesis" },
        { term: "Leucine", key: "leucine" },
        { term: "Isoleucine", key: "isoleucine" },
        { term: "Valine", key: "valine" },
        { term: "Essential Amino Acids", key: "essentialaminoacids" },
        { term: "Glycine", key: "glycine" },
        { term: "Proline", key: "proline" }
      ]}
    />
  );
}
