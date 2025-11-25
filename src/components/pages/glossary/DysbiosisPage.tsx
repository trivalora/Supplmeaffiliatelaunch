import React from 'react';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function DysbiosisPage() {
  return (
    <GlossaryTemplate
      term="Dysbiosis"
      pronunciation="dis-by-OH-sis"
      partOfSpeech="noun"
      definition="An imbalance in the composition, diversity, or function of the gut microbiome, characterized by a reduction in beneficial bacteria and/or overgrowth of potentially harmful microorganisms. Dysbiosis represents a disruption from the healthy symbiotic relationship between host and gut microbes."
      
      simplifiedExplanation="Dysbiosis is when the balance of bacteria in your gut is disrupted—you have too few beneficial bacteria (like Bifidobacteria and Lactobacillus) and/or too many potentially harmful bacteria. A healthy gut microbiome is diverse and dominated by beneficial species, but dysbiosis occurs when this balance is lost. This can be caused by antibiotics, poor diet (low fiber, high processed foods), stress, infections, or medications. Dysbiosis is associated with numerous health problems including digestive issues, inflammation, obesity, and immune dysfunction."
      
      context="Dysbiosis is relevant in nutrition and supplement research because many interventions aim to restore healthy microbiome balance. Prebiotics (dietary fibers) selectively feed beneficial bacteria, potentially reversing dysbiosis. Probiotics introduce beneficial strains to help restore balance. Studies examine effects on microbial composition (measuring abundance of Bifidobacteria, Lactobacillus, and other taxa), diversity (alpha diversity measures), and functional outputs like short-chain fatty acid production. Dysbiosis is implicated in inflammatory bowel disease, IBS, obesity, type 2 diabetes, and other metabolic and immune conditions."
      
      example="Prebiotic supplementation studies show increased abundance of beneficial Bifidobacteria and Lactobacillus, along with increased production of short-chain fatty acids (SCFAs) like butyrate—markers of improved microbiome health. A high-fiber diet rich in diverse plant foods increases microbial diversity and SCFA production, potentially reversing dysbiosis. Antibiotic use causes acute dysbiosis by killing both harmful and beneficial bacteria, which can take weeks to months to recover. Research links dysbiosis to increased intestinal permeability ('leaky gut') and systemic inflammation, potentially contributing to metabolic and autoimmune diseases."
      
      relatedTerms={[
        { term: 'Gut Microbiome', path: '/glossary/gut-microbiome' },
        { term: 'SCFA', path: '/glossary/scfa' },
        { term: 'IBS', path: '/glossary/ibs' },
        { term: 'IBD', path: '/glossary/inflammatory-bowel-disease' },
        { term: 'Inflammation', path: '/glossary/inflammation' },
        { term: 'GOS', path: '/glossary/gos' }
      ]}
      currentPage="dysbiosis"
    />
  );
}
