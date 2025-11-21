const fs = require('fs');
const path = require('path');

// Get all V2 pages
const componentsDir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(componentsDir)
  .filter(f => f.endsWith('PageNewV2.tsx'))
  .map(f => path.join(componentsDir, f));

const issues = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const fileName = path.basename(file);
  
  // Extract imported icons
  const iconImportMatch = content.match(/from ['"]\.\/iconExports['"]([\s\S]*?);/);
  if (!iconImportMatch) {
    issues.push(`${fileName}: No iconExports import found`);
    return;
  }
  
  const importSection = iconImportMatch[0];
  const importedIcons = new Set();
  const iconMatches = importSection.matchAll(/([A-Z][a-zA-Z0-9]+)/g);
  for (const match of iconMatches) {
    importedIcons.add(match[1]);
  }
  
  // Find used icons
  const usedIcons = new Set();
  const iconUsageMatches = content.matchAll(/icon:\s*([A-Z][a-zA-Z0-9]+)/g);
  for (const match of iconUsageMatches) {
    usedIcons.add(match[1]);
  }
  
  // Check for missing imports
  const missingIcons = [...usedIcons].filter(icon => !importedIcons.has(icon));
  
  if (missingIcons.length > 0) {
    issues.push(`${fileName}: Missing icons: ${missingIcons.join(', ')}`);
    console.log(`❌ ${fileName}`);
    console.log(`   Imported: ${[...importedIcons].sort().join(', ')}`);
    console.log(`   Used: ${[...usedIcons].sort().join(', ')}`);
    console.log(`   Missing: ${missingIcons.join(', ')}`);
    console.log('');
  } else if (usedIcons.size > 0) {
    console.log(`✅ ${fileName} (${usedIcons.size} icons)`);
  }
});

if (issues.length > 0) {
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('SUMMARY: Found issues in ' + issues.length + ' file(s)');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  issues.forEach(issue => console.log('  • ' + issue));
  process.exit(1);
} else {
  console.log('\n✅ All icon imports are correct!');
  process.exit(0);
}
