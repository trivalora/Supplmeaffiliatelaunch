import React from 'react';
import { GlossaryTemplate } from '../GlossaryTemplate';

export function InflammatoryBowelDiseasePage() {
  return (
    <GlossaryTemplate
      term="Inflammatory Bowel Disease"
      pronunciation="in-FLAM-uh-tor-ee BOW-ul dih-ZEEZ"
      partOfSpeech="noun"
      abbreviation="IBD"
      definition="A group of chronic inflammatory conditions of the gastrointestinal tract, primarily including Crohn's disease and ulcerative colitis. These autoimmune-mediated diseases involve inappropriate immune responses to intestinal contents, causing inflammation, ulceration, and digestive symptoms."
      
      simplifiedExplanation="Inflammatory Bowel Disease (IBD) includes Crohn's disease and ulcerative colitis—conditions where the immune system attacks the digestive tract, causing chronic inflammation. Ulcerative colitis affects only the colon and rectum, causing continuous inflammation of the innermost lining. Crohn's disease can affect any part of the GI tract from mouth to anus and causes patchy, deeper inflammation. Symptoms include abdominal pain, diarrhea (often bloody), weight loss, and fatigue. IBD is different from IBS (irritable bowel syndrome), which doesn't involve inflammation or tissue damage."
      
      context="IBD is relevant in supplement research as a chronic inflammatory condition studied for interventions that might reduce inflammation, improve symptoms, or maintain remission. Research focuses on anti-inflammatory effects (measuring cytokines like TNF-α, IL-6), gut barrier integrity, and microbiome composition. Some supplements studied include omega-3 fatty acids, curcumin, probiotics, and vitamin D. IBD affects approximately 1-2 million people in the US, with increasing prevalence worldwide. Standard treatments include aminosalicylates, corticosteroids, immunosuppressants, and biologics targeting TNF-α or other inflammatory pathways."
      
      example="Curcumin has been studied as adjunctive treatment for ulcerative colitis, with some trials showing improved maintenance of remission and reduced inflammatory markers. Omega-3 fatty acid studies show reduced production of pro-inflammatory eicosanoids and cytokines (TNF-α, IL-1β, IL-6). Probiotic and prebiotic research focuses on modifying the gut microbiome, as dysbiosis is strongly implicated in IBD pathogenesis. The diseases are characterized by dysregulated immune responses with elevated TNF-α, which is why anti-TNF biologics (infliximab, adalimumab) are highly effective in many patients."
      
      relatedTerms={[
        { term: 'Inflammation', path: '/glossary/inflammation' },
        { term: 'Gut Microbiome', path: '/glossary/gut-microbiome' },
        { term: 'TNF-α', path: '/glossary/tnfalpha' },
        { term: 'IL-6', path: '/glossary/il6' },
        { term: 'IBS', path: '/glossary/ibs' },
        { term: 'Immune System', path: '/glossary/immune-system' }
      ]}
      currentPage="inflammatoryboweldisease"
    />
  );
}
