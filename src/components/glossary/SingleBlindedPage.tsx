import { GlossaryTemplate } from '../GlossaryTemplate';

export function SingleBlindedPage() {
  return (
    <GlossaryTemplate
      term="Single Blinded"
      definition="A study design where participants do not know whether they are receiving the active treatment or placebo, but researchers do know."
      detailedExplanation="In a single-blinded study, participants are kept unaware of whether they are receiving the actual supplement or a placebo, but the researchers conducting the study know which group each participant is in. This design helps control for placebo effects and participant bias, as people cannot alter their behavior or reporting based on knowing what they're receiving.

Single-blinding reduces the risk that participants' expectations will influence their perception of results. For example, if someone knows they're taking a supplement expected to improve energy, they might unconsciously report feeling more energetic even if the supplement has no real effect.

However, single-blinded studies are still vulnerable to researcher bias, as the investigators who know which participants are receiving the treatment might unconsciously influence how they interact with participants or interpret results. This is why double-blinded studies, where both participants and researchers are kept unaware of group assignments, are generally preferred in supplement research."
      examples={[
        "A vitamin C study where participants don't know if they're getting vitamin C or placebo, but the research team knows the assignments.",
        "A probiotic trial where subjects are blinded to their group but researchers track who receives active treatment.",
        "An omega-3 study where participants receive either fish oil or placebo capsules without knowing which, but investigators maintain the assignment records."
      ]}
      relatedTerms={[
        { term: "Double Blinded", key: "doubleblinded" },
        { term: "Placebo", key: "placebo" },
        { term: "RCT", key: "rct" }
      ]}
      currentPage="singleblinded"
    />
  );
}
