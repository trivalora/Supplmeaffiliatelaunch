const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(componentsDir)
  .filter(f => f.endsWith('PageNewV2.tsx'))
  .map(f => path.join(componentsDir, f));

console.log('🔍 Checking icon imports in all V2 pages...\n');

const fixes = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const fileName = path.basename(file);
  
  // Find all used icons
  const usedIcons = new Set();
  const iconMatches = content.matchAll(/icon:\s*([A-Z][a-zA-Z0-9]+)/g);
  for (const match of iconMatches) {
    usedIcons.add(match[1]);
  }
  
  if (usedIcons.size === 0) return;
  
  // Extract current import statement
  const importMatch = content.match(/import\s*{([^}]+)}\s*from\s*['"](\.\/iconExports|lucide-react)['"]/);
  
  if (!importMatch) {
    console.log(`❌ ${fileName}: No icon imports found but icons are used!`);
    return;
  }
  
  const importSource = importMatch[2];
  const importedIconsText = importMatch[1];
  const importedIcons = new Set();
  
  importedIconsText.split(',').forEach(icon => {
    const trimmed = icon.trim();
    if (trimmed) importedIcons.add(trimmed);
  });
  
  // Find missing icons
  const missingIcons = [...usedIcons].filter(icon => !importedIcons.has(icon));
  
  // Check if importing from wrong source
  const wrongSource = importSource !== './iconExports';
  
  if (missingIcons.length > 0 || wrongSource) {
    console.log(`🔧 ${fileName}:`);
    if (wrongSource) {
      console.log(`   ⚠️  Importing from '${importSource}' instead of './iconExports'`);
    }
    if (missingIcons.length > 0) {
      console.log(`   ⚠️  Missing icons: ${missingIcons.join(', ')}`);
    }
    
    // Combine all icons
    const allIcons = new Set([...importedIcons, ...usedIcons]);
    const sortedIcons = [...allIcons].sort();
    
    fixes.push({
      file,
      fileName,
      oldImport: importMatch[0],
      newIcons: sortedIcons
    });
  } else {
    console.log(`✅ ${fileName} (${usedIcons.size} icons)`);
  }
});

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

if (fixes.length > 0) {
  console.log(`\n📝 Fixes needed for ${fixes.length} file(s):\n`);
  
  fixes.forEach(fix => {
    console.log(`File: ${fix.fileName}`);
    console.log(`New import: import {`);
    console.log(`  ${fix.newIcons.join(', ')}`);
    console.log(`} from './iconExports';\n`);
  });
  
  process.exit(1);
} else {
  console.log('\n✅ All icon imports are correct!\n');
  process.exit(0);
}
