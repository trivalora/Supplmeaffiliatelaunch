import React from 'react';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function CrossSectionalStudyPage() {
  return (
    <GlossaryTemplate
      term="Cross-Sectional Study"
      definition="A type of observational research that analyzes data from a population at a single point in time, providing a 'snapshot' of the relationship between variables without following participants over time."
      
      expandedExplanation={
        <>
          <p className="mb-4">Cross-sectional studies examine the presence or absence of both exposures and outcomes simultaneously in a defined population at one specific moment, making them one of the most common and practical research designs for identifying associations and generating hypotheses.</p>
          
          <h3 className="mt-6 mb-3">Key Characteristics:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Single Time Point:</strong> All measurements taken at once or within a short period</li>
            <li><strong>Prevalence Data:</strong> Shows how common conditions or behaviors are in a population</li>
            <li><strong>No Follow-Up:</strong> Participants are not tracked over time</li>
            <li><strong>Association, Not Causation:</strong> Cannot definitively determine cause-and-effect relationships</li>
            <li><strong>Multiple Variables:</strong> Can examine many exposures and outcomes simultaneously</li>
          </ul>

          <h3 className="mt-6 mb-3">How Cross-Sectional Studies Work:</h3>
          <p className="mb-3"><strong>1. Define Population:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Select target population (e.g., adults aged 40-60, college students, people with diabetes)</li>
            <li>Use random sampling, convenience sampling, or other recruitment methods</li>
            <li>Sample size depends on research question and expected effect sizes</li>
          </ul>

          <p className="mb-3"><strong>2. Collect Data:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Surveys, questionnaires, interviews</li>
            <li>Physical measurements (blood pressure, BMI, etc.)</li>
            <li>Laboratory tests (blood work, biomarkers)</li>
            <li>Medical record review</li>
            <li>All data collected at the same time</li>
          </ul>

          <p className="mb-3"><strong>3. Analyze Associations:</strong></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Compare characteristics between groups</li>
            <li>Identify correlations between variables</li>
            <li>Calculate prevalence ratios or odds ratios</li>
            <li>Adjust for potential confounding factors</li>
          </ul>

          <h3 className="mt-6 mb-3">Advantages:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Quick and Inexpensive:</strong> Data collection happens once, results available relatively fast</li>
            <li><strong>Hypothesis Generation:</strong> Excellent for identifying potential relationships to investigate further</li>
            <li><strong>Prevalence Estimation:</strong> Provides valuable information about how common conditions or behaviors are</li>
            <li><strong>Multiple Outcomes:</strong> Can examine many variables in one study</li>
            <li><strong>No Loss to Follow-Up:</strong> Since there's no follow-up period, no risk of participants dropping out</li>
            <li><strong>Population Snapshot:</strong> Useful for public health planning and resource allocation</li>
          </ul>

          <h3 className="mt-6 mb-3">Limitations:</h3>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li><strong>Temporal Ambiguity:</strong> Cannot determine which came first—the exposure or the outcome
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Did vitamin D deficiency cause depression, or did depression lead to less sun exposure and thus lower vitamin D?</li>
              </ul>
            </li>
            <li><strong>Causation Unclear:</strong> Can show associations but cannot prove cause and effect</li>
            <li><strong>Selection Bias:</strong> The people who participate may differ from those who don't</li>
            <li><strong>Survival Bias:</strong> May miss severe or fatal cases that have already occurred</li>
            <li><strong>Recall Bias:</strong> Reliance on participants' memory for past exposures</li>
            <li><strong>Confounding:</strong> Many potential confounding variables may influence observed associations</li>
          </ul>

          <h3 className="mt-6 mb-3">Common Uses in Supplement Research:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Estimating prevalence of supplement use in populations</li>
            <li>Examining associations between nutrient status and health outcomes</li>
            <li>Identifying potential relationships to test in future longitudinal studies</li>
            <li>Comparing supplement use patterns across different demographic groups</li>
            <li>Assessing nutritional status in specific populations</li>
          </ul>
        </>
      }
      
      examples={[
        "A cross-sectional study of 2,000 adults found that those with higher vitamin D levels had better cognitive function scores, though this doesn't prove vitamin D improves cognition.",
        "If a cross-sectional study finds that people taking magnesium supplements have better sleep quality, we cannot conclude that magnesium improves sleep—it's equally possible that people with good sleep are more likely to take supplements.",
        "Cross-sectional studies can quickly identify associations like higher omega-3 intake correlating with lower inflammation markers, but longitudinal studies are needed to confirm whether omega-3s actually reduce inflammation over time."
      ]}
      
      exampleContext="Cross-sectional studies are valuable initial research tools that can quickly identify potential associations between supplement use, nutrient status, and health outcomes. While they cannot prove causation, they efficiently generate hypotheses for more rigorous longitudinal studies and provide important prevalence data for public health planning."
      
      currentPage="crosssectionalstudy"

      
      relatedTerms={[
        { term: "Observational Study", key: "observationalstudy" },
        { term: "Cohort Study", key: "cohortstudy" },
        { term: "Statistical Significance", key: "statisticalsignificance" },
        { term: "Odds Ratio", key: "or" },
        { term: "Biomarker", key: "biomarker" }
      ]}
    />
  );
}
