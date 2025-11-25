import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function PeerReviewedPage() {
  return (
    <GlossaryTemplate
      term="Peer-reviewed"
      definition="Scientific research that has been evaluated and approved by independent experts in the same field before publication."
      detailedExplanation="Peer review is a critical quality control process in scientific publishing. Before a research paper is published in a reputable journal, it undergoes rigorous evaluation by independent experts (peers) who assess the study's methodology, analysis, conclusions, and significance. These reviewers check for errors, biases, and ensure that the research meets the journal's standards.

The peer review process helps ensure that published research is credible, valid, and contributes meaningfully to scientific knowledge. For supplement research, peer-reviewed studies are considered more reliable than non-peer-reviewed sources because they have been scrutinized by experts who can identify methodological flaws or overreaching conclusions.

However, peer review is not infallible. Even peer-reviewed studies can have limitations, and findings should be considered in the context of the broader body of research. Meta-analyses of multiple peer-reviewed studies typically provide the strongest evidence."
      examples={[
        "A vitamin D study published in the Journal of Clinical Endocrinology & Metabolism after being reviewed by endocrinology experts.",
        "Omega-3 research appearing in the American Journal of Clinical Nutrition following peer evaluation.",
        "A creatine study published in the Journal of the International Society of Sports Nutrition after expert review."
      ]}
      relatedTerms={[
        { term: "Empirical Evidence", key: "empiricalevidence" },
        { term: "Meta-Analysis", key: "metaanalysis" },
        { term: "RCT", key: "rct" }
      ]}
      currentPage="peerreviewed"
    />
  );
}
