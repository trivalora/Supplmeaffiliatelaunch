import { GlossaryTemplate } from '../GlossaryTemplate';
import { Heart, Brain, Shield } from 'lucide-react';

export function Omega3Page() {
  return (
    <GlossaryTemplate
      term="Omega-3 Fatty Acids"
      pronunciation="oh-may-guh three fat-ee as-ids"
      definition="Omega-3 fatty acids are a family of essential polyunsaturated fatty acids that play crucial roles in heart health, brain function, and inflammation regulation. The three main types are ALA (plant-based), EPA, and DHA (both primarily from fish)."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Omega-3 fatty acids are called "essential" because your body cannot produce them—you must obtain them from your diet. The name "omega-3" refers to the chemical structure: these fats have their first double bond at the third carbon atom from the omega (methyl) end of the fatty acid chain.
          </p>
          <p className="mb-4">
            There are three main types of omega-3 fatty acids:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>ALA (Alpha-linolenic acid):</strong> Found in plant sources like flaxseed, chia seeds, walnuts, and hemp seeds. Your body can convert small amounts of ALA to EPA and DHA, but this conversion is very inefficient (typically less than 5% to EPA, less than 1% to DHA).</li>
            <li><strong>EPA (Eicosapentaenoic acid):</strong> Found primarily in fatty fish and fish oil. EPA has strong anti-inflammatory properties and cardiovascular benefits.</li>
            <li><strong>DHA (Docosahexaenoic acid):</strong> Also found primarily in fatty fish and fish oil. DHA is the primary structural omega-3 in the brain and retina, making it especially important for brain development and cognitive function.</li>
          </ul>
          <p className="mb-4">
            The best dietary sources of EPA and DHA are fatty fish like salmon, mackerel, sardines, herring, and anchovies. For those who don't consume fish regularly, supplements (fish oil, krill oil, or algae-based omega-3) can provide EPA and DHA. Algae-based omega-3 is particularly important for vegans and vegetarians, as it provides pre-formed DHA without requiring conversion from ALA.
          </p>
          <p className="mb-4">
            Health organizations typically recommend 250-500mg of combined EPA+DHA daily for general health, with higher doses (1-4g) used therapeutically for specific conditions like high triglycerides or cardiovascular disease.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Heart, 
          title: "Cardiovascular Protection", 
          description: "Omega-3s reduce triglycerides, lower blood pressure, decrease inflammation, and may reduce risk of heart disease and stroke. EPA and DHA have the strongest evidence for heart health benefits." 
        },
        { 
          icon: Brain, 
          title: "Brain & Mental Health", 
          description: "DHA is essential for brain structure and development. Omega-3s support cognitive function, may help with depression and ADHD, and might protect against age-related cognitive decline." 
        },
        { 
          icon: Shield, 
          title: "Anti-Inflammatory Effects", 
          description: "Omega-3s, particularly EPA, produce anti-inflammatory signaling molecules that help balance the body's inflammatory responses, important for many chronic conditions." 
        }
      ]}
      
      relatedTerms={['epa', 'dha', 'cardiovascular', 'inflammation', 'triglycerides', 'cognitive-function', 'bioavailability']}
    />
  );
}
