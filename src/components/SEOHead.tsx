import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string; // Full absolute URL if provided
  pageType?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalPath?: string; // Path part (e.g. /creatine) used to build canonical
  structuredData?: Record<string, any>; // Optional JSON-LD object
}

/**
 * SEO Meta Tags Component
 * 
 * Dynamically updates document meta tags for SEO optimization
 * Includes Open Graph, Twitter Cards, and standard meta tags
 */
export function SEOHead({
  title = 'Evidence-Based Supplement Information',
  description = 'Comprehensive, research-backed information on vitamins, minerals, and supplements. Evidence-graded reviews, dosing guides, and expert recommendations.',
  keywords = 'supplements, vitamins, minerals, research, evidence-based, meta-analysis, health, nutrition, omega-3, vitamin d, magnesium, probiotics',
  ogImage = 'https://placehold.co/1200x630/162F1C/E0CBA8?text=Evidence-Based+Supplements',
  ogUrl,
  pageType = 'website',
  author = 'Evidence-Based Supplement Research Team',
  publishedTime,
  modifiedTime,
  canonicalPath,
  structuredData
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = `${title} | Evidence-Based Supplement Guide`;
    
    // Helper function to set or update meta tag
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.content = content;
    };

    // Helper function to set canonical URL
    const setCanonicalUrl = (url: string) => {
      let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.rel = 'canonical';
        document.head.appendChild(canonicalElement);
      }
      
      canonicalElement.href = url;
    };

  const base = (import.meta.env?.VITE_CANONICAL_BASE_URL || 'https://www.suppl.me').replace(/\/$/, '');
  const resolvedOgUrl = ogUrl || (canonicalPath ? `${base}${canonicalPath}` : window.location.href);
  setCanonicalUrl(resolvedOgUrl);

    // Standard Meta Tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', author);
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph / Facebook
    setMetaTag('og:type', pageType, true);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', ogImage, true);
  setMetaTag('og:url', resolvedOgUrl, true);
    setMetaTag('og:site_name', 'Evidence-Based Supplement Guide', true);
    
    // Twitter Cards
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    
    // Article-specific meta tags
    if (pageType === 'article') {
      if (publishedTime) {
        setMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        setMetaTag('article:modified_time', modifiedTime, true);
      }
      setMetaTag('article:author', author, true);
    }
    
    // Additional SEO tags
    setMetaTag('robots', 'index, follow');
    setMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('bingbot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Theme color (for mobile browsers)
    setMetaTag('theme-color', '#162F1C');
    setMetaTag('msapplication-TileColor', '#162F1C');
    
    // Language
    const htmlElement = document.documentElement;
    htmlElement.lang = 'en';
    
    // Inject structured data (JSON-LD) if provided
    if (structuredData) {
      const scriptId = 'structured-data-jsonld';
      let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.type = 'application/ld+json';
        scriptEl.id = scriptId;
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(structuredData);
    }

  }, [title, description, keywords, ogImage, ogUrl, pageType, author, publishedTime, modifiedTime, canonicalPath, structuredData]);

  return null; // This component doesn't render anything
}

/**
 * Default SEO configuration for the site
 */
export const defaultSEO = {
  title: 'Evidence-Based Supplement Information',
  description: 'Comprehensive, research-backed information on vitamins, minerals, and supplements. Evidence-graded reviews, dosing guides, and expert recommendations.',
  keywords: 'supplements, vitamins, minerals, research, evidence-based, meta-analysis, health, nutrition',
  author: 'Evidence-Based Supplement Research Team'
};

/**
 * SEO configurations for specific page types
 */
export const pageSEO = {
  // Landing Page
  home: {
    title: 'Evidence-Based Supplement Guide',
    description: 'Your trusted source for research-backed supplement information. Evidence-graded reviews on vitamins, minerals, probiotics, and more.',
    keywords: 'supplement guide, vitamin research, evidence-based health, supplement reviews, meta-analysis'
  },
  
  // Knowledgebase
  knowledgebase: {
    title: 'Supplement Knowledge Base',
    description: 'Browse our comprehensive library of evidence-based supplement reviews. Research-backed information on 17+ supplements with evidence grades A-D.',
    keywords: 'supplement database, vitamin guide, mineral information, supplement research'
  },
  
  // Glossary
  glossary: {
    title: 'Medical & Scientific Glossary',
    description: 'Understand supplement research terminology. 180+ medical and scientific terms explained in plain language.',
    keywords: 'medical glossary, scientific terms, research terminology, supplement definitions'
  },
  
  // About
  about: {
    title: 'About Us',
    description: 'Learn about our evidence-based approach to supplement research and how we grade scientific evidence.',
    keywords: 'about, methodology, research grading, evidence quality'
  },
  
  // Methodology
  methodology: {
    title: 'Research Methodology',
    description: 'Our systematic approach to evaluating supplement research. Learn how we grade evidence from A (strong) to D (insufficient).',
    keywords: 'research methodology, evidence grading, meta-analysis, systematic review'
  }
};

/**
 * Generate SEO for supplement pages
 */
export function getSupplementSEO(supplementName: string, benefits: string[]) {
  return {
    title: `${supplementName} - Evidence-Based Review`,
    description: `Comprehensive research review of ${supplementName}. Benefits include ${benefits.slice(0, 3).join(', ')}. Evidence-graded recommendations and dosing guides.`,
    keywords: `${supplementName.toLowerCase()}, ${supplementName.toLowerCase()} benefits, ${supplementName.toLowerCase()} dosage, ${supplementName.toLowerCase()} research, ${supplementName.toLowerCase()} evidence`,
    pageType: 'article' as const,
    publishedTime: '2025-11-11T00:00:00Z',
    modifiedTime: new Date().toISOString()
  };
}

/**
 * Generate SEO for glossary terms
 */
export function getGlossarySEO(term: string, definition: string) {
  return {
    title: `${term} - Medical & Scientific Definition`,
    description: definition.length > 155 ? `${definition.substring(0, 152)}...` : definition,
    keywords: `${term.toLowerCase()}, ${term.toLowerCase()} definition, medical terminology, supplement research terms`,
    pageType: 'article' as const
  };
}