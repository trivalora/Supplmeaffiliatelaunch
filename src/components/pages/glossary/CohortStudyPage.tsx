import React from 'react';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function CohortStudyPage() {
  return (
    <GlossaryTemplate
      term="Cohort Study"
      definition="A type of observational research that follows a group of people (cohort) who share a common characteristic over time to determine how different exposures affect the development of specific outcomes."
      
      expandedExplanation={
        <>
          <p className="mb-4">Cohort studies are powerful epidemiological research designs that can establish temporal relationships between exposures and outcomes, providing stronger evidence for causation than other observational study types.</p>
          
          <h3 className="mt-6 mb-3">Types of Cohort Studies:</h3>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li><strong>Prospective Cohort:</strong> Starts with healthy individuals and follows them forward in time to see who develops the outcome
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Researchers define exposures at baseline</li>
                <li>Follow participants into the future</li>
                <li>Record outcomes as they occur</li>
                <li>Can establish clear temporal sequence</li>
              </ul>
            </li>
            <li><strong>Retrospective Cohort:</strong> Uses existing records to look back at past exposures and outcomes
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>More time- and cost-efficient</li>
                <li>Results available sooner</li>
                <li>Limited to available historical data</li>
                <li>May have incomplete or inconsistent records</li>
              </ul>
            </li>
          </ul>

          <h3 className="mt-6 mb-3">How Cohort Studies Work:</h3>
          <p className="mb-3"><strong>1. Define the Cohort:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Select participants based on specific characteristics (e.g., age, occupation, health status)</li>
            <li>Ensure participants are free of the outcome of interest at baseline</li>
            <li>Large sample sizes often needed (hundreds to thousands)</li>
          </ul>

          <p className="mb-3"><strong>2. Measure Exposures:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Document baseline characteristics and exposures</li>
            <li>May track ongoing or changing exposures during follow-up</li>
            <li>Examples: supplement use, diet, lifestyle factors, medical conditions</li>
          </ul>

          <p className="mb-3"><strong>3. Follow Over Time:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Regular check-ins or assessments</li>
            <li>Follow-up periods can range from months to decades</li>
            <li>Monitor for development of outcomes</li>
            <li>Track participants to minimize loss to follow-up</li>
          </ul>

          <p className="mb-3"><strong>4. Compare Outcomes:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Calculate incidence rates in exposed vs. unexposed groups</li>
            <li>Determine relative risk or hazard ratios</li>
            <li>Adjust for confounding variables</li>
          </ul>

          <h3 className="mt-6 mb-3">Advantages:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Temporal Sequence:</strong> Clearly establishes that exposure preceded outcome</li>
            <li><strong>Multiple Outcomes:</strong> Can examine many different outcomes from the same exposure</li>
            <li><strong>Incidence Calculation:</strong> Can directly calculate disease incidence and relative risk</li>
            <li><strong>Rare Exposures:</strong> Useful for studying uncommon exposures</li>
            <li><strong>Minimal Recall Bias:</strong> In prospective studies, exposure is measured before outcome occurs</li>
          </ul>

          <h3 className="mt-6 mb-3">Limitations:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Time and Cost:</strong> Prospective studies can take years or decades and are expensive</li>
            <li><strong>Loss to Follow-Up:</strong> Participants may drop out, potentially biasing results</li>
            <li><strong>Inefficient for Rare Outcomes:</strong> Need very large samples to detect rare diseases</li>
            <li><strong>Confounding:</strong> Cannot control exposures like in RCTs</li>
            <li><strong>Exposure Changes:</strong> Participants may change behaviors during study</li>
          </ul>
        </>
      }
      
      examples={[
        "The Nurses' Health Study, a large prospective cohort study, followed over 120,000 nurses for decades to examine how diet, lifestyle, and supplement use affect long-term health outcomes.",
        "A prospective cohort study might follow 10,000 adults over 10 years, tracking their vitamin D supplement use and measuring bone density at regular intervals.",
        "By comparing those who took vitamin D versus those who didn't, researchers can estimate the supplement's long-term effect on bone health while accounting for other factors like diet, exercise, and sun exposure."
      ]}
      
      exampleContext="Cohort studies provide crucial evidence about supplement effects over time, especially for outcomes that take years to develop. They offer stronger evidence than cross-sectional studies while being more practical than decades-long RCTs for studying chronic disease prevention."
      
      currentPage="cohortstudy"

      
      relatedTerms={[
        { term: "Observational Study", key: "observationalstudy" },
        { term: "RCT", key: "rct" },
        { term: "Cross-Sectional Study", key: "crosssectionalstudy" },
        { term: "Risk Ratio", key: "rr" },
        { term: "Statistical Significance", key: "statisticalsignificance" }
      ]}
    />
  );
}
