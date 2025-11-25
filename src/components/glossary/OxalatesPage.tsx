'use client';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { AlertTriangle, Leaf, TrendingDown } from 'lucide-react';

export function OxalatesPage() {
  return (
    <GlossaryTemplate
      term="Oxalates"
      abbreviation="Oxalic Acid"
      pronunciation="ox-uh-lates"
      definition="Natural organic compounds found in many plant foods that can bind to minerals (especially calcium) in the digestive tract, reducing absorption, and contribute to kidney stone formation in susceptible individuals when consumed in high amounts."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Oxalates (oxalic acid and its salts) are naturally produced by plants, humans, and other organisms as metabolic byproducts. In plants, oxalates may serve protective functions, deterring herbivores and regulating calcium levels. When consumed, oxalates can bind to minerals—particularly calcium—in the digestive tract, forming insoluble crystals (calcium oxalate) that are not absorbed and are excreted in feces. While most people tolerate dietary oxalates without issues, high intake can contribute to kidney stone formation in susceptible individuals.
          </p>
          <p className="mb-4">
            <strong>Foods high in oxalates:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Very high (100+ mg per serving):</strong> Spinach, rhubarb, beet greens, Swiss chard, buckwheat, soy products, almonds, navy beans, beets</li>
            <li><strong>High (50-100 mg):</strong> Sweet potatoes, black beans, white beans, wheat bran, dark chocolate, okra, kale</li>
            <li><strong>Moderate (10-50 mg):</strong> Carrots, celery, green beans, eggplant, berries (raspberries, blackberries), nuts (cashews, peanuts)</li>
            <li><strong>Low (&lt;10 mg):</strong> Most animal products (meat, fish, dairy, eggs), refined grains, most fruits (apples, bananas, citrus)</li>
          </ul>
          <p className="mb-4">
            Spinach is particularly high—one cup of cooked spinach contains approximately 600-800mg of oxalates, while one cup of raw spinach contains ~150-200mg.
          </p>
          <p className="mb-4">
            <strong>How oxalates affect mineral absorption:</strong>
          </p>
          <p className="mb-4">
            Oxalates primarily bind to calcium in the digestive tract, forming calcium oxalate crystals that pass through unabsorbed. This has two effects:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Reduces calcium absorption:</strong> The calcium bound to oxalate cannot be absorbed, reducing the bioavailable calcium from that meal. Spinach contains calcium, but its high oxalate content means &lt;5% of that calcium is absorbed versus 30% from milk.</li>
            <li><strong>Reduces oxalate absorption:</strong> Ironically, consuming calcium with oxalate-rich foods reduces oxalate absorption because more oxalate is bound in the intestine. This lowers urinary oxalate and kidney stone risk.</li>
          </ul>
          <p className="mb-4">
            Oxalates can also bind to magnesium, iron, and other minerals, though calcium is the primary target.
          </p>
          <p className="mb-4">
            <strong>Oxalates and kidney stones:</strong>
          </p>
          <p className="mb-4">
            Approximately 80% of kidney stones are calcium oxalate stones. Stone formation occurs when urinary oxalate levels become high enough to precipitate calcium oxalate crystals in the kidneys or urinary tract. Factors contributing to stone risk:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>High dietary oxalate:</strong> Very high intake (200+ mg daily) increases urinary oxalate, particularly in stone formers</li>
            <li><strong>Low calcium intake:</strong> Paradoxically, low-calcium diets increase stone risk because less calcium is available to bind oxalate in the gut, allowing more oxalate absorption</li>
            <li><strong>Dehydration:</strong> Low fluid intake concentrates urine, promoting crystal formation</li>
            <li><strong>High vitamin C:</strong> Very high doses (&gt;2,000mg daily) can metabolize to oxalate, increasing urinary levels</li>
            <li><strong>Gut issues:</strong> Fat malabsorption (Crohn's disease, gastric bypass) increases oxalate absorption because calcium binds to fat instead of oxalate</li>
            <li><strong>Genetic factors:</strong> Some individuals naturally produce more oxalate internally (primary hyperoxaluria) or absorb more dietary oxalate</li>
          </ul>
          <p className="mb-4">
            <strong>Strategies to reduce kidney stone risk:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Adequate calcium:</strong> 1,000-1,200mg calcium daily (food or supplements) binds oxalate in the gut, reducing absorption and urinary levels</li>
            <li><strong>Hydration:</strong> 2-3 liters of fluid daily dilutes urine and prevents crystal formation</li>
            <li><strong>Moderate oxalate intake:</strong> Limiting very high-oxalate foods (spinach, rhubarb, beet greens) to moderate portions; most people tolerate 100-200mg oxalate daily</li>
            <li><strong>Calcium timing:</strong> Consuming calcium-rich foods or supplements with oxalate-rich meals maximizes binding in the gut</li>
            <li><strong>Citrate-rich foods:</strong> Citrus fruits, lemons, limes increase urinary citrate, which inhibits stone formation</li>
            <li><strong>Moderate vitamin C:</strong> Avoid megadoses (&gt;2,000mg daily); 500-1,000mg is safe for most people</li>
          </ul>
          <p className="mb-4">
            <strong>High-dose vitamin C and oxalate:</strong>
          </p>
          <p className="mb-4">
            Vitamin C (ascorbic acid) can be metabolized to oxalate in the body. Most studies show that doses up to 1,000mg daily do not significantly increase urinary oxalate in healthy individuals. However, very high doses (2,000-4,000+ mg daily) can elevate urinary oxalate and theoretically increase stone risk in susceptible individuals. Stone formers should exercise caution with high-dose vitamin C supplements.
          </p>
          <p className="mb-4">
            <strong>Cooking and preparation effects:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Boiling:</strong> Reduces oxalate content by 30-87% depending on food and cooking time; oxalates leach into cooking water (discarding water removes them)</li>
            <li><strong>Steaming:</strong> Minimal effect on oxalate content (&lt;15% reduction)</li>
            <li><strong>Raw versus cooked:</strong> Cooking concentrates oxalates per volume (cooked spinach is more compact) but boiling reduces total oxalate if water is discarded</li>
          </ul>
          <p className="mb-4">
            <strong>Gut bacteria and oxalate metabolism:</strong>
          </p>
          <p className="mb-4">
            Certain gut bacteria, particularly <em>Oxalobacter formigenes</em>, can break down oxalates in the colon, reducing absorption. Antibiotic use, which disrupts gut bacteria, may increase oxalate absorption and stone risk. Probiotic formulations containing oxalate-degrading bacteria are being studied but not yet widely available.
          </p>
          <p className="mb-4">
            <strong>Who should limit oxalates?</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Kidney stone formers:</strong> Individuals with history of calcium oxalate stones should moderate intake (aim for 50-100mg daily or as advised by physician)</li>
            <li><strong>Primary hyperoxaluria:</strong> Rare genetic condition requiring strict low-oxalate diet</li>
            <li><strong>Inflammatory bowel disease:</strong> Crohn's disease, ulcerative colitis with fat malabsorption increases oxalate absorption</li>
            <li><strong>Gastric bypass patients:</strong> Altered anatomy increases oxalate absorption and stone risk</li>
          </ul>
          <p className="mb-4">
            <strong>Most people don't need to avoid oxalates:</strong>
          </p>
          <p className="mb-4">
            For individuals without kidney stone history or conditions affecting oxalate absorption, dietary oxalates pose minimal risk. The health benefits of oxalate-rich foods (spinach, kale, sweet potatoes, berries, nuts) far outweigh concerns for most people. Moderate portions, adequate hydration, and sufficient calcium intake minimize any potential issues.
          </p>
          <p className="mb-4">
            <strong>Oxalates in supplement formulations:</strong>
          </p>
          <p className="mb-4">
            Some plant-based protein powders and green powders contain oxalate-rich ingredients (spinach powder, kale, chia seeds). Manufacturers may use processing methods to reduce oxalate content. Individuals prone to kidney stones should check labels and consider lower-oxalate alternatives.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: TrendingDown, 
          title: "Binds Calcium", 
          description: "Oxalates form insoluble calcium oxalate crystals in the digestive tract, reducing calcium absorption from oxalate-rich foods. Spinach contains calcium but only ~5% is absorbed due to high oxalate content versus ~30% from dairy." 
        },
        { 
          icon: AlertTriangle, 
          title: "Kidney Stone Risk", 
          description: "High dietary oxalate (200+ mg daily) increases urinary oxalate and calcium oxalate stone formation in susceptible individuals. Adequate calcium intake (1,000-1,200mg), hydration, and limiting very high-oxalate foods reduces risk." 
        },
        { 
          icon: Leaf, 
          title: "Abundant in Leafy Greens", 
          description: "Spinach (600-800mg/cup cooked), beet greens, Swiss chard, and rhubarb are very high in oxalates. Boiling reduces content by 30-87% if cooking water is discarded. Most people tolerate moderate intake without issues." 
        }
      ]}
      
      examples={[
        "One cup of cooked spinach (~600mg oxalate) binds most of its calcium content, making it a poor calcium source despite containing ~250mg calcium—only ~10-15mg is absorbed",
        "An individual with history of calcium oxalate kidney stones limits spinach, rhubarb, and Swiss chard while consuming 1,200mg calcium daily with meals, reducing urinary oxalate by 30-40%",
        "Very high-dose vitamin C supplementation (3,000mg daily) metabolizes partially to oxalate, potentially increasing urinary oxalate by 20-30% and raising stone risk in susceptible individuals"
      ]}
      
      currentPage="oxalates"

      
      relatedTerms={[
        { term: "Absorption", key: "absorption" },
        { term: "Bioavailability", key: "bioavailability" },
        { term: "Phytates", key: "phytates" },
        { term: "Mineral", key: "mineral" },
        { term: "Chelated", key: "chelated" }
      ]}
    />
  );
}
