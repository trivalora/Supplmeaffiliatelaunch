import { GlossaryTemplate } from '../GlossaryTemplate';

export function InulinTypeFructansPage() {
  return (
    <GlossaryTemplate
      term="Inulin-type Fructans"
      definition="A subgroup of fructans consisting of linear chains of fructose molecules terminated by a glucose unit, including inulin and fructo-oligosaccharides (FOS), that function as prebiotic fibers selectively promoting beneficial gut bacteria growth."
      detailedExplanation="Inulin-type fructans are polymers of fructose molecules linked by β(2→1) glycosidic bonds with a terminal glucose unit. They are classified by chain length: short-chain fructo-oligosaccharides (scFOS or simply FOS) contain 2-8 fructose units, while inulin typically contains 10-60 units. Both occur naturally in foods like chicory root, Jerusalem artichoke, onions, garlic, leeks, asparagus, bananas, and wheat.

Humans lack the enzymes to hydrolyze β(2→1) fructosyl linkages, making inulin-type fructans indigestible in the small intestine. Upon reaching the colon, they undergo bacterial fermentation, primarily by Bifidobacterium and Bacteroides species. This fermentation produces short-chain fatty acids (SCFAs)—particularly acetate, propionate, and butyrate—which provide energy to colonocytes, reduce colonic pH, and have systemic metabolic and anti-inflammatory effects.

Inulin-type fructans are among the most extensively studied prebiotics. Evidence shows they increase beneficial bacteria (especially Bifidobacterium), improve calcium absorption, may enhance satiety and glucose metabolism, support immune function, and improve bowel regularity. Typical effective doses range from 5-15g daily, though benefits are dose-dependent and individual responses vary.

As high-FODMAP carbohydrates, inulin and FOS can cause gas, bloating, and abdominal discomfort, particularly in individuals with IBS or FODMAP sensitivity. Tolerance varies significantly between individuals and depends on baseline gut microbiome composition, dose, and adaptation period. Gradual dose escalation starting at 2-3g daily may improve tolerance. Some people never tolerate even low doses, while others adapt over weeks.

Chain length affects fermentation rate and location: FOS is rapidly fermented in the proximal colon, potentially causing more gas initially, while longer-chain inulin is fermented more gradually throughout the colon. Some products use a blend to provide broader colonic coverage. Native inulin (extracted from chicory root) has mixed chain lengths, while synthetic versions may have more controlled distribution.

Inulin-type fructans are generally recognized as safe (GRAS) and widely used as food ingredients for fat replacement, texture modification, and fiber fortification, in addition to their prebiotic applications in supplements."
      examples={[
        "Study shows 10g inulin daily increases Bifidobacteria from 8% to 24% of total gut bacteria and improves bowel movement frequency",
        "Patient with mild constipation starts with 5g FOS daily, gradually increasing to 12g over 3 weeks with good tolerance and symptom improvement",
        "Meta-analysis reports inulin-type fructans reduce body weight by 1-2 kg and improve glycemic control in overweight adults over 8-12 weeks"
      ]}
      relatedTerms={[
        { term: "FODMAP", key: "fodmap" },
        { term: "GOS (Galacto-oligosaccharides)", key: "gos" },
        { term: "Gut Microbiome", key: "gutmicrobiome" },
        { term: "Glucose Metabolism", key: "glucosemetabolism" }
      ]}
      currentPage="inulintypefructans"
    />
  );
}
