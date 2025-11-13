import { Header } from '../Header';
import { GlossaryTemplate } from '../GlossaryTemplate';
import { Footer } from '../Footer';

export function HepaticEncephalopathyPage() {
  return (
    <>
      <Header />
      <GlossaryTemplate
        term="Hepatic Encephalopathy"
        definition="A decline in brain function that occurs when the liver is unable to adequately remove toxins from the blood, particularly ammonia. This condition is a complication of advanced liver disease or cirrhosis."
        content={
          <>
            <p className="content-text">
              Hepatic encephalopathy (HE) represents a spectrum of neurological and psychiatric abnormalities ranging from subtle cognitive deficits to coma. It occurs when the liver's detoxification function is severely impaired, allowing neurotoxic substances—especially ammonia—to accumulate in the bloodstream and affect brain function.
            </p>
            
            <h2 className="content-heading">Pathophysiology</h2>
            <p className="content-text">
              The development of hepatic encephalopathy involves several mechanisms:
            </p>
            <ul className="glossary-list">
              <li><strong>Ammonia accumulation</strong> — The primary toxin; normally, the liver converts ammonia (from protein breakdown and gut bacteria) to urea for excretion</li>
              <li><strong>Impaired liver function</strong> — Cirrhosis, acute liver failure, or portosystemic shunting prevents ammonia detoxification</li>
              <li><strong>Neurotoxic effects</strong> — Ammonia and other toxins cross the blood-brain barrier, causing astrocyte swelling and altered neurotransmission</li>
              <li><strong>Gut-derived toxins</strong> — Besides ammonia, other compounds from gut bacteria contribute to neurological dysfunction</li>
            </ul>
            
            <h2 className="content-heading">Symptoms and Grading</h2>
            <p className="content-text">
              Hepatic encephalopathy is graded from minimal to severe:
            </p>
            <ul className="glossary-list">
              <li><strong>Grade 0 (Minimal HE)</strong> — Subtle cognitive changes detectable only by specialized testing; affects daily functioning</li>
              <li><strong>Grade 1</strong> — Mild confusion, short attention span, sleep disturbances, mild asterixis (hand flapping tremor)</li>
              <li><strong>Grade 2</strong> — Lethargy, disorientation, inappropriate behavior, obvious asterixis</li>
              <li><strong>Grade 3</strong> — Somnolence, severe confusion, incomprehensible speech, pronounced asterixis</li>
              <li><strong>Grade 4</strong> — Coma, unresponsive to stimuli</li>
            </ul>
            
            <h2 className="content-heading">Triggers and Risk Factors</h2>
            <p className="content-text">
              Common precipitating factors include:
            </p>
            <ul className="glossary-list">
              <li>Gastrointestinal bleeding (increases protein/ammonia load)</li>
              <li>Infections (spontaneous bacterial peritonitis, urinary tract infections)</li>
              <li>Constipation (increases ammonia production by gut bacteria)</li>
              <li>High dietary protein intake</li>
              <li>Dehydration and electrolyte imbalances</li>
              <li>Medications (sedatives, diuretics)</li>
              <li>Worsening liver function</li>
            </ul>
            
            <h2 className="content-heading">Standard Treatment</h2>
            <p className="content-text">
              Management focuses on reducing ammonia production and absorption:
            </p>
            <ul className="glossary-list">
              <li><strong>Lactulose</strong> — Non-absorbable disaccharide that acidifies the colon, reducing ammonia absorption and promoting its excretion</li>
              <li><strong>Rifaximin</strong> — Non-absorbable antibiotic that reduces ammonia-producing gut bacteria</li>
              <li><strong>Identify and treat triggers</strong> — Address infections, bleeding, constipation, electrolyte imbalances</li>
              <li><strong>Protein restriction (historical)</strong> — Now less emphasized; maintaining adequate nutrition is important</li>
              <li><strong>Liver transplantation</strong> — Definitive treatment for severe, recurrent HE with end-stage liver disease</li>
            </ul>
            
            <h2 className="content-heading">Branched-Chain Amino Acids (BCAAs) in HE</h2>
            <p className="content-text">
              BCAAs (leucine, isoleucine, valine) have a specific role in hepatic encephalopathy:
            </p>
            <ul className="glossary-list">
              <li><strong>Altered amino acid profile</strong> — Cirrhosis patients typically have decreased BCAAs and increased aromatic amino acids (tyrosine, phenylalanine, tryptophan)</li>
              <li><strong>False neurotransmitter theory</strong> — Excess aromatic amino acids can be converted to false neurotransmitters that may impair brain function</li>
              <li><strong>BCAA supplementation</strong> — May help correct this imbalance and provide a nitrogen source while reducing ammonia formation</li>
              <li><strong>Meta-analytic evidence</strong> — Studies show BCAAs can improve mental state and reduce HE episodes, particularly in chronic/recurrent HE</li>
              <li><strong>Muscle preservation</strong> — BCAAs also help maintain lean body mass, which is often depleted in cirrhosis</li>
            </ul>
            
            <h2 className="content-heading">Clinical Evidence for BCAAs</h2>
            <p className="content-text">
              Research supporting BCAA use in hepatic encephalopathy includes:
            </p>
            <ul className="glossary-list">
              <li>Improved mental state and cognitive function</li>
              <li>Reduced frequency and severity of HE episodes</li>
              <li>Better quality of life in cirrhosis patients</li>
              <li>Preservation of muscle mass and nutritional status</li>
              <li>Typical dosing: 10-30 grams per day, divided into multiple doses</li>
            </ul>
            
            <h2 className="content-heading">Importance in Liver Disease Management</h2>
            <p className="content-text">
              Hepatic encephalopathy:
            </p>
            <ul className="glossary-list">
              <li>Significantly impairs quality of life and functional capacity</li>
              <li>Increases risk of falls, accidents, and hospitalizations</li>
              <li>Indicates advanced liver disease with poor prognosis without transplantation</li>
              <li>Even minimal HE affects driving ability and work performance</li>
              <li>Requires ongoing management to prevent recurrence</li>
            </ul>
            <p className="content-text">
              <strong>Note:</strong> Hepatic encephalopathy requires medical management by a hepatologist. BCAA supplementation should be used as an adjunct to standard therapy, not as a replacement.
            </p>
          </>
        }
      />
      <Footer />
    </>
  );
}