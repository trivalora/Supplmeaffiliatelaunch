import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function PYYPage() {
  return (
    <GlossaryTemplate
      term="Peptide YY"
      abbreviation="PYY"
      definition="A satiety hormone secreted by intestinal L-cells in response to food intake that reduces appetite, slows gastric emptying, and decreases food consumption, playing a key role in appetite regulation and energy balance."
      detailedExplanation="Peptide YY (PYY) is a 36-amino acid hormone belonging to the neuropeptide Y family. It is co-secreted with GLP-1 by enteroendocrine L-cells located primarily in the distal small intestine and colon. PYY is released in response to food intake, with secretion proportional to calorie content and particularly responsive to fat and protein. Secretion begins within 15-30 minutes of eating and peaks 1-2 hours postprandially.

PYY exists in two forms: PYY1-36 (full length) and PYY3-36 (the predominant circulating form, created by DPP-4 cleavage). PYY3-36 accounts for roughly two-thirds of circulating PYY and acts primarily through Y2 receptors in the hypothalamus and brainstem to reduce appetite. PYY slows gastric emptying and intestinal transit, allowing more complete nutrient absorption and prolonging satiety signals.

Fasting PYY levels typically range from 10-30 pg/mL, rising to 40-80 pg/mL (or higher) after meals. People with obesity often have lower fasting PYY and blunted postprandial responses, which may contribute to reduced satiety and overeating. Weight loss through caloric restriction tends to decrease PYY further, potentially contributing to weight regain—this is one mechanism explaining the difficulty maintaining weight loss.

Interventions that increase PYY include: (1) high-protein diets (protein is the most potent macronutrient stimulus), (2) dietary fiber, particularly fermentable fibers that produce short-chain fatty acids stimulating L-cells, (3) structured meal patterns, and (4) certain bioactive compounds under investigation. Exercise acutely suppresses PYY during activity but may enhance responses to subsequent meals.

In supplement and nutrition research, PYY is measured as a biomarker of satiety mechanisms. Studies evaluating interventions for weight management, appetite control, or metabolic health frequently measure fasting and/or postprandial PYY. Increases in PYY, particularly if accompanied by increased satiety ratings and reduced food intake, suggest beneficial effects on appetite regulation. However, like GLP-1, PYY measurement requires careful sample handling.

Some research explores exogenous PYY administration for obesity treatment, but practical delivery challenges exist. Dietary and supplement strategies to naturally enhance endogenous PYY secretion represent more accessible approaches."
      examples={[
        "Study shows whey protein supplementation increases postprandial PYY by 25% and reduces subsequent ad libitum food intake by 12%",
        "Clinical trial reports that prebiotic fiber increases PYY area under the curve by 18% and improves satiety scores in overweight adults",
        "Patient's fasting PYY is 15 pg/mL with blunted postprandial response (peak 35 pg/mL), suggesting impaired satiety signaling contributing to obesity"
      ]}
      relatedTerms={[
        { term: "GLP-1 (Glucagon-Like Peptide-1)", key: "glp1" },
        { term: "Gut Microbiome", key: "gutmicrobiome" },
        { term: "Metabolism", key: "metabolism" },
        { term: "Biomarker", key: "biomarker" }
      ]}
      currentPage="pyy"
    />
  );
}
