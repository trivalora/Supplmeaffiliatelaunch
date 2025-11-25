/**
 * Generate complete component mapping for glossary dynamic route
 * 
 * This script reads GLOSSARY_ROUTES from routes.config.ts and generates
 * a componentMap object with all 197+ glossary terms.
 */

import { GLOSSARY_ROUTES } from '../src/routes.config';
import { writeFileSync } from 'fs';
import { join } from 'path';

// Generate the component map entries
const componentMapEntries = GLOSSARY_ROUTES.map(route => {
  const { key, componentName } = route;
  return `    '${key}': () => import('../../../src/components/glossary/${componentName}'),`;
}).join('\n');

// Generate the complete TypeScript code for the component map
const componentMapCode = `// Auto-generated component map - DO NOT EDIT MANUALLY
// Generated from routes.config.ts GLOSSARY_ROUTES
// To regenerate: npx tsx scripts/generate-glossary-component-map.ts

async function getGlossaryComponent(key: string) {
  const componentMap: Record<string, any> = {
${componentMapEntries}
  };

  if (componentMap[key]) {
    const module = await componentMap[key]();
    return module.default || module[Object.keys(module)[0]];
  }

  return null;
}
`;

// Output the generated code
console.log('Generated component map with', GLOSSARY_ROUTES.length, 'entries');
console.log('\n--- COMPONENT MAP CODE ---\n');
console.log(componentMapCode);
console.log('\n--- END COMPONENT MAP CODE ---\n');

// Optionally write to a file
const outputPath = join(__dirname, '../app/glossary/[term]/component-map.generated.ts');
writeFileSync(outputPath, componentMapCode, 'utf-8');
console.log('Wrote component map to:', outputPath);
