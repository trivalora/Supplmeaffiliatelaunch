import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';

export function PancreatitisPage() {
  return (
    <GlossaryTemplate
      term="Pancreatitis"
      definition="Inflammation of the pancreas, which can be acute or chronic, causing digestive enzyme activation within the pancreas and potentially leading to serious complications."
      expandedExplanation={`Pancreatitis is inflammation of the pancreas—a large gland behind the stomach that produces digestive enzymes and hormones (insulin, glucagon). When the pancreas becomes inflamed, digestive enzymes that are normally released into the small intestine become activated while still in the pancreas, causing damage to pancreatic tissue.

**Types**

**Acute Pancreatitis:** Sudden inflammation that usually resolves within days to weeks with appropriate treatment. Severity ranges from mild (self-limiting with full recovery) to severe (with complications like organ failure, pancreatic necrosis, and death in severe cases).

**Chronic Pancreatitis:** Long-standing inflammation causing permanent structural damage and progressive loss of pancreatic function. This can lead to diabetes (from loss of insulin-producing cells) and malabsorption (from loss of enzyme-producing cells).

**Causes**

**Most Common:**
- Gallstones (40%): Obstruction of the pancreatic duct
- Alcohol (30%): Heavy, prolonged alcohol consumption
- Hypertriglyceridemia: Very high triglycerides (&gt;1000 mg/dL) can trigger acute pancreatitis

**Other Causes:**
- Medications (certain antibiotics, diuretics, immunosuppressants)
- Trauma or surgery
- Infections
- Hypercalcemia (high blood calcium)
- Genetic mutations (hereditary pancreatitis, cystic fibrosis)
- Autoimmune pancreatitis
- Pancreatic cancer or structural abnormalities
- Idiopathic (10-20%): No identifiable cause

**Symptoms**

**Acute Pancreatitis:**
- Severe upper abdominal pain (often radiating to the back)
- Nausea and vomiting
- Fever
- Rapid pulse
- Abdominal tenderness and distension
- In severe cases: hypotension, respiratory distress, altered mental status

**Chronic Pancreatitis:**
- Recurrent or persistent upper abdominal pain
- Weight loss (malabsorption of nutrients)
- Steatorrhea (fatty, foul-smelling stools)
- Diabetes (from loss of insulin production)
- Jaundice (if bile duct obstruction)

**Diagnosis**

Diagnosed based on clinical symptoms plus elevated pancreatic enzymes (lipase and amylase ≥3 times upper limit of normal), imaging findings on CT or MRI showing pancreatic inflammation or complications, and sometimes endoscopic ultrasound.

**Treatment**

**Acute Pancreatitis:**
- Hospitalization with NPO (nothing by mouth) initially
- IV fluids for hydration
- Pain management
- Nutritional support (enteral nutrition preferred over parenteral)
- Treatment of underlying cause (e.g., removing gallstones, stopping alcohol)
- Monitoring and management of complications

**Chronic Pancreatitis:**
- Pain management
- Pancreatic enzyme replacement therapy (for malabsorption)
- Diabetes management (insulin if needed)
- Alcohol cessation (critical)
- Low-fat diet
- Fat-soluble vitamin supplementation (A, D, E, K)
- Sometimes procedures or surgery for complications

**Complications**

Pseudocysts (fluid collections), infected pancreatic necrosis, sepsis, organ failure (kidney, lung, cardiovascular), diabetes, malabsorption and nutritional deficiencies, chronic pain, and pancreatic cancer risk (in chronic pancreatitis).

**Supplement Considerations**

In chronic pancreatitis with malabsorption, supplementation with pancreatic enzymes and fat-soluble vitamins is essential. For prevention, avoiding alcohol and managing triglycerides (with omega-3 supplementation or medications if needed) may reduce risk. Antioxidant therapy has been studied with mixed results.`}
      examples={[
        "A patient presenting with sudden severe upper abdominal pain after a bout of heavy drinking, with lipase 5 times normal, likely has acute alcoholic pancreatitis.",
        "Someone with chronic pancreatitis may experience recurrent pain, weight loss despite adequate food intake, and fatty stools due to pancreatic insufficiency.",
        "Patients with triglyceride levels &gt;1000 mg/dL are at risk for acute pancreatitis and may benefit from triglyceride-lowering therapy."
      ]}
      relatedTerms={[
        { term: "Inflammation", key: "inflammation" },
        { term: "Triglycerides", key: "triglycerides" },
        { term: "Absorption", key: "absorption" },
        { term: "Metabolism", key: "metabolism" }
      ]}
      currentPage="pancreatitis"
    />
  );
}
