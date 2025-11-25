'use client';

import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function ChylomicronsPage() {
  return (
    <GlossaryTemplate
      term="Chylomicrons"
      currentPage="chylomicrons"
      definition="Large lipoprotein particles produced by intestinal cells that transport dietary fats and fat-soluble vitamins from the digestive system through the lymphatic system into the bloodstream."
      expandedExplanation={
        <>
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Formation and Structure</h3>
            <p className="mb-4">
              When you consume dietary fats, intestinal enterocytes absorb fatty acids and monoglycerides, then reassemble them into triglycerides. These triglycerides are packaged with cholesterol, phospholipids, and apolipoproteins (particularly apoB-48) to form chylomicrons.
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Chylomicron Composition (approximate):</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Triglycerides: 85-95%</li>
                <li>Phospholipids: 3-6%</li>
                <li>Cholesterol (free and esterified): 1-3%</li>
                <li>Proteins (apolipoproteins): 1-2%</li>
              </ul>
            </div>
            <p className="mb-4">
              Unlike other lipoproteins, chylomicrons are so large (75-1200 nm diameter) they cannot enter blood capillaries directly. Instead, they enter the lacteals (lymphatic vessels in the intestinal villi) and travel through the lymphatic system, eventually entering the bloodstream via the thoracic duct.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Metabolism and Function</h3>
            <p className="mb-4">
              Once in circulation, chylomicrons interact with lipoprotein lipase (LPL) on the surface of capillary endothelial cells, particularly in adipose tissue and muscle. LPL hydrolyzes the triglycerides, releasing fatty acids for tissue uptake and energy use or storage.
            </p>
            <p className="mb-4">
              As triglycerides are progressively removed, chylomicrons shrink and become "chylomicron remnants." These remnants, enriched in cholesterol and fat-soluble vitamins, are taken up by the liver via receptor-mediated endocytosis, primarily through LDL receptors and LRP1 (LDL receptor-related protein 1).
            </p>
            <p className="mb-4">
              The lifecycle of a chylomicron—from secretion to remnant removal—typically takes 5-10 minutes in healthy individuals. This rapid clearance explains why blood drawn shortly after a fatty meal appears milky (postprandial lipemia) but clears within a few hours.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Fat-Soluble Vitamin Transport</h3>
            <p className="mb-4">
              Chylomicrons are the primary delivery system for dietary fat-soluble vitamins (A, D, E, K) and carotenoids. These compounds are incorporated into chylomicrons in the intestine and delivered to tissues along with dietary fats.
            </p>
            <p className="mb-4">
              This is why fat-soluble vitamin supplements are best absorbed when taken with dietary fat, and why conditions that impair chylomicron formation or metabolism (like abetalipoproteinemia) can lead to deficiencies in these vitamins despite adequate intake.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Clinical Relevance</h3>
            <p className="mb-4">
              <strong>Postprandial Hyperlipidemia:</strong> Exaggerated or prolonged elevation of chylomicrons after meals may indicate metabolic dysfunction and is associated with increased cardiovascular risk. This can result from impaired lipoprotein lipase activity, overproduction of triglyceride-rich lipoproteins, or insulin resistance.
            </p>
            <p className="mb-4">
              <strong>Familial Chylomicronemia Syndrome:</strong> Rare genetic disorders affecting lipoprotein lipase or its cofactors can cause extreme triglyceride elevations (often {'>'}1000 mg/dL) with visible lipemic plasma and risk of acute pancreatitis. Management requires very low-fat diets ({'<'}15g/day).
            </p>
            <p className="mb-4">
              <strong>Supplement Timing:</strong> Understanding chylomicron physiology explains why fat-soluble supplements (vitamins A, D, E, K, CoQ10, curcumin, omega-3s) should be taken with meals containing at least 10-15g of fat for optimal absorption.
            </p>
          </section>
        </>
      }
      relatedTerms={['bioavailability', 'absorption', 'lipophilic']}
    />
  );
}
