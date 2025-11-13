import { GlossaryTemplate } from '../GlossaryTemplate';

interface RCTPageProps {
  onNavigate?: (key: string) => void;
}

export function RCTPage({ onNavigate }: RCTPageProps) {
  return (
    <GlossaryTemplate
      term="Randomized Controlled Trial"
      abbreviation="RCT"
      onNavigate={onNavigate}
      currentPage="rct"
      definition="A type of scientific experiment that randomly assigns participants to different groups to test the effectiveness of an intervention."
      detailedExplanation="A Randomized Controlled Trial (RCT) is considered the gold standard in clinical research. In an RCT, participants are randomly assigned to either a treatment group or a control group. This randomization helps eliminate bias and ensures that differences in outcomes can be attributed to the intervention being tested rather than other factors.

The control group typically receives either a placebo, standard treatment, or no treatment, while the treatment group receives the intervention being studied. By comparing outcomes between these groups, researchers can determine the true effect of the treatment.

RCTs are particularly valuable in supplement research because they help establish causal relationships between supplement intake and health outcomes, rather than just correlations."
      examples={[
        "A study testing whether vitamin D supplementation reduces the risk of fractures by randomly assigning participants to receive either vitamin D or a placebo.",
        "Research comparing the effects of omega-3 supplements versus placebo on heart health outcomes in a randomized population.",
        "An experiment randomly assigning athletes to receive either creatine or placebo to measure differences in muscle strength gains."
      ]}
      relatedTerms={[
        { term: "Double Blinded", key: "doubleblinded" },
        { term: "Placebo", key: "placebo" },
        { term: "Statistical Significance", key: "statisticalsignificance" }
      ]}
    />
  );
}
