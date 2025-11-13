import { GlossaryTemplate } from '../GlossaryTemplate';
import { Heart, Shield, TrendingUp } from 'lucide-react';

interface HDLCholesterolPageProps {
  onNavigate?: (key: string) => void;
}

export function HDLCholesterolPage({ onNavigate }: HDLCholesterolPageProps) {
  return (
    <GlossaryTemplate
      term="HDL Cholesterol (High-Density Lipoprotein)"
      abbreviation="HDL, HDL-C, Good Cholesterol"
      pronunciation="aych-dee-el kuh-les-tuh-rawl"
      onNavigate={onNavigate}
      currentPage="hdlcholesterol"
      definition="A type of lipoprotein that transports cholesterol from peripheral tissues back to the liver for disposal, often called 'good cholesterol' because higher levels are associated with lower cardiovascular disease risk and protection against atherosclerosis."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            High-density lipoprotein (HDL) cholesterol plays a crucial protective role in cardiovascular health through a process called reverse cholesterol transport. HDL particles pick up excess cholesterol from cells and atherosclerotic plaques in artery walls and transport it back to the liver, where it can be metabolized and excreted through bile. Beyond cholesterol removal, HDL has antioxidant, anti-inflammatory, and endothelial-protective properties that help maintain healthy blood vessels.
          </p>
          <p className="mb-4">
            <strong>HDL cholesterol ranges and cardiovascular risk:</strong>
          </p>
          <p className="mb-4">
            <em>For men:</em>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Low (increased risk):</strong> &lt;40 mg/dL (1.0 mmol/L) — major cardiovascular risk factor</li>
            <li><strong>Average:</strong> 40-50 mg/dL (1.0-1.3 mmol/L) — moderate protection</li>
            <li><strong>Optimal:</strong> ≥60 mg/dL (≥1.6 mmol/L) — considered cardioprotective; may offset other risk factors</li>
          </ul>
          <p className="mb-4">
            <em>For women:</em>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Low (increased risk):</strong> &lt;50 mg/dL (1.3 mmol/L) — major cardiovascular risk factor</li>
            <li><strong>Average:</strong> 50-60 mg/dL (1.3-1.6 mmol/L) — moderate protection</li>
            <li><strong>Optimal:</strong> ≥60 mg/dL (≥1.6 mmol/L) — cardioprotective</li>
          </ul>
          <p className="mb-4">
            <strong>Important note:</strong> While higher HDL is generally better, extremely high HDL (&gt;100 mg/dL) may not provide additional benefits, and some genetic conditions causing very high HDL can actually increase cardiovascular risk. HDL quality (functionality) matters as much as quantity.
          </p>
          <p className="mb-4">
            <strong>How HDL protects cardiovascular health:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Reverse cholesterol transport:</strong> HDL removes excess cholesterol from peripheral tissues (including atherosclerotic plaques) and transports it to the liver for excretion. This prevents cholesterol buildup in artery walls.
            </li>
            <li>
              <strong>Antioxidant activity:</strong> HDL carries antioxidant enzymes (paraoxonase-1, lecithin-cholesterol acyltransferase) that prevent LDL oxidation—a critical early step in atherosclerosis development.
            </li>
            <li>
              <strong>Anti-inflammatory effects:</strong> HDL reduces inflammatory responses in the endothelium and inhibits production of pro-inflammatory cytokines and adhesion molecules.
            </li>
            <li>
              <strong>Endothelial protection:</strong> HDL promotes nitric oxide production, improving endothelial function, vasodilation, and blood flow. It also helps repair damaged endothelium.
            </li>
            <li>
              <strong>Anti-thrombotic properties:</strong> HDL reduces platelet aggregation and blood clot formation, lowering risk of heart attack and stroke.
            </li>
          </ul>
          <p className="mb-4">
            <strong>The HDL paradox and functional HDL:</strong>
          </p>
          <p className="mb-4">
            Recent research has revealed that HDL quality (functionality) may be more important than quantity. In certain conditions (diabetes, chronic inflammation, kidney disease), HDL can become dysfunctional—it loses its protective properties and may even become pro-inflammatory and pro-oxidant. This explains why some individuals with high HDL still develop cardiovascular disease, and why pharmaceutical attempts to raise HDL haven't consistently reduced cardiovascular events. Measuring HDL cholesterol concentration doesn't capture HDL functionality.
          </p>
          <p className="mb-4">
            <strong>Factors that lower HDL cholesterol:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Obesity, particularly visceral (abdominal) fat</li>
            <li>Physical inactivity and sedentary lifestyle</li>
            <li>Type 2 diabetes and insulin resistance</li>
            <li>Smoking (reduces HDL by 10-15%)</li>
            <li>Diet very high in refined carbohydrates and sugars</li>
            <li>Diet very low in fat (especially unsaturated fats)</li>
            <li>Hypertriglyceridemia (inverse relationship between triglycerides and HDL)</li>
            <li>Certain medications (beta-blockers, anabolic steroids, progestins)</li>
            <li>Genetics (some people genetically have lower HDL)</li>
          </ul>
          <p className="mb-4">
            <strong>HDL-raising strategies:</strong>
          </p>
          <p className="mb-4">
            <strong>Lifestyle interventions (most effective):</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Aerobic exercise:</strong> Most effective method to raise HDL; 150+ minutes/week of moderate-intensity exercise can increase HDL by 5-10%. Vigorous exercise may have even greater effects.</li>
            <li><strong>Weight loss:</strong> Losing 5-10% of body weight typically raises HDL by 5-8 mg/dL, particularly when combined with exercise</li>
            <li><strong>Quit smoking:</strong> Stopping smoking increases HDL by approximately 10-15% within weeks to months</li>
            <li><strong>Moderate alcohol consumption:</strong> 1 drink/day for women, 1-2 drinks/day for men associated with higher HDL, though other health risks limit this recommendation</li>
            <li><strong>Healthy fats:</strong> Replace saturated fats with unsaturated fats (olive oil, nuts, seeds, avocados, fatty fish); avoid trans fats completely</li>
            <li><strong>Reduce refined carbohydrates:</strong> Very high carbohydrate diets (especially refined carbs/sugars) can lower HDL; moderate carb intake with emphasis on whole grains, fiber</li>
          </ul>
          <p className="mb-4">
            <strong>Supplements with evidence for HDL effects:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Curcumin:</strong> Meta-analyses show improvements in HDL cholesterol as part of overall lipid profile benefits, particularly in populations with metabolic dysfunction</li>
            <li><strong>Omega-3 fatty acids (EPA/DHA):</strong> Modest HDL increases (1-3 mg/dL) in some studies, with primary benefits being triglyceride reduction and improved HDL functionality rather than quantity</li>
            <li><strong>Niacin (vitamin B3):</strong> Most effective supplement for raising HDL (15-35% increase at high doses), but high doses require medical supervision due to side effects (flushing, liver effects), and recent trials haven't shown cardiovascular benefit when added to statins</li>
          </ul>
          <p className="mb-4">
            <strong>Important context:</strong> Supplements and medications that raise HDL haven't consistently shown cardiovascular benefit in clinical trials, suggesting HDL functionality matters more than absolute levels. Lifestyle interventions (especially exercise) remain the most reliable way to improve HDL.
          </p>
          <p className="mb-4">
            <strong>Clinical significance:</strong>
          </p>
          <p className="mb-4">
            Epidemiologically, every 1 mg/dL increase in HDL cholesterol is associated with approximately 2-3% reduction in cardiovascular disease risk. However, this relationship is complex and influenced by overall lipid profile, triglyceride levels, inflammation, and HDL functionality. Low HDL is considered an independent cardiovascular risk factor and is a component of metabolic syndrome.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Shield, 
          title: "Reverse Cholesterol Transport", 
          description: "HDL removes excess cholesterol from peripheral tissues and atherosclerotic plaques, transporting it back to the liver for disposal. This prevents cholesterol accumulation in artery walls." 
        },
        { 
          icon: Heart, 
          title: "Multiple Protective Mechanisms", 
          description: "Beyond cholesterol removal, HDL has antioxidant (prevents LDL oxidation), anti-inflammatory, endothelial-protective, and anti-thrombotic properties that reduce cardiovascular disease risk." 
        },
        { 
          icon: TrendingUp, 
          title: "Exercise Most Effective to Raise HDL", 
          description: "Regular aerobic exercise (150+ min/week) is the most effective way to raise HDL by 5-10%, while weight loss, quitting smoking, and replacing saturated with unsaturated fats also help." 
        }
      ]}
      
      examples={[
        "An individual with HDL of 35 mg/dL (low, high cardiovascular risk) who begins regular aerobic exercise and loses 10% body weight may raise HDL to 45-50 mg/dL, significantly reducing risk",
        "Curcumin supplementation improved HDL cholesterol as part of comprehensive lipid profile benefits documented in umbrella meta-analyses, particularly in those with metabolic syndrome",
        "A sedentary person with HDL of 42 mg/dL who starts jogging 4 times weekly for 6 months may increase HDL to 48-52 mg/dL, demonstrating exercise's powerful effect on HDL"
      ]}
      
      relatedTerms={[
        { term: "LDL Cholesterol", key: "ldlcholesterol" },
        { term: "Triglycerides", key: "triglycerides" },
        { term: "Cardiovascular", key: "cardiovascular" },
        { term: "Antioxidant", key: "antioxidant" },
        { term: "Biomarker", key: "biomarker" }
      ]}
    />
  );
}
