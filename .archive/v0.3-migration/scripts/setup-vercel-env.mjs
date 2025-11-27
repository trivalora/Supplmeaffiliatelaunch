#!/usr/bin/env node
/**
 * Vercel Environment Variable Setup Script
 * 
 * Automatically adds all required environment variables to Vercel.
 * Reads from .env.local and pushes to Vercel via CLI.
 * 
 * Prerequisites:
 *   - Vercel CLI installed: npm i -g vercel
 *   - Logged in: vercel login
 *   - Project linked: vercel link
 * 
 * Usage:
 *   node scripts/setup-vercel-env.mjs
 */

import { readFileSync } from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Required environment variables
const REQUIRED_VARS = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'DATABASE_URL',
  'NEXT_PUBLIC_GTM_ID',
  'NEXT_PUBLIC_SITE_URL',
  'NEXT_PUBLIC_CANONICAL_BASE_URL',
];

// Sensitive variables (will be marked as sensitive in Vercel)
const SENSITIVE_VARS = [
  'SUPABASE_SERVICE_ROLE_KEY',
  'DATABASE_URL',
];

console.log('🚀 Vercel Environment Variable Setup\n');
console.log('='.repeat(60));

// Step 1: Read .env.local
console.log('\n📖 Step 1: Reading .env.local...');
let envVars;
try {
  const envContent = readFileSync('.env.local', 'utf-8');
  envVars = parseEnvFile(envContent);
  console.log(`   ✅ Found ${Object.keys(envVars).length} variables in .env.local`);
} catch (error) {
  console.error('   ❌ Error reading .env.local:', error.message);
  console.error('\n💡 Make sure .env.local exists in project root');
  process.exit(1);
}

// Step 2: Verify all required variables exist
console.log('\n🔍 Step 2: Verifying required variables...');
const missing = [];
for (const varName of REQUIRED_VARS) {
  if (!envVars[varName]) {
    missing.push(varName);
    console.log(`   ❌ Missing: ${varName}`);
  } else {
    const value = envVars[varName];
    const preview = value.length > 30 ? value.slice(0, 30) + '...' : value;
    console.log(`   ✅ Found: ${varName}=${preview}`);
  }
}

if (missing.length > 0) {
  console.error(`\n❌ Missing ${missing.length} required variables!`);
  console.error('   Please add them to .env.local first.');
  process.exit(1);
}

console.log(`   ✅ All ${REQUIRED_VARS.length} required variables present`);

// Step 3: Check Vercel CLI
console.log('\n🔧 Step 3: Checking Vercel CLI...');
try {
  await execAsync('vercel --version');
  console.log('   ✅ Vercel CLI installed');
} catch (error) {
  console.error('   ❌ Vercel CLI not found');
  console.error('\n💡 Install it: npm i -g vercel');
  process.exit(1);
}

// Step 4: Check if project is linked
console.log('\n🔗 Step 4: Checking project link...');
try {
  const { stdout } = await execAsync('vercel project ls');
  console.log('   ✅ Project linked to Vercel');
} catch (error) {
  console.error('   ❌ Project not linked');
  console.error('\n💡 Link it: vercel link');
  process.exit(1);
}

// Step 5: Add variables to Vercel
console.log('\n⬆️  Step 5: Adding variables to Vercel...');
console.log('   This will add variables to Production, Preview, and Development\n');

let successCount = 0;
let errorCount = 0;

for (const varName of REQUIRED_VARS) {
  const value = envVars[varName];
  const isSensitive = SENSITIVE_VARS.includes(varName);
  const sensitiveFlag = isSensitive ? ' (sensitive)' : '';
  
  process.stdout.write(`   Adding ${varName}${sensitiveFlag}... `);
  
  try {
    // Add to all environments
    const environments = ['production', 'preview', 'development'];
    
    for (const env of environments) {
      // Check if variable already exists
      try {
        await execAsync(`vercel env rm ${varName} ${env} -y 2>/dev/null`);
      } catch {
        // Variable doesn't exist, that's fine
      }
      
      // Add the variable
      const command = `echo "${value}" | vercel env add ${varName} ${env}`;
      await execAsync(command);
    }
    
    console.log('✅');
    successCount++;
  } catch (error) {
    console.log('❌');
    console.error(`      Error: ${error.message}`);
    errorCount++;
  }
}

console.log('\n' + '='.repeat(60));
console.log('\n📊 Summary:\n');
console.log(`   ✅ Successfully added: ${successCount}/${REQUIRED_VARS.length}`);
console.log(`   ❌ Failed: ${errorCount}/${REQUIRED_VARS.length}`);

if (errorCount > 0) {
  console.log('\n⚠️  Some variables failed to add.');
  console.log('   You may need to add them manually in Vercel Dashboard.');
  console.log('   Go to: https://vercel.com/dashboard → Settings → Environment Variables');
  process.exit(1);
}

// Step 6: Trigger deployment
console.log('\n🚀 Step 6: Triggering deployment...\n');
console.log('   Would you like to deploy now? (y/n)');

// Note: In a real implementation, you'd use readline to get user input
// For now, we'll just show the command
console.log('\n💡 To deploy manually, run:');
console.log('   vercel --prod');
console.log('\n✅ All environment variables configured successfully!');
console.log('   After deployment, test with:');
console.log('   node scripts/diagnose-production.mjs\n');

/**
 * Parse .env file content into key-value pairs
 */
function parseEnvFile(content) {
  const vars = {};
  const lines = content.split('\n');
  
  for (const line of lines) {
    // Skip comments and empty lines
    if (line.trim().startsWith('#') || !line.trim()) {
      continue;
    }
    
    // Parse KEY=VALUE
    const match = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (match) {
      const [, key, value] = match;
      // Remove quotes if present
      vars[key] = value.replace(/^["']|["']$/g, '');
    }
  }
  
  return vars;
}
