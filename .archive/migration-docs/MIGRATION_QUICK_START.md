# Next.js Migration Quick Start Guide

**TL;DR**: Step-by-step commands to get v0.3 running with Next.js 15

---

## 🚀 Phase 1: Initialize Next.js (30 minutes)

### 1. Create Next.js Project
```bash
cd /Users/roxyjune/Downloads/suppl.me_Affiliate_Launch_v0.3

# Initialize Next.js 15 with TypeScript + Tailwind + App Router
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"

# Answer prompts:
# ✔ TypeScript? Yes
# ✔ ESLint? Yes  
# ✔ Tailwind CSS? Yes
# ✔ App Router? Yes
# ✔ Import alias? @/*
```

### 2. Install Core Dependencies
```bash
# Radix UI components (copy from v0.2 package.json)
npm install --save \
  @radix-ui/react-accordion \
  @radix-ui/react-alert-dialog \
  @radix-ui/react-aspect-ratio \
  @radix-ui/react-avatar \
  @radix-ui/react-checkbox \
  @radix-ui/react-collapsible \
  @radix-ui/react-context-menu \
  @radix-ui/react-dialog \
  @radix-ui/react-dropdown-menu \
  @radix-ui/react-hover-card \
  @radix-ui/react-label \
  @radix-ui/react-menubar \
  @radix-ui/react-navigation-menu \
  @radix-ui/react-popover \
  @radix-ui/react-progress \
  @radix-ui/react-radio-group \
  @radix-ui/react-scroll-area \
  @radix-ui/react-select \
  @radix-ui/react-separator \
  @radix-ui/react-slider \
  @radix-ui/react-slot \
  @radix-ui/react-switch \
  @radix-ui/react-tabs \
  @radix-ui/react-toggle \
  @radix-ui/react-toggle-group \
  @radix-ui/react-tooltip

# Utilities
npm install --save \
  class-variance-authority \
  clsx \
  tailwind-merge \
  lucide-react \
  embla-carousel-react \
  recharts \
  motion \
  cmdk \
  sonner \
  vaul \
  input-otp \
  next-themes \
  react-day-picker \
  react-hook-form \
  react-resizable-panels

# Analytics
npm install --save @next/third-parties

# Dev dependencies
npm install --save-dev \
  @types/node \
  sharp
```

### 3. Copy Core Files from v0.2
```bash
# Copy Tailwind config
cp ../suppl.me_Affiliate_Launch_v0.2/tailwind.config.js .
cp ../suppl.me_Affiliate_Launch_v0.2/postcss.config.js .

# Copy styles
mkdir -p styles
cp ../suppl.me_Affiliate_Launch_v0.2/src/styles/globals.css styles/

# Copy routes config (for reference)
mkdir -p lib
cp ../suppl.me_Affiliate_Launch_v0.2/src/routes.config.ts lib/

# Copy components directory
cp -r ../suppl.me_Affiliate_Launch_v0.2/src/components ./
cp -r ../suppl.me_Affiliate_Launch_v0.2/src/utils ./lib
cp -r ../suppl.me_Affiliate_Launch_v0.2/src/hooks ./

# Copy public assets
cp -r ../suppl.me_Affiliate_Launch_v0.2/public/* ./public/

# Copy data pipeline
cp -r ../suppl.me_Affiliate_Launch_v0.2/data-pipeline ./
```

### 4. Update Import Paths
```bash
# Update all imports from './utils/' to '@/lib/'
# Update all imports from './components/' to '@/components/'
# This can be done with find/replace in your editor
```

### 5. Create Basic App Structure
```bash
mkdir -p app/api
touch app/layout.tsx
touch app/page.tsx
touch app/not-found.tsx
```

---

## 📝 Phase 2: Core Files Setup (1 hour)

### app/layout.tsx
```tsx
import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://suppl.me'),
  title: {
    default: 'Suppl.me - Evidence-Based Supplement Information',
    template: '%s | Suppl.me',
  },
  description: 'Research-backed supplement reviews with meta-analysis data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoogleTagManager gtmId="GTM-NQWRNKFT" />
      </body>
    </html>
  );
}
```

### app/page.tsx
```tsx
export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Suppl.me v0.3 - Next.js Migration</h1>
    </div>
  );
}
```

