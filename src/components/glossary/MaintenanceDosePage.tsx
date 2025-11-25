'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Activity, Target, TestTube, Users } from 'lucide-react';

export function MaintenanceDosePage() {
  return (
    <GlossaryTemplate
      term="Maintenance Dose"
      partOfSpeech="noun"
      definition="A maintenance dose is the amount of a supplement taken regularly to sustain optimal blood or tissue levels after they have been achieved. It is typically lower than a loading dose (if used) and is designed to match the body's elimination rate, keeping levels stable over time. The maintenance dose is the long-term, ongoing dose that most users will take indefinitely."
      
      whyItMatters="The maintenance dose represents the optimal long-term supplementation strategy that balances efficacy with safety and tolerability while minimizing cost. Understanding maintenance dosing helps ensure consistent benefits without the need for continuous high-dose supplementation."
      
      keyPoints={[
        {
          icon: Target,
          title: "Purpose",
          description: "The goal of a maintenance dose is to maintain steady-state levels in blood or tissues, replace what the body uses or eliminates daily, sustain the benefits achieved during loading (if applicable), balance efficacy with safety and tolerability, and minimize cost while maintaining effectiveness."
        },
        {
          icon: TestTube,
          title: "Determining Maintenance Dose",
          description: "Maintenance doses are typically determined by pharmacokinetics (matching elimination rate to maintain steady state), clinical trials (doses shown effective in long-term studies), safety data (amounts well-tolerated with chronic use), individual factors (age, weight, health status), and biomarker monitoring (blood tests to verify adequate levels)."
        },
        {
          icon: Activity,
          title: "Maintenance Without Loading",
          description: "Many supplements don't require a loading phase at all. In these cases, the maintenance dose is simply the recommended daily dose taken consistently. Over time (usually 4-5 half-lives), this dose will naturally achieve steady-state levels without the need for an initial loading period."
        },
        {
          icon: Users,
          title: "Individual Adjustments",
          description: "Maintenance doses may need adjustment based on body weight and composition, dietary intake of the nutrient, absorption efficiency (GI health), activity level and metabolic demands, age and life stage, concurrent medications or health conditions, and verified blood or tissue levels if tested."
        }
      ]}
      
      examples={[
        "Creatine: 3-5g/day after loading phase (or from the start if no loading)",
        "Vitamin D: 1,000-2,000 IU/day after correcting deficiency",
        "Magnesium: 200-400mg/day for most individuals",
        "Omega-3s: 1-2g EPA+DHA/day for general health",
        "Vitamin B12: 1,000 mcg/day or weekly for maintenance"
      ]}
      
      relatedTerms={[
        'Loading Phase',
        'Therapeutic Dose',
        'Half-Life',
        'Pharmacokinetics',
        'Biomarker'
      ]}
    />
  );
}
