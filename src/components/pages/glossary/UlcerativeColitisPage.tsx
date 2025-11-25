import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function UlcerativeColitisPage() {
  return (
    <GlossaryTemplate
      term="Ulcerative Colitis"
      abbreviation="UC"
      definition="A chronic inflammatory bowel disease causing inflammation and ulcers in the colon and rectum."
      expandedExplanation={`Ulcerative colitis (UC) is a type of inflammatory bowel disease (IBD) characterized by chronic inflammation and ulceration of the innermost lining (mucosa) of the colon (large intestine) and rectum.

Unlike Crohn's disease, which can affect any part of the digestive tract and involves all layers of the bowel wall, UC is limited to the colon and rectum and affects only the mucosal layer. The inflammation typically begins in the rectum and extends continuously upward through the colon.

**Disease Mechanism**

UC develops through a complex interaction of genetic susceptibility, immune dysregulation, environmental factors, and gut microbiome alterations:

**Immune System Dysfunction:** In UC, the immune system mounts an inappropriate and persistent inflammatory response against the gut's own tissues and/or commensal bacteria in the colon. This involves increased production of pro-inflammatory cytokines such as TNF-α, IL-6, and IL-1, infiltration of immune cells (neutrophils, T cells, macrophages) into the colonic mucosa, and impaired regulation of the inflammatory response.

**Mucosal Damage:** Chronic inflammation leads to ulceration of the colonic lining, crypt abscesses (accumulations of pus in intestinal glands), depletion of goblet cells and mucus production, and impaired barrier function, increasing permeability.

**Gut Microbiome Alterations:** UC is associated with dysbiosis—an imbalance in the gut microbiome with reduced diversity and altered composition, particularly decreased levels of beneficial butyrate-producing bacteria.

**Classification by Extent:**
- **Ulcerative proctitis:** Inflammation limited to the rectum (~30% of cases); generally mildest form
- **Left-sided colitis (distal colitis):** Inflammation extends from the rectum up to the splenic flexure (~40%)
- **Extensive colitis (pancolitis):** Inflammation extends beyond the splenic flexure or involves the entire colon (~30%); associated with more severe symptoms

**Symptoms**

**Gastrointestinal Symptoms:**
- Bloody diarrhea (most common symptom)
- Rectal bleeding
- Urgent bowel movements
- Tenesmus (feeling of incomplete evacuation)
- Abdominal pain and cramping (often left-sided)
- Mucus in stool

**Systemic Symptoms:**
- Fatigue and weakness
- Fever (during flares)
- Weight loss
- Anemia (from chronic blood loss or chronic disease)
- Dehydration (from diarrhea)

**Extra-Intestinal Manifestations:** Up to 25-40% of UC patients experience symptoms outside the digestive tract including arthritis, skin conditions (erythema nodosum, pyoderma gangrenosum), eye problems (uveitis, episcleritis), and liver issues (primary sclerosing cholangitis in ~5%).

**Diagnosis**

UC diagnosis is based on a combination of clinical presentation, endoscopic findings, and histopathology. Colonoscopy with biopsy is the gold standard, showing continuous inflammation starting from the rectum, friable mucosa, ulcers, and loss of vascular pattern. Laboratory tests show elevated CRP and ESR, elevated fecal calprotectin, anemia, and elevated platelets.

**Treatment**

**Medications:** 5-Aminosalicylates (mesalamine, sulfasalazine) are first-line for mild to moderate UC. Corticosteroids for moderate to severe flares. Immunomodulators (azathioprine) as steroid-sparing agents. Biologic therapies (TNF-α inhibitors, integrin inhibitors, IL-12/23 inhibitors) and JAK inhibitors for more severe disease.

**Surgical Treatment:** Colectomy (removal of the colon) is curative for UC but involves major surgery. Indications include severe disease refractory to medical therapy, toxic megacolon, perforation, dysplasia/cancer, or intolerable medication side effects.

**Diet and Lifestyle Management**

During flares, a low-fiber, low-residue diet helps reduce bowel movements. In remission, gradually reintroduce high-fiber foods and consider a Mediterranean diet. Identify personal trigger foods, ensure adequate nutrition (calories, protein, vitamins especially B12, folate, vitamin D, iron), maintain hydration, manage stress, and engage in regular exercise.

**Supplement Research**

Some supplements have been studied as adjunctive therapies for UC:
- **Probiotics:** VSL#3 (multi-strain probiotic) has evidence for maintaining remission
- **Curcumin:** Some evidence for reducing inflammation and maintaining remission when added to 5-ASA therapy
- **Omega-3 fatty acids:** Anti-inflammatory properties; mixed evidence for UC
- **Vitamin D:** Many UC patients are deficient; supplementation may have immunomodulatory benefits
- **Butyrate:** Short-chain fatty acid that nourishes colonocytes; some evidence as enema for distal UC

Supplements should complement, not replace, evidence-based medical treatments.

**Potential Complications**

Severe bleeding, toxic megacolon (life-threatening dilation), perforation, increased colon cancer risk (especially with extensive disease and longer duration), osteoporosis (from chronic inflammation and corticosteroid use), and increased risk of blood clots.

**Prognosis**

UC is a chronic disease with a relapsing-remitting course. Most patients alternate between periods of remission and active disease. Approximately 50% are in remission at any given time. Cumulative colectomy rates are ~10-15% at 10 years and ~25-30% at 25 years. Modern biologic therapies have improved outcomes and reduced surgery rates. Colorectal cancer risk begins increasing after 8-10 years of disease.`}
      examples={[
        "A 25-year-old with ulcerative proctitis experiencing bloody stools and urgency may respond well to topical mesalamine suppositories.",
        "A patient with extensive UC refractory to conventional therapy may achieve remission with biologic therapy like infliximab.",
        "Long-term UC patients require surveillance colonoscopy every 1-2 years after 8-10 years of disease to monitor for dysplasia."
      ]}
      relatedTerms={[
        { term: "Inflammatory Bowel Disease", key: "inflammatoryboweldisease" },
        { term: "Inflammation", key: "inflammation" },
        { term: "Dysbiosis", key: "dysbiosis" },
        { term: "IL-6", key: "il6" },
        { term: "TNF-α", key: "tnfalpha" },
        { term: "CRP", key: "crp" },
        { term: "SCFA", key: "scfa" },
        { term: "Gut Microbiome", key: "gutmicrobiome" }
      ]}
      currentPage="ulcerativecolitis"
    />
  );
}
