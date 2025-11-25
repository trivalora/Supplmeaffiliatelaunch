import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function BioavailabilityPage() {
  return (
    <GlossaryTemplate
      term="Bioavailability"
      definition="The proportion of a nutrient or drug that enters the bloodstream and becomes available for use by the body after administration or consumption."
      
      detailedExplanation="Bioavailability measures how much of an ingested substance actually reaches systemic circulation and can exert its biological effects. It's expressed as a percentage, with 100% bioavailability meaning the entire dose enters the bloodstream unchanged. When a supplement is taken orally, it must survive stomach acid, pass through the intestinal wall, and avoid significant breakdown by the liver before reaching the bloodstream—all factors that can reduce bioavailability.

Many factors affect bioavailability, including the chemical form of the substance (e.g., ferrous vs. ferric iron, curcumin vs. curcumin with piperine), the presence of other nutrients that enhance or inhibit absorption (vitamin C increases iron absorption while calcium decreases it), timing relative to meals, individual digestive health, and formulation technology (nanoparticles, liposomes, or chelation can dramatically increase bioavailability).

Understanding bioavailability is crucial when comparing supplement forms or dosages. A supplement with 50% bioavailability at 200 mg delivers the same active amount as one with 25% bioavailability at 400 mg. Enhanced bioavailability formulations allow lower doses to achieve the same therapeutic effect, potentially reducing side effects while maintaining efficacy."
      
      examples={[
        "Standard curcumin has very poor bioavailability (~1%), but adding piperine (black pepper extract) can increase absorption by up to 2000%",
        "Heme iron from animal sources has 15-35% bioavailability, while non-heme iron from plants has only 2-20% bioavailability",
        "Magnesium citrate has higher bioavailability than magnesium oxide, meaning more of the elemental magnesium reaches the bloodstream"
      ]}
      
      relatedTerms={[
        { term: "Absorption", key: "absorption" },
        { term: "Metabolism", key: "metabolism" }
      ]}
      currentPage="bioavailability"
    />
  );
}
