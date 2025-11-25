import { GlossaryTemplate } from '../GlossaryTemplate';

export function IBSPage() {
  return (
    <GlossaryTemplate
      term="Irritable Bowel Syndrome"
      abbreviation="IBS"
      definition="A chronic functional gastrointestinal disorder characterized by recurrent abdominal pain associated with altered bowel habits (diarrhea, constipation, or both) in the absence of structural or biochemical abnormalities."
      detailedExplanation="Irritable Bowel Syndrome (IBS) is a disorder of gut-brain interaction affecting 10-15% of the global population. It's diagnosed using Rome IV criteria, which require recurrent abdominal pain at least one day per week over the past three months, associated with two or more of: (1) related to defecation, (2) associated with change in stool frequency, or (3) associated with change in stool form or appearance. Symptoms must have started at least six months before diagnosis.

IBS is classified into subtypes based on predominant stool pattern: IBS-D (diarrhea predominant), IBS-C (constipation predominant), IBS-M (mixed), and IBS-U (unclassified). The subtypes can change over time and guide treatment selection. IBS is a diagnosis of exclusion, meaning organic diseases must be ruled out through appropriate testing based on symptoms and red flags.

The pathophysiology is multifactorial and incompletely understood, involving visceral hypersensitivity, altered gut motility, intestinal permeability changes, gut microbiome dysbiosis, immune activation, and disrupted gut-brain axis signaling. Many patients report symptom onset after gastroenteritis (post-infectious IBS), psychological stress, or antibiotic use.

Evidence-based treatments include dietary modifications (low FODMAP diet, fiber supplementation depending on subtype), probiotics (strain-specific), peppermint oil, antispasmodics, antidepressants (tricyclics or SSRIs at low doses for neuromodulation), and psychological therapies (cognitive behavioral therapy, gut-directed hypnotherapy). No single treatment works for all patients, necessitating individualized, trial-based approaches.

In supplement research, IBS is a common target condition for probiotics, prebiotics, digestive enzymes, and botanical products. Studies often measure outcomes using validated questionnaires like IBS Symptom Severity Score (IBS-SSS) or IBS Quality of Life (IBS-QOL) scales. Responder rates (typically defined as ≥50-point reduction in IBS-SSS or adequate relief) are key endpoints."
      examples={[
        "A meta-analysis reports that probiotic strain X reduces IBS symptom severity by 40 points on the IBS-SSS scale compared to placebo",
        "Patient with IBS-D experiences 4-6 loose stools daily with urgency, improving to 1-2 formed stools daily on low FODMAP diet",
        "Clinical trial shows 52% responder rate in IBS patients receiving specific multi-strain probiotic vs. 36% with placebo"
      ]}
      relatedTerms={[
        { term: "FODMAP", key: "fodmap" },
        { term: "SIBO (Small Intestinal Bacterial Overgrowth)", key: "sibo" },
        { term: "Gut Microbiome", key: "gutmicrobiome" },
        { term: "Inflammation", key: "inflammation" }
      ]}
    />
  );
}
