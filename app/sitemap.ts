import { MetadataRoute } from 'next';
import fs from 'fs/promises';
import path from 'path';

// Import route configurations
const getRoutes = async () => {
  const { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES } = await import('../src/routes.config');
  return { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES };
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://suppl.me';
  const currentDate = new Date();
  
  const sitemap: MetadataRoute.Sitemap = [];
  
  // Get routes configuration
  const { KNOWLEDGEBASE_ROUTES, GLOSSARY_ROUTES } = await getRoutes();
  
  // 1. Landing page
  sitemap.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1.0,
  });
  
  // 2. Supplement pages (17 pages)
  const supplementRoutes = KNOWLEDGEBASE_ROUTES.filter(r => r.category === 'knowledgebase' && r.showInNav);
  for (const route of supplementRoutes) {
    if (route.path) {
      sitemap.push({
        url: `${baseUrl}${route.path}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    }
  }
  
  // 3. Comparison pages (17 pages)
  const supplements = [
    'ashwagandha', 'bcaa', 'calcium', 'casein', 'collagen',
    'creatine', 'curcumin', 'iron', 'magnesium', 'multivitamin',
    'omega-3', 'prebiotics', 'probiotics', 'vitamin-c', 'vitamin-d',
    'whey', 'zinc'
  ];
  
  for (const supplement of supplements) {
    sitemap.push({
      url: `${baseUrl}/comparison/${supplement}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    });
  }
  
  // 4. Product pages (1,867 pages)
  for (const supplement of supplements) {
    try {
      const filePath = path.join(process.cwd(), 'public', 'api', 'products', 'supplements', `${supplement}.json`);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(fileContent);
      
      if (data.products && Array.isArray(data.products)) {
        for (const product of data.products) {
          if (product.id) {
            sitemap.push({
              url: `${baseUrl}/${supplement}/product/${product.id}`,
              lastModified: currentDate,
              changeFrequency: 'weekly',
              priority: 0.6,
            });
          }
        }
      }
    } catch (error) {
      console.error(`Error loading products for ${supplement}:`, error);
    }
  }
  
  // 5. Glossary index page
  sitemap.push({
    url: `${baseUrl}/glossary`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  });
  
  // 6. Glossary term pages (198 pages)
  const glossaryRoutes = GLOSSARY_ROUTES.filter(r => r.showInNav);
  for (const route of glossaryRoutes) {
    sitemap.push({
      url: `${baseUrl}/glossary/${route.key}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  }
  
  // 7. Static pages (9 pages)
  const staticPages = [
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/partner', priority: 0.7 },
    { path: '/privacy-policy', priority: 0.3 },
    { path: '/terms-of-service', priority: 0.3 },
    { path: '/cookie-policy', priority: 0.3 },
    { path: '/legal-notice', priority: 0.3 },
  ];
  
  for (const page of staticPages) {
    sitemap.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: page.priority,
    });
  }
  
  console.log(`Generated sitemap with ${sitemap.length} URLs`);
  
  return sitemap;
}
