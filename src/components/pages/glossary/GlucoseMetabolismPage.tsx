'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Activity, TrendingUp, Zap } from 'lucide-react';

export function GlucoseMetabolismPage() {
  return (
    <GlossaryTemplate
      term="Glucose Metabolism"
      pronunciation="gloo-kohs meh-tab-uh-liz-um"
      definition="Glucose metabolism refers to all the biochemical processes involved in the formation, breakdown, and interconversion of glucose in living organisms. It includes how the body processes glucose from food, stores it as glycogen, breaks it down for energy, and maintains stable blood glucose levels."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Glucose metabolism is fundamental to energy production and regulation in the body. When you eat carbohydrates, they are broken down into glucose, which is then absorbed into the bloodstream. The body has several pathways to manage this glucose:
          </p>
          <p className="mb-4">
            <strong>Key metabolic pathways include:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Glycolysis:</strong> The breakdown of glucose into pyruvate, producing ATP (energy) in the process. This occurs in the cell cytoplasm and doesn't require oxygen.</li>
            <li><strong>Gluconeogenesis:</strong> The synthesis of new glucose from non-carbohydrate sources like amino acids and glycerol. Primarily occurs in the liver during fasting or low-carb states.</li>
            <li><strong>Glycogenesis:</strong> The conversion of excess glucose into glycogen for storage in the liver and muscles when blood glucose is high (after eating).</li>
            <li><strong>Glycogenolysis:</strong> The breakdown of glycogen back into glucose when blood sugar drops (between meals or during exercise).</li>
            <li><strong>Krebs cycle (Citric Acid Cycle):</strong> Further processing of pyruvate from glycolysis to generate more ATP in the mitochondria.</li>
          </ul>
          <p className="mb-4">
            <strong>Hormonal regulation of glucose metabolism:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Insulin:</strong> Released by the pancreas when blood glucose is high. Promotes glucose uptake by cells, glycogen storage, and fat synthesis while inhibiting glucose production.</li>
            <li><strong>Glucagon:</strong> Released when blood glucose is low. Stimulates glycogen breakdown and glucose production by the liver.</li>
            <li><strong>Cortisol, epinephrine, growth hormone:</strong> Counter-regulatory hormones that raise blood glucose during stress or fasting.</li>
          </ul>
          <p className="mb-4">
            Impaired glucose metabolism is a hallmark of metabolic syndrome, pre-diabetes, and type 2 diabetes. When cells become resistant to insulin (insulin resistance), glucose cannot enter cells efficiently, leading to elevated blood glucose levels and compensatory increases in insulin secretion. Over time, this can damage blood vessels, nerves, and organs.
          </p>
          <p className="mb-4">
            Factors that influence glucose metabolism include diet (especially carbohydrate type and amount), physical activity, body composition, sleep quality, stress levels, genetics, and certain medications or supplements. Improving glucose metabolism through lifestyle modifications can reduce the risk of chronic diseases and improve overall health and energy levels.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Activity, 
          title: "Multiple Metabolic Pathways", 
          description: "Glucose metabolism involves several interconnected pathways including glycolysis (breakdown for energy), gluconeogenesis (creation from non-carb sources), glycogenesis (storage), and glycogenolysis (release from storage)." 
        },
        { 
          icon: TrendingUp, 
          title: "Tightly Regulated by Hormones", 
          description: "Insulin and glucagon are the primary regulators, maintaining blood glucose within a narrow range. Insulin lowers blood glucose by promoting uptake and storage, while glucagon raises it by stimulating release from storage." 
        },
        { 
          icon: Zap, 
          title: "Central to Energy Production", 
          description: "Glucose is the body's preferred fuel source, especially for the brain. Proper glucose metabolism ensures steady energy supply to all cells while preventing the damage caused by chronically elevated blood sugar." 
        }
      ]}
      
      currentPage="glucosemetabolism"

      
      relatedTerms={['bloodglucose', 'insulinresistance', 'glycemiccontrol', 'metabolism']}
    />
  );
}
