'use client';
import React from 'react';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Wine, Heart, Activity, Shield, Pill, AlertCircle } from 'lucide-react';

export function ResveratrolPage() {
  return (
    <GlossaryTemplate
      term="Resveratrol"
      pronunciation="rez-VER-uh-trol"
      definition="A polyphenolic stilbene compound produced by certain plants as a defense mechanism against stress, pathogens, and UV radiation. Found in grape skins, red wine, berries, and peanuts, resveratrol has been extensively studied for potential anti-aging, cardioprotective, and metabolic benefits."
      detailedExplanation="Resveratrol (3,5,4'-trihydroxystilbene) gained widespread attention in the 1990s due to the 'French Paradox'—the observation that French populations exhibited relatively low cardiovascular disease rates despite consuming diets high in saturated fat, with red wine consumption proposed as a protective factor. Since then, resveratrol has become one of the most studied polyphenols, with research exploring its effects on aging, cardiovascular health, metabolism, and neurodegenerative diseases.

**Chemical structure and sources:**

Resveratrol exists in two isomeric forms:
- **Trans-resveratrol:** The biologically active and stable form found in plants and supplements
- **Cis-resveratrol:** Less stable form that can be produced from trans-resveratrol through heat or UV exposure

**Dietary sources:**
- **Red wine:** 0.5-2 mg per 150ml glass (concentration varies by grape variety, growing conditions, and winemaking process)
- **Grape skins:** 50-100 μg/g (red grapes contain more than white grapes)
- **Grape juice:** 0.5-1.5 mg per glass (lower than wine due to reduced skin contact during processing)
- **Peanuts:** 0.02-1.8 μg/g
- **Blueberries:** 0.02-0.5 μg/g
- **Cranberries:** 0.5-2 μg/g
- **Dark chocolate:** 0.04-0.1 μg/g
- **Japanese knotweed (Polygonum cuspidatum):** Primary source for supplements (very high resveratrol content)

Dietary intake from food sources is typically very low (1-2 mg/day maximum, often much less), which is several orders of magnitude below doses used in most research studies.

**Bioavailability challenge:**

The major limitation of resveratrol is its extremely poor bioavailability—typically &lt;1% of oral doses reach systemic circulation unchanged. After oral administration:
- **Rapid absorption:** Absorbed in the small intestine within 30 minutes
- **Extensive first-pass metabolism:** Undergoes rapid glucuronidation and sulfation in intestinal epithelial cells and liver
- **Short half-life:** Approximately 1.5-3 hours
- **Low plasma concentrations:** Even with 500 mg oral dose, peak plasma levels of free resveratrol are only 0.5-2 μmol/L
- **High metabolite levels:** Glucuronide and sulfate conjugates reach much higher concentrations than free resveratrol

This bioavailability problem raises questions about whether oral supplementation can achieve tissue concentrations similar to those used in laboratory studies showing benefits. However, some argue that metabolites may be biologically active or that even low tissue concentrations can influence gene expression and cellular signaling.

**Mechanisms of action:**

Despite bioavailability limitations, resveratrol demonstrates various biological activities in cellular and animal studies:

**SIRT1 activation:** Resveratrol activates sirtuin 1 (SIRT1), a NAD+-dependent deacetylase enzyme involved in regulating metabolism, inflammation, cellular stress responses, and longevity pathways. In animal models, SIRT1 activation mimics some benefits of caloric restriction. However, whether resveratrol directly activates SIRT1 or works through indirect mechanisms remains debated.

**AMPK activation:** Activates AMP-activated protein kinase (AMPK), a cellular energy sensor that promotes glucose uptake, fatty acid oxidation, and mitochondrial biogenesis. This mechanism may explain metabolic benefits.

**Antioxidant activity:** Direct free radical scavenging and upregulation of endogenous antioxidant enzymes through Nrf2 pathway activation.

**Anti-inflammatory effects:** Inhibits NF-κB signaling pathway, reducing production of pro-inflammatory cytokines (TNF-α, IL-6, IL-1β).

**Mitochondrial effects:** Increases mitochondrial biogenesis and function, potentially improving cellular energy metabolism.

**Cardiovascular mechanisms:** Increases endothelial nitric oxide synthase (eNOS) activity, improving endothelial function and vasodilation. Reduces platelet aggregation and protects LDL from oxidation.

**Gene expression:** Modulates expression of genes involved in inflammation, oxidative stress, apoptosis, and cell cycle regulation.

**Research evidence in humans:**

Despite impressive preclinical findings, human clinical trials have yielded mixed and often modest results:

**Cardiovascular health:**
- Some studies show modest improvements in endothelial function (flow-mediated dilation)
- Meta-analyses show small reductions in systolic blood pressure (2-3 mmHg) at high doses (≥150 mg/day)
- Improvements in lipid profiles are inconsistent across studies
- No large-scale cardiovascular outcome trials exist

**Metabolic health:**
- Some evidence for improved insulin sensitivity and glucose metabolism in obese or insulin-resistant individuals
- Effects on metabolic syndrome markers are inconsistent
- High-dose resveratrol (1,000-2,000 mg/day) shows more consistent metabolic benefits than lower doses

**Cognitive function:**
- Limited evidence for improved cerebral blood flow and cognitive performance
- Some studies show benefits in older adults with mild cognitive impairment
- Long-term effects on dementia risk unknown

**Anti-aging and longevity:**
- No evidence that resveratrol extends human lifespan
- Lifespan extension in animals (yeast, worms, flies) doesn't translate to mammals
- Studies in mice show benefits primarily in disease/obesity models, not healthy mice

**Inflammation and oxidative stress:**
- Reductions in inflammatory markers (CRP, TNF-α) in some but not all studies
- Decreases in oxidative stress markers (MDA, 8-OHdG) at high doses

**Dosing in research and supplements:**

Human studies typically use:
- **Low dose:** 10-50 mg/day (closer to achievable dietary intake with supplements)
- **Moderate dose:** 100-250 mg/day (most common in research)
- **High dose:** 500-2,000 mg/day (far exceeding dietary intake)

Most studies use doses of 100-500 mg/day, which is 50-250 times higher than typical dietary intake from red wine or food sources.

**Supplement formulations:**

To address bioavailability, various formulations have been developed:
- **Micronized resveratrol:** Reduced particle size for improved absorption
- **Trans-resveratrol:** Specific isomer extraction
- **Liposomal formulations:** Encapsulation in lipid vesicles
- **Nanoparticle delivery:** Enhanced tissue penetration
- **Combination products:** Often paired with quercetin, pterostilbene, or grape seed extract

Japanese knotweed extract is the most common source for supplements, typically providing 50-98% trans-resveratrol.

**Safety and tolerability:**

Resveratrol appears generally safe at typical supplement doses:
- **Well-tolerated doses:** Up to 1,000 mg/day in studies lasting several months
- **High doses (2,000-5,000 mg/day):** May cause gastrointestinal upset, diarrhea, nausea
- **No serious adverse events:** Reported in clinical trials at doses up to 5,000 mg/day

**Potential concerns:**
- **Estrogenic activity:** Resveratrol has weak estrogenic properties; unclear clinical significance
- **Drug interactions:** May affect cytochrome P450 enzymes (particularly CYP3A4, CYP2C9, CYP2D6), potentially affecting drug metabolism
- **Anticoagulant effects:** May inhibit platelet aggregation; theoretical concern when combined with blood thinners
- **SIRT1 inhibition in some contexts:** Paradoxically, resveratrol can inhibit SIRT1 at very high concentrations

**Current scientific consensus:**

While resveratrol shows promising effects in cellular and animal studies, human evidence remains limited and inconsistent. The poor bioavailability is a major obstacle, and it's unclear whether supplement doses can achieve the tissue concentrations needed for biological effects observed in vitro. More research is needed to:
- Determine optimal dosing and formulations
- Identify populations most likely to benefit
- Understand long-term safety and efficacy
- Clarify whether metabolites contribute to biological effects
- Conduct large-scale clinical outcome trials

The enthusiasm for resveratrol as an anti-aging supplement may be premature based on current human evidence, though it may offer modest cardiovascular and metabolic benefits in specific populations."
      examples={[
        "A glass of red wine provides 0.5-2 mg resveratrol, while typical supplements provide 100-500 mg, doses that are 50-250 times higher than achievable dietary intake",
        "Meta-analyses show resveratrol supplementation (≥150 mg/day) reduces systolic blood pressure by 2-3 mmHg, a modest but potentially meaningful effect",
        "Studies using high-dose resveratrol (1,000-1,500 mg/day) show improved insulin sensitivity and metabolic parameters in obese individuals, but bioavailability remains &lt;1%",
        "Resveratrol activated SIRT1 and extended lifespan in yeast by 70%, but similar effects have not been demonstrated in healthy mammals or humans"
      ]}
      relatedTerms={[
        { term: "Polyphenols", key: "polyphenols" },
        { term: "Antioxidant", key: "antioxidant" },
        { term: "Bioavailability", key: "bioavailability" },
        { term: "Cardiovascular", key: "cardiovascular" },
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Nrf2", key: "nrf2" }
      ]}
      quickFacts={[
        { 
          icon: Wine, 
          title: "The French Paradox", 
          description: "Resveratrol gained fame from observations that French populations consuming red wine had lower cardiovascular disease despite high saturated fat intake. However, wine provides only 0.5-2 mg per glass." 
        },
        { 
          icon: Heart, 
          title: "Modest Cardiovascular Effects", 
          description: "Meta-analyses show resveratrol supplementation (≥150 mg/day) reduces systolic blood pressure by 2-3 mmHg and may improve endothelial function, though effects are modest." 
        },
        { 
          icon: Activity, 
          title: "SIRT1 and Longevity Pathways", 
          description: "Resveratrol activates SIRT1 and mimics some caloric restriction benefits in animals, but no evidence exists that it extends human lifespan. Animal longevity findings haven't translated to mammals." 
        },
        { 
          icon: Shield, 
          title: "Multiple Mechanisms", 
          description: "Resveratrol influences SIRT1, AMPK, Nrf2, and NF-κB pathways, affecting metabolism, inflammation, and cellular stress responses. Whether oral doses achieve effective tissue concentrations is debated." 
        },
        { 
          icon: Pill, 
          title: "Bioavailability Challenge", 
          description: "Less than 1% of oral resveratrol reaches circulation unchanged due to rapid glucuronidation and sulfation. Even 500 mg doses produce peak plasma levels of only 0.5-2 μmol/L free resveratrol." 
        },
        { 
          icon: AlertCircle, 
          title: "High Supplement Doses", 
          description: "Research uses 100-500 mg/day (50-250x dietary intake). Doses up to 1,000 mg/day are well-tolerated, but higher doses (2,000-5,000 mg) may cause gastrointestinal upset." 
        }
      ]}
      currentPage="resveratrol"
    />
  );
}