### next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'iherb.com',
      'www.iherb.com',
      'assets.iherb.com',
      'via.placeholder.com',
    ],
  },
  // Enable static exports if needed (for pure SSG)
  // output: 'export',
};

module.exports = nextConfig;
```

### lib/route-adapter.ts
```typescript
import { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES } from './routes.config';

export function getSupplementSlugs() {
  return KNOWLEDGEBASE_ROUTES
    .filter(r => r.category === 'v2')
    .map(r => {
      const slug = r.key.replace('v2', '').toLowerCase();
      return { supplement: slug };
    });
}

export function getGlossarySlugs() {
  return GLOSSARY_ROUTES.map(r => ({ term: r.key }));
}

export function getComparisonSlugs() {
  return KNOWLEDGEBASE_ROUTES
    .filter(r => r.category === 'v2')
    .map(r => {
      const slug = r.key.replace('v2', '').toLowerCase();
      return { slug: `${slug}-comparison` };
    });
}
```

---

## 🧪 Phase 3: Test Basic Setup (15 minutes)

```bash
# Start dev server
npm run dev

# Visit http://localhost:3000
# You should see: "Suppl.me v0.3 - Next.js Migration"

# Build test
npm run build

# Check for errors
```

---

## 🎯 Phase 4: Create First Dynamic Route (30 minutes)

### app/[supplement]/page.tsx
```tsx
import { notFound } from 'next/navigation';
import { getSupplementSlugs } from '@/lib/route-adapter';

export async function generateStaticParams() {
  return getSupplementSlugs();
}

export default function SupplementPage({
  params,
}: {
  params: { supplement: string };
}) {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Supplement: {params.supplement}</h1>
      <p className="mt-4 text-gray-600">
        This will be replaced with KnowledgebaseTemplate
      </p>
    </div>
  );
}
```

### Test Dynamic Routes
```bash
npm run dev

# Visit:
# http://localhost:3000/ashwagandha
# http://localhost:3000/vitamin-d
# http://localhost:3000/omega-3

# All should show placeholder page
```

---

## 📋 Phase 5: Add Header/Footer (30 minutes)

### Update app/layout.tsx
```tsx
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### Convert Header to Server Component
```tsx
// components/Header.tsx
import Link from 'next/link';
import { HeaderClient } from './HeaderClient';

export function Header() {
  // Server component - can fetch data here if needed
  return <HeaderClient />;
}

// components/HeaderClient.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
// ... rest of Header logic with state/interactivity
```

---

## 🔥 Common Issues & Fixes

### Issue 1: "Module not found" errors
```bash
# Update tsconfig.json paths
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue 2: Tailwind not working
```bash
# Check tailwind.config.js content paths
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
],
```

### Issue 3: "React not found"
```bash
# Next.js auto-imports React, but if issues:
npm install react react-dom
```

### Issue 4: Image domains error
```bash
# Add to next.config.js:
images: {
  domains: ['your-domain.com'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.iherb.com',
    },
  ],
}
```

---

## ✅ Verification Checklist

After completing Phases 1-5, verify:

- [ ] `npm run dev` starts without errors
- [ ] Home page loads at http://localhost:3000
- [ ] Tailwind CSS styling works
- [ ] Header/Footer render correctly
- [ ] Dynamic routes accessible (e.g., /ashwagandha)
- [ ] No console errors in browser
- [ ] TypeScript compiles without errors
- [ ] `npm run build` completes successfully

---

## 📚 Next Steps

Once basic setup is complete, proceed to:

1. **Convert KnowledgebaseTemplate** to client component
2. **Add supplement page content** (copy from v0.2 components)
3. **Create glossary routes** (`app/glossary/[term]/page.tsx`)
4. **Add SEO metadata** (generateMetadata functions)
5. **Implement analytics** (GTM integration)
6. **Test product comparison pages**
7. **Deploy to Vercel preview**

---

## 🆘 Need Help?

### Debug Commands
```bash
# Clear Next.js cache
rm -rf .next

# Check build output
npm run build
npm run start

# Analyze bundle
npm install @next/bundle-analyzer
npm run build
```

### Useful Links
- Next.js Docs: https://nextjs.org/docs
- Vercel Deploy: https://vercel.com/docs
- Troubleshooting: https://nextjs.org/docs/messages

---

**Time to Complete**: ~3 hours for Phases 1-5  
**Ready for**: Phase 6 (Full Component Migration)
