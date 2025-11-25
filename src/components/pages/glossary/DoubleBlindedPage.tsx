import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function DoubleBlindedPage() {
  return (
    <GlossaryTemplate
      term="Double Blinded"
      definition="A study design where neither participants nor researchers know who is receiving the active treatment versus placebo until the study ends."
      detailedExplanation="Double-blinded studies represent the gold standard in clinical research. In these studies, neither the participants nor the researchers who interact with them and collect data know which participants are receiving the active supplement and which are receiving the placebo. Only an independent party (often a data management team) maintains the code that reveals group assignments, and this code is not broken until after all data has been collected.

This design eliminates both participant bias and researcher bias. Participants cannot alter their behavior or reporting based on knowing what they're receiving, and researchers cannot unconsciously influence participants or interpret results differently based on knowing who received the treatment. This ensures that observed differences between groups are due to the supplement itself, not to expectations or biased assessments.

Double-blinding is particularly important in supplement research where many outcomes (like pain levels, energy, or mood) are subjective and could be influenced by expectations. It provides the most reliable evidence about whether a supplement truly works."
      examples={[
        "A vitamin D trial where neither participants nor research staff know group assignments until the study concludes and the code is broken.",
        "An ashwagandha study using identical-looking capsules where both subjects and investigators are blinded to treatment allocation.",
        "A magnesium study where an independent pharmacy prepares numbered bottles so neither researchers nor participants know which contains the active supplement."
      ]}
      relatedTerms={[
        { term: "Single Blinded", key: "singleblinded" },
        { term: "Placebo", key: "placebo" },
        { term: "RCT", key: "rct" }
      ]}
      currentPage="doubleblinded"
    />
  );
}
