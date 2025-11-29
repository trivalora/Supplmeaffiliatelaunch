import { generateProductContent } from './src/lib/product-content-generator.ts';

const testProducts = [
  { id: 'test-product-1', brand: 'NOW Foods', amount_per_serving: 500, unit: 'mg', form: ['capsule'] },
  { id: 'test-product-2', brand: 'Garden of Life', amount_per_serving: 600, unit: 'mg', form: ['powder'] },
  { id: 'test-product-3', brand: 'Jarrow Formulas', amount_per_serving: 300, unit: 'mg', form: ['tablet'] },
];

const supplements = ['ashwagandha', 'magnesium', 'vitamin-d', 'creatine'];

console.log('Testing paragraph lengths for generated product content...\n');

for (const supp of supplements) {
  console.log(`\n=== ${supp.toUpperCase()} ===`);
  
  for (const product of testProducts) {
    const content = generateProductContent(supp, product);
    if (content) {
      const overview = content.overviewParagraph;
      const details = content.detailsParagraph;
      
      const overviewWords = overview.split(/\s+/).length;
      const detailsWords = details.split(/\s+/).length;
      
      console.log(`\n${product.brand} (${product.id}):`);
      console.log(`  Overview paragraph: ${overviewWords} words`);
      console.log(`  Details paragraph: ${detailsWords} words`);
      console.log(`  Total: ${overviewWords + detailsWords} words`);
      
      if (overviewWords < 200 || detailsWords < 200) {
        console.log('  ⚠️ WARNING: Paragraphs below 200 words');
      }
    }
  }
}
