'use client';
import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogUrl?: string; // Full absolute URL if provided
  pageType?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalPath?: string; // Path part (e.g. /creatine) used to build canonical
  structuredData?: Record<string, any> | Record<string, any>[]; // Optional JSON-LD object or array of objects
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
  ogImageAlt = 'Evidence-Based Supplement Guide banner',
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

    const base = (process.env.NEXT_PUBLIC_CANONICAL_BASE_URL || 'https://www.suppl.me').replace(/\/$/, '');
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
    setMetaTag('og:image:alt', ogImageAlt, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:url', resolvedOgUrl, true);
    setMetaTag('og:site_name', 'Evidence-Based Supplement Guide', true);

    // Twitter Cards
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    setMetaTag('twitter:image:alt', ogImageAlt);
    setMetaTag('twitter:site', '@supplme');

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
    setMetaTag('robots', 'index,follow');
    setMetaTag('googlebot', 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1');
    setMetaTag('bingbot', 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1');

    // Theme color (for mobile browsers)
    setMetaTag('theme-color', '#162F1C');
    setMetaTag('msapplication-TileColor', '#162F1C');

    // Language
    const htmlElement = document.documentElement;
    htmlElement.lang = 'en';

    // Prepare default WebSite structured data (SearchAction for internal search)
    const defaultWebsiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Evidence-Based Supplement Guide',
      url: base,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${base}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };

    // Conditional BreadcrumbList for article pages
    const breadcrumbSchema = pageType === 'article' ? {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: base },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Base', item: `${base}/knowledgebase` },
        { '@type': 'ListItem', position: 3, name: title, item: resolvedOgUrl }
      ]
    } : null;

    // Minimal Article schema when applicable
    const articleSchema = pageType === 'article' ? {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      url: resolvedOgUrl,
      mainEntityOfPage: resolvedOgUrl,
      image: ogImage ? [ogImage] : undefined,
      datePublished: publishedTime || undefined,
      dateModified: modifiedTime || undefined,
      author: { '@type': 'Organization', name: author },
      publisher: { '@type': 'Organization', name: 'suppl.me' }
    } : null;

    // Base schemas always included
    const baseSchemas: Record<string, any>[] = [
      defaultWebsiteSchema,
      ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ...(articleSchema ? [articleSchema] : [])
    ];

    // Normalize user-provided structured data and append to base
    const userSchemas: Record<string, any>[] = structuredData
      ? (Array.isArray(structuredData) ? structuredData : [structuredData])
      : [];

    const dataArray: Record<string, any>[] = [...baseSchemas, ...userSchemas];

    // Remove any previous structured data scripts managed by this component
    document.querySelectorAll('script[data-seohead-structured]').forEach(el => el.remove());

    dataArray.forEach((data, idx) => {
      const scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.textContent = JSON.stringify(data);
      scriptEl.setAttribute('data-seohead-structured', 'true');
      scriptEl.id = `structured-data-jsonld-${idx}`;
      document.head.appendChild(scriptEl);
    });

  }, [title, description, keywords, ogImage, ogImageAlt, ogUrl, pageType, author, publishedTime, modifiedTime, canonicalPath, structuredData]);

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
 * Generate SEO for individual supplement pages
 */
export function getSupplementSEO(supplementName: string, benefits: string[], supplementKey?: string) {
  // Generate canonical path from supplement name
  const canonicalPath = supplementKey || `/${supplementName.toLowerCase().replace(/\s+/g, '-')}`;
  
  return {
    title: `${supplementName} - Evidence-Based Review`,
    description: `Comprehensive research review of ${supplementName}. Benefits include ${benefits.slice(0, 3).join(', ')}. Evidence-graded recommendations and dosing guides.`,
    keywords: `${supplementName.toLowerCase()}, ${supplementName.toLowerCase()} benefits, ${supplementName.toLowerCase()} dosage, ${supplementName.toLowerCase()} research, ${supplementName.toLowerCase()} evidence`,
    pageType: 'article' as const,
    publishedTime: '2025-11-11T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    canonicalPath
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