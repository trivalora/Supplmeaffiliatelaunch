import { GlossaryTemplate } from '../GlossaryTemplate';

export function AnecdotalEvidencePage() {
  return (
    <GlossaryTemplate
      term="Anecdotal Evidence"
      definition="Information based on personal accounts, individual experiences, or observations rather than systematic scientific research."
      detailedExplanation="Anecdotal evidence consists of personal stories, testimonials, or individual observations that have not been systematically studied or verified through controlled research. While such evidence can be valuable for generating hypotheses and understanding patient experiences, it is considered the weakest form of evidence in scientific research.

The main limitation of anecdotal evidence is that it lacks the controls necessary to rule out alternative explanations. Personal experiences can be influenced by placebo effects, natural fluctuations in health, concurrent lifestyle changes, or simple coincidence. Without proper controls and systematic measurement, it's impossible to determine whether observed effects are truly due to the intervention.

In supplement research, anecdotal evidence should be viewed as a starting point for investigation rather than proof of effectiveness. While individual experiences can be compelling, they should be confirmed through rigorous empirical research before drawing conclusions."
      examples={[
        "A person reporting feeling more energetic after starting a multivitamin, without controlled testing.",
        "Online reviews claiming that a supplement helped with sleep, based on personal experience.",
        "A friend's recommendation that a particular probiotic improved their digestion."
      ]}
      relatedTerms={[
        { term: "Empirical Evidence", key: "empiricalevidence" },
        { term: "Placebo", key: "placebo" },
        { term: "RCT", key: "rct" }
      ]}
      currentPage="anecdotalevidence"
    />
  );
}
