'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Clock, TrendingDown, Repeat, Users } from 'lucide-react';

export function HalfLifePage() {
  return (
    <GlossaryTemplate
      term="Half-Life"
      partOfSpeech="noun"
      definition="Half-life is the time it takes for the concentration of a substance in the blood to decrease by 50% (half) through the body's natural elimination processes. It is typically denoted as t½ or t₁/₂. Half-life is a key pharmacokinetic parameter that helps determine optimal dosing frequency and how long a substance remains active in the body."
      
      whyItMatters="Half-life directly influences dosing recommendations and helps predict how long a substance will remain active in the body. Understanding half-life is crucial for determining whether a supplement should be taken once daily, multiple times per day, or less frequently. It also helps predict when steady-state levels will be reached with consistent supplementation."
      
      keyPoints={[
        {
          icon: TrendingDown,
          title: "How It Works",
          description: "If a substance has a half-life of 4 hours: at time 0, 100% remains in circulation; after 4 hours, 50% remains; after 8 hours, 25% remains; after 12 hours, 12.5% remains. Generally, after 4-5 half-lives, the substance is considered mostly eliminated (less than 10% remains)."
        },
        {
          icon: Clock,
          title: "Impact on Dosing",
          description: "Short half-life (hours) requires multiple daily doses to maintain consistent blood levels. Medium half-life (12-24 hours) may be taken once or twice daily. Long half-life (days-weeks) can be taken less frequently and may accumulate with daily dosing."
        },
        {
          icon: Repeat,
          title: "Steady State",
          description: "When a substance is taken regularly, it reaches 'steady state' after approximately 4-5 half-lives. At steady state, the amount absorbed with each dose equals the amount eliminated, resulting in stable blood levels. This is important for supplements that require consistent levels for optimal effects."
        },
        {
          icon: Users,
          title: "Individual Variation",
          description: "Half-life can vary between individuals based on age (metabolism often slows with age), liver and kidney function, genetic factors affecting metabolism, concurrent medications or supplements, and body composition and hydration status."
        }
      ]}
      
      examples={[
        "Caffeine: Half-life of ~5 hours; effects wear off fairly quickly",
        "Vitamin C: Short half-life; multiple daily doses may be beneficial",
        "Magnesium: Varies by form; some have extended release profiles",
        "Vitamin D: Very long half-life (weeks); can be dosed weekly or even monthly",
        "Creatine: Long half-life in muscle tissue; once-daily dosing sufficient"
      ]}
      
      relatedTerms={[
        'Pharmacokinetics',
        'Bioavailability',
        'Loading Phase',
        'Maintenance Dose',
        'Absorption'
      ]}
    />
  );
}
