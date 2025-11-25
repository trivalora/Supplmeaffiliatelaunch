'use client';
import React from 'react';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Leaf, HeartPulse, Shield, Pill, Activity, Sparkles } from 'lucide-react';

export function PolyphenolsPage() {
  return (
    <GlossaryTemplate
      term="Polyphenols"
      definition="A large family of naturally occurring plant compounds characterized by multiple phenol units. Polyphenols function as antioxidants and signaling molecules with anti-inflammatory, cardioprotective, and metabolic benefits."
      detailedExplanation="Polyphenols are among the most abundant antioxidants in the human diet, found predominantly in fruits, vegetables, tea, coffee, wine, cocoa, and whole grains. They are synthesized by plants as defense compounds against UV radiation, pathogens, and oxidative stress. In humans, polyphenols exert biological effects through multiple mechanisms: direct antioxidant activity (scavenging free radicals), modulation of cellular signaling pathways (especially Nrf2, NF-κB, and AMPK), influence on gut microbiota composition, and epigenetic regulation.

Polyphenols are classified into several major categories based on their chemical structure:

**Flavonoids:** The largest polyphenol subclass, further divided into:
- **Flavonols** (quercetin, kaempferol, myricetin) — found in onions, kale, broccoli, apples, tea
- **Flavones** (apigenin, luteolin) — found in parsley, celery, chamomile
- **Flavanones** (hesperidin, naringenin) — found in citrus fruits
- **Flavan-3-ols/Flavanols** (catechins, epicatechins, proanthocyanidins) — found in tea, cocoa, grapes, apples
- **Anthocyanins** (cyanidin, delphinidin, malvidin) — found in berries, red/purple fruits and vegetables
- **Isoflavones** (genistein, daidzein) — found in soybeans and soy products

**Phenolic acids:** Divided into:
- **Hydroxybenzoic acids** (gallic acid, ellagic acid, protocatechuic acid)
- **Hydroxycinnamic acids** (caffeic acid, ferulic acid, chlorogenic acid, coumaric acid)

**Stilbenes:** Including resveratrol (grapes, red wine, peanuts)

**Lignans:** Including secoisolariciresinol (flaxseed), matairesinol

**Other polyphenols:** Curcumin (turmeric), oleuropein (olive oil), tyrosol

**Bioavailability and metabolism:**

Polyphenol bioavailability varies dramatically depending on structure, food matrix, and individual gut microbiota. Most polyphenols have relatively poor absorption (bioavailability often 5-10%), though some like quercetin and resveratrol can reach higher levels. After consumption, polyphenols undergo extensive metabolism through conjugation (glucuronidation, sulfation, methylation) in the small intestine and liver. Many polyphenols reach the colon where gut bacteria metabolize them into smaller phenolic metabolites, which may contribute significantly to biological effects.

The 'paradox' of polyphenols is that despite low systemic bioavailability, they demonstrate consistent health benefits in clinical studies. This is explained by several factors: (1) high local concentrations in the gastrointestinal tract affecting gut health and microbiota, (2) biological activity of metabolites rather than parent compounds, (3) cumulative effects from regular consumption, and (4) modulation of gene expression at low concentrations.

**Health effects supported by research:**

**Cardiovascular protection:** Polyphenol-rich diets are associated with reduced cardiovascular disease risk. Mechanisms include improved endothelial function, reduced LDL oxidation, anti-inflammatory effects, improved lipid profiles, and reduced blood pressure. Meta-analyses show flavonoid intake reduces cardiovascular mortality by approximately 18%.

**Metabolic health:** Polyphenols improve insulin sensitivity, glucose metabolism, and may reduce diabetes risk. They activate AMPK (cellular energy sensor), inhibit carbohydrate-digesting enzymes, and modulate gut hormone secretion.

**Anti-inflammatory and antioxidant effects:** Polyphenols reduce oxidative stress markers (MDA, 8-OHdG) and inflammatory cytokines (CRP, IL-6, TNF-α). They upregulate endogenous antioxidant systems by activating Nrf2 transcription factor.

**Cognitive function:** Flavonoids, particularly from berries and cocoa, show promise for cognitive preservation and improvement, possibly through enhanced cerebral blood flow, neurogenesis, and neuroprotection.

**Gut health:** Polyphenols modulate gut microbiota composition, promoting beneficial bacteria (Bifidobacterium, Lactobacillus, Akkermansia) while inhibiting pathogenic species. Polyphenols also have direct antimicrobial effects and support gut barrier integrity.

**Dosing and sources:**

Total polyphenol intake in Western diets ranges from 500-1,500 mg/day, though Mediterranean and Asian diets may provide 2,000+ mg/day. No official recommended intake exists, but higher intakes within food-based ranges are associated with better health outcomes.

Rich dietary sources:
- **Coffee:** 200-550 mg polyphenols per cup (chlorogenic acids)
- **Tea:** 150-300 mg per cup (catechins, theaflavins)
- **Red wine:** 100-200 mg per glass (anthocyanins, resveratrol, tannins)
- **Dark chocolate:** 500-800 mg per 100g (flavanols)
- **Berries:** 200-600 mg per 100g (anthocyanins, ellagitannins)
- **Extra virgin olive oil:** 50-800 mg/kg (oleuropein, tyrosol)

**Supplements:**

Common polyphenol supplements include green tea extract (EGCG), grape seed extract (proanthocyanidins), curcumin, resveratrol, quercetin, and mixed berry extracts. When evaluating supplements, look for standardized extracts with verified polyphenol content, as quality varies widely. Third-party testing (USP, ConsumerLab, NSF) ensures purity and potency.

**Safety and considerations:**

Polyphenols from food sources are generally safe. Supplemental polyphenols in concentrated forms may have different safety profiles. Very high doses of certain polyphenols (e.g., green tea extract) have been associated with liver toxicity in rare cases. Polyphenols can interact with certain medications (affecting drug metabolism through cytochrome P450 enzymes) and may have anticoagulant effects at high doses.

Polyphenol content in foods varies based on plant variety, growing conditions, ripeness, processing, and storage. Cooking and processing can reduce polyphenol content, though some processes (fermentation, roasting) may increase bioavailability."
      examples={[
        "A meta-analysis found that flavonoid intake reduced cardiovascular mortality by 18% when comparing highest versus lowest intake groups",
        "Green tea catechins (EGCG 400-800 mg/day) reduce oxidative stress markers and improve endothelial function in multiple clinical trials",
        "Cocoa flavanols (500-900 mg/day) improve cognitive function and cerebral blood flow in older adults with mild cognitive impairment",
        "A cup of coffee provides approximately 200-550 mg of polyphenols, primarily chlorogenic acids, contributing significantly to total dietary polyphenol intake"
      ]}
      relatedTerms={[
        { term: "Flavonoids", key: "flavonoids" },
        { term: "Antioxidant", key: "antioxidant" },
        { term: "Resveratrol", key: "resveratrol" },
        { term: "Free Radicals", key: "freeradicals" },
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Nrf2", key: "nrf2" }
      ]}
      quickFacts={[
        { 
          icon: Leaf, 
          title: "Plant Defense Compounds", 
          description: "Polyphenols are synthesized by plants as protection against UV radiation, pathogens, and oxidative stress. Humans benefit from these plant defense compounds through dietary consumption." 
        },
        { 
          icon: HeartPulse, 
          title: "Cardiovascular Benefits", 
          description: "Meta-analyses show polyphenol-rich diets reduce cardiovascular mortality by approximately 18%, with mechanisms including improved endothelial function, reduced LDL oxidation, and anti-inflammatory effects." 
        },
        { 
          icon: Shield, 
          title: "Antioxidant Activity", 
          description: "Polyphenols directly scavenge free radicals and activate Nrf2 to upregulate endogenous antioxidant enzymes (superoxide dismutase, glutathione peroxidase, catalase)." 
        },
        { 
          icon: Pill, 
          title: "Low But Effective Bioavailability", 
          description: "Despite bioavailability often 5-10%, polyphenols show consistent health benefits through gut microbiota modulation, active metabolites, and gene expression effects at low concentrations." 
        },
        { 
          icon: Activity, 
          title: "Metabolic Health", 
          description: "Polyphenols improve insulin sensitivity, activate AMPK (cellular energy sensor), modulate glucose metabolism, and may reduce type 2 diabetes risk by 10-20% with high dietary intake." 
        },
        { 
          icon: Sparkles, 
          title: "Diverse Sources", 
          description: "Coffee, tea, berries, dark chocolate, red wine, and extra virgin olive oil are rich sources. Total polyphenol intake ranges from 500-1,500 mg/day in Western diets, up to 2,000+ mg/day in Mediterranean diets." 
        }
      ]}
      currentPage="polyphenols"
    />
  );
}
