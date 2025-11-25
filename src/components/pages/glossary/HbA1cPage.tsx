'use client';
import { GlossaryTemplate } from '@/components/templates/GlossaryTemplate';
import { TrendingUp, Activity, Calendar } from 'lucide-react';

export function HbA1cPage() {
  return (
    <GlossaryTemplate
      term="HbA1c (Hemoglobin A1c)"
      abbreviation="HbA1c, A1C, Glycated Hemoglobin"
      pronunciation="aych-bee-ay-wuhn-see / gly-kay-ted hee-muh-glow-bin"
      definition="A blood test that measures the average blood glucose (sugar) levels over the past 2-3 months by detecting the percentage of hemoglobin proteins that have glucose attached to them, serving as a key diagnostic and monitoring tool for diabetes."
      
      expandedExplanation={
        <>
          <p className="mb-4">
            Hemoglobin A1c (HbA1c), also known as glycated hemoglobin or A1C, forms when glucose in the bloodstream binds to hemoglobin—the oxygen-carrying protein in red blood cells. This binding process is called glycation and occurs continuously and irreversibly. Since red blood cells live approximately 120 days (about 3-4 months), the percentage of glycated hemoglobin reflects average blood glucose levels over the lifespan of those cells, typically representing a 2-3 month average.
          </p>
          <p className="mb-4">
            <strong>HbA1c ranges and what they mean:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Normal:</strong> Below 5.7% — indicates healthy blood sugar regulation</li>
            <li><strong>Prediabetes:</strong> 5.7% to 6.4% — elevated risk of developing type 2 diabetes; lifestyle interventions recommended</li>
            <li><strong>Diabetes:</strong> 6.5% or higher (on two separate tests) — diagnostic threshold for type 2 diabetes</li>
            <li><strong>Diabetes treatment target:</strong> Generally &lt;7% for most adults with diabetes (individualized based on age, complications, and treatment goals)</li>
            <li><strong>High-risk range:</strong> Above 8-9% indicates poor glycemic control and significantly increased risk of diabetes complications</li>
          </ul>
          <p className="mb-4">
            <strong>Advantages of HbA1c testing:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Long-term perspective:</strong> Unlike fasting glucose tests that capture a single moment, HbA1c reflects average control over months</li>
            <li><strong>Convenience:</strong> Does not require fasting, can be done at any time of day</li>
            <li><strong>Stability:</strong> Not affected by short-term fluctuations from stress, illness, or recent meals</li>
            <li><strong>Predictive value:</strong> Strong correlation with diabetes complications (retinopathy, nephropathy, neuropathy, cardiovascular disease)</li>
          </ul>
          <p className="mb-4">
            <strong>Factors that can affect HbA1c accuracy:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Conditions affecting red blood cells:</strong> Anemia, recent blood loss or transfusion, hemolytic conditions, sickle cell disease, or thalassemia can falsely lower or raise HbA1c</li>
            <li><strong>Hemoglobin variants:</strong> Some genetic hemoglobin variants interfere with certain HbA1c assays</li>
            <li><strong>Iron deficiency:</strong> Can falsely elevate HbA1c</li>
            <li><strong>Kidney disease:</strong> Advanced kidney failure can affect red blood cell lifespan</li>
            <li><strong>Pregnancy:</strong> Red blood cell turnover increases, potentially affecting results</li>
          </ul>
          <p className="mb-4">
            <strong>Relationship between HbA1c and average glucose:</strong>
          </p>
          <p className="mb-4">
            The estimated Average Glucose (eAG) provides a way to express HbA1c in the same units as daily glucose meter readings. Approximate conversions:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>HbA1c 5.0% ≈ average glucose 97 mg/dL (5.4 mmol/L)</li>
            <li>HbA1c 6.0% ≈ average glucose 126 mg/dL (7.0 mmol/L)</li>
            <li>HbA1c 7.0% ≈ average glucose 154 mg/dL (8.6 mmol/L)</li>
            <li>HbA1c 8.0% ≈ average glucose 183 mg/dL (10.2 mmol/L)</li>
            <li>HbA1c 9.0% ≈ average glucose 212 mg/dL (11.8 mmol/L)</li>
          </ul>
          <p className="mb-4">
            <strong>HbA1c in supplement research:</strong>
          </p>
          <p className="mb-4">
            HbA1c is a primary outcome measure in studies examining supplements for glycemic control. Interventions that reduce HbA1c by 0.3-0.5% are generally considered clinically meaningful, particularly in individuals with prediabetes or type 2 diabetes. Magnesium supplementation (300-500mg daily for 3+ months) reduces HbA1c by approximately 0.26% in people with diabetes or prediabetes. Vitamin C supplementation shows HbA1c reductions of 0.54% in some studies of adults with type 2 diabetes, though evidence quality is limited. Fiber-rich prebiotic supplements show modest HbA1c improvements in meta-analyses.
          </p>
          <p className="mb-4">
            <strong>Clinical significance:</strong>
          </p>
          <p className="mb-4">
            Every 1% reduction in HbA1c is associated with significant reductions in diabetes complications: approximately 21% reduction in diabetes-related deaths, 14% reduction in heart attacks, and 37% reduction in microvascular complications (eye, kidney, nerve damage). This makes HbA1c both a diagnostic tool and a critical target for diabetes management and prevention.
          </p>
        </>
      }
      
      keyPoints={[
        { 
          icon: Calendar, 
          title: "2-3 Month Average", 
          description: "HbA1c reflects average blood glucose over the lifespan of red blood cells (approximately 2-3 months), providing a long-term view of glycemic control rather than a single point in time." 
        },
        { 
          icon: TrendingUp, 
          title: "Diagnostic & Monitoring Tool", 
          description: "Used to diagnose diabetes (≥6.5%), identify prediabetes (5.7-6.4%), and monitor treatment effectiveness. Target for most adults with diabetes is &lt;7%, though individualized targets may vary." 
        },
        { 
          icon: Activity, 
          title: "Predicts Complications", 
          description: "Every 1% reduction in HbA1c significantly reduces risk of diabetes complications including cardiovascular disease, retinopathy, nephropathy, and neuropathy. Reductions of 0.3-0.5% are clinically meaningful." 
        }
      ]}
      
      examples={[
        "An individual with HbA1c of 6.2% (prediabetes range) who adopts lifestyle changes and supplements may reduce it to 5.6% (normal range), significantly lowering diabetes risk",
        "Magnesium supplementation (300-500mg daily for 3+ months) reduces HbA1c by approximately 0.26% in people with diabetes or prediabetes, a meaningful improvement",
        "A person with type 2 diabetes lowering HbA1c from 8.5% to 7.0% through diet, medication, and supplements reduces their risk of complications by approximately 25-40%"
      ]}
      
      currentPage="hba1c"

      
      relatedTerms={[
        { term: "Blood Glucose", key: "bloodglucose" },
        { term: "Glycemic Control", key: "glycemiccontrol" },
        { term: "Biomarker", key: "biomarker" },
        { term: "Insulin Resistance", key: "insulinresistance" },
        { term: "Hemoglobin", key: "hemoglobin" }
      ]}
    />
  );
}
