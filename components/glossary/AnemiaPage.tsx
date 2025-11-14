import { GlossaryTemplate } from '../GlossaryTemplate';
import { AlertCircle, Droplet, TrendingDown } from 'lucide-react';

export function AnemiaPage() {
  return (
    <GlossaryTemplate
      term="Anemia"
      pronunciation="uh-nee-mee-uh"
      definition="Anemia is a condition characterized by a deficiency in the number or quality of red blood cells, or a reduction in hemoglobin concentration, resulting in decreased oxygen-carrying capacity of the blood. It manifests as fatigue, weakness, and various other symptoms due to insufficient oxygen delivery to tissues."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Anemia is not a disease itself but rather a sign of an underlying condition. It affects over 1.6 billion people worldwide, making it one of the most common blood disorders. The World Health Organization defines anemia as hemoglobin levels below 13 g/dL in men, below 12 g/dL in non-pregnant women, and below 11 g/dL in pregnant women.
          </p>
          <p className="mb-4">
            <strong>Classification by cause (pathophysiology):</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Decreased red blood cell production:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Iron deficiency (most common worldwide)</li>
                <li>Vitamin B12 deficiency (pernicious anemia, dietary deficiency)</li>
                <li>Folate deficiency</li>
                <li>Bone marrow disorders (aplastic anemia, myelodysplastic syndrome)</li>
                <li>Chronic kidney disease (reduced erythropoietin production)</li>
                <li>Chronic inflammation (anemia of chronic disease)</li>
                <li>Hypothyroidism</li>
              </ul>
            </li>
            <li>
              <strong>Increased red blood cell destruction (hemolytic anemia):</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Inherited: Sickle cell disease, thalassemia, G6PD deficiency, hereditary spherocytosis</li>
                <li>Acquired: Autoimmune hemolytic anemia, drug-induced, infections (malaria)</li>
              </ul>
            </li>
            <li>
              <strong>Blood loss:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Acute: Trauma, surgery, gastrointestinal bleeding</li>
                <li>Chronic: Heavy menstruation, gastrointestinal bleeding (ulcers, cancer), frequent blood donation</li>
              </ul>
            </li>
          </ul>
          <p className="mb-4">
            <strong>Classification by red blood cell size (MCV):</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Microcytic (small cells, MCV {'<'}80 fL):</strong> Iron deficiency, thalassemia, anemia of chronic disease, lead poisoning</li>
            <li><strong>Normocytic (normal size, MCV 80-100 fL):</strong> Acute blood loss, hemolytic anemia, anemia of chronic disease, chronic kidney disease, bone marrow failure</li>
            <li><strong>Macrocytic (large cells, MCV {'>'}100 fL):</strong> Vitamin B12 deficiency, folate deficiency, alcohol use, liver disease, hypothyroidism, certain medications</li>
          </ul>
          <p className="mb-4">
            <strong>Common symptoms:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>General:</strong> Fatigue, weakness, reduced exercise tolerance</li>
            <li><strong>Cardiovascular:</strong> Palpitations, shortness of breath (especially with exertion), chest pain (in severe cases), rapid heartbeat</li>
            <li><strong>Neurological:</strong> Dizziness, lightheadedness, headache, difficulty concentrating, cold hands and feet</li>
            <li><strong>Appearance:</strong> Pale skin, pale conjunctiva (inner eyelids), pale nail beds</li>
            <li><strong>Specific to certain types:</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Iron deficiency: Brittle nails, hair loss, restless leg syndrome, pica (craving ice or non-food items)</li>
                <li>B12 deficiency: Numbness/tingling in hands and feet, difficulty walking, memory problems, glossitis (inflamed tongue)</li>
                <li>Hemolytic anemia: Jaundice, dark urine, enlarged spleen</li>
              </ul>
            </li>
          </ul>
          <p className="mb-4">
            <strong>Diagnosis:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Complete Blood Count (CBC):</strong> Measures hemoglobin, hematocrit, red blood cell count, MCV, MCH, MCHC</li>
            <li><strong>Reticulocyte count:</strong> Assesses bone marrow's red blood cell production</li>
            <li><strong>Iron studies:</strong> Serum iron, ferritin, TIBC, transferrin saturation (for iron deficiency)</li>
            <li><strong>Vitamin B12 and folate levels:</strong> For macrocytic anemia</li>
            <li><strong>Peripheral blood smear:</strong> Examines red blood cell morphology</li>
            <li><strong>Additional tests as needed:</strong> Bone marrow biopsy, hemolysis markers, genetic testing</li>
          </ul>
          <p className="mb-4">
            <strong>Treatment:</strong>
          </p>
          <p className="mb-4">
            Treatment depends on the underlying cause:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Iron deficiency:</strong> Oral or intravenous iron supplementation, identify and address source of blood loss</li>
            <li><strong>Vitamin B12 deficiency:</strong> B12 injections or high-dose oral supplements</li>
            <li><strong>Folate deficiency:</strong> Folic acid supplementation</li>
            <li><strong>Chronic disease:</strong> Treat underlying condition, possibly erythropoietin-stimulating agents</li>
            <li><strong>Hemolytic anemia:</strong> Varies by cause; may include immunosuppressants, avoiding triggers, splenectomy</li>
            <li><strong>Severe anemia:</strong> Blood transfusions for acute management</li>
          </ul>
        </>
      }
      
      keyPoints={[
        { 
          icon: AlertCircle, 
          title: "Reduced Oxygen-Carrying Capacity", 
          description: "Anemia is defined by low hemoglobin levels, reducing the blood's ability to deliver oxygen to tissues. This causes fatigue, weakness, shortness of breath, and impaired physical and cognitive performance." 
        },
        { 
          icon: Droplet, 
          title: "Multiple Underlying Causes", 
          description: "Anemia results from decreased RBC production (iron, B12, folate deficiency; bone marrow disorders), increased RBC destruction (hemolytic anemia), or blood loss. Iron deficiency is the most common cause worldwide." 
        },
        { 
          icon: TrendingDown, 
          title: "Treatment Targets the Cause", 
          description: "Diagnosis involves CBC, iron studies, and vitamin levels. Treatment depends on the type: iron/B12/folate supplementation for deficiencies, addressing blood loss sources, or treating underlying chronic diseases." 
        }
      ]}
      
      relatedTerms={[
        { term: "Hemoglobin", key: "hemoglobin" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Vitamin Deficiency", key: "vitamindeficiency" },
        { term: "Inflammation", key: "inflammation" }
      ]}
    />
  );
}
