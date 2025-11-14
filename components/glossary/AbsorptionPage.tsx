import { GlossaryTemplate } from '../GlossaryTemplate';

export function AbsorptionPage({
  onNavigate,
  onContactClick,
  onLegalClick
}: {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
  onLegalClick?: () => void;
}) {
  return (
    <GlossaryTemplate
      term="Absorption"
      definition="The process by which nutrients, drugs, or other substances pass from the gastrointestinal tract into the bloodstream or lymphatic system, making them available for use by the body."
      
      detailedExplanation="Absorption primarily occurs in the small intestine, where nutrients must cross the intestinal epithelial cells (enterocytes) to enter circulation. Different nutrients use different absorption mechanisms: passive diffusion (fat-soluble vitamins), facilitated diffusion (some sugars), active transport requiring energy (most minerals and some vitamins), or endocytosis (large molecules). The efficiency of absorption varies widely depending on the nutrient's chemical form, solubility, and interaction with other dietary components.

Multiple factors influence absorption efficiency: the chemical form of the nutrient (ferrous iron absorbs better than ferric; magnesium citrate better than magnesium oxide), presence of absorption enhancers or inhibitors (vitamin C increases iron absorption; phytates and oxalates decrease mineral absorption), digestive health (gut inflammation or disease reduces absorption), timing relative to meals, and individual factors like age, genetics, and existing nutrient status.

Understanding absorption is essential for optimizing supplement effectiveness. Poor absorption is why some nutrients require much higher supplemental doses than dietary intakes to achieve the same effect. Strategies to improve absorption include consuming supplements with appropriate meals (fat-soluble vitamins with dietary fat), spacing competing nutrients (calcium and iron), using chelated or more bioavailable forms, and addressing underlying digestive issues. Absorption rate is a key component of overall bioavailability."
      
      examples={[
        "Heme iron from animal sources has 15-35% absorption rate, while non-heme iron from plants has only 2-20% absorption rate",
        "Taking vitamin D supplements with a meal containing fat increases absorption since vitamin D is fat-soluble",
        "Calcium carbonate requires stomach acid for absorption and should be taken with meals, while calcium citrate can be taken anytime"
      ]}
      
      relatedTerms={[
        { term: "Bioavailability", key: "bioavailability" },
        { term: "Metabolism", key: "metabolism" }
      ]}
      
      onNavigate={onNavigate}
      currentPage="absorption"
      onContactClick={onContactClick}
      onLegalClick={onLegalClick}
    />
  );
}
