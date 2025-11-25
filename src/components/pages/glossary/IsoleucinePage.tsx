'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Activity, Droplet, Dumbbell } from 'lucide-react';

export function IsoleucinePage() {
  return (
    <GlossaryTemplate
      term="Isoleucine"
      abbreviation="Ile, I (single-letter code)"
      pronunciation="eye-so-loo-seen"
      definition="An essential branched-chain amino acid (BCAA) that cannot be produced by the body and must be obtained from dietary protein. Isoleucine plays important roles in muscle metabolism, immune function, hemoglobin production, and energy regulation."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Isoleucine is one of three branched-chain amino acids (BCAAs), alongside leucine and valine. While leucine is the primary driver of muscle protein synthesis, isoleucine contributes to muscle recovery, glucose uptake into muscle cells, and energy production during prolonged exercise. The three BCAAs are unique among amino acids because they are primarily metabolized in muscle tissue rather than in the liver, making them readily available for energy production during exercise.
          </p>
          <p className="mb-4">
            <strong>Physiological roles of isoleucine:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Muscle metabolism:</strong> Supports muscle protein synthesis and repair, though less potently than leucine; contributes to muscle energy production during extended exercise</li>
            <li><strong>Glucose regulation:</strong> Enhances glucose uptake into muscle cells and may improve insulin sensitivity; can be converted to glucose through gluconeogenesis during fasting states</li>
            <li><strong>Hemoglobin formation:</strong> Required for hemoglobin synthesis, the oxygen-carrying protein in red blood cells</li>
            <li><strong>Immune function:</strong> Supports immune cell function and antibody production</li>
            <li><strong>Energy production:</strong> Can be metabolized for energy, particularly during prolonged endurance exercise when glycogen stores are depleted</li>
          </ul>
          <p className="mb-4">
            <strong>Isoleucine in BCAA supplements:</strong>
          </p>
          <p className="mb-4">
            Most BCAA supplements use a 2:1:1 ratio of leucine:isoleucine:valine. For example, a 5g BCAA dose typically contains 2.5g leucine, 1.25g isoleucine, and 1.25g valine. This ratio is based on the approximate proportion of these amino acids in muscle tissue and dietary protein sources. Some "leucine-enriched" BCAA formulas use higher ratios like 4:1:1 or 8:1:1, prioritizing leucine's muscle-building effects.
          </p>
          <p className="mb-4">
            <strong>Dietary sources:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Animal proteins:</strong> Chicken (~4-5% of protein content), beef (~5%), eggs (~5.5%), fish (~4-5%)</li>
            <li><strong>Dairy:</strong> Milk (~6%), whey protein (~6-7%), cheese (~5-6%)</li>
            <li><strong>Plant proteins:</strong> Soybeans (~5%), lentils (~4.5%), chickpeas (~4%), quinoa (~4%)</li>
            <li><strong>Nuts and seeds:</strong> Pumpkin seeds (~4%), almonds (~4%)</li>
          </ul>
          <p className="mb-4">
            <strong>Why the 2:1:1 ratio?</strong>
          </p>
          <p className="mb-4">
            The standard 2:1:1 BCAA ratio approximates the ratio found in muscle protein and most dietary protein sources. While leucine is the most important BCAA for muscle protein synthesis, maintaining adequate isoleucine and valine prevents competitive inhibition—when one amino acid is excessively elevated, it can interfere with the absorption and transport of the others across the intestine and into cells. Balanced BCAA ratios ensure all three amino acids are available for their respective functions.
          </p>
          <p className="mb-4">
            <strong>Isoleucine and glucose metabolism:</strong>
          </p>
          <p className="mb-4">
            Research suggests isoleucine may play a specific role in glucose homeostasis and insulin signaling. Some studies indicate that appropriate isoleucine levels enhance glucose uptake into muscle cells, potentially improving glycemic control. However, very high blood isoleucine levels have been associated with insulin resistance in observational studies, though causality is unclear. This relationship is complex and context-dependent.
          </p>
          <p className="mb-4">
            <strong>Isoleucine requirements:</strong>
          </p>
          <p className="mb-4">
            The estimated average requirement for isoleucine in adults is approximately 19 mg/kg body weight per day (roughly 1.4g daily for a 70kg person). This is easily met through normal protein intake—100g of protein from mixed sources typically provides 4-6g of isoleucine, well above requirements. Isolated isoleucine deficiency is virtually unknown outside of rare genetic disorders or severe protein-energy malnutrition.
          </p>
          <p className="mb-4">
            <strong>BCAA research and isoleucine's role:</strong>
          </p>
          <p className="mb-4">
            Most research on BCAAs examines all three amino acids together rather than isoleucine in isolation, making it difficult to separate isoleucine's specific effects. Meta-analyses show BCAA supplementation reduces muscle soreness (DOMS) and muscle damage markers (creatine kinase) with medium effect sizes, particularly when taken before and after resistance exercise. However, these benefits are primarily observed when total protein intake is suboptimal. When adequate complete protein is consumed, additional BCAAs provide minimal advantage.
          </p>
          <p className="mb-4">
            <strong>Safety:</strong>
          </p>
          <p className="mb-4">
            Isoleucine from food and typical BCAA supplement doses (1-3g isoleucine per serving) is safe for healthy individuals. Individuals with maple syrup urine disease cannot metabolize BCAAs including isoleucine and must strictly avoid them. Extremely high isolated BCAA intake may interfere with other amino acid transport, but this is not a concern at normal dietary or supplemental intake levels.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Dumbbell, 
          title: "BCAA Component", 
          description: "One of three branched-chain amino acids alongside leucine and valine. Typically appears in 2:1:1 ratio supplements (leucine:isoleucine:valine), approximating the ratio in muscle tissue and dietary proteins." 
        },
        { 
          icon: Droplet, 
          title: "Hemoglobin Production", 
          description: "Required for hemoglobin synthesis, the oxygen-carrying protein in red blood cells. Supports oxygen delivery to tissues during exercise and daily activities." 
        },
        { 
          icon: Activity, 
          title: "Glucose Metabolism", 
          description: "Enhances glucose uptake into muscle cells and may improve insulin sensitivity. Can be converted to glucose during fasting states through gluconeogenesis." 
        }
      ]}
      
      examples={[
        "A 5g BCAA supplement with 2:1:1 ratio provides 1.25g isoleucine, 2.5g leucine, and 1.25g valine, matching the approximate BCAA distribution in muscle protein",
        "A meal with 150g grilled chicken (~35g protein) provides approximately 1.75g isoleucine, contributing to muscle recovery and glucose regulation",
        "An endurance athlete consuming BCAAs during a long run may benefit from isoleucine's role in glucose uptake and energy production when glycogen stores decline"
      ]}
      
      currentPage="isoleucine"

      
      relatedTerms={[
        { term: "Leucine", key: "leucine" },
        { term: "Valine", key: "valine" },
        { term: "Essential Amino Acids", key: "essentialaminoacids" },
        { term: "Hemoglobin", key: "hemoglobin" },
        { term: "Muscle Protein Synthesis", key: "muscleproteinsynthesis" },
        { term: "Glucose Metabolism", key: "glucosemetabolism" }
      ]}
    />
  );
}
