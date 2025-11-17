// Unified dataLayer & backend event helpers
// Maps front-end interactions to GTM template variables

interface DataLayerEventBase { event: string; [k: string]: any; }
type DataLayerEvent = DataLayerEventBase;

declare global {
  interface Window { dataLayer: DataLayerEvent[]; }
}

function ensureDataLayer() {
  if (typeof window === 'undefined') return;
  if (!window.dataLayer) window.dataLayer = [];
}

export interface PageViewParams {
  pageName: string;
  pageCategory: string;
  pageUrl: string;
  pagePathname: string;
}

function push(obj: DataLayerEvent) {
  ensureDataLayer();
  window.dataLayer.push(obj);
}

async function persist(event: string, payload?: any) {
  try {
    await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, payload })
    });
  } catch (e) {
    // swallow errors; analytics must be non-blocking
    console.warn('[analytics] persist failed', e);
  }
}

export function pushPageView(params: PageViewParams) {
  const timestamp = Date.now();
  push({ event: 'pageview', timestamp, pageName: params.pageName, pageCategory: params.pageCategory, pageUrl: params.pageUrl, pagePathname: params.pagePathname });
  persist('pageview', params).catch(()=>{});
}

export interface ProductClickParams {
  supplementName: string;
  productName: string;
  productBrand?: string;
  productPosition?: number;
  productLocation?: string; // e.g. 'comparison_table'
}
export function pushProductClick(p: ProductClickParams) {
  push({
    event: 'product_click',
    supplementName: p.supplementName,
    productName: p.productName,
    productBrand: p.productBrand,
    productPosition: p.productPosition,
    productLocation: p.productLocation,
  });
  persist('product_click', p).catch(()=>{});
}

export interface AffiliateClickParams {
  platform: string; // amazon | iherb | etc
  supplementName: string;
  linkType: string; // 'primary' | 'retailer' | etc
  context?: string;
}
export function pushAffiliateClick(p: AffiliateClickParams) {
  push({ event: 'affiliate_click', platform: p.platform, supplementName: p.supplementName, linkType: p.linkType, context: p.context });
  persist('affiliate_click', p).catch(()=>{});
}

export interface SearchParams {
  searchQuery: string;
  resultsCount: number;
}
export function pushSearch(p: SearchParams) {
  push({ event: 'search', searchQuery: p.searchQuery, resultsCount: p.resultsCount });
  persist('search', p).catch(()=>{});
}

// Generic event fallback
export function pushCustom(event: string, payload?: Record<string, any>) {
  push({ event, ...(payload || {}) });
  persist(event, payload).catch(()=>{});
}
