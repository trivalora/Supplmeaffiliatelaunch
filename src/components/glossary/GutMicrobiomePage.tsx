import { GlossaryTemplate } from '../GlossaryTemplate';

export function GutMicrobiomePage() {
  return (
    <GlossaryTemplate
      term="Gut Microbiome"
      definition="The complex community of trillions of microorganisms (bacteria, viruses, fungi, and other microbes) living in the digestive tract, particularly the colon, that influence digestion, immunity, and overall health."
      detailedExplanation="The gut microbiome contains approximately 100 trillion microbial cells representing thousands of different species, collectively weighing about 2-3 pounds. This ecosystem performs essential functions including breaking down dietary fiber into short-chain fatty acids (SCFAs like butyrate, propionate, acetate), synthesizing certain vitamins (K, B12, folate, biotin), training and modulating the immune system, protecting against pathogens, influencing gut barrier integrity, and producing neurotransmitters that affect brain function via the gut-brain axis.

Microbiome diversity and composition vary widely between individuals and are influenced by genetics, mode of birth, infant feeding, diet, geography, medications (especially antibiotics), stress, sleep, and age. A healthy microbiome is characterized by high diversity and abundance of beneficial bacteria (like Bifidobacterium, Lactobacillus, Akkermansia, Faecalibacterium). Dysbiosis—an imbalance in the microbiome—is associated with inflammatory bowel disease, obesity, diabetes, allergies, autoimmune conditions, mood disorders, and many other health problems.

Supporting microbiome health involves eating diverse plant foods rich in fiber and polyphenols, consuming fermented foods (yogurt, kefir, sauerkraut, kimchi), avoiding unnecessary antibiotics, managing stress, getting adequate sleep, and considering probiotics or prebiotics. Probiotics introduce live beneficial bacteria, while prebiotics (certain fibers) feed existing beneficial bacteria."
      examples={[
        "Prebiotic fiber supplementation (like inulin or GOS at 5-20g daily) increases beneficial bacteria and SCFA production, improving gut health markers",
        "Probiotic supplementation with specific strains can improve digestive symptoms, support immune function, and may influence mood through the gut-brain axis",
        "A single course of broad-spectrum antibiotics can significantly disrupt microbiome diversity for months or even years"
      ]}
      relatedTerms={[
        { term: "Inflammation", key: "inflammation" },
        { term: "Absorption", key: "absorption" },
        { term: "Biomarker", key: "biomarker" }
      ]}
    />
  );
}
