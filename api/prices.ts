// Placeholder endpoint for supplement product price data aggregation.
// Later: integrate with external retailer APIs or a scraping microservice.
// Endpoint: /api/prices?supplement=magnesium

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendError, sendSuccess } from './_lib/respond';

interface PriceRecord {
  retailer: string;
  productName: string;
  brand: string;
  price: number; // USD
  currency: string;
  url: string;
  lastUpdated: string; // ISO timestamp
}

// Temporary in-memory mock; replace with real fetch/cache logic.
const mockData: Record<string, PriceRecord[]> = {
  magnesium: [
    {
      retailer: 'RetailerA',
      productName: 'Chelated Magnesium 200mg',
      brand: 'NutraLabs',
      price: 14.99,
      currency: 'USD',
      url: 'https://example.com/product/chelated-magnesium',
      lastUpdated: new Date().toISOString(),
    },
    {
      retailer: 'RetailerB',
      productName: 'Magnesium Glycinate 400mg',
      brand: 'PureHealth',
      price: 21.5,
      currency: 'USD',
      url: 'https://example.com/product/magnesium-glycinate',
      lastUpdated: new Date().toISOString(),
    },
  ],
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { supplement } = req.query;
  const key = String(supplement || '').toLowerCase();
  if (!key) return sendError(res, 'Missing supplement parameter', 'MISSING_PARAM');
  const data = mockData[key];
  if (!data) return sendError(res, 'Supplement not found', 'NOT_FOUND', 404);
  return sendSuccess(res, { supplement: key, count: data.length, prices: data }, { generatedAt: new Date().toISOString(), ttlSeconds: 300 });
}
