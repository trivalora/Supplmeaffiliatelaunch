import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, '..', '.env.local');
dotenv.config({ path: envPath });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: 'api' }
});

// First, fix the slug issue with cognitivefunction.tsx
console.log('🔧 Fixing slug: cognitivefunction.tsx → cognitivefunction\n');

const { error: slugError } = await supabase
  .from('glossary_terms')
  .update({ slug: 'cognitivefunction' })
  .eq('slug', 'cognitivefunction.tsx');

if (slugError) {
  console.error('❌ Error fixing slug:', slugError);
} else {
  console.log('✅ Slug fixed\n');
}

// Now add SEO metadata for all 8 terms
const seoUpdates = [
  {
    slug: 'bloodglucose',
    meta_title: 'Blood Glucose - Supplement Research Glossary | Suppl.me',
    meta_description: 'Blood glucose levels and their relationship to supplement efficacy, metabolism, insulin sensitivity, and metabolic health outcomes in clinical research.'
  },
  {
    slug: 'cognitivefunction',
    meta_title: 'Cognitive Function - Supplement Research Glossary | Suppl.me',
    meta_description: 'Cognitive function measurement in supplement research, including memory, attention, processing speed, and executive function assessment in clinical trials.'
  },
  {
    slug: 'eightohdg',
    meta_title: '8-OHdG (8-hydroxy-2-deoxyguanosine) - Supplement Research Glossary | Suppl.me',
    meta_description: '8-OHdG is a biomarker of oxidative DNA damage used in supplement research to measure antioxidant efficacy and cellular protection against free radicals.'
  },
  {
    slug: 'hedgesg',
    meta_title: 'Hedges\' g - Supplement Research Glossary | Suppl.me',
    meta_description: 'Hedges\' g is an effect size statistic used in meta-analyses to quantify supplement efficacy, providing bias-corrected standardized mean differences between groups.'
  },
  {
    slug: 'inflammation',
    meta_title: 'Inflammation - Supplement Research Glossary | Suppl.me',
    meta_description: 'Inflammation markers and inflammatory response measurement in supplement clinical trials, including CRP, cytokines, and immune system biomarkers.'
  },
  {
    slug: 'insulinresistance',
    meta_title: 'Insulin Resistance - Supplement Research Glossary | Suppl.me',
    meta_description: 'Insulin resistance measurement and its relationship to supplement efficacy in metabolic health, glucose control, and diabetes prevention research.'
  },
  {
    slug: 'omega3',
    meta_title: 'Omega-3 Fatty Acids - Supplement Research Glossary | Suppl.me',
    meta_description: 'Omega-3 fatty acids (EPA, DHA, ALA) definition, sources, health benefits, and clinical research on cardiovascular, cognitive, and anti-inflammatory effects.'
  },
  {
    slug: 'singleblinded',
    meta_title: 'Single Blinded Study - Supplement Research Glossary | Suppl.me',
    meta_description: 'Single-blind clinical trial design where participants don\'t know their treatment assignment, used in supplement research to reduce placebo effects and bias.'
  }
];

console.log('📝 Adding SEO metadata to 8 glossary terms...\n');

for (const update of seoUpdates) {
  const { error } = await supabase
    .from('glossary_terms')
    .update({
      meta_title: update.meta_title,
      meta_description: update.meta_description,
      updated_at: new Date().toISOString()
    })
    .eq('slug', update.slug);

  if (error) {
    console.error(`❌ Error updating ${update.slug}:`, error);
  } else {
    console.log(`✅ Updated ${update.slug}`);
  }
}

// Verify the updates
console.log('\n🔍 Verifying updates...\n');

const { data: missingTerms, error: verifyError } = await supabase
  .from('glossary_terms')
  .select('slug, term, meta_title, meta_description')
  .or('meta_title.is.null,meta_description.is.null')
  .order('slug');

if (verifyError) {
  console.error('❌ Verification error:', verifyError);
} else if (missingTerms.length === 0) {
  console.log('✅ SUCCESS! All glossary terms now have SEO metadata!\n');
} else {
  console.log(`⚠️  Still ${missingTerms.length} terms missing SEO metadata:\n`);
  missingTerms.forEach(term => {
    console.log(`  ${term.slug.padEnd(30)} ${term.term}`);
  });
}
