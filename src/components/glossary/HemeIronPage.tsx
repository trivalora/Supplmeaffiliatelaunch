import { GlossaryTemplate } from '../GlossaryTemplate';

interface HemeIronPageProps {
  onNavigate?: (key: string) => void;
}

export function HemeIronPage({ onNavigate }: HemeIronPageProps) {
  return (
    <GlossaryTemplate
      term="Heme Iron"
      abbreviation="None"
      onNavigate={onNavigate}
      currentPage="hemeiron"
      definition="The form of iron found in animal tissues bound within heme proteins (hemoglobin and myoglobin), which is absorbed via a dedicated transport mechanism and has significantly higher bioavailability (15-35%) compared to non-heme iron from plant sources."
      detailedExplanation="Heme iron is iron incorporated into the porphyrin ring structure of heme, the iron-containing component of hemoglobin (in blood) and myoglobin (in muscle tissue). This form of iron is found exclusively in animal-derived foods and represents approximately 40% of the iron in meat, with the remaining 60% present as non-heme iron. Despite constituting a smaller proportion of dietary iron overall, heme iron's superior absorption makes it a critical dietary source, especially for populations at risk of iron deficiency.

**Absorption mechanism:**

Unlike non-heme iron, which must be released from food components and reduced from Fe3+ to Fe2+ for absorption, heme iron is absorbed as an intact metalloporphyrin complex. The absorption process differs fundamentally from non-heme iron:

**Brush border uptake:** Heme is taken up at the enterocyte brush border, likely through heme carrier protein 1 (HCP1, also known as PCFT/SLC46A1), though the exact mechanism is still being elucidated. The intact heme-iron complex crosses the apical membrane without requiring reduction or solubilization.

**Intracellular release:** Inside enterocytes, heme oxygenase enzymes cleave the porphyrin ring, releasing free iron (Fe2+), which then enters the common intracellular iron pool alongside iron from non-heme sources. From there, iron can be stored (in ferritin), used for cellular functions, or exported to circulation via ferroportin.

**Reduced inhibition:** Heme iron absorption is largely unaffected by dietary factors that strongly inhibit non-heme iron absorption, including phytates, polyphenols (tannins in tea/coffee), calcium, and certain proteins. This independence from dietary inhibitors is a major advantage.

**Enhanced absorption:** Only cooking temperature significantly affects heme iron availability—excessive heat can denature heme proteins and slightly reduce absorption, but normal cooking methods typically enhance iron availability by making meat proteins more digestible.

**Absorption efficiency:**

Heme iron absorption rates range from 15-35%, with the rate influenced by:
- Iron status (absorption increases when iron stores are low)
- Overall iron demand (pregnancy, growth phases increase absorption)
- Individual genetics (variations in iron transporters)
- Minimal influence from dietary composition (unlike non-heme iron)

By comparison, non-heme iron absorption ranges from only 2-20%, with significant variability based on dietary factors.

**Dietary sources:**

**Rich sources (per 3 oz/85g serving):**
- Beef liver: 5 mg (mostly heme)
- Oysters: 6-8 mg (mix of heme and non-heme)
- Beef (various cuts): 2-3 mg (40% heme)
- Chicken liver: 8-12 mg (mostly heme)
- Chicken (dark meat): 1.1 mg (40% heme)
- Pork: 0.8-1.2 mg (40% heme)
- Fatty fish (sardines, tuna): 1-2 mg (40% heme)

**Heme vs. non-heme iron:**

While heme iron has superior absorption, most dietary iron (~85-90%) comes from non-heme sources (plant foods, fortified foods, and non-heme iron in meat). The higher absorption efficiency of heme iron makes animal foods particularly valuable for individuals with increased iron needs or poor non-heme iron absorption.

**Clinical considerations:**

**Iron deficiency anemia:** Heme iron sources are often recommended for treatment and prevention because they provide readily absorbed iron without requiring careful attention to inhibitory factors or absorption enhancers.

**Vegetarian/vegan diets:** Absence of heme iron necessitates careful planning to ensure adequate iron intake from non-heme sources, often requiring 1.8 times higher iron intake to compensate for lower absorption. Combining plant iron sources with vitamin C enhances non-heme absorption.

**Excess iron concerns:** High heme iron intake from red and processed meat has been associated with increased colorectal cancer risk and oxidative stress in some observational studies. Proposed mechanisms include heme's catalytic activity promoting lipid peroxidation and formation of N-nitroso compounds. Moderation is advised, with dietary guidelines recommending limiting red and processed meat intake.

**Iron overload:** Individuals with hereditary hemochromatosis (genetic iron overload disorder) absorb heme iron excessively and must limit dietary heme iron and often undergo therapeutic phlebotomy.

**Balanced approach:**

While heme iron offers superior bioavailability, a balanced diet incorporating both heme (from lean meats, poultry, fish) and non-heme sources (legumes, fortified grains, dark leafy greens) provides adequate iron without excessive intake of any single source."
      examples={[
        "A 3 oz serving of beef steak provides approximately 2.5 mg total iron, of which ~1 mg is heme iron with 20-35% absorption (200-350 mcg absorbed) versus ~1.5 mg non-heme iron with ~5% absorption (~75 mcg absorbed).",
        "For a person with iron deficiency anemia, consuming beef liver twice weekly can provide 10-12 mg highly bioavailable heme iron per week, substantially improving iron status more rapidly than plant sources alone.",
        "Studies show that adding just 50g of meat to a plant-based meal can double total iron absorption, not only from the heme iron in meat but also by enhancing non-heme iron absorption from plant foods."
      ]}
      relatedTerms={[
        { term: "Ferrous Iron", key: "ferrousiron" },
        { term: "Absorption", key: "absorption" },
        { term: "Bioavailability", key: "bioavailability" },
        { term: "Hemoglobin", key: "hemoglobin" },
        { term: "Anemia", key: "anemia" }
      ]}
    />
  );
}
