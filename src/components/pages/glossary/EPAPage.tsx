'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { Heart, Activity, Brain } from 'lucide-react';

export function EPAPage() {
  return (
    <GlossaryTemplate
      term="EPA (Eicosapentaenoic Acid)"
      pronunciation="eye-koh-suh-pen-tuh-ee-no-ik as-id"
      definition="EPA is a long-chain omega-3 fatty acid found primarily in fatty fish and fish oil supplements. It's a key structural component of cell membranes and serves as a precursor to anti-inflammatory signaling molecules called eicosanoids."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            EPA is one of the two primary omega-3 fatty acids found in fish oil (the other being DHA). Your body can produce small amounts of EPA from ALA (alpha-linolenic acid, found in plant sources like flaxseed), but this conversion is inefficient (typically less than 5%), making direct dietary intake important.
          </p>
          <p className="mb-4">
            EPA plays several crucial roles in health:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Cardiovascular health:</strong> Reduces triglycerides, decreases blood pressure, improves endothelial function, and may reduce cardiovascular events in high-risk populations</li>
            <li><strong>Anti-inflammatory effects:</strong> Competes with arachidonic acid (an omega-6 fatty acid) to produce less inflammatory eicosanoids, helping to modulate inflammation throughout the body</li>
            <li><strong>Mental health:</strong> Evidence suggests EPA may be beneficial for depression and mood disorders, particularly at doses of 1-2 grams daily</li>
            <li><strong>Immune function:</strong> Supports balanced immune responses and may help with autoimmune conditions</li>
          </ul>
          <p className="mb-4">
            EPA is typically measured in milligrams (mg) or grams (g) in supplements. When choosing fish oil or omega-3 supplements, look for the actual EPA content rather than just total fish oil, as products can vary widely. A typical therapeutic dose ranges from 500mg to 2,000mg of EPA daily, often combined with DHA.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Heart, 
          title: "Cardiovascular Benefits", 
          description: "EPA significantly reduces triglycerides and supports heart health through multiple mechanisms including improved blood vessel function and reduced inflammation." 
        },
        { 
          icon: Activity, 
          title: "Anti-Inflammatory Action", 
          description: "EPA produces anti-inflammatory eicosanoids that help balance the body's inflammatory responses, which is important for conditions involving chronic inflammation." 
        },
        { 
          icon: Brain, 
          title: "Mental Health Support", 
          description: "Research suggests EPA supplementation may help with depression, particularly major depressive disorder, with some studies showing effects comparable to certain antidepressants." 
        }
      ]}
      
      currentPage="epa"

      
      relatedTerms={['dha', 'omega-3', 'cardiovascular', 'inflammation', 'triglycerides', 'bioavailability']}
    />
  );
}
