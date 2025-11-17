import { GlossaryTemplate } from '../GlossaryTemplate';
import { Calendar, Activity, TrendingDown } from 'lucide-react';

export function PMSPage() {
  return (
    <GlossaryTemplate
      term="PMS (Premenstrual Syndrome)"
      pronunciation="pree-men-stroo-ul sin-drohm"
      definition="Premenstrual syndrome (PMS) is a combination of physical, emotional, and behavioral symptoms that occur in the luteal phase of the menstrual cycle (typically 1-2 weeks before menstruation) and resolve shortly after menstruation begins. It affects up to 75% of menstruating women to varying degrees."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            PMS encompasses a wide range of symptoms that recur in a predictable pattern related to the menstrual cycle. While the exact cause is not fully understood, PMS is believed to result from hormonal fluctuations (particularly estrogen and progesterone), neurotransmitter changes (especially serotonin), and their interactions with the nervous system.
          </p>
          <p className="mb-4">
            <strong>Common PMS symptoms:</strong>
          </p>
          <p className="mb-4"><em>Physical symptoms:</em></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Breast tenderness and swelling</li>
            <li>Bloating and water retention</li>
            <li>Headaches or migraines</li>
            <li>Fatigue and low energy</li>
            <li>Joint or muscle pain</li>
            <li>Digestive changes (constipation or diarrhea)</li>
            <li>Acne or skin changes</li>
            <li>Food cravings (especially for sweet or salty foods)</li>
            <li>Changes in sleep patterns</li>
          </ul>
          <p className="mb-4"><em>Emotional and behavioral symptoms:</em></p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Mood swings and irritability</li>
            <li>Anxiety or tension</li>
            <li>Depression or sadness</li>
            <li>Crying spells</li>
            <li>Difficulty concentrating</li>
            <li>Social withdrawal</li>
            <li>Changes in libido</li>
            <li>Anger or increased conflict</li>
          </ul>
          <p className="mb-4">
            <strong>Severity classification:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Mild PMS:</strong> Noticeable symptoms that don't significantly interfere with daily life (affects about 20-30% of women)</li>
            <li><strong>Moderate to Severe PMS:</strong> Symptoms that disrupt work, relationships, or daily activities (affects about 20-40% of women)</li>
            <li><strong>PMDD (Premenstrual Dysphoric Disorder):</strong> A severe form affecting 3-8% of women, characterized by severe mood symptoms that significantly impair functioning. PMDD is a distinct diagnosis requiring professional treatment.</li>
          </ul>
          <p className="mb-4">
            <strong>Diagnosis criteria:</strong> PMS is diagnosed when:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Symptoms occur during the luteal phase (after ovulation, before menstruation)</li>
            <li>Symptoms resolve within a few days of menstruation starting</li>
            <li>There is a symptom-free period during the follicular phase (after menstruation, before ovulation)</li>
            <li>Symptoms recur for at least 2-3 consecutive menstrual cycles</li>
            <li>Symptoms cause noticeable distress or interference with daily life</li>
          </ul>
          <p className="mb-4">
            <strong>Management approaches:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Lifestyle modifications:</strong> Regular exercise, stress management, adequate sleep, limiting caffeine and alcohol</li>
            <li><strong>Dietary changes:</strong> Reducing salt and sugar, eating smaller frequent meals, ensuring adequate complex carbohydrates</li>
            <li><strong>Supplements:</strong> Calcium, magnesium, vitamin B6, and vitamin D have shown benefit in some studies; evening primrose oil and chasteberry are also used</li>
            <li><strong>Medications:</strong> NSAIDs for pain, diuretics for bloating, SSRIs for mood symptoms (especially for PMDD), hormonal contraceptives to regulate hormones</li>
            <li><strong>Cognitive-behavioral therapy:</strong> Helpful for managing emotional symptoms</li>
          </ul>
          <p className="mb-4">
            Many women find that a combination of lifestyle modifications, dietary changes, and targeted supplementation can significantly reduce PMS symptoms. Tracking symptoms across multiple cycles can help identify patterns and triggers, and is useful when discussing treatment options with healthcare providers.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Calendar, 
          title: "Cyclical Pattern of Symptoms", 
          description: "PMS symptoms occur predictably in the luteal phase (1-2 weeks before menstruation) and resolve shortly after menstruation begins. This cyclical pattern, with symptom-free periods, is key to diagnosis." 
        },
        { 
          icon: Activity, 
          title: "Wide Range of Symptoms", 
          description: "PMS can cause over 150 documented symptoms, including physical (bloating, breast tenderness, headaches, fatigue) and emotional (mood swings, irritability, anxiety, depression) manifestations that vary by individual." 
        },
        { 
          icon: TrendingDown, 
          title: "Multiple Management Strategies", 
          description: "PMS can be managed through lifestyle changes (exercise, stress reduction, sleep), dietary modifications (reducing salt/sugar, adequate nutrients), supplements (calcium, magnesium, vitamin B6), and medications when needed." 
        }
      ]}
      
      relatedTerms={['inflammation', 'biomarker', 'metabolism', 'neurotransmitter']}
    />
  );
}
