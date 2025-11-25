'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Battery, Brain, Dumbbell } from 'lucide-react';

export function ValinePage() {
  return (
    <GlossaryTemplate
      term="Valine"
      abbreviation="Val, V (single-letter code)"
      pronunciation="vay-leen"
      definition="An essential branched-chain amino acid (BCAA) that cannot be produced by the body and must be obtained from dietary protein. Valine supports muscle metabolism, mental focus, energy production, and immune function."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Valine is the third of the three branched-chain amino acids (BCAAs), alongside leucine and isoleucine. Like the other BCAAs, valine is primarily metabolized in skeletal muscle rather than the liver, making it readily available for energy production during exercise. Valine also competes with other amino acids for transport across the blood-brain barrier, potentially affecting neurotransmitter synthesis and mental function.
          </p>
          <p className="mb-4">
            <strong>Physiological roles of valine:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Muscle metabolism:</strong> Contributes to muscle protein synthesis and repair; serves as an energy source during prolonged exercise when metabolized in muscle tissue</li>
            <li><strong>Mental vigor and coordination:</strong> May help maintain mental focus during stress or fatigue by competing with tryptophan for brain entry, potentially reducing serotonin synthesis which can cause drowsiness</li>
            <li><strong>Energy production:</strong> Can be converted to glucose through gluconeogenesis; provides energy during extended endurance exercise</li>
            <li><strong>Immune support:</strong> Required for proper immune cell function and tissue repair</li>
            <li><strong>Nitrogen balance:</strong> Helps maintain positive nitrogen balance necessary for muscle preservation and growth</li>
          </ul>
          <p className="mb-4">
            <strong>Valine in BCAA supplements:</strong>
          </p>
          <p className="mb-4">
            Standard BCAA supplements maintain a 2:1:1 ratio of leucine:isoleucine:valine. In a typical 5g BCAA serving, this translates to 2.5g leucine, 1.25g isoleucine, and 1.25g valine. This ratio mirrors the approximate BCAA composition of muscle protein and most dietary protein sources, ensuring balanced intake of all three BCAAs.
          </p>
          <p className="mb-4">
            <strong>Dietary sources:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Animal proteins:</strong> Beef (~5% of protein content), chicken (~5%), eggs (~6-7%), fish (~5%)</li>
            <li><strong>Dairy products:</strong> Whey protein (~5-6%), milk (~6%), cottage cheese (~6%)</li>
            <li><strong>Plant proteins:</strong> Soybeans (~5%), lentils (~5%), chickpeas (~4.5%), peanuts (~5%)</li>
            <li><strong>Grains:</strong> Quinoa (~5%), oats (~5%), brown rice (~6%)</li>
          </ul>
          <p className="mb-4">
            <strong>Valine and the blood-brain barrier:</strong>
          </p>
          <p className="mb-4">
            Valine, leucine, isoleucine, tryptophan, tyrosine, and phenylalanine all use the same transport system to cross the blood-brain barrier. This creates competition—when BCAA levels are elevated, they can reduce tryptophan entry into the brain, potentially decreasing serotonin synthesis. This mechanism is sometimes called the "central fatigue hypothesis" and suggests BCAA supplementation might reduce mental fatigue during prolonged exercise, though research results are mixed and effects appear modest at best.
          </p>
          <p className="mb-4">
            <strong>Valine requirements:</strong>
          </p>
          <p className="mb-4">
            The estimated average requirement for valine in adults is approximately 24 mg/kg body weight per day (roughly 1.7g daily for a 70kg person). Normal dietary protein intake easily exceeds this—consuming 100g of protein from varied sources provides approximately 5-6g of valine, well above needs. Valine deficiency is exceptionally rare and only occurs in severe protein malnutrition or specific metabolic disorders.
          </p>
          <p className="mb-4">
            <strong>BCAAs and muscle recovery:</strong>
          </p>
          <p className="mb-4">
            Research on BCAA supplementation (which includes valine) shows consistent reductions in muscle damage markers like creatine kinase and decreases in delayed onset muscle soreness (DOMS) with medium effect sizes. These benefits are most pronounced when BCAAs are consumed before, during, or immediately after resistance training. However, individuals consuming adequate total protein (~1.6-2.2g/kg body weight daily) likely receive sufficient BCAAs from whole protein sources, making additional supplementation unnecessary for most recreational exercisers.
          </p>
          <p className="mb-4">
            <strong>Why all three BCAAs matter:</strong>
          </p>
          <p className="mb-4">
            While leucine receives the most attention due to its powerful muscle protein synthesis-stimulating effects, maintaining balanced intake of all three BCAAs is important. Consuming extremely high amounts of one BCAA while neglecting the others can create competitive inhibition—excessive leucine, for example, can reduce valine and isoleucine absorption and transport. The 2:1:1 ratio found in supplements and natural protein sources prevents this imbalance.
          </p>
          <p className="mb-4">
            <strong>Valine in hepatic encephalopathy:</strong>
          </p>
          <p className="mb-4">
            BCAA supplementation, including valine, has shown benefits in hepatic encephalopathy (brain dysfunction from liver disease). The mechanism involves reducing aromatic amino acids in the blood and brain, potentially improving mental status in affected individuals. Meta-analyses support BCAA therapy as an adjunctive treatment for this condition, though this is a specialized medical application.
          </p>
          <p className="mb-4">
            <strong>Safety:</strong>
          </p>
          <p className="mb-4">
            Valine from food and typical BCAA supplement doses (1-3g valine per serving) is safe for healthy individuals. People with maple syrup urine disease cannot metabolize BCAAs including valine and must avoid them entirely. Very high doses of isolated valine could theoretically interfere with other amino acid transport, but this is not a concern at normal intake levels from food or supplements.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Dumbbell, 
          title: "Third BCAA", 
          description: "Completes the trio of branched-chain amino acids with leucine and isoleucine. Standard BCAA supplements provide 1.25g valine per 5g serving in a 2:1:1 ratio, matching the natural proportion in muscle protein." 
        },
        { 
          icon: Brain, 
          title: "Mental Focus", 
          description: "Competes with tryptophan for blood-brain barrier transport, potentially reducing serotonin-induced drowsiness during exercise. May help maintain mental clarity during prolonged physical stress, though effects are modest." 
        },
        { 
          icon: Battery, 
          title: "Energy Source", 
          description: "Can be metabolized for energy in muscle tissue during extended exercise and converted to glucose through gluconeogenesis, helping maintain blood sugar during fasting or prolonged activity." 
        }
      ]}
      
      examples={[
        "A 30g serving of whey protein contains approximately 1.5-1.8g valine, contributing to the total BCAA content that supports muscle recovery",
        "A BCAA supplement with 2:1:1 ratio providing 5g total BCAAs delivers 1.25g valine, sufficient to maintain balanced BCAA levels during training",
        "A meal with 200g of cooked lentils (~18g protein) provides roughly 0.9g valine, demonstrating how plant proteins also supply all three BCAAs"
      ]}
      
      currentPage="valine"

      
      relatedTerms={[
        { term: "Leucine", key: "leucine" },
        { term: "Isoleucine", key: "isoleucine" },
        { term: "Essential Amino Acids", key: "essentialaminoacids" },
        { term: "Muscle Protein Synthesis", key: "muscleproteinsynthesis" },
        { term: "Glucose Metabolism", key: "glucosemetabolism" },
        { term: "Neurotransmitter", key: "neurotransmitter" }
      ]}
    />
  );
}
