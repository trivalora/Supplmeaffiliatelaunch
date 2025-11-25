'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Brain, Activity, Scale, Beaker } from 'lucide-react';

export function SatietyPage() {
  return (
    <GlossaryTemplate
      term="Satiety"
      pronunciation="suh-TY-uh-tee"
      partOfSpeech="noun"
      definition="Satiety is the feeling of fullness and satisfaction that occurs after eating, which suppresses further food intake until the next meal. It is distinct from satiation (the process that leads to meal termination during eating). Satiety is regulated by complex interactions between the gut, hormones, and brain, and plays a crucial role in appetite control and body weight regulation."
      
      whyItMatters="Understanding satiety is important for weight management and obesity treatment, managing hunger during calorie restriction, improving diet adherence and sustainability, developing functional foods and supplements, and understanding eating behavior and disorders. Enhanced satiety can support weight management by reducing overall calorie intake without conscious restriction."
      
      keyPoints={[
        {
          icon: Activity,
          title: "Satiety vs. Satiation",
          description: "Satiation is the process during a meal that leads to stopping eating (meal termination). Satiety is the feeling of fullness between meals that delays the next eating occasion. Both contribute to overall appetite regulation but work at different time points."
        },
        {
          icon: Brain,
          title: "Physiological Mechanisms",
          description: "Satiety is regulated through mechanical signals (stomach distension), gut hormones (GLP-1, PYY, CCK), nutrient sensors in the gut, brain centers (hypothalamus), blood glucose levels, leptin (long-term signal from fat tissue), and ghrelin (hunger hormone that decreases after eating)."
        },
        {
          icon: Scale,
          title: "Factors Affecting Satiety",
          description: "Protein is the most satiating macronutrient per calorie. Fiber increases satiety through volume, slowed digestion, and fermentation. Volume and water content, lower energy density, fat's effect on gastric emptying, food form (solids vs. liquids), and degree of processing all influence satiety."
        },
        {
          icon: Beaker,
          title: "Measurement in Research",
          description: "Satiety is assessed using Visual Analog Scales (VAS) for hunger and fullness ratings, ad libitum food intake at subsequent meals, time to next meal, satiety hormone blood levels (GLP-1, PYY, ghrelin), and 24-hour food intake recall."
        }
      ]}
      
      expandedExplanation={
        <>
          <p><strong>Relevance to supplements:</strong> Some supplements are studied for their effects on satiety. Fiber supplements like glucomannan, psyllium, and inulin may increase fullness. Protein supplements, especially whey protein, show strong satiety effects. Other compounds like 5-HTP (through serotonin pathways), chromium (for appetite and cravings), and green tea extract (affecting appetite hormones) have been investigated for satiety effects.</p>
          
          <p className="mt-4">Different foods and nutrients have different satiety effects. Protein is most satiating per calorie, fiber increases satiety through multiple mechanisms, volume and water content matter, lower energy density foods increase fullness, fat provides prolonged satiety through slower gastric emptying, solid foods are generally more satiating than liquids, and whole foods tend to be more satiating than highly processed foods.</p>
        </>
      }
      
      currentPage="satiety"

      
      relatedTerms={[
        'GLP-1',
        'PYY',
        'Protein',
        'FODMAP',
        'Fiber'
      ]}
    />
  );
}
