import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function JointHealthPage() {
  return (
    <GlossaryTemplate
      term="Joint Health"
      definition="The structural integrity and functional capacity of joints—where two or more bones meet—involving cartilage, synovial fluid, ligaments, and surrounding tissues that enable smooth, pain-free movement."
      detailedExplanation="Healthy joints allow smooth, pain-free movement through several key components: articular cartilage (smooth tissue covering bone ends that cushions impact), synovial fluid (lubricating fluid that nourishes cartilage and reduces friction), synovial membrane (tissue producing synovial fluid), ligaments (connect bones and stabilize joints), tendons (connect muscles to bones), and surrounding muscles. Joint health is crucial for mobility, quality of life, and independence, especially as we age.

The most common joint condition is osteoarthritis, characterized by cartilage degradation, inflammation, pain, stiffness, and reduced range of motion. Risk factors include aging, obesity, joint injury, repetitive stress, genetics, and inflammatory conditions. Cartilage has limited blood supply and regenerates slowly, making prevention and early intervention particularly important.

Supporting joint health involves maintaining healthy body weight (reduces mechanical stress), regular low-impact exercise (swimming, cycling, walking), strength training (supports and stabilizes joints), proper movement mechanics, adequate nutrition (particularly omega-3s, vitamin C, vitamin D), and staying well-hydrated. Supplements that may support joint health include collagen peptides, glucosamine and chondroitin (though evidence is mixed), omega-3 fatty acids (anti-inflammatory), and methylsulfonylmethane (MSM)."
      examples={[
        "Collagen peptide supplementation (10g daily) reduced activity-related joint pain in athletes and may slow cartilage degradation",
        "Weight loss of 10% body weight in overweight individuals significantly reduces knee osteoarthritis pain and improves function",
        "Omega-3 supplementation (2-3g EPA+DHA daily) reduced joint pain and stiffness in rheumatoid arthritis and may help osteoarthritis"
      ]}
      relatedTerms={[
        { term: "Collagen", key: "collagen" },
        { term: "Inflammation", key: "inflammation" },
        { term: "Clinical Significance", key: "clinicalsignificance" }
      ]}
      currentPage="jointhealth"
    />
  );
}
