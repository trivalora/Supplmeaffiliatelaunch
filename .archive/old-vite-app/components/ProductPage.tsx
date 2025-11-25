import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { PageKey } from '../routes.config';
import { SEOHead } from './SEOHead';
import { useAffiliateTooltip, AffiliateTooltip } from './AffiliateTooltip';
import IHerbBadgeLogoRgb from '../imports/IHerbBadgeLogoRgb1-106-1526';

// Amazon button image path (optimized version available)
const imgAmazonButton = '/optimized/2f3309a930da536601e44619e42e44f89c102eb7-256.webp';

interface ProductPageProps {
  onNavigate: (page: PageKey) => void;
}

interface RetailerPrice {
  retailer: string;
  price: number;
  price_per_unit: number;
  product_url: string;
  product_name: string;
  image_url?: string;
  rating?: number;
  reviews?: number;
}

interface ProductDetails {
  id: string;
  dsld_id: string;
  brand: string;
  dsld_product_name: string;
  dsld_brand?: string;
  amount_per_serving: number;
  unit: string;
  product_image_url?: string;
  retailer_prices: RetailerPrice[];
  filters?: string[];
  dosage?: string[];
  servings?: string[];
  flavor?: string[];
  multipack?: string[];
  net_contents?: string;
  form?: string[];
  dsld_content?: string;
  dsld_label_info?: {
    serving_size?: string;
    ingredients?: Array<{
      name: string;
      amount: string;
      unit: string;
      daily_value?: string;
    }>;
    other_ingredients?: string[];
    supplement_facts?: string;
    label_statements?: {
      branding?: string[];
      formulation?: string[];
      precautions?: string[];
      suggested_use?: string[];
      product_specific?: string[];
      statement_of_identity?: string[];
      seals_symbols?: string[];
      other?: string[];
    };
  };
}

