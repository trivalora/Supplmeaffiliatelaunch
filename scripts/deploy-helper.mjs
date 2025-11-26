#!/usr/bin/env node
/**
 * Complete Deployment Helper
 * 
 * Interactive script that guides you through the entire deployment process.
 * Checks prerequisites, verifies configuration, and deploys to Vercel.
 * 
 * Usage:
 *   node scripts/deploy-helper.mjs
 */

import { readFileSync, existsSync } from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

console.log('🚀 Suppl.me Deployment Helper\n');
console.log('This script will guide you through deploying to Vercel.');
console.log('='.repeat(60));

// Step 1: Check .env.local exists
console.log('\n📋 Step 1: Checking local environment...');
if (!existsSync('.env.local')) {
  console.error('   ❌ .env.local not found!');
  console.error('\n💡 Create .env.local with your Supabase credentials first.');
  process.exit(1);
}
console.log('   ✅ .env.local exists');

// Step 2: Check Supabase credentials
console.log('\n🔑 Step 2: Verifying Supabase credentials...');
const envContent = readFileSync('.env.local', 'utf-8');
const requiredVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'DATABASE_URL',
];

let allPresent = true;
for (const varName of requiredVars) {
  if (!envContent.includes(`${varName}=`)) {
    console.log(`   ❌ Missing: ${varName}`);
    allPresent = false;
  } else {
    console.log(`   ✅ Found: ${varName}`);
  }
}

if (!allPresent) {
  console.error('\n❌ Some required variables are missing in .env.local');
  process.exit(1);
}

// Step 3: Test database connection
console.log('\n🗄️  Step 3: Testing database connection...');
try {
  await execAsync('node test-db-quick.mjs');
  console.log('   ✅ Database connection successful');
} catch (error) {
  console.error('   ❌ Database connection failed');
  console.error('   Error:', error.message);
  console.error('\n💡 Check your Supabase credentials and project status');
  process.exit(1);
}

// Step 4: Check Vercel CLI
console.log('\n🔧 Step 4: Checking Vercel CLI...');
let hasVercelCLI = false;
try {
  const { stdout } = await execAsync('vercel --version');
  console.log(`   ✅ Vercel CLI installed (${stdout.trim()})`);
  hasVercelCLI = true;
} catch (error) {
  console.log('   ⚠️  Vercel CLI not installed');
}

// Step 5: Deployment options
console.log('\n🚀 Step 5: Choose deployment method:');
console.log('');
console.log('   A) Automated (Vercel CLI) - Fastest (2 minutes)');
console.log('   B) Manual (Dashboard) - Step-by-step guide (5 minutes)');
console.log('   C) Just run diagnostics on production');
console.log('   D) Exit');
console.log('');

if (!hasVercelCLI) {
  console.log('⚠️  Note: Option A requires Vercel CLI');
  console.log('   Install it: npm i -g vercel');
  console.log('');
}

console.log('💡 Recommendation: Choose Option A if CLI is installed\n');
console.log('='.repeat(60));
console.log('\n📖 Instructions:\n');

console.log('OPTION A: Automated (Recommended)');
console.log('-'.repeat(40));
console.log('1. Install Vercel CLI:');
console.log('   npm i -g vercel');
console.log('');
console.log('2. Login and link project:');
console.log('   vercel login');
console.log('   vercel link');
console.log('');
console.log('3. Run setup script:');
console.log('   node scripts/setup-vercel-env.mjs');
console.log('');
console.log('4. Deploy:');
console.log('   vercel --prod');
console.log('');
console.log('5. Verify:');
console.log('   node scripts/diagnose-production.mjs');
console.log('');

console.log('\nOPTION B: Manual Dashboard Setup');
console.log('-'.repeat(40));
console.log('1. Go to: https://vercel.com/dashboard');
console.log('2. Find your project → Settings → Environment Variables');
console.log('3. Add 7 variables from .env.local:');
console.log('   - NEXT_PUBLIC_SUPABASE_URL');
console.log('   - NEXT_PUBLIC_SUPABASE_ANON_KEY');
console.log('   - SUPABASE_SERVICE_ROLE_KEY (🔒 sensitive)');
console.log('   - DATABASE_URL (🔒 sensitive)');
console.log('   - NEXT_PUBLIC_GTM_ID');
console.log('   - NEXT_PUBLIC_SITE_URL');
console.log('   - NEXT_PUBLIC_CANONICAL_BASE_URL');
console.log('4. Check all 3 environments for each');
console.log('5. Go to Deployments → Latest → ⋮ → Redeploy');
console.log('6. Wait 2-3 minutes');
console.log('7. Run: node scripts/diagnose-production.mjs');
console.log('');
console.log('📄 Detailed guide: VERCEL_ENV_SETUP.md');
console.log('');

console.log('\nOPTION C: Run Production Diagnostics');
console.log('-'.repeat(40));
console.log('Tests current production deployment:');
console.log('   node scripts/diagnose-production.mjs');
console.log('');

console.log('='.repeat(60));
console.log('\n📚 Additional Resources:\n');
console.log('- Complete Guide: docs/PRODUCTION_API_FIX.md');
console.log('- Quick Start: DEPLOY_NOW.md');
console.log('- Env Setup: VERCEL_ENV_SETUP.md');
console.log('- Troubleshooting: .github/copilot-instructions.md');
console.log('');

console.log('🎯 Quick Commands:\n');
console.log('   # Test database');
console.log('   node test-db-quick.mjs');
console.log('');
console.log('   # Test production API');
console.log('   node scripts/diagnose-production.mjs');
console.log('');
console.log('   # Setup Vercel env vars (requires CLI)');
console.log('   node scripts/setup-vercel-env.mjs');
console.log('');

console.log('✅ All prerequisites checked. Ready to deploy!\n');
