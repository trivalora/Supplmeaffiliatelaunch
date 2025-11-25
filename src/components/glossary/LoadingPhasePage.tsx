'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Zap, TrendingUp, Clock, AlertCircle } from 'lucide-react';

export function LoadingPhasePage() {
  return (
    <GlossaryTemplate
      term="Loading Phase"
      partOfSpeech="noun"
      definition="A loading phase is a supplementation strategy that involves taking higher doses of a supplement for a short initial period to rapidly increase tissue or blood levels, followed by a lower maintenance dose to sustain those levels. This approach is used when a supplement takes time to accumulate in the body and when faster saturation is desirable."
      
      whyItMatters="Loading phases are beneficial when rapid results are desired and when a supplement accumulates slowly at standard doses. Understanding when loading is appropriate can help optimize supplement protocols for faster onset of benefits, particularly for supplements with established tissue storage capacity."
      
      keyPoints={[
        {
          icon: Zap,
          title: "When Loading Is Used",
          description: "Loading phases are beneficial for supplements that accumulate slowly at standard doses, need to reach tissue saturation for optimal effects, have established tissue storage capacity, are well-tolerated at higher short-term doses, and show time-dependent efficacy (faster results with saturation)."
        },
        {
          icon: TrendingUp,
          title: "Advantages",
          description: "Loading provides faster onset of benefits, reaches therapeutic levels more quickly, may improve adherence by showing results sooner, and is useful for correcting deficiencies rapidly."
        },
        {
          icon: AlertCircle,
          title: "Disadvantages",
          description: "Loading may increase risk of side effects during the loading period, higher cost during loading, not always necessary (maintenance dosing may achieve same endpoint eventually), and some individuals may not tolerate higher doses."
        },
        {
          icon: Clock,
          title: "Alternative Approach",
          description: "For many supplements, consistent maintenance dosing without a loading phase will eventually achieve the same tissue levels; it simply takes longer. The decision to use a loading phase depends on individual goals, tolerance, and whether faster results are worth the temporary higher doses."
        }
      ]}
      
      examples={[
        "Creatine: Loading dose of 20g/day for 5-7 days, then 3-5g/day maintenance. Achieves muscle saturation in ~1 week vs. 3-4 weeks without loading. Loading is optional but speeds up results.",
        "Vitamin D: High-dose initial protocol (e.g., 50,000 IU weekly for 8 weeks) used to rapidly correct deficiency, followed by lower maintenance dose (1,000-2,000 IU daily).",
        "Beta-alanine: Higher doses initially to saturate muscle carnosine, speeding time to full ergogenic effects."
      ]}
      
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
