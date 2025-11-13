import { GlossaryTemplate } from '../GlossaryTemplate';

interface PlaceboPageProps {
  onNavigate?: (key: string) => void;
}

export function PlaceboPage({ onNavigate }: PlaceboPageProps) {
  return (
    <GlossaryTemplate
      term="Placebo"
      onNavigate={onNavigate}
      currentPage="placebo"
      definition="An inactive substance or treatment given to a control group in research studies to compare against the active intervention."
      detailedExplanation="A placebo is a substance with no therapeutic effect that is designed to look, taste, and feel identical to the active treatment being studied. Placebos are essential in clinical research because they help control for the placebo effect—the phenomenon where people experience improvements simply because they believe they are receiving treatment.

In supplement research, placebos are typically sugar pills, capsules filled with inert substances, or other inactive preparations that match the appearance of the supplement being tested. By comparing outcomes between the treatment group and placebo group, researchers can determine whether observed benefits are due to the supplement itself or to psychological and contextual factors.

The use of placebos is fundamental to double-blind studies, where neither participants nor researchers know who is receiving the active treatment versus the placebo, further reducing bias in the results."
      examples={[
        "Sugar pills given to the control group while the treatment group receives actual vitamin C supplements.",
        "Capsules filled with rice flour used as placebo in a probiotic study.",
        "Inactive oil capsules given to participants while others receive omega-3 fish oil supplements."
      ]}
      relatedTerms={[
        { term: "RCT", key: "rct" },
        { term: "Double Blinded", key: "doubleblinded" },
        { term: "Anecdotal Evidence", key: "anecdotalevidence" }
      ]}
    />
  );
}
