'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function HalfLifePage() {
  return (
    <GlossaryTemplate
      term="Half-Life"
      definition="Half-life is the time it takes for the concentration of a substance in the blood to decrease by 50% (half) through the body's natural elimination processes. It is typically denoted as t½ or t₁/₂. Half-life is a key pharmacokinetic parameter that helps determine optimal dosing frequency and how long a substance remains active in the body."
      
      expandedExplanation={
        <>
          <p>
            Half-life directly influences dosing recommendations and helps predict how long a substance will remain active in the body. Understanding half-life is crucial for determining whether a supplement should be taken once daily, multiple times per day, or less frequently. It also helps predict when steady-state levels will be reached with consistent supplementation.
          </p>

          <h3>How It Works</h3>
          <p>
            If a substance has a half-life of 4 hours: at time 0, 100% remains in circulation; after 4 hours, 50% remains; after 8 hours, 25% remains; after 12 hours, 12.5% remains. Generally, after 4-5 half-lives, the substance is considered mostly eliminated (less than 10% remains).
          </p>

          <h3>Impact on Dosing</h3>
          <p>
            <strong>Short half-life</strong> (hours) requires multiple daily doses to maintain consistent blood levels. <strong>Medium half-life</strong> (12-24 hours) may be taken once or twice daily. <strong>Long half-life</strong> (days-weeks) can be taken less frequently and may accumulate with daily dosing.
          </p>

          <h3>Steady State</h3>
          <p>
            When a substance is taken regularly, it reaches "steady state" after approximately 4-5 half-lives. At steady state, the amount absorbed with each dose equals the amount eliminated, resulting in stable blood levels. This is important for supplements that require consistent levels for optimal effects.
          </p>

          <h3>Individual Variation</h3>
          <p>
            Half-life can vary between individuals based on:
          </p>
          <ul>
            <li>Age (metabolism often slows with age)</li>
            <li>Liver and kidney function</li>
            <li>Genetic factors affecting metabolism</li>
            <li>Concurrent medications or supplements</li>
            <li>Body composition and hydration status</li>
          </ul>

          <h3>Examples</h3>
          <ul>
            <li><strong>Caffeine:</strong> Half-life of ~5 hours; effects wear off fairly quickly</li>
            <li><strong>Vitamin C:</strong> Short half-life; multiple daily doses may be beneficial</li>
            <li><strong>Magnesium:</strong> Varies by form; some have extended release profiles</li>
            <li><strong>Vitamin D:</strong> Very long half-life (weeks); can be dosed weekly or even monthly</li>
            <li><strong>Creatine:</strong> Long half-life in muscle tissue; once-daily dosing sufficient</li>
          </ul>
        </>
      }
      
      relatedTerms={[
        'Pharmacokinetics',
        'Bioavailability',
        'Loading Phase',
        'Maintenance Dose',
        'Absorption'
      ]}
      currentPage="halflife"
    />
  );
}
