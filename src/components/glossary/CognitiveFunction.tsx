import { GlossaryTemplate } from '../GlossaryTemplate';

export function CognitiveFunctionPage() {
  return (
    <GlossaryTemplate
      term="Cognitive Function"
      definition="The mental processes involved in acquiring knowledge and understanding, including attention, memory, reasoning, problem-solving, decision-making, and processing speed."
      detailedExplanation="Cognitive function encompasses multiple domains of mental ability that allow us to think, learn, remember, and interact with the world. Key domains include: executive function (planning, decision-making, impulse control), working memory (holding and manipulating information), processing speed (how quickly information is processed), verbal ability (language and communication), and visuospatial skills (understanding spatial relationships). Cognitive performance varies naturally throughout the day and across the lifespan.

Cognitive function is assessed through standardized tests like the Mini-Mental State Examination (MMSE), Montreal Cognitive Assessment (MoCA), and domain-specific tests measuring memory, attention, and processing speed. Normal cognitive aging involves some decline in processing speed and working memory, but wisdom, vocabulary, and accumulated knowledge often improve with age. Pathological cognitive decline (as seen in dementia or Alzheimer's disease) is more severe and interferes with daily functioning.

Factors supporting cognitive health include regular physical exercise (particularly aerobic activity), mentally stimulating activities, quality sleep, stress management, social engagement, cardiovascular health, and nutrition. Certain supplements show promise for cognitive support, including omega-3 fatty acids (particularly DHA), B vitamins, vitamin D, magnesium, creatine, and specific compounds like ashwagandha and citicoline, though evidence varies by population and cognitive domain."
      examples={[
        "Ashwagandha supplementation (300-600mg daily) improved memory, executive function, attention, and information processing speed in healthy adults and those with mild cognitive impairment",
        "Omega-3 DHA is a major structural component of brain cell membranes and may support cognitive function, particularly in older adults with low baseline intake",
        "Creatine supplementation (5g daily) enhanced working memory and processing speed in healthy adults, particularly during cognitive stress or sleep deprivation"
      ]}
      relatedTerms={[
        { term: "Biomarker", key: "biomarker" },
        { term: "Efficacy", key: "efficacy" },
        { term: "Clinical Significance", key: "clinicalsignificance" }
      ]}
      currentPage="cognitivefunction.tsx"
    />
  );
}
