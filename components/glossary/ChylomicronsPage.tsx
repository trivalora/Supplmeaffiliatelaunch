import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

export const ChylomicronsPage: React.FC = () => {
  return (
    <div className="min-h-screen" data-color-scheme="green">
      {/* Header */}
      <header className="border-b" data-section="header">
        <div className="container-custom" data-spacing="comfortable">
          <Link href="/glossary">
            <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Glossary</span>
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom" data-spacing="comfortable">
        <article className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="mb-8">
            <h1 className="mb-4">Chylomicrons</h1>
            <p className="text-muted" data-text-style="lead">
              Lipoprotein particles that transport dietary fats from the intestine to tissues
            </p>
          </div>

          {/* Definition Section */}
          <section className="mb-8">
            <h2 className="mb-4">Definition</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-6">
              <p>
                <strong>Chylomicrons</strong> are large lipoprotein particles produced in the intestinal cells (enterocytes) after a meal. They are the primary transport vehicles for delivering dietary triglycerides, cholesterol, and fat-soluble vitamins (A, D, E, and K) from the digestive system to the rest of the body.
              </p>
            </div>
            <p className="mb-4">
              Chylomicrons are the largest and least dense of all lipoproteins, consisting primarily of triglycerides (85-95%) along with smaller amounts of cholesterol, phospholipids, and proteins (apolipoproteins). Their primary function is to solve the problem of transporting hydrophobic (water-insoluble) dietary fats through the aqueous (water-based) environment of the blood.
            </p>
          </section>

          {/* Formation and Structure */}
          <section className="mb-8">
            <h2 className="mb-4">Formation and Structure</h2>
            <p className="mb-4">
              The formation of chylomicrons occurs through several steps:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li><strong>Fat digestion:</strong> Dietary fats are broken down by lipases in the small intestine into fatty acids and monoglycerides</li>
              <li><strong>Absorption:</strong> These components are absorbed by enterocytes (intestinal cells)</li>
              <li><strong>Re-assembly:</strong> Inside enterocytes, fatty acids and monoglycerides are reassembled into triglycerides</li>
              <li><strong>Packaging:</strong> Triglycerides are packaged with cholesterol, phospholipids, and apolipoproteins (primarily ApoB-48) to form chylomicrons</li>
              <li><strong>Secretion:</strong> Chylomicrons are secreted into the lymphatic system (lacteal vessels) rather than directly into blood vessels</li>
              <li><strong>Entry to circulation:</strong> Chylomicrons enter the bloodstream via the thoracic duct</li>
            </ol>
          </section>

          {/* Composition */}
          <section className="mb-8">
            <h2 className="mb-4">Composition</h2>
            <p className="mb-4">
              Typical chylomicron composition:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Triglycerides:</strong> 85-95% (main component)</li>
              <li><strong>Phospholipids:</strong> 3-6%</li>
              <li><strong>Cholesterol (free and esterified):</strong> 1-3%</li>
              <li><strong>Proteins (apolipoproteins):</strong> 1-2%</li>
            </ul>
            <p className="mb-4">
              Key apolipoproteins include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>ApoB-48:</strong> Structural protein, one molecule per chylomicron, unique to intestinal origin</li>
              <li><strong>ApoC-II:</strong> Acquired in circulation, activates lipoprotein lipase</li>
              <li><strong>ApoE:</strong> Important for remnant uptake by the liver</li>
            </ul>
          </section>

          {/* Metabolism and Fate */}
          <section className="mb-8">
            <h2 className="mb-4">Metabolism and Fate</h2>
            <p className="mb-4">
              Once in circulation, chylomicrons undergo rapid metabolism:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li><strong>Release into bloodstream:</strong> Chylomicrons enter blood via the thoracic duct, typically 2-4 hours after a meal</li>
              <li><strong>Acquisition of apolipoproteins:</strong> In the blood, chylomicrons acquire ApoC-II and ApoE from HDL particles</li>
              <li><strong>Triglyceride delivery:</strong> Lipoprotein lipase (LPL) on capillary walls (activated by ApoC-II) breaks down triglycerides, releasing fatty acids for tissue uptake</li>
              <li><strong>Remnant formation:</strong> As triglycerides are removed, chylomicrons shrink and become chylomicron remnants</li>
              <li><strong>Liver uptake:</strong> Chylomicron remnants (enriched in cholesterol and fat-soluble vitamins) are taken up by the liver via ApoE receptors</li>
              <li><strong>Clearance:</strong> The entire process typically takes 5-10 minutes, making chylomicrons very short-lived particles</li>
            </ol>
          </section>

          {/* Clinical Significance */}
          <section className="mb-8">
            <h2 className="mb-4">Clinical Significance</h2>
            <p className="mb-4">
              Chylomicrons have several important clinical implications:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Postprandial lipemia:</strong> Blood becomes milky or turbid after a fatty meal due to high chylomicron levels</li>
              <li><strong>Fasting lipid tests:</strong> Patients must fast 9-12 hours before lipid testing to ensure chylomicrons are cleared and don't interfere with measurements</li>
              <li><strong>Fat-soluble vitamin transport:</strong> Chylomicrons are essential for absorbing vitamins A, D, E, and K</li>
              <li><strong>Omega-3 delivery:</strong> Dietary omega-3 fatty acids (EPA, DHA) are transported via chylomicrons</li>
              <li><strong>Carotenoid absorption:</strong> Beta-carotene, lycopene, and other carotenoids are carried in chylomicrons</li>
            </ul>
          </section>

          {/* Disorders */}
          <section className="mb-8">
            <h2 className="mb-4">Disorders Related to Chylomicrons</h2>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">Familial Chylomicronemia Syndrome:</h3>
              <p className="mb-2">
                Rare genetic disorder caused by lipoprotein lipase deficiency or ApoC-II deficiency, leading to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Extremely high triglyceride levels (often &gt;1,000 mg/dL, can exceed 10,000 mg/dL)</li>
                <li>Milky plasma even after fasting</li>
                <li>Recurrent pancreatitis</li>
                <li>Eruptive xanthomas (fatty deposits in skin)</li>
                <li>Lipemia retinalis (milky appearance of retinal vessels)</li>
                <li>Treatment: Very low-fat diet (&lt;15g fat/day)</li>
              </ul>
            </div>
            <div className="p-6 bg-accent/30 rounded-lg border border-accent mb-4">
              <h3 className="mb-3">Abetalipoproteinemia:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Genetic inability to produce ApoB-48, preventing chylomicron formation</li>
                <li>Severe fat malabsorption</li>
                <li>Deficiency of fat-soluble vitamins</li>
                <li>Neurological complications</li>
                <li>Treatment: Low-fat diet, high-dose fat-soluble vitamin supplementation</li>
              </ul>
            </div>
          </section>

          {/* Difference from Other Lipoproteins */}
          <section className="mb-8">
            <h2 className="mb-4">Chylomicrons vs. Other Lipoproteins</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border border-border p-3 text-left">Lipoprotein</th>
                    <th className="border border-border p-3 text-left">Origin</th>
                    <th className="border border-border p-3 text-left">Main Function</th>
                    <th className="border border-border p-3 text-left">Main Content</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Chylomicrons</td>
                    <td className="border border-border p-3">Intestine</td>
                    <td className="border border-border p-3">Transport dietary fats</td>
                    <td className="border border-border p-3">Triglycerides (85-95%)</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">VLDL</td>
                    <td className="border border-border p-3">Liver</td>
                    <td className="border border-border p-3">Transport endogenous triglycerides</td>
                    <td className="border border-border p-3">Triglycerides (50-65%)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">LDL</td>
                    <td className="border border-border p-3">From VLDL</td>
                    <td className="border border-border p-3">Deliver cholesterol to tissues</td>
                    <td className="border border-border p-3">Cholesterol (50%)</td>
                  </tr>
                  <tr className="bg-muted/10">
                    <td className="border border-border p-3">HDL</td>
                    <td className="border border-border p-3">Liver/intestine</td>
                    <td className="border border-border p-3">Reverse cholesterol transport</td>
                    <td className="border border-border p-3">Cholesterol (20%), protein (50%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Dietary Considerations */}
          <section className="mb-8">
            <h2 className="mb-4">Dietary Considerations</h2>
            <p className="mb-4">
              Chylomicron formation and metabolism are directly influenced by dietary fat intake:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Fat type matters:</strong> Long-chain fatty acids (&gt;12 carbons) are packaged into chylomicrons; medium-chain triglycerides (MCTs) bypass this system and go directly to the liver</li>
              <li><strong>Postprandial response:</strong> High-fat meals lead to greater chylomicron production and prolonged elevation</li>
              <li><strong>Quality of fats:</strong> Omega-3 fats in chylomicrons may have anti-inflammatory effects as they're delivered to tissues</li>
              <li><strong>Fat-soluble vitamins:</strong> Require dietary fat to stimulate chylomicron formation for optimal absorption</li>
            </ul>
          </section>

          {/* Related Terms */}
          <section className="mb-8">
            <h2 className="mb-4">Related Terms</h2>
            <div className="flex flex-wrap gap-2">
              <Link href="/glossary/triglycerides">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Triglycerides
                </span>
              </Link>
              <Link href="/glossary/vldl">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  VLDL
                </span>
              </Link>
              <Link href="/glossary/ldl-cholesterol">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  LDL Cholesterol
                </span>
              </Link>
              <Link href="/glossary/hdl-cholesterol">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  HDL Cholesterol
                </span>
              </Link>
              <Link href="/glossary/absorption">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Absorption
                </span>
              </Link>
              <Link href="/glossary/enterocytes">
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm hover:bg-secondary/30 transition-colors cursor-pointer">
                  Enterocytes
                </span>
              </Link>
            </div>
          </section>

          {/* References */}
          <section className="mb-8">
            <h3 className="mb-4">Scientific References</h3>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Dash S, et al. The gut microbiome and diet in psychiatry: focus on depression. <em>Curr Opin Psychiatry.</em> 2015;28(1):1-6.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Tso P, Balint JA. Formation and transport of chylomicrons by enterocytes to the lymphatics. <em>Am J Physiol.</em> 1986;250(6 Pt 1):G715-26.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded">
                <p className="mb-2">
                  Feingold KR, Grunfeld C. Introduction to Lipids and Lipoproteins. In: Feingold KR, et al., editors. <em>Endotext.</em> South Dartmouth (MA): MDText.com, Inc.; 2000.
                </p>
              </div>
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-8">
            <h3 className="mb-4">External Resources</h3>
            <div className="space-y-2">
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK305896/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>NCBI Endotext - Introduction to Lipids and Lipoproteins</span>
              </a>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default ChylomicronsPage;