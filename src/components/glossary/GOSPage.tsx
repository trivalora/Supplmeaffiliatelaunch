import { GlossaryTemplate } from '../GlossaryTemplate';

interface GOSPageProps {
  onNavigate?: (key: string) => void;
}

export function GOSPage({ onNavigate }: GOSPageProps) {
  return (
    <GlossaryTemplate
      term="Galacto-oligosaccharides"
      abbreviation="GOS"
      onNavigate={onNavigate}
      currentPage="gos"
      definition="Short-chain carbohydrates composed of galactose molecules linked together, functioning as prebiotics that selectively stimulate the growth and activity of beneficial gut bacteria, particularly Bifidobacteria."
      detailedExplanation="Galacto-oligosaccharides (GOS) are non-digestible carbohydrates consisting of chains of galactose units with a terminal glucose molecule, typically containing 2-8 sugar units. They are naturally present in human breast milk and small amounts in legumes and certain vegetables. Commercial GOS is produced enzymatically from lactose using β-galactosidase, creating mixtures with varying chain lengths and linkage types.

As a prebiotic fiber, GOS resists digestion in the upper gastrointestinal tract and reaches the colon intact, where it undergoes fermentation by resident bacteria. This fermentation produces short-chain fatty acids (acetate, propionate, butyrate) that provide energy to colonocytes, reduce colonic pH (inhibiting pathogen growth), and have systemic anti-inflammatory effects. GOS particularly stimulates Bifidobacterium species, which are associated with numerous health benefits.

GOS is classified as a high-FODMAP carbohydrate, meaning it can trigger digestive symptoms (gas, bloating, abdominal discomfort) in FODMAP-sensitive individuals, particularly those with IBS. However, the same fermentable properties that cause short-term symptoms may provide long-term benefits to gut health. Some research suggests gradual introduction at low doses may improve tolerance over time.

Clinical studies show GOS supplementation (typically 3-10g daily) can increase beneficial bacteria, improve stool consistency in constipation, modestly reduce gut inflammation markers, and may benefit conditions like IBS (in non-FODMAP-sensitive individuals), metabolic syndrome, and immune function. Effects on satiety hormones (GLP-1, PYY) have been observed, suggesting potential metabolic benefits.

Compared to other prebiotics like inulin and fructo-oligosaccharides (FOS), GOS is generally better tolerated at moderate doses and causes less gas production. It's often combined with other prebiotics or probiotics in synbiotic formulations. Doses above 10-15g daily commonly cause gastrointestinal side effects even in healthy individuals. GOS is considered safe (GRAS status in US) and is used in infant formulas to mimic breast milk oligosaccharides."
      examples={[
        "Study shows 5.5g GOS daily increases fecal Bifidobacteria by 10-fold and improves stool frequency in adults with constipation",
        "Meta-analysis reports GOS supplementation modestly reduces inflammatory markers and improves metabolic parameters in overweight adults",
        "Patient with IBS initially experiences increased bloating with GOS, but symptoms improve after starting with 1g daily and gradually increasing"
      ]}
      relatedTerms={[
        { term: "FODMAP", key: "fodmap" },
        { term: "Gut Microbiome", key: "gutmicrobiome" },
        { term: "GLP-1 (Glucagon-Like Peptide-1)", key: "glp1" },
        { term: "Inflammation", key: "inflammation" }
      ]}
    />
  );
}
