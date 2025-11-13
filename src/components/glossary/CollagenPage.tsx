import { GlossaryTemplate } from '../GlossaryTemplate';

interface CollagenPageProps {
  onNavigate?: (key: string) => void;
}

export function CollagenPage({ onNavigate }: CollagenPageProps) {
  return (
    <GlossaryTemplate
      term="Collagen"
      onNavigate={onNavigate}
      currentPage="collagen"
      definition="The most abundant protein in the human body, providing structural support and strength to skin, bones, tendons, ligaments, cartilage, and connective tissues throughout the body."
      detailedExplanation="Collagen is a family of fibrous proteins that form a triple-helix structure, providing tensile strength and structural integrity to tissues. There are at least 28 different types of collagen, with Type I (skin, bone, tendon), Type II (cartilage), and Type III (skin, blood vessels) being most abundant. Collagen molecules are made from amino acids, particularly glycine, proline, and hydroxyproline, with vitamin C required for proper collagen synthesis.

Natural collagen production peaks in early adulthood and declines with age, decreasing about 1% per year after age 20. This decline manifests as wrinkles, reduced skin elasticity, joint stiffness, weaker bones, and slower wound healing. Factors that accelerate collagen breakdown include UV radiation, smoking, high sugar consumption, chronic inflammation, and oxidative stress.

Collagen supplements typically provide hydrolyzed collagen (collagen peptides)—broken-down collagen that's easier to digest and absorb. Once absorbed, these amino acids can be used by the body to build new collagen and other proteins. Research suggests collagen peptide supplementation (typically 2.5-15g daily) may improve skin hydration and elasticity, reduce joint pain, support bone density, and enhance muscle mass when combined with resistance training, though individual responses vary."
      examples={[
        "Collagen peptide supplementation (2.5-10g daily for 8+ weeks) improved skin elasticity, hydration, and reduced wrinkles in multiple clinical trials",
        "Collagen supplements (10g daily) reduced joint pain and improved joint function in athletes and people with osteoarthritis",
        "Vitamin C (at least 100mg daily) is essential for collagen synthesis, working synergistically with collagen supplements"
      ]}
      relatedTerms={[
        { term: "Bioavailability", key: "bioavailability" },
        { term: "Absorption", key: "absorption" },
        { term: "Clinical Significance", key: "clinicalsignificance" }
      ]}
    />
  );
}
