import { GlossaryTemplate } from '../GlossaryTemplate';

export function ARRPage() {
  return (
    <GlossaryTemplate
      term="Absolute Risk Reduction"
      abbreviation="ARR"
      currentPage="arr"
      definition="The absolute difference in event rates between the treatment and control groups, representing the actual percentage point reduction in risk achieved by an intervention."
      detailedExplanation="Absolute Risk Reduction (ARR) is calculated by subtracting the event rate in the treatment group from the event rate in the control group: ARR = Control Event Rate - Treatment Event Rate. Unlike relative measures (like RR or OR), ARR provides a direct, intuitive understanding of the actual benefit in percentage points. For example, if 20% of the control group experiences an event but only 15% of the treatment group does, the ARR is 5 percentage points (20% - 15% = 5%).

ARR is crucial for clinical decision-making because it reveals the absolute magnitude of benefit. A supplement might have an impressive 50% relative risk reduction (RR = 0.50), but if the baseline risk is only 2%, the ARR is merely 1% (from 2% to 1%). This means 100 people would need to take the supplement for one person to benefit—a much less impressive picture than the relative measure suggests.

The inverse of ARR is the Number Needed to Treat (NNT), calculated as NNT = 1/ARR. This tells you how many people need to receive the intervention for one additional person to experience the benefit. For instance, an ARR of 0.05 (5%) yields an NNT of 20, meaning 20 people must be treated to prevent one event. NNT is particularly useful for weighing benefits against costs, side effects, and inconvenience.

ARR varies with baseline risk even when relative risk stays constant. If a supplement reduces risk by 50% (RR = 0.50), the ARR will be 5% in a population with 10% baseline risk but 20% in a population with 40% baseline risk. This is why subgroup analyses showing consistent RRs but different ARRs aren't contradictory—they reflect different baseline risks in different populations.

In supplement research, always consider ARR alongside relative measures. Headlines often emphasize relative risk reductions, which can sound dramatic, but ARR reveals whether the benefit is clinically meaningful. A tiny ARR might not justify the cost, effort, or potential side effects of supplementation, even if the relative risk reduction is impressive. Evidence-based clinical guidelines increasingly emphasize ARR and NNT to guide recommendations."
      examples={[
        "Omega-3 reduces sudden cardiac death from 4.5% to 3.0% (ARR = 1.5%, NNT = 67), meaning 67 people need supplementation to prevent one death",
        "Vitamin D supplementation reduces falls from 45% to 36% in elderly (ARR = 9%, NNT = 11), a clinically meaningful benefit",
        "A supplement with RR = 0.75 for heart attack produces ARR = 2.5% in high-risk patients (baseline 10%) but only ARR = 0.25% in low-risk patients (baseline 1%)"
      ]}
      relatedTerms={[
        { term: "Risk Ratio", key: "rr" },
        { term: "Odds Ratio", key: "or" },
        { term: "Clinical Significance", key: "clinicalsignificance" },
        { term: "Statistical Significance", key: "statisticalsignificance" }
      ]}
    />
  );
}
