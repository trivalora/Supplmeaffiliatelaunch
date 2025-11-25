import React from 'react';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function CytokinesPage() {
  return (
    <GlossaryTemplate
      term="Cytokines"
      pronunciation="SY-toh-kines"
      partOfSpeech="noun (plural)"
      definition="A broad category of small signaling proteins secreted by cells, particularly immune cells, that mediate and regulate immune responses, inflammation, and cell communication. Cytokines include interleukins (IL), interferons (IFN), tumor necrosis factors (TNF), and many others."
      
      simplifiedExplanation="Cytokines are chemical messengers that cells use to communicate, especially during immune and inflammatory responses. Think of them as the 'text messages' that immune cells send to coordinate their response to infection or injury. Some cytokines promote inflammation (pro-inflammatory), while others reduce it (anti-inflammatory). Common examples include IL-6, IL-1β, TNF-α, and IL-10."
      
      context="Cytokines are relevant in health and supplement research because chronic elevation of pro-inflammatory cytokines is associated with numerous conditions including cardiovascular disease, diabetes, arthritis, and age-related diseases. Measuring cytokine levels (particularly IL-6, TNF-α, IL-1β, and CRP) helps assess systemic inflammation status. Many supplement studies evaluate effects on cytokine levels as biomarkers of anti-inflammatory activity. The balance between pro-inflammatory and anti-inflammatory cytokines is critical for health—you need inflammation to fight infections, but chronic elevation causes tissue damage."
      
      example="A meta-analysis of omega-3 supplementation found significant reductions in pro-inflammatory cytokines: IL-6 decreased by 1.69 pg/mL and TNF-α decreased by 0.34 pg/mL. Curcumin studies show reductions in multiple inflammatory cytokines including IL-6, TNF-α, and IL-1β. During infection, pro-inflammatory cytokines like IL-1β and TNF-α are rapidly elevated to recruit immune cells, but their prolonged elevation contributes to chronic inflammatory diseases. Anti-inflammatory cytokines like IL-10 help resolve inflammation after the threat is cleared."
      
      relatedTerms={[
        { term: 'Inflammation', key: 'inflammation' },
        { term: 'IL-6', key: 'il6' },
        { term: 'TNF-α', key: 'tnfalpha' },
        { term: 'IL-1', key: 'il1' },
        { term: 'CRP', key: 'crp' },
        { term: 'Immune System', key: 'immunesystem' }
      ]}
      currentPage="cytokines"
    />
  );
}
