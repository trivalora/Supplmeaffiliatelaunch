import { GlossaryTemplate } from '../GlossaryTemplate';

interface CortisolPageProps {
  onNavigate?: (key: string) => void;
}

export function CortisolPage({ onNavigate }: CortisolPageProps) {
  return (
    <GlossaryTemplate
      term="Cortisol"
      onNavigate={onNavigate}
      currentPage="cortisol"
      definition="A steroid hormone produced by the adrenal glands that regulates metabolism, immune function, and the body's stress response, following a natural daily rhythm."
      detailedExplanation="Cortisol is often called the 'stress hormone' because it rises in response to physical or psychological stress as part of the fight-or-flight response. However, cortisol has many essential functions beyond stress response: it regulates blood sugar by promoting glucose production, influences immune function, controls inflammation, affects sleep-wake cycles, and helps maintain blood pressure. Cortisol follows a diurnal rhythm, typically peaking 30-45 minutes after waking (the cortisol awakening response) and gradually declining throughout the day to reach lowest levels at night.

Chronically elevated cortisol from ongoing stress can lead to problems including weight gain (particularly abdominal fat), insulin resistance, high blood pressure, weakened immune function, poor sleep, memory problems, and mood disturbances. Cushing's syndrome is a rare condition of severe cortisol excess. Conversely, insufficient cortisol production (adrenal insufficiency or Addison's disease) causes fatigue, weakness, low blood pressure, and inability to respond to stress.

Cortisol levels are measured through blood, saliva, or urine tests. Managing stress through lifestyle interventions—including regular exercise, adequate sleep, meditation, social connection, and time in nature—helps maintain healthy cortisol patterns. Some supplements, particularly adaptogens like ashwagandha and Rhodiola, may help modulate cortisol responses to stress, though evidence is still emerging."
      examples={[
        "Ashwagandha supplementation (300-600mg daily for 6-8 weeks) reduced cortisol levels by 14-28% in chronically stressed adults",
        "Regular moderate-intensity exercise helps normalize cortisol rhythms, though excessive high-intensity training without adequate recovery can elevate cortisol",
        "Chronic sleep deprivation disrupts normal cortisol patterns, leading to elevated evening cortisol and blunted morning response"
      ]}
      relatedTerms={[
        { term: "Biomarker", key: "biomarker" },
        { term: "Metabolism", key: "metabolism" },
        { term: "Inflammation", key: "inflammation" }
      ]}
    />
  );
}
