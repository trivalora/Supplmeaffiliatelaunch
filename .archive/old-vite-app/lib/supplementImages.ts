/**
 * Centralized Supplement Images Configuration
 * 
 * This file serves as the single source of truth for all supplement images
 * used across the application. Any image defined here will be automatically
 * used in:
 * - Hero sections on knowledgebase pages
 * - Header navigation dropdown thumbnails
 * - Mobile menu thumbnails
 * 
 * To change a supplement's image, simply update the import and mapping here.
 */

import { PageKey } from '../routes.config';

// ========================================
// IMAGE PATHS (using optimized images)
// ========================================

// These reference the BASE optimized images in /public/optimized/ (without size suffix)
// The actual files have sizes like -256.webp, -640.webp, -1280.webp, etc.
// For hero images: Use the base name with .png extension (SectionImage will handle responsive variants)
// For thumbnails: Use getSupplementThumbnail() to get the 256px version
const imgImageAshwagandha = "e5cf0235b0f882bf01162ab58a79301b0c1e2ebe.png";
const imgImageVitaminC = '9fbd70fb8a08832d09270e0c8c82b965dba78e14.png';
const imgImageIron = '4d2531edd86e143eba53b8d5876aeca2213a89ac.png';
const imgImageMagnesium = 'fa234369467197e9b56f625112dd7dc3646b9390.png';
const imgImagePrebiotics = '263c76911b591012bda0eb5ac65dfd4bdd80d41c.png';
const imgImageOmega3 = '18c64e97e21456adcb24d0a8830ad3d468ea88a0.png';
const imgImageProbiotics = '1da3617add8298349943f08e186ec104f4d371b6.png';
const imgImageCalcium = '1190aa29547438ef3022304f83675c1776b73eba.png';
const imgImageCurcumin = 'd9613b248b7739504ad488bcad08a8b825476e6d.png';
const imgImageMultivitamin = '81ced6d15eb50ecd24f0f123cdb610ead8120fcb.png';
const imgImageCollagenPeptides = '629f0f2a4c5cd2a6e05360929c29e55faa21686e.png';
const imgImageSulforaphane = '4675dac44316999df50eb2a1005b9f75eef05c35.png';
const imgImageVitaminD = 'b3917561a3bb6c6074bbc72f129209bf7ef30940.png';
const imgImageWheyProtein = '2c636f20bdcff7a630196b66f4ec7adb7e282afe.png';
const imgImageCaseinProtein = '483f4770e75da46945f591fc87a26943caf5f1d1.png';
const imgImageBCAAs = 'c8cc68ad5913aaa59d2366606700691661101c3e.png';
const imgImageCreatine = '8611a9337d5a61d564cf0a15cb51569ba3ba4b80.png';

// ========================================
// SUPPLEMENT IMAGES MAPPING
// ========================================

/**
 * Maps each supplement page key to its corresponding image URL.
 * This is the ONLY place where supplement images should be defined.
 */
export const SUPPLEMENT_IMAGES: Record<PageKey, string> = {
  // Ashwagandha
  'ashwagandhav2': imgImageAshwagandha,
  
  // BCAAs
  'bcaasv2': imgImageBCAAs,
  
  // Calcium
  'calciumv2': imgImageCalcium,
  
  // Casein Protein
  'caseinproteinv2': imgImageCaseinProtein,
  
  // Collagen Peptides
  'collagenpeptidesv2': imgImageCollagenPeptides,
  
  // Creatine
  'creatinev2': imgImageCreatine,
  
  // Curcumin
  'curcuminv2': imgImageCurcumin,
  
  // Iron
  'ironv2': imgImageIron,
  
  // Magnesium
  'magnesiumv2': imgImageMagnesium,
  
  // Multivitamin
  'multivitaminv2': imgImageMultivitamin,
  
  // Omega-3
  'omega3v2': imgImageOmega3,
  
  // Prebiotics
  'prebioticsv2': imgImagePrebiotics,
  
  // Probiotics
  'probioticsv2': imgImageProbiotics,
  
  // Sulforaphane
  'sulforaphanev2': imgImageSulforaphane,
  
  // Vitamin C
  'vitamincv2': imgImageVitaminC,
  
  // Vitamin D
  'vitamindv2': imgImageVitaminD,
  
  // Whey Protein
  'wheyproteinv2': imgImageWheyProtein,
} as Record<PageKey, string>;

/**
 * Get the image URL for a specific supplement page
 * Returns the base filename for use with SectionImage component
 * @param pageKey The page key (e.g., 'ashwagandhav2')
 * @returns The base image filename or undefined if not found
 */
export function getSupplementImage(pageKey: PageKey): string | undefined {
  return SUPPLEMENT_IMAGES[pageKey];
}

/**
 * Get the thumbnail image URL for header dropdown (256px version)
 * @param pageKey The page key (e.g., 'ashwagandhav2')
 * @returns The full path to the 256px webp image
 */
export function getSupplementThumbnail(pageKey: PageKey): string | undefined {
  const baseFile = SUPPLEMENT_IMAGES[pageKey];
  if (!baseFile) return undefined;
  const base = baseFile.replace(/\.(png|jpe?g)$/i, '');
  return `/optimized/${base}-256.webp`;
}
