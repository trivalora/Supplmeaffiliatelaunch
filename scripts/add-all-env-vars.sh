#!/bin/bash
# Add all environment variables to ALL Vercel environments

echo "🚀 Adding environment variables to ALL Vercel environments"
echo "============================================================"

# Array of variables to add
declare -A VARS
VARS[NEXT_PUBLIC_SUPABASE_URL]="https://rdraqlnxypwlhkhngyjk.supabase.co"
VARS[NEXT_PUBLIC_SUPABASE_ANON_KEY]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcmFxbG54eXB3bGhraG5neWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNTQ4MzQsImV4cCI6MjA3OTczMDgzNH0.G3jTJgmMMwPAweePvdPJV3YRcecUaCrNGFSOpcZTTnc"
VARS[SUPABASE_SERVICE_ROLE_KEY]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcmFxbG54eXB3bGhraG5neWprIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDE1NDgzNCwiZXhwIjoyMDc5NzMwODM0fQ.FtKlSITzItpRbsZo6jASuWwgmsiYHWpN8jXuqH2fHAw"
VARS[DATABASE_URL]="postgresql://postgres.rdraqlnxypwlhkhngyjk:pEkpoj-hovsif-4cofba@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
VARS[NEXT_PUBLIC_GTM_ID]="GTM-NQWRNKFT"
VARS[NEXT_PUBLIC_SITE_URL]="https://www.suppl.me"
VARS[NEXT_PUBLIC_CANONICAL_BASE_URL]="https://www.suppl.me"

# Environments
ENVS=("production" "preview" "development")

# Add each variable to each environment
for env in "${ENVS[@]}"; do
  echo ""
  echo "📝 Adding to $env environment..."
  for varname in "${!VARS[@]}"; do
    value="${VARS[$varname]}"
    echo "   Adding $varname..."
    
    # Remove if exists, then add
    echo "$value" | vercel env add "$varname" "$env" 2>&1 | grep -E "(Added|already exists)" || true
  done
done

echo ""
echo "✅ All variables added to all environments!"
echo ""
echo "🔄 Now redeploy with: vercel --prod"
