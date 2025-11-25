'use client';

import { useRouter } from 'next/navigation';
import { LandingPage } from '@/components/LandingPage';
import { PageKey } from '@/routes.config';
import { getRouteByKey } from '../lib/route-adapter';

/**
 * Wrapper component to adapt old LandingPage (v0.2) to Next.js routing
 * Converts onNavigate callbacks to Next.js router.push calls
 */
export function LandingPageWrapper() {
  const router = useRouter();

  const handleNavigate = (page: PageKey) => {
    const route = getRouteByKey(page);
    if (route) {
      router.push(route.path);
    } else {
      // Fallback for static pages
      const staticPages: Record<string, string> = {
        'about': '/about',
        'contact': '/contact',
        'methodology': '/methodology',
        'knowledgebase': '/knowledgebase',
        'glossary': '/glossary',
        'privacy': '/privacy',
        'terms': '/terms',
        'legal': '/legal',
        'partner': '/partner',
        'impressum': '/impressum'
      };
      
      const path = staticPages[page] || `/${page}`;
      router.push(path);
    }
  };

  return <LandingPage onNavigate={handleNavigate} />;
}
