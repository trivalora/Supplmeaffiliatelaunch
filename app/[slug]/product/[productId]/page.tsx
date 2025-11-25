import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetailClient } from '../../../components/ProductDetailClient';
import { PageViewTracker } from '../../../components/PageViewTracker';

interface ProductPageProps {
  params: Promise<{
    slug: string;
    productId: string;
  }>;
}

// This will be called at build time for static generation
export async function generateStaticParams() {
  const fs = await import('fs/promises');
  const path = await import('path');
  
  // List of all supplements with product data
  const supplements = [
    'ashwagandha', 'bcaa', 'calcium', 'casein', 'collagen',
    'creatine', 'curcumin', 'iron', 'magnesium', 'multivitamin',
    'omega-3', 'prebiotics', 'probiotics', 'vitamin-c', 'vitamin-d',
    'whey', 'zinc'
  ];
  
  const allProducts: Array<{ slug: string; productId: string }> = [];
  
  // Load all products from each supplement's JSON file
  for (const supplement of supplements) {
    try {
      const filePath = path.join(process.cwd(), 'public', 'api', 'products', 'supplements', `${supplement}.json`);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(fileContent);
      
      if (data.products && Array.isArray(data.products)) {
        for (const product of data.products) {
          if (product.id) {
            allProducts.push({
              slug: supplement,
              productId: product.id
            });
          }
        }
      }
    } catch (error) {
      console.error(`Error loading products for ${supplement}:`, error);
    }
  }
  
  console.log(`Generating static params for ${allProducts.length} product pages`);
  return allProducts;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug, productId } = await params;
  const supplement = slug;
  
  // Load product data
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const filePath = path.join(process.cwd(), 'public', 'api', 'products', 'supplements', `${supplement}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    
    const product = data.products.find((p: any) => p.id === productId);
    
    if (!product) {
      return {
        title: 'Product Not Found',
        description: 'The requested product could not be found.',
        robots: {
          index: false,
          follow: false,
        },
      };
    }
    
    const brand = product.brand || 'Unknown Brand';
    const productName = product.dsld_product_name || 'Product';
    const supplementName = supplement.split('-').map((w: string) => 
      w.charAt(0).toUpperCase() + w.slice(1)
    ).join(' ');
    
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_CANONICAL_BASE_URL || 'https://suppl.me';
    const canonicalUrl = `${baseUrl}/${supplement}/product/${encodeURIComponent(productId)}`;
    
    return {
      title: `${brand} ${productName} - ${supplementName} | Suppl.me`,
      description: `Compare prices and view supplement facts for ${brand} ${productName}. Available at multiple retailers with detailed ingredient information from DSLD database.`,
      keywords: `${brand}, ${productName}, ${supplementName}, supplement facts, price comparison, DSLD`,
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: `${brand} ${productName} - ${supplementName}`,
        description: `Compare prices and view supplement facts for ${brand} ${productName}`,
        type: 'website',
        url: canonicalUrl,
        siteName: 'Suppl.me',
      },
      twitter: {
        card: 'summary',
        title: `${brand} ${productName}`,
        description: `Compare prices for ${brand} ${productName}`,
      },
    };
  } catch (error) {
    return {
      title: 'Product Details',
      description: 'View product information and compare prices.',
      robots: {
        index: false,
        follow: true,
      },
    };
  }
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug, productId } = await params;
  
  // Load product name for tracking
  const supplementName = slug.split('-').map((w: string) => 
    w.charAt(0).toUpperCase() + w.slice(1)
  ).join(' ');
  
  return (
    <>
      <PageViewTracker 
        pageName={`${supplementName} - Product ${productId.substring(0, 20)}`} 
        pageCategory="product" 
      />
      <ProductDetailClient 
        supplement={slug}
        productId={productId}
      />
    </>
  );
}
