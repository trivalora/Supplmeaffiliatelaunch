import { GlossaryTemplate } from '../GlossaryTemplate';
import { Brain, Eye, Heart } from 'lucide-react';

export function DHAPage() {
  return (
    <GlossaryTemplate
      term="DHA (Docosahexaenoic Acid)"
      pronunciation="doh-koh-suh-hex-uh-ee-no-ik as-id"
      definition="DHA is a long-chain omega-3 fatty acid that serves as a major structural component of the brain, retina, and nervous system. It's essential for brain development in infants and cognitive function throughout life."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            DHA is one of the two primary omega-3 fatty acids found in fish oil (the other being EPA). It's the most abundant omega-3 fatty acid in the brain, making up about 40% of the polyunsaturated fatty acids in the brain and 60% in the retina of the eye.
          </p>
          <p className="mb-4">
            Like EPA, your body can convert small amounts of ALA (from plant sources) to DHA, but this conversion is extremely inefficient (less than 1% in most studies), making dietary intake particularly important, especially during pregnancy, infancy, and early childhood.
          </p>
          <p className="mb-4">
            DHA supports multiple critical functions:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Brain structure and function:</strong> Essential for brain development in fetuses and infants; supports cognitive function, memory, and learning throughout life</li>
            <li><strong>Eye health:</strong> Critical component of retinal photoreceptors; supports visual development in infants and may help maintain vision in aging</li>
            <li><strong>Cardiovascular health:</strong> Like EPA, DHA helps reduce triglycerides and supports heart health, though EPA may have stronger anti-inflammatory effects</li>
            <li><strong>Neuroprotection:</strong> May help protect against cognitive decline and neurodegenerative diseases</li>
          </ul>
          <p className="mb-4">
            DHA is especially important during pregnancy and breastfeeding, as it accumulates rapidly in the fetal brain during the third trimester and continues to be important for brain development in the first two years of life. Standard recommendations for pregnant women are 200-300mg DHA daily.
          </p>
          <p className="mb-4">
            For general adult health, combined EPA+DHA intake of 250-500mg daily is often recommended, with higher doses (1-2g) used therapeutically for specific conditions. Fish oil supplements typically provide both EPA and DHA in varying ratios.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Brain, 
          title: "Brain Development & Function", 
          description: "DHA is the most abundant omega-3 in the brain and is essential for brain development in infants and cognitive function throughout life. Critical during pregnancy and early childhood." 
        },
        { 
          icon: Eye, 
          title: "Vision Support", 
          description: "DHA makes up 60% of the polyunsaturated fats in the retina and is essential for visual development in infants and maintaining eye health in adults." 
        },
        { 
          icon: Heart, 
          title: "Cardiovascular Health", 
          description: "DHA reduces triglycerides, supports healthy blood vessel function, and contributes to overall heart health, though EPA may be more effective for inflammation." 
        }
      ]}
      
      relatedTerms={['epa', 'omega-3', 'cognitive-function', 'cardiovascular', 'bioavailability', 'metabolism']}
    />
  );
}
