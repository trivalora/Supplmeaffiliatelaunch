import React from 'react';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function CoenzymeQ10Page() {
  return (
    <GlossaryTemplate
      term="Coenzyme Q10"
      pronunciation="koh-EN-zime Q-ten"
      partOfSpeech="noun"
      abbreviation="CoQ10, ubiquinone"
      definition="A fat-soluble compound found in every cell of the body that serves two critical functions: as an essential component of the mitochondrial electron transport chain for ATP production, and as a powerful antioxidant that protects cell membranes and lipoproteins from oxidative damage. The body produces CoQ10 naturally, but levels decline with age and certain medications (particularly statins)."
      
      simplifiedExplanation="Coenzyme Q10 (CoQ10) is a compound your body makes that helps produce cellular energy and acts as an antioxidant. It's found in every cell but is especially concentrated in organs with high energy demands like the heart, liver, and kidneys. Your body's production of CoQ10 decreases as you age and can also be reduced by cholesterol-lowering statin medications, which is why some people take CoQ10 supplements, particularly those on statins."
      
      context="CoQ10 is relevant in supplement research for several reasons: mitochondrial energy production (particularly in conditions involving fatigue or muscle weakness), cardiovascular health (heart failure, statin-related muscle pain), antioxidant protection, and age-related decline. It exists in two forms—ubiquinone (oxidized) and ubiquinol (reduced, active form). Some research suggests ubiquinol supplements may have better bioavailability, especially in older adults. Statin medications inhibit the same pathway that produces CoQ10, leading to reduced levels and potentially contributing to statin-related muscle symptoms."
      
      example="Studies in heart failure patients show CoQ10 supplementation (100-300 mg daily) may improve symptoms and exercise capacity, though evidence quality varies. Research on statin-associated muscle symptoms (myopathy) suggests CoQ10 supplementation (100-200 mg daily) may help some patients, though results are mixed. CoQ10 is measured in blood as a biomarker of mitochondrial function and oxidative stress. Typical doses range from 100-300 mg daily, with absorption improved when taken with fatty meals since it's fat-soluble."
      
      relatedTerms={[
        { term: 'Antioxidant', key: 'antioxidant' },
        { term: 'Mitochondria', key: 'mitochondria' },
        { term: 'ATP', key: 'atp' },
        { term: 'Oxidative Stress', key: 'oxidativestress' },
        { term: 'Bioavailability', key: 'bioavailability' },
        { term: 'Cardiovascular', key: 'cardiovascular' }
      ]}
      currentPage="coenzymeq10"
    />
  );
}
