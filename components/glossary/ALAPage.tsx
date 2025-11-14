import { GlossaryTemplate } from '../GlossaryTemplate';

interface ALAPageProps {
  onNavigate?: (key: string) => void;
}

export function ALAPage({ onNavigate }: ALAPageProps) {
  return (
    <GlossaryTemplate
      term="ALA (Alpha-Linolenic Acid)"
      abbreviation="ALA, α-Linolenic Acid"
      onNavigate={onNavigate}
      currentPage="ala"
      definition="An essential omega-3 fatty acid found primarily in plant sources that must be obtained through diet, as the human body cannot produce it, serving as a precursor to EPA and DHA though conversion rates are typically low."
      detailedExplanation="Alpha-linolenic acid (ALA) is an 18-carbon polyunsaturated fatty acid with three double bonds, making it the shortest-chain omega-3 fatty acid. It is classified as essential because humans lack the enzymes needed to synthesize it de novo, requiring dietary intake.

ALA is found abundantly in plant sources, particularly flaxseeds, chia seeds, hemp seeds, walnuts, and certain vegetable oils like flaxseed oil and canola oil. While it provides health benefits on its own, ALA is also considered a precursor to the longer-chain omega-3 fatty acids EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid), which have well-documented cardiovascular and neurological benefits.

However, the conversion efficiency of ALA to EPA and DHA in humans is notably poor. Research indicates that typically less than 10% of dietary ALA is converted to EPA, and conversion to DHA is even lower, often less than 1%. This conversion occurs through a series of desaturation and elongation steps that can be limited by various factors including genetic variation, sex (women convert more efficiently than men, likely due to estrogen), age, and dietary composition (particularly the ratio of omega-6 to omega-3 fatty acids).

Despite low conversion rates, ALA still provides independent health benefits. Studies have linked higher ALA intake with reduced cardiovascular disease risk, improved lipid profiles, and anti-inflammatory effects. The American Heart Association recommends consuming ALA-rich foods as part of a heart-healthy diet.

For individuals following plant-based diets who may not consume EPA and DHA from marine sources, ALA represents the primary omega-3 source. While some conversion to EPA and DHA does occur, supplementation with algae-derived EPA and DHA may be advisable for optimal omega-3 status, particularly for pregnant or lactating women and individuals with increased omega-3 requirements."
      examples={[
        "One tablespoon of ground flaxseed provides approximately 1.6 grams of ALA, representing a significant portion of the adequate intake recommendation of 1.1-1.6 grams daily.",
        "A person consuming 1 tablespoon of flaxseed oil (7.3g ALA) may convert roughly 300-700mg to EPA but likely less than 50mg to DHA, illustrating the limited conversion efficiency.",
        "Walnuts provide about 2.5 grams of ALA per ounce, making them one of the best nut sources of this essential omega-3 fatty acid."
      ]}
      relatedTerms={[
        { term: "Omega-3", key: "omega3" },
        { term: "EPA", key: "epa" },
        { term: "DHA", key: "dha" },
        { term: "Essential Fatty Acids", key: "essentialfattyacids" },
        { term: "Bioavailability", key: "bioavailability" }
      ]}
    />
  );
}
