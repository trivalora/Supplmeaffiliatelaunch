import React from 'react';
import { GlossaryTemplate } from '../GlossaryTemplate';

export function ObservationalStudyPage() {
  const content = {
    term: "Observational Study",
    definition: "A research study where investigators observe participants and measure outcomes without manipulating or assigning interventions, allowing researchers to study associations and patterns as they naturally occur.",
    
    expandedExplanation: (
      <>
        <p>In observational studies, researchers do not control or assign the exposure or intervention. Instead, they observe and record what happens naturally, making these studies valuable for examining real-world patterns, long-term outcomes, and situations where randomized controlled trials would be unethical or impractical.</p>
        
        <p><strong className="glossary-highlight">Types of Observational Studies:</strong></p>
        <ul className="glossary-list">
          <li><strong>Cohort Studies:</strong> Follow groups over time to see who develops outcomes of interest; can be prospective (forward-looking) or retrospective (looking back)</li>
          <li><strong>Case-Control Studies:</strong> Compare people with a condition (cases) to similar people without it (controls), looking back at exposures</li>
          <li><strong>Cross-Sectional Studies:</strong> Examine data from a population at one specific point in time</li>
          <li><strong>Ecological Studies:</strong> Analyze data at the population or group level rather than individual level</li>
        </ul>

        <p><strong className="glossary-highlight">Advantages:</strong></p>
        <ul className="glossary-list">
          <li><strong>Real-World Evidence:</strong> Captures how interventions work in actual practice, not controlled conditions</li>
          <li><strong>Long-Term Follow-Up:</strong> Can track outcomes over years or decades</li>
          <li><strong>Ethical Flexibility:</strong> Allows study of exposures that couldn't ethically be assigned (e.g., smoking, nutritional deficiencies)</li>
          <li><strong>Cost-Effective:</strong> Generally less expensive than randomized controlled trials</li>
          <li><strong>Multiple Outcomes:</strong> Can examine many different outcomes simultaneously</li>
          <li><strong>Rare Outcomes:</strong> Useful for studying uncommon conditions or events</li>
        </ul>

        <p><strong className="glossary-highlight">Limitations:</strong></p>
        <ul className="glossary-list">
          <li><strong>Confounding:</strong> Other variables may influence the observed associations</li>
          <li><strong>Selection Bias:</strong> How participants are chosen may affect results</li>
          <li><strong>Causation vs. Association:</strong> Can show relationships but not definitively prove cause and effect</li>
          <li><strong>Recall Bias:</strong> Participants may not accurately remember past exposures</li>
          <li><strong>Measurement Error:</strong> Without standardized interventions, exposure measurement may vary</li>
        </ul>

        <p><strong className="glossary-highlight">Evidence Hierarchy:</strong></p>
        <p>In the hierarchy of scientific evidence, observational studies generally rank below randomized controlled trials but above case reports and expert opinion. Well-designed observational studies, particularly large prospective cohort studies, can provide valuable evidence, especially when:</p>
        <ul className="glossary-list">
          <li>RCTs are not feasible or ethical</li>
          <li>Long-term outcomes need to be studied</li>
          <li>Real-world effectiveness needs to be assessed</li>
          <li>Rare events or outcomes are being investigated</li>
        </ul>
      </>
    ),

    commonUse: "An observational study of 50,000 adults found that those who regularly consumed omega-3-rich fish had a 23% lower risk of heart disease compared to those who rarely ate fish.",

    importanceInResearch: "Observational studies are essential for supplement research because they can examine long-term health outcomes, real-world usage patterns, and associations that would be impractical or unethical to test in randomized trials. They provide complementary evidence to RCTs and help generate hypotheses for future controlled studies.",

    relatedTerms: ["RCT", "Cohort Study", "Cross-Sectional Study", "Statistical Significance", "Clinical Significance"],

    exampleContext: "While RCTs provide the strongest evidence for supplement efficacy, observational studies are valuable for understanding how supplements are used in real-world settings, identifying potential long-term benefits or risks, and examining outcomes in populations often excluded from clinical trials, such as elderly individuals with multiple health conditions."
  };

  return <GlossaryTemplate {...content}   currentPage="observationalstudy"
    />;
}
