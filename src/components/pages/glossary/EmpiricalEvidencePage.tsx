import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function EmpiricalEvidencePage() {
  return (
    <GlossaryTemplate
      term="Empirical Evidence"
      definition="Evidence obtained through observation, experimentation, or direct experience rather than theory or belief."
      detailedExplanation="Empirical evidence forms the foundation of scientific knowledge. It is information acquired through direct observation or experimentation that can be verified and replicated by others. In the context of supplement research, empirical evidence comes from controlled studies, clinical trials, and systematic observations.

Unlike theoretical predictions or anecdotal reports, empirical evidence follows rigorous scientific methods and is subject to peer review. This type of evidence is crucial for establishing the safety and efficacy of supplements because it provides objective, measurable data that can be independently verified.

The strength of empirical evidence varies depending on the study design, with randomized controlled trials typically providing the strongest empirical evidence, followed by observational studies and case reports."
      examples={[
        "Blood test results showing changes in vitamin D levels before and after supplementation.",
        "Measured improvements in bone density from calcium supplementation documented through DEXA scans.",
        "Laboratory analysis of inflammation markers in response to omega-3 supplementation."
      ]}
      relatedTerms={[
        { term: "RCT", key: "rct" },
        { term: "Anecdotal Evidence", key: "anecdotalevidence" },
        { term: "Peer-reviewed", key: "peerreviewed" }
      ]}
      currentPage="empiricalevidence"
    />
  );
}
