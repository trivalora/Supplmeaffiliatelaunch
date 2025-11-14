import { GlossaryTemplate } from '../GlossaryTemplate';

interface FMDPageProps {
  onNavigate?: (key: string) => void;
}

export function FMDPage({ onNavigate }: FMDPageProps) {
  return (
    <GlossaryTemplate
      term="Flow-Mediated Dilation"
      abbreviation="FMD"
      onNavigate={onNavigate}
      currentPage="fmd"
      definition="A non-invasive ultrasound-based measurement of endothelial function that assesses how well blood vessels dilate in response to increased blood flow, serving as an indicator of cardiovascular health."
      detailedExplanation="Flow-Mediated Dilation (FMD) is measured by temporarily restricting blood flow to the arm using a blood pressure cuff, then releasing the cuff and measuring how much the brachial artery dilates in response to the sudden increase in blood flow. This dilation is endothelium-dependent, meaning it reflects the ability of the inner lining of blood vessels to produce nitric oxide and other vasodilating substances.

FMD is expressed as a percentage change from baseline arterial diameter, typically ranging from 2-15% in healthy individuals. Higher FMD values indicate better endothelial function and cardiovascular health, while lower values are associated with increased cardiovascular disease risk. A 1% decrease in FMD has been associated with approximately 13% increase in cardiovascular event risk.

In supplement research, FMD is used as a surrogate marker to assess whether interventions improve vascular health. For example, omega-3 fatty acids, vitamin D, and certain polyphenols have been studied for their effects on FMD. Improvements in FMD suggest the supplement may have cardiovascular protective effects by enhancing nitric oxide bioavailability and reducing endothelial dysfunction.

FMD measurements are highly standardized but can be influenced by factors such as time of day, recent food intake, caffeine consumption, and ambient temperature. Well-designed studies control for these variables to ensure reliable results. When interpreting FMD data, look for absolute percentage changes as well as relative improvements compared to baseline or control groups."
      examples={[
        "A study might report that omega-3 supplementation increased FMD by 2.3% compared to placebo, indicating improved endothelial function",
        "Baseline FMD of 4.2% improving to 6.8% after vitamin D supplementation represents a 62% relative improvement",
        "Meta-analyses often report weighted mean differences in FMD (e.g., WMD = 1.52%, 95% CI 0.87-2.17) across multiple studies"
      ]}
      relatedTerms={[
        { term: "Cardiovascular", key: "cardiovascular" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Oxidative Stress", key: "oxidativestress" },
        { term: "Meta-Analysis", key: "metaanalysis" }
      ]}
    />
  );
}
