'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function LoadingPhasePage() {
  return (
    <GlossaryTemplate
      term="Loading Phase"
      definition="A loading phase is a supplementation strategy that involves taking higher doses of a supplement for a short initial period to rapidly increase tissue or blood levels, followed by a lower maintenance dose to sustain those levels. This approach is used when a supplement takes time to accumulate in the body and when faster saturation is desirable."
      
      expandedExplanation={
        <>
          <p>
            Loading phases are beneficial when rapid results are desired and when a supplement accumulates slowly at standard doses. Understanding when loading is appropriate can help optimize supplement protocols for faster onset of benefits, particularly for supplements with established tissue storage capacity.
          </p>

          <h3>When Loading Is Used</h3>
          <p>
            Loading phases are beneficial for supplements that:
          </p>
          <ul>
            <li>Accumulate slowly at standard doses</li>
            <li>Need to reach tissue saturation for optimal effects</li>
            <li>Have established tissue storage capacity</li>
            <li>Are well-tolerated at higher short-term doses</li>
            <li>Show time-dependent efficacy (faster results with saturation)</li>
          </ul>

          <h3>Advantages</h3>
          <p>
            Loading provides:
          </p>
          <ul>
            <li>Faster onset of benefits</li>
            <li>Reaches therapeutic levels more quickly</li>
            <li>May improve adherence by showing results sooner</li>
            <li>Useful for correcting deficiencies rapidly</li>
          </ul>

          <h3>Disadvantages</h3>
          <ul>
            <li>May increase risk of side effects during the loading period</li>
            <li>Higher cost during loading</li>
            <li>Not always necessary (maintenance dosing may achieve same endpoint eventually)</li>
            <li>Some individuals may not tolerate higher doses</li>
          </ul>

          <h3>Alternative Approach</h3>
          <p>
            For many supplements, consistent maintenance dosing without a loading phase will eventually achieve the same tissue levels; it simply takes longer. The decision to use a loading phase depends on individual goals, tolerance, and whether faster results are worth the temporary higher doses.
          </p>

          <h3>Examples</h3>
          <ul>
            <li><strong>Creatine:</strong> Loading dose of 20g/day for 5-7 days, then 3-5g/day maintenance. Achieves muscle saturation in ~1 week vs. 3-4 weeks without loading. Loading is optional but speeds up results.</li>
            <li><strong>Vitamin D:</strong> High-dose initial protocol (e.g., 50,000 IU weekly for 8 weeks) used to rapidly correct deficiency, followed by lower maintenance dose (1,000-2,000 IU daily).</li>
            <li><strong>Beta-alanine:</strong> Higher doses initially to saturate muscle carnosine, speeding time to full ergogenic effects.</li>
          </ul>
        </>
      }
      
      relatedTerms={[
        'Maintenance Dose',
        'Saturation',
        'Half-Life',
        'Bioavailability',
        'Therapeutic Dose'
      ]}
      currentPage="loadingphase"
    />
  );
}
