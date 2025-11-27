'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function MaintenanceDosePage() {
  return (
    <GlossaryTemplate
      term="Maintenance Dose"
      definition="A maintenance dose is the amount of a supplement taken regularly to sustain optimal blood or tissue levels after they have been achieved. It is typically lower than a loading dose (if used) and is designed to match the body's elimination rate, keeping levels stable over time. The maintenance dose is the long-term, ongoing dose that most users will take indefinitely."
      
      expandedExplanation={
        <>
          <p>
            The maintenance dose represents the optimal long-term supplementation strategy that balances efficacy with safety and tolerability while minimizing cost. Understanding maintenance dosing helps ensure consistent benefits without the need for continuous high-dose supplementation.
          </p>

          <h3>Purpose</h3>
          <p>
            The goal of a maintenance dose is to:
          </p>
          <ul>
            <li>Maintain steady-state levels in blood or tissues</li>
            <li>Replace what the body uses or eliminates daily</li>
            <li>Sustain the benefits achieved during loading (if applicable)</li>
            <li>Balance efficacy with safety and tolerability</li>
            <li>Minimize cost while maintaining effectiveness</li>
          </ul>

          <h3>Determining Maintenance Dose</h3>
          <p>
            Maintenance doses are typically determined by:
          </p>
          <ul>
            <li><strong>Pharmacokinetics:</strong> Matching elimination rate to maintain steady state</li>
            <li><strong>Clinical trials:</strong> Doses shown effective in long-term studies</li>
            <li><strong>Safety data:</strong> Amounts well-tolerated with chronic use</li>
            <li><strong>Individual factors:</strong> Age, weight, health status</li>
            <li><strong>Biomarker monitoring:</strong> Blood tests to verify adequate levels</li>
          </ul>

          <h3>Maintenance Without Loading</h3>
          <p>
            Many supplements don't require a loading phase at all. In these cases, the maintenance dose is simply the recommended daily dose taken consistently. Over time (usually 4-5 half-lives), this dose will naturally achieve steady-state levels without the need for an initial loading period.
          </p>

          <h3>Individual Adjustments</h3>
          <p>
            Maintenance doses may need adjustment based on:
          </p>
          <ul>
            <li>Body weight and composition</li>
            <li>Dietary intake of the nutrient</li>
            <li>Absorption efficiency (GI health)</li>
            <li>Activity level and metabolic demands</li>
            <li>Age and life stage</li>
            <li>Concurrent medications or health conditions</li>
            <li>Verified blood or tissue levels if tested</li>
          </ul>

          <h3>Examples</h3>
          <ul>
            <li><strong>Creatine:</strong> 3-5g/day after loading phase (or from the start if no loading)</li>
            <li><strong>Vitamin D:</strong> 1,000-2,000 IU/day after correcting deficiency</li>
            <li><strong>Magnesium:</strong> 200-400mg/day for most individuals</li>
            <li><strong>Omega-3s:</strong> 1-2g EPA+DHA/day for general health</li>
            <li><strong>Vitamin B12:</strong> 1,000 mcg/day or weekly for maintenance</li>
          </ul>
        </>
      }
      
      relatedTerms={[
        'Loading Phase',
        'Therapeutic Dose',
        'Half-Life',
        'Pharmacokinetics',
        'Biomarker'
      ]}
      currentPage="maintenancedose"
    />
  );
}
