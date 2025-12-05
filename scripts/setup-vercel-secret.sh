#!/bin/bash
# Setup Vercel Environment Variable for Cache Revalidation
# Run this to ensure REVALIDATION_SECRET is set in Vercel production

echo "🔐 Setting up REVALIDATION_SECRET in Vercel..."
echo ""

# Get secret from .env.local
SECRET=$(grep REVALIDATION_SECRET .env.local | cut -d '=' -f 2 | tr -d '"')

if [ -z "$SECRET" ]; then
  echo "❌ REVALIDATION_SECRET not found in .env.local"
  echo "Add it with: echo 'REVALIDATION_SECRET=\"2W/k241G5wxIRi9OtfrE/t5104z9Y9Pm3W3q1fxcDsc=\"' >> .env.local"
  exit 1
fi

echo "Found secret: ${SECRET:0:10}..."
echo ""
echo "📤 Adding to Vercel production environment..."

# Check if already exists
if vercel env ls production 2>/dev/null | grep -q "REVALIDATION_SECRET"; then
  echo "⚠️  REVALIDATION_SECRET already exists in Vercel"
  echo "To update it, first remove:"
  echo "  vercel env rm REVALIDATION_SECRET production"
  echo "Then run this script again"
  exit 0
fi

# Add to Vercel
echo "$SECRET" | vercel env add REVALIDATION_SECRET production

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Successfully added REVALIDATION_SECRET to Vercel production"
  echo ""
  echo "Next steps:"
  echo "1. Deploy to production: git push origin main"
  echo "2. Or trigger manual deploy: vercel --prod"
  echo "3. Then configure webhooks in Supabase dashboard"
else
  echo ""
  echo "❌ Failed to add secret to Vercel"
  echo "Make sure you're logged in: vercel login"
fi
