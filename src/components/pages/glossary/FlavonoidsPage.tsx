'use client';
import React from 'react';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Grape, Heart, Brain, Shield, Droplet, Sparkles } from 'lucide-react';

export function FlavonoidsPage() {
  return (
    <GlossaryTemplate
      term="Flavonoids"
      definition="The largest subclass of polyphenols, characterized by a common 15-carbon skeleton consisting of two benzene rings connected by a 3-carbon bridge. Flavonoids are powerful antioxidants with anti-inflammatory, cardioprotective, and neuroprotective properties found abundantly in fruits, vegetables, tea, and cocoa."
      detailedExplanation="Flavonoids represent over 6,000 different compounds, making them the most diverse and abundant category of polyphenols in the human diet. They provide much of the color in fruits, vegetables, and flowers (yellows, reds, blues, purples). The term 'flavonoid' comes from the Latin word 'flavus' meaning yellow, though flavonoids encompass many colors.

**Classification of flavonoids:**

Flavonoids are divided into six main subclasses based on their chemical structure, particularly the oxidation state and saturation of the 3-carbon connecting bridge:

**1. Flavonols:** Characterized by a double bond in the C-ring and a hydroxyl group at position 3
- **Main compounds:** Quercetin, kaempferol, myricetin, isorhamnetin
- **Food sources:** Onions (quercetin is exceptionally high), kale, broccoli, apples, berries, tea, red wine
- **Benefits:** Strong antioxidant and anti-inflammatory activity, cardiovascular protection, potential anti-cancer properties
- **Typical intake:** 20-50 mg/day, with quercetin being the most consumed flavonol

**2. Flavones:** Similar to flavonols but lacking the 3-hydroxyl group
- **Main compounds:** Apigenin, luteolin, baicalein
- **Food sources:** Parsley, celery, chamomile, thyme, oregano, green peppers
- **Benefits:** Anti-inflammatory, anxiolytic (anxiety-reducing), antioxidant
- **Typical intake:** 1-5 mg/day (lower than other flavonoid classes)

**3. Flavanones:** Saturated C-ring with a carbonyl group at position 4
- **Main compounds:** Hesperidin, naringenin, eriodictyol
- **Food sources:** Citrus fruits (oranges, lemons, grapefruit)
- **Benefits:** Cardiovascular health, anti-inflammatory, may improve insulin sensitivity
- **Typical intake:** 25-50 mg/day, higher with regular citrus consumption
- **Note:** Naringenin in grapefruit inhibits CYP3A4 enzyme, causing drug interactions

**4. Flavan-3-ols (Flavanols):** No carbonyl group in the C-ring; can exist as monomers or polymers
- **Main compounds:** 
  - Monomers: Catechin, epicatechin, gallocatechin, EGCG (epigallocatechin gallate)
  - Polymers: Proanthocyanidins (condensed tannins)
- **Food sources:** Green and black tea, cocoa, dark chocolate, grapes, apples, berries, red wine
- **Benefits:** Cardiovascular protection, improved endothelial function, cognitive enhancement, blood pressure reduction
- **Typical intake:** 50-200 mg/day; can exceed 500 mg/day with regular tea or cocoa consumption
- **Most studied:** Green tea catechins (especially EGCG) and cocoa flavanols

**5. Anthocyanins:** Distinctive pigments responsible for red, purple, and blue colors
- **Main compounds:** Cyanidin, delphinidin, malvidin, pelargonidin, peonidin, petunidin
- **Food sources:** Berries (blueberries, blackberries, strawberries), red cabbage, red grapes, red wine, purple potatoes, eggplant
- **Benefits:** Powerful antioxidants, cardiovascular benefits, improved vision, cognitive protection, anti-diabetic effects
- **Typical intake:** 10-30 mg/day, higher in berry-rich diets
- **Unique:** Exist as glycosides in foods; highly bioavailable compared to other flavonoids

**6. Isoflavones:** Structural isomers with the B-ring attached at position 3 instead of position 2
- **Main compounds:** Genistein, daidzein, glycitein
- **Food sources:** Soybeans, soy products (tofu, tempeh, soy milk), legumes
- **Benefits:** Phytoestrogenic activity, cardiovascular health, bone health, potential cancer risk reduction
- **Typical intake:** Very low (&lt;1 mg/day) in Western diets; 25-50 mg/day in Asian diets with regular soy consumption
- **Controversy:** Estrogenic effects raise questions about safety in hormone-sensitive conditions

**Mechanisms of action:**

**Antioxidant activity:** Flavonoids donate hydrogen atoms to neutralize free radicals, breaking oxidative chain reactions. They also chelate pro-oxidant metal ions (iron, copper). However, direct antioxidant activity may not fully explain benefits.

**Cell signaling modulation:** Flavonoids interact with multiple signaling pathways:
- **Nrf2 activation:** Upregulates endogenous antioxidant enzymes (SOD, catalase, glutathione peroxidase)
- **NF-κB inhibition:** Reduces production of inflammatory cytokines (IL-6, TNF-α, IL-1β)
- **AMPK activation:** Improves metabolic function and insulin sensitivity
- **eNOS activation:** Increases nitric oxide production, improving endothelial function
- **MAPK pathways:** Modulates cell proliferation, differentiation, and apoptosis

**Gut microbiota interaction:** Many flavonoids are poorly absorbed but reach the colon where gut bacteria metabolize them into bioactive phenolic acids. This produces beneficial metabolites and modulates microbiota composition, promoting beneficial species.

**Enzyme modulation:** Flavonoids inhibit or activate various enzymes including COX-2 (anti-inflammatory), xanthine oxidase (reduces uric acid), α-glucosidase (reduces glucose absorption), and cytochrome P450 enzymes (drug interactions).

**Bioavailability:**

Flavonoid bioavailability varies widely (1-30% depending on compound and food matrix). Factors affecting bioavailability:
- **Chemical structure:** Glycosides (sugar-bound) versus aglycones (free form)
- **Food matrix:** Presence of fats, fiber, and other compounds
- **Gut microbiota:** Individual variation in bacterial species affects metabolism
- **Processing:** Cooking, fermentation, and food processing alter bioavailability

**Health benefits from clinical research:**

**Cardiovascular disease:** Meta-analyses consistently show 10-20% reduced cardiovascular disease risk with high flavonoid intake. Mechanisms include improved endothelial function, reduced blood pressure (especially cocoa flavanols), improved lipid profiles, reduced platelet aggregation, and anti-inflammatory effects.

**Type 2 diabetes:** Higher flavonoid intake associated with 10-15% reduced diabetes risk. Flavonoids improve insulin sensitivity, reduce postprandial glucose spikes, and protect pancreatic beta cells.

**Cognitive function:** Flavonoid-rich foods (berries, cocoa, tea) show promise for cognitive preservation, memory improvement, and reduced dementia risk, possibly through improved cerebral blood flow, neuroprotection, and neuroplasticity enhancement.

**Inflammation and oxidative stress:** Clinical trials show flavonoid supplementation reduces inflammatory markers (CRP, IL-6) and oxidative stress markers (MDA, 8-OHdG) in various populations.

**Cancer:** Observational studies suggest protective associations, though evidence is inconsistent across cancer types and study designs.

**Dietary intake recommendations:**

No official RDA exists, but observational studies suggest benefits at:
- Total flavonoids: 400-600 mg/day
- Individual classes vary (flavonols 20-50 mg/day, anthocyanins 10-30 mg/day, etc.)

Achieving adequate intake requires consuming diverse colorful fruits, vegetables, tea, and dark chocolate regularly.

**Supplement considerations:**

Common flavonoid supplements include quercetin (500-1,000 mg/day), EGCG from green tea extract (200-400 mg/day), and anthocyanin extracts. Look for third-party tested products (USP, ConsumerLab, NSF). Whole foods provide flavonoid mixtures that may be more beneficial than isolated compounds.

**Safety:**

Flavonoids from food are safe. Supplemental forms in high doses may cause gastrointestinal upset. Grapefruit flavonoids (naringenin) cause significant drug interactions by inhibiting CYP3A4. High-dose isoflavone supplements may have hormonal effects and should be used cautiously in hormone-sensitive conditions."
      examples={[
        "A meta-analysis of 14 cohort studies found that each 500 mg/day increase in flavonoid intake was associated with 18% lower cardiovascular mortality",
        "Cocoa flavanols (500-900 mg/day) improve endothelial function (measured by flow-mediated dilation) by 3-4% in clinical trials, comparable to some blood pressure medications",
        "Quercetin supplementation (500-1,000 mg/day) reduces systolic blood pressure by approximately 3-4 mmHg and diastolic blood pressure by 2-3 mmHg in meta-analyses",
        "One cup of green tea provides approximately 150-200 mg of catechins (primarily EGCG), while a piece of dark chocolate (30g) provides 200-300 mg of flavanols"
      ]}
      relatedTerms={[
        { term: "Polyphenols", key: "polyphenols" },
        { term: "Antioxidant", key: "antioxidant" },
        { term: "Resveratrol", key: "resveratrol" },
        { term: "Free Radicals", key: "freeradicals" },
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Nrf2", key: "nrf2" }
      ]}
      quickFacts={[
        { 
          icon: Grape, 
          title: "Largest Polyphenol Class", 
          description: "Over 6,000 different flavonoid compounds exist, divided into 6 main subclasses: flavonols, flavones, flavanones, flavan-3-ols, anthocyanins, and isoflavones." 
        },
        { 
          icon: Heart, 
          title: "Cardiovascular Protection", 
          description: "Meta-analyses show 10-20% reduced cardiovascular disease risk with high flavonoid intake through improved endothelial function, reduced blood pressure, and anti-inflammatory effects." 
        },
        { 
          icon: Brain, 
          title: "Cognitive Benefits", 
          description: "Flavonoid-rich foods (berries, cocoa, tea) improve cognitive function, memory, and may reduce dementia risk through enhanced cerebral blood flow and neuroprotection." 
        },
        { 
          icon: Shield, 
          title: "Multiple Mechanisms", 
          description: "Flavonoids work through direct antioxidant activity, Nrf2 activation, NF-κB inhibition, gut microbiota modulation, and interaction with cellular signaling pathways." 
        },
        { 
          icon: Droplet, 
          title: "Variable Bioavailability", 
          description: "Bioavailability ranges from 1-30% depending on chemical structure, food matrix, and individual gut microbiota. Anthocyanins are generally more bioavailable than other flavonoids." 
        },
        { 
          icon: Sparkles, 
          title: "Colorful Plant Pigments", 
          description: "Flavonoids provide yellow, red, blue, and purple colors in fruits and vegetables. Consuming a variety of colors ensures diverse flavonoid intake (aim for 400-600 mg total daily)." 
        }
      ]}
      currentPage="flavonoids"
    />
  );
}