export function ProductPage({ onNavigate }: ProductPageProps) {
  const { supplement, productId } = useParams<{ supplement: string; productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const tooltipHandlers = useAffiliateTooltip();

  useEffect(() => {
    async function loadProduct() {
      if (!supplement || !productId) {
        setError('Invalid product URL');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/products/supplements/${supplement}.json`);
        
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status}`);
        }
        
        const data = await response.json();
        const foundProduct = data.products.find((p: ProductDetails) => p.id === productId);
        
        if (!foundProduct) {
          throw new Error('Product not found');
        }
        
        setProduct(foundProduct);
      } catch (err) {
        console.error('Error loading product:', err);
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [supplement, productId]);

  function addUTMParameters(url: string): string {
    if (!url) return url;
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('utm_source', 'suppl.me');
      urlObj.searchParams.set('utm_campaign', 'affiliate_inquiry');
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  function formatFilterName(filter: string): string {
    return filter
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  if (loading) {
    return (
      <>
        <SEOHead title="Loading..." description="Loading product details" />
        <div className="min-h-screen bg-background">
          <Header onNavigate={onNavigate} />
          <main data-layout-main style={{ paddingTop: 'var(--header-height)' }}>
            <div data-layout-container className="py-8">
              <div className="text-center py-12">
                <div className="animate-spin h-12 w-12 rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
                <p className="text-muted-foreground">Loading product details...</p>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <SEOHead title="Product Not Found" description="Product not found" />
        <div className="min-h-screen bg-background">
          <Header onNavigate={onNavigate} />
          <main data-layout-main style={{ paddingTop: 'var(--header-height)' }}>
            <div data-layout-container className="py-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                <h1 className="text-2xl font-serif text-red-800 mb-4">Product Not Found</h1>
                <p className="text-red-600 mb-6">{error}</p>
                <button
                  onClick={() => navigate(`/${supplement}-comparison`)}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  Back to Comparison
                </button>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }

  const lowestPrice = product.retailer_prices.sort((a, b) => a.price_per_unit - b.price_per_unit)[0];
  const productImage = product.product_image_url || lowestPrice?.image_url;

  return (
    <>
      <SEOHead
        title={`${product.brand} ${product.dsld_product_name} - Product Details`}
        description={`Compare prices and view supplement facts for ${product.brand} ${product.dsld_product_name}`}
      />
      
      <div className="min-h-screen bg-background">
        <Header onNavigate={onNavigate} />
        
        <main data-layout-main style={{ paddingTop: 'var(--header-height)' }}>
          <div data-layout-container className="py-8">
            {/* Breadcrumb */}
            <div className="mb-6">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </button>
                <span>/</span>
                <button
                  onClick={() => navigate(`/${supplement}-comparison`)}
                  className="hover:text-primary transition-colors capitalize"
                >
                  {supplement?.replace(/-/g, ' ')} Comparison
                </button>
                <span>/</span>
                <span className="text-foreground">{product.brand}</span>
              </nav>
            </div>

            {/* Product Header */}
            <div className="bg-card rounded-xl shadow-sm border border-secondary/20 overflow-hidden mb-6">
              <div className="flex gap-6 p-8">
                {/* Product Image - Small thumbnail on left */}
                <div className="shrink-0 w-[264px] h-[264px] bg-tertiary rounded-lg p-2 flex items-center justify-center">
                  {productImage ? (
                    <img
                      src={productImage}
                      alt={product.dsld_product_name}
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                  ) : (
                    <div className="text-4xl text-muted-foreground">
                      {product.brand.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div>
                  <h1 className="text-4xl font-serif text-primary mb-2">{product.dsld_product_name}</h1>
                  <p className="text-2xl text-muted-foreground mb-4">{product.brand}</p>
                  
                  {/* Key Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {product.amount_per_serving && (
                      <div className="bg-tertiary rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Dosage per Serving</div>
                        <div className="text-xl font-bold text-primary">{product.amount_per_serving} {product.unit}</div>
                      </div>
                    )}
                    {lowestPrice && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="text-sm text-green-700 mb-1">Best Price</div>
                        <div className="text-xl font-bold text-green-600">${lowestPrice.price.toFixed(2)}</div>
                        <div className="text-xs text-green-600">${lowestPrice.price_per_unit.toFixed(4)}/{product.unit}</div>
                      </div>
                    )}
                  </div>

                  {/* Additional Details */}
                  {(product.net_contents || product.servings || product.flavor || product.form || product.multipack) && (
                    <div className="space-y-2 mb-6">
                      {product.net_contents && (
                        <div>
                          <span className="font-medium">Contents:</span> <span className="text-muted-foreground">{product.net_contents}</span>
                        </div>
                      )}
                      {product.servings && product.servings.length > 0 && (
                        <div>
                          <span className="font-medium">Servings:</span> <span className="text-muted-foreground">{product.servings.join(', ')}</span>
                        </div>
                      )}
                      {product.form && product.form.length > 0 && (
                        <div>
                          <span className="font-medium">Form:</span> <span className="text-muted-foreground">{product.form.join(', ')}</span>
                        </div>
                      )}
                      {product.flavor && product.flavor.length > 0 && (
                        <div>
                          <span className="font-medium">Flavor:</span> <span className="text-muted-foreground">{product.flavor.join(', ')}</span>
                        </div>
                      )}
                      {product.multipack && product.multipack.length > 0 && (
                        <div>
                          <span className="font-medium">Pack Size:</span> <span className="text-muted-foreground">{product.multipack.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Filters/Badges */}
                  {product.filters && product.filters.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {product.filters.map((filter) => (
                        <span
                          key={filter}
                          className="px-3 py-1 bg-tertiary border border-secondary rounded-full text-sm"
                        >
                          {formatFilterName(filter)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Supplement Facts */}
            {product.dsld_label_info && (
              <div className="bg-card rounded-xl shadow-sm border border-secondary/20 p-8 mb-6">
                <h2 className="text-2xl font-serif text-primary mb-6">Supplement Facts</h2>
                
                {product.dsld_label_info.serving_size && (
                  <div className="mb-4">
                    <span className="font-medium">Serving Size:</span> <span className="text-muted-foreground">{product.dsld_label_info.serving_size}</span>
                  </div>
                )}

                {product.dsld_label_info.ingredients && product.dsld_label_info.ingredients.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Active Ingredients</h3>
                    <div className="border border-secondary/30 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-tertiary">
                          <tr>
                            <th className="text-left p-3 font-medium">Ingredient</th>
                            <th className="text-center p-3 font-medium">Amount</th>
                            <th className="text-center p-3 font-medium">% Daily Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.dsld_label_info.ingredients.map((ing, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-background' : 'bg-tertiary/20'}>
                              <td className="p-3">{ing.name}</td>
                              <td className="text-center p-3 text-muted-foreground">
                                {ing.amount} {ing.unit}
                              </td>
                              <td className="text-center p-3 text-muted-foreground">
                                {ing.daily_value || '†'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">† Daily Value not established</p>
                  </div>
                )}

                {product.dsld_label_info.other_ingredients && product.dsld_label_info.other_ingredients.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Other Ingredients</h3>
                    <p className="text-muted-foreground">{product.dsld_label_info.other_ingredients.join(', ')}</p>
                  </div>
                )}

                {/* Label Statements */}
                {product.dsld_label_info.label_statements && (
                  <div className="mt-6 pt-6 border-t border-secondary/20 space-y-4">
                    <h3 className="text-xl font-medium mb-4">Label Information</h3>
                    
                    {product.dsld_label_info.label_statements.suggested_use && product.dsld_label_info.label_statements.suggested_use.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Suggested Use</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {product.dsld_label_info.label_statements.suggested_use.map((stmt, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{stmt}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.dsld_label_info.label_statements.precautions && product.dsld_label_info.label_statements.precautions.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-amber-600 mb-2">Precautions & Warnings</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {product.dsld_label_info.label_statements.precautions.map((stmt, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{stmt}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.dsld_label_info.label_statements.statement_of_identity && product.dsld_label_info.label_statements.statement_of_identity.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Product Identity</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {product.dsld_label_info.label_statements.statement_of_identity.map((stmt, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{stmt}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.dsld_label_info.label_statements.formulation && product.dsld_label_info.label_statements.formulation.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Formulation Details</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {product.dsld_label_info.label_statements.formulation.map((stmt, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{stmt}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.dsld_label_info.label_statements.seals_symbols && product.dsld_label_info.label_statements.seals_symbols.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Certifications & Seals</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {product.dsld_label_info.label_statements.seals_symbols.map((stmt, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{stmt}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.dsld_label_info.label_statements.product_specific && product.dsld_label_info.label_statements.product_specific.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Product-Specific Information</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {product.dsld_label_info.label_statements.product_specific.map((stmt, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{stmt}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.dsld_label_info.label_statements.branding && product.dsld_label_info.label_statements.branding.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Brand Information</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {product.dsld_label_info.label_statements.branding.map((stmt, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{stmt}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.dsld_label_info.label_statements.other && product.dsld_label_info.label_statements.other.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Additional Information</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {product.dsld_label_info.label_statements.other.map((stmt, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{stmt}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Where to Buy */}
            <div className="bg-card rounded-xl shadow-sm border border-secondary/20 p-8">
              <h2 className="text-2xl font-serif text-primary mb-6">Where to Buy</h2>
              
              <div className="grid gap-4">
                {product.retailer_prices.sort((a, b) => a.price_per_unit - b.price_per_unit).map((retailer, idx) => {
                  const isLowest = idx === 0;
                  return (
                    <div
                      key={idx}
                      className={`border rounded-lg p-6 ${isLowest ? 'border-green-500 bg-green-50' : 'border-secondary/30'}`}
                    >
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-medium">{retailer.retailer}</h3>
                            {isLowest && (
                              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full font-medium">
                                BEST PRICE
                              </span>
                            )}
                          </div>
                          <div className="text-2xl font-bold text-primary">${retailer.price.toFixed(2)}</div>
                          <div className="text-sm text-muted-foreground">
                            ${retailer.price_per_unit.toFixed(4)} per {product.unit}
                          </div>
                        </div>
                        
                        {/* Buy Button */}
                        <div>
                          {retailer.retailer.toLowerCase() === 'iherb' ? (
                            <a
                              href={addUTMParameters(retailer.product_url)}
                              target="_blank"
                              rel="nofollow noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                              {...tooltipHandlers}
                            >
                              <div className="h-6 w-6">
                                <IHerbBadgeLogoRgb />
                              </div>
                              <span className="font-medium">Buy Now at iHerb</span>
                            </a>
                          ) : retailer.retailer.toLowerCase() === 'vitacost' ? (
                            <a
                              href={addUTMParameters(retailer.product_url)}
                              target="_blank"
                              rel="nofollow noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                              {...tooltipHandlers}
                            >
                              <img src="/logos/vitacost.svg" alt="Vitacost" className="h-6 w-auto object-contain" />
                              <span className="font-medium">Buy Now at Vitacost</span>
                            </a>
                          ) : retailer.retailer.toLowerCase() === 'amazon' ? (
                            <a
                              href={addUTMParameters(retailer.product_url)}
                              target="_blank"
                              rel="nofollow noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-black hover:opacity-90 transition-opacity"
                              {...tooltipHandlers}
                            >
                              <img src={imgAmazonButton} alt="Amazon" className="h-5 w-auto" />
                            </a>
                          ) : retailer.retailer.toLowerCase() === 'supplement warehouse' ? (
                            <a
                              href={addUTMParameters(retailer.product_url)}
                              target="_blank"
                              rel="nofollow noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-tertiary border border-secondary hover:opacity-90 transition-opacity"
                              {...tooltipHandlers}
                            >
                              <img src="/logos/supplement-warehouse.png" alt="Supplement Warehouse" className="h-6 w-auto object-contain" />
                              <span className="font-medium">Buy Now</span>
                            </a>
                          ) : (
                            <a
                              href={addUTMParameters(retailer.product_url)}
                              target="_blank"
                              rel="nofollow noreferrer"
                              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity font-medium"
                              {...tooltipHandlers}
                            >
                              Buy Now at {retailer.retailer}
                            </a>
                          )}
                        </div>
                      </div>

                      {retailer.rating && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>★ {retailer.rating.toFixed(1)}</span>
                          {retailer.reviews && <span>({retailer.reviews} reviews)</span>}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => navigate(`/${supplement}-comparison`)}
                className="px-6 py-3 bg-tertiary border border-secondary rounded-lg hover:bg-secondary transition-colors font-medium"
              >
                ← Back to {supplement?.replace(/-/g, ' ')} Comparison
              </button>
            </div>
          </div>
        </main>
        <AffiliateTooltip />
      </div>
    </>
  );
}
