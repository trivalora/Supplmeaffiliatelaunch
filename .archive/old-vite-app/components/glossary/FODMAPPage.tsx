import { GlossaryTemplate } from '../GlossaryTemplate';

export function FODMAPPage() {
  return (
    <GlossaryTemplate
      term="FODMAP"
      abbreviation="Fermentable Oligosaccharides, Disaccharides, Monosaccharides, And Polyols"
      definition="A group of short-chain carbohydrates and sugar alcohols that are poorly absorbed in the small intestine and rapidly fermented by gut bacteria, causing digestive symptoms in sensitive individuals."
      detailedExplanation="FODMAPs are a collection of fermentable carbohydrates that share common characteristics: they are poorly absorbed in the small intestine, osmotically active (drawing water into the intestinal lumen), and rapidly fermented by gut bacteria. The acronym breaks down into: Fermentable Oligosaccharides (fructans and galacto-oligosaccharides/GOS), Disaccharides (lactose), Monosaccharides (excess fructose), And Polyols (sorbitol, mannitol, xylitol, maltitol).

When FODMAPs reach the colon unabsorbed, they undergo rapid bacterial fermentation, producing gas (hydrogen, carbon dioxide, and methane) and short-chain fatty acids. Additionally, their osmotic effect increases water content in the intestinal lumen. These combined effects can trigger symptoms like bloating, gas, abdominal pain, diarrhea, and constipation—particularly in people with irritable bowel syndrome (IBS) or other functional gastrointestinal disorders.

The low FODMAP diet, developed by researchers at Monash University, involves three phases: (1) elimination of high-FODMAP foods for 2-6 weeks, (2) systematic reintroduction to identify personal triggers, and (3) personalization to create a long-term sustainable diet. Evidence consistently shows that 50-80% of IBS patients experience symptom improvement on a low FODMAP diet. However, prolonged restriction without proper reintroduction can negatively impact gut microbiome diversity and nutritional intake.

Common high-FODMAP foods include wheat, onions, garlic, legumes, certain fruits (apples, pears, stone fruits), dairy products with lactose, and artificial sweeteners. Low-FODMAP alternatives exist for most food categories. The diet should ideally be implemented under guidance from a registered dietitian specializing in gastrointestinal disorders, as improper implementation can lead to unnecessary dietary restriction and nutritional deficiencies.

Prebiotics often contain high-FODMAP fibers (inulin, GOS, fructans), which is why some prebiotic supplements may exacerbate symptoms in FODMAP-sensitive individuals. Research is ongoing into low-FODMAP prebiotics and gradual tolerance-building strategies."
      examples={[
        "A person with IBS eliminates high-FODMAP foods for 6 weeks and experiences 60% reduction in bloating and abdominal pain",
        "During reintroduction, a patient discovers they can tolerate GOS but not fructans, allowing personalized diet modification",
        "Studies show that low FODMAP diet reduces IBS symptom severity by 3-4 points on a 10-point scale in responders"
      ]}
      relatedTerms={[
        { term: "IBS (Irritable Bowel Syndrome)", key: "ibs" },
        { term: "GOS (Galacto-oligosaccharides)", key: "gos" },
        { term: "Inulin-type Fructans", key: "inulintypefructans" },
        { term: "Gut Microbiome", key: "gutmicrobiome" }
      ]}
    />
  );
}
