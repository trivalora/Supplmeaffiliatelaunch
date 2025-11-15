/**
 * Supplement product data for the product comparison section
 * Restructured to use explicit fields instead of description strings
 */

export interface ProductData {
  name: string;
  brand: string;
  content?: string; // e.g., "180 Capsules (2250 mg/cap)"
  flavor?: string; // e.g., "Vanilla", "Unflavored"
  weight?: string; // e.g., "2 lb (908 g)"
  dietaryInfo?: string; // e.g., "Vegan, Non-GMO, Gluten-Free"
  extraNotice?: string; // e.g., "USP Grade", "Micronized", "100% Chelated"
  pricePerUnit?: string; // e.g., "$0.00021 per mg"
  pricePerBottle: string; // e.g., "$14.95"
  image: string;
  amazonLink: string;
  iherbLink: string;
  iherbUnavailable?: boolean;
  badges?: string[]; // e.g., ["Amazon Bestseller", "iHerb Bestseller", "Independently Tested"]
}

export function getProductsBySupplementName(supplementName: string): ProductData[] {
  const normalizedName = supplementName.toLowerCase();
  
  // Ashwagandha
  if (normalizedName.includes('ashwagandha')) {
    return [
      {
        name: 'Ashwagandha Root Extract',
        brand: 'Nutricost',
        content: '120 Capsules (600 mg/cap)',
        dietaryInfo: undefined,
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00021 per mg',
        pricePerBottle: '$14.95',
        image: 'https://m.media-amazon.com/images/I/71CgZTnYGkL._AC_SY879_.jpg',
        amazonLink: 'https://www.amazon.com/Nutricost-Ashwagandha-Supplement-Capsules-Vegetarian/dp/B073DN2YG9/',
        iherbLink: 'https://www.iherb.com/pr/nutricost-ashwagandha-root-extract-600-mg-120-capsules/140223',
        badges: ['Amazon Bestseller']
      },
      {
        name: 'KSM-66 Ashwagandha',
        brand: "Physician's Choice",
        content: '60 Capsules (1000 mg/cap)',
        dietaryInfo: undefined,
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00100 per mg',
        pricePerBottle: '$29.97',
        image: 'https://m.media-amazon.com/images/I/81mnIaDr0PL._AC_SL1500_.jpg',
        amazonLink: 'https://www.amazon.com/Ashwagandha-Extract-Potency-Withanolides-Clinically/dp/B07S76M4D5?crid=14PE3VVQYJ5D0&dib=eyJ2IjoiMSJ9.TCi08GE8OP1W0wvzs0VKZUtcIASDoMBYS87muh3kMPkUyWuR7GwfqXORkXqSZOPom7hhXe5whzxZXU5PumPluwLhmYWxhUB6bRv7DgjX3MomIA7Jvard-XZ7IC5MBMzYrLxibBqCrQKCfVC4WW28Tor-I_4tQ1UwJsBhBmQKkRNN843rW8fkmOeC-yB1GaFRm6LvwtCrUuBeAM_Glb3SvwimSPJ0aKw1rLcrcLiWOf4V9RcjemocvcIqWgP2qyXp_40EjOTUBNgBUHcJOxBOEPyADHEewuWGVtn5LFnsNWc.wnMgHGjaTm1QmlvQNvyxloJ7UlMEubkhOFaW6xy6luU&dib_tag=se&keywords=Physician%27s+Choice+KSM-66+Ashwagandha+1000+mg%2C+60+Capsules&qid=1761900656&rdc=1&sprefix=physician%27s+choice+ksm-66+ashwagandha+1000+mg%2C+60+capsules%2Caps%2C196&sr=8-1',
        iherbLink: 'https://www.iherb.com/pr/physician-s-choice-ksm-66-ashwagandha-1000-mg-60-capsules/110507',
        iherbUnavailable: true,
        badges: ['iHerb Bestseller']
      },
      {
        name: 'Ashwagandha',
        brand: 'NOW Foods',
        content: '90 Veg Capsules (450 mg/cap)',
        dietaryInfo: 'Standardized Extract',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00026 per mg',
        pricePerBottle: '$10.40',
        image: 'https://m.media-amazon.com/images/I/718TaPAvL+L._AC_SL1500_.jpg',
        amazonLink: 'https://www.amazon.com/NOW-Supplements-Ashwagandha-somnifera-Standardized/dp/B0013OQIJY?sr=8-5',
        iherbLink: 'https://www.iherb.com/pr/now-foods-ashwagandha-standardized-extract-450-mg-90-veg-capsules/310',
        badges: ['Independently Tested']
      }
    ];
  }
  
  // Vitamin D
  if (normalizedName.includes('vitamin d')) {
    return [
      {
        name: 'Vitamin D3',
        brand: 'NatureWise',
        content: '360 Softgels (5000 IU / 125 mcg per softgel)',
        dietaryInfo: undefined,
        flavor: undefined,
        weight: undefined,
        pricePerUnit: 'from $0.00000062 per IU',
        pricePerBottle: '$11.12',
        image: 'https://m.media-amazon.com/images/I/7162k36ybFL._AC_SX679_.jpg',
        amazonLink: 'https://www.amazon.com/NatureWise-Vitamin-Function-Cold-Pressed-Gluten-Free/dp/B00GB85JR4?rdc=1&sr=8-5',
        iherbLink: 'https://www.iherb.com/pr/naturewise-vitamin-d3-125-mcg-5-000-iu-360-softgels/78025',
        badges: ['Amazon Bestseller']
      },
      {
        name: 'Vitamin D3',
        brand: 'California Gold Nutrition',
        content: '90 Fish Gelatin Softgels (5000 IU / 125 mcg per softgel)',
        dietaryInfo: 'Gluten Free, Non-GMO',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.000012 per IU',
        pricePerBottle: '$5.31',
        image: 'https://m.media-amazon.com/images/I/61rHyZ0u-4L._AC_SX679_.jpg',
        amazonLink: 'https://www.amazon.com/Vitamin-Cholecalciferol-Supports-Function-Softgels/dp/B071LN9587?sr=8-5',
        iherbLink: 'https://www.iherb.com/pr/california-gold-nutrition-vitamin-d3-125-mcg-5-000-iu-90-fish-gelatin-softgels/70316',
        badges: ['iHerb Bestseller']
      },
      {
        name: 'Vitamin D3',
        brand: 'Nature Made',
        content: '90 Softgels (5000 IU / 125 mcg per softgel)',
        dietaryInfo: undefined,
        flavor: undefined,
        weight: undefined,
        pricePerUnit: 'from $0.000018 per IU',
        pricePerBottle: '$7.94',
        image: 'https://m.media-amazon.com/images/I/71xXJMcUcbL._AC_SX679_.jpg',
        amazonLink: 'https://www.amazon.com/Nature-Made-Vitamin-Strength-Softgels/dp/B0037LOLKY?rdc=1&sr=8-1',
        iherbLink: 'https://www.iherb.com/pr/nature-made-d3-125-mcg-5-000-iu-90-softgels/76914',
        badges: ['Independently Tested']
      }
    ];
  }
  
  // Omega-3
  if (normalizedName.includes('omega')) {
    return [
      {
        name: 'Triple Strength Omega 3 Fish Oil',
        brand: 'Sports Research',
        content: '90 Softgels (1250 mg per softgel)',
        dietaryInfo: 'Burpless, Wild Alaska Pollock',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.0005 per mg EPA',
        pricePerBottle: '$27.95',
        image: 'https://m.media-amazon.com/images/I/61dWe19AxkL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Sports-Research-Triple-Strength-Supplement/dp/B07DX89ZHN?sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/sports-research-omega-3-fish-oil-triple-strength-90-softgels/90284'
      },
      {
        name: 'Omega-3 Premium Fish Oil',
        brand: 'California Gold Nutrition',
        content: '100 Fish Gelatin Softgels (1100 mg per softgel)',
        dietaryInfo: 'Gluten-free, Non-GMO, Soy-free',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.000244 per mg EPA',
        pricePerBottle: '$12.20',
        image: 'https://m.media-amazon.com/images/I/61KUMakLYdL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/California-Gold-Nutrition-Omega-3-Softgels/dp/B00ZNSHMJG?sr=1-5',
        iherbLink: 'https://www.iherb.com/pr/california-gold-nutrition-omega-3-premium-fish-oil-100-fish-gelatin-softgels-1-100-mg-per-softgel/62118'
      },
      {
        name: 'Ultimate Omega 2X',
        brand: 'Nordic Naturals',
        content: '60 Soft Gels (2150 mg per softgel)',
        dietaryInfo: 'High-Potency Fish Oil with EPA & DHA',
        flavor: 'Lemon',
        weight: undefined,
        pricePerUnit: '$0.0012 per mg EPA',
        pricePerBottle: '$39.99',
        image: 'https://m.media-amazon.com/images/I/616crE2-xeL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Nordic-Naturals-Ultimate-Omega-2X-Lemon-Flavor-60-Soft-Gels-2150-mg-Omega-3-High-Potency-Fish-Oil-with-EPA-DHA/dp/B015TQ7USO?sbo=RZvfv//HxDF+O5021pAnSA%3D%3D&sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/nordic-naturals-ultimate-omega-2x-lemon-60-softgels-1-075-mg-per-softgel/65085'
      }
    ];
  }
  
  // Creatine
  if (normalizedName.includes('creatine')) {
    return [
      {
        name: 'Creatine Monohydrate Micronized Powder',
        brand: 'Nutricost',
        content: undefined,
        dietaryInfo: undefined,
        flavor: 'Unflavored',
        weight: '1 lb (454 g)',
        pricePerUnit: '$0.043 per g',
        pricePerBottle: '$21.5',
        image: 'https://m.media-amazon.com/images/I/6103RpMQKcL._AC_SL1500_.jpg',
        amazonLink: 'https://www.amazon.com/Nutricost-Creatine-Monohydrate-Micronized-Powder/dp/B00GL2HMES?sr=8-5',
        iherbLink: 'https://www.iherb.com/pr/nutricost-performance-creatine-monohydrate-unflavored-1-lb-454-g/145338'
      },
      {
        name: 'Sport, Creatine Monohydrate',
        brand: 'California Gold Nutrition',
        content: undefined,
        dietaryInfo: 'Gluten-free, Non-GMOs, Soy-free, Vegan Ⓥ',
        extraNotice: 'Micronized',
        flavor: 'Unflavored',
        weight: '1 lb (454 g)',
        pricePerUnit: '$0.037 per g',
        pricePerBottle: '$17.01',
        image: 'https://m.media-amazon.com/images/I/71SLDsKoQKL._AC_SY300_SX300_QL70_FMwebp_.jpg',
        amazonLink: 'https://www.amazon.com/California-Gold-Nutrition-Monohydrate-Gluten-Free/dp/B075SNX9B8?sr=8-1',
        iherbLink: 'https://www.iherb.com/pr/california-gold-nutrition-sport-creatine-monohydrate-unflavored-1-lb-454-g/71026'
      },
      {
        name: 'Creatine',
        brand: 'Thorne',
        content: undefined,
        dietaryInfo: undefined,
        flavor: 'Unflavored',
        weight: '16 oz (450 g)',
        pricePerUnit: '$0.096 per g',
        pricePerBottle: '$43',
        image: 'https://m.media-amazon.com/images/I/51TOhmDTg6L._AC_SL1000_.jpg',
        amazonLink: 'https://www.amazon.com/Thorne-Creatine-High-Quality-Monohydrate-Gluten-Free/dp/B07978VPPH?sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/thorne-creatine-16-oz-450-g/70006'
      }
    ];
  }
  
  // Magnesium
  if (normalizedName.includes('magnesium')) {
    return [
      {
        name: 'Magnesium',
        brand: 'Nature\'s Bounty',
        content: '200 Tablets (500 mg)',
        dietaryInfo: 'High Potency for Bone & Muscle Health',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00013 per mg',
        pricePerBottle: '$12.89',
        image: 'https://m.media-amazon.com/images/I/71l-qL3KXRL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Natures-Bounty-Magnesium-Supplement-Vegetarian/dp/B00H5PJ0HW?rdc=1&sr=1-2',
        iherbLink: 'https://www.iherb.com/pr/nature-s-bounty-magnesium-500-mg-200-coated-tablets/59928'
      },
      {
        name: 'High Absorption Magnesium',
        brand: 'Doctor\'s Best',
        content: '240 Tablets (100 mg per tablet)',
        dietaryInfo: 'Gluten-free, Non-GMOs, Soy-free, Vegan Ⓥ',
        extraNotice: '100% Chelated',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00076 per mg',
        pricePerBottle: '$18.19',
        image: 'https://m.media-amazon.com/images/I/61A-zRQCJiL._AC_SY679_.jpg',
        amazonLink: 'https://www.amazon.com/Doctors-Best-Absorption-Magnesium-Glycinate/dp/B000BD0RT0?rdc=1&sr=8-1',
        iherbLink: 'https://www.iherb.com/pr/doctor-s-best-high-absorption-magnesium-240-tablets-100-mg-per-tablet/16567'
      },
      {
        name: 'Magnesium Malate',
        brand: 'KAL',
        content: '90 Tablets (400 mg / 200 mg per tablet)',
        dietaryInfo: 'Chelated with Malic Acid, Enhanced Absorption, Vegan, Non-GMO',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.0009 per mg',
        pricePerBottle: '$15.59',
        image: 'https://m.media-amazon.com/images/I/61Qgi0HwXFL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Magnesium-Chelated-Production-Supports-Vegetarian/dp/B00028PZKA?sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/kal-magnesium-malate-400-90-tablets-200-mg-per-tablet/73769'
      }
    ];
  }
  
  // Vitamin C
  if (normalizedName.includes('vitamin c')) {
    return [
      {
        name: 'Vitamin C',
        brand: 'Nature Made',
        content: '60 Tablets (1000 mg)',
        dietaryInfo: 'Time Release with Rose Hips',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.000251 per mg',
        pricePerBottle: '$15.04',
        image: 'https://m.media-amazon.com/images/I/71-nKyJz+jL._AC_SX679_.jpg',
        amazonLink: 'https://www.amazon.com/Nature-Made-Vitamin-Release-Tablets/dp/B000YN3LMC?sr=8-1',
        iherbLink: 'https://www.iherb.com/pr/nature-made-vitamin-c-with-rose-hips-time-release-1-000-mg-60-tablets/40416'
      },
      {
        name: 'Gold C®',
        brand: 'California Gold Nutrition',
        content: '60 Veggie Capsules (1000 mg)',
        dietaryInfo: 'Gluten-free, Non-GMOs, Soy-free',
        extraNotice: 'USP Grade',
        flavor: 'Unflavored',
        weight: undefined,
        pricePerUnit: '$0.000086 per mg',
        pricePerBottle: '$5.16',
        image: 'https://m.media-amazon.com/images/I/61hHSBp0BBL._AC_SX679_.jpg',
        amazonLink: 'https://www.amazon.com/California-Gold-Nutrition-Gluten-Free-Vegetarian/dp/B0175JV73M?sr=8-3',
        iherbLink: 'https://www.iherb.com/pr/california-gold-nutrition-gold-c-vitamin-c-1-000-mg-60-veggie-capsules/62512'
      },
      {
        name: 'Vitamin C with Flavonoids',
        brand: 'Thorne',
        content: '90 Capsules',
        dietaryInfo: 'With Flavonoids',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00047 per mg',
        pricePerBottle: '$21.00',
        image: 'https://m.media-amazon.com/images/I/61eWi3sq8+L._AC_SY879_.jpg',
        amazonLink: 'https://www.amazon.com/THORNE-Vitamin-Bioflavonoids-Production-Gluten-Free/dp/B09FYFM7N3?sr=8-1',
        iherbLink: 'https://www.iherb.com/pr/thorne-vitamin-c-with-flavonoids-90-capsules/111899'
      }
    ];
  }
  
  // Probiotics
  if (normalizedName.includes('probiotic')) {
    return [
      {
        name: 'Probiotics',
        brand: "Physician's Choice",
        content: '30 Capsules',
        dietaryInfo: '60 Billion CFU, 10 Strains + Organic Prebiotics, Immune, Digestive & Gut Health Support',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00360 per mg',
        pricePerBottle: '$23.97',
        image: 'https://m.media-amazon.com/images/I/810wCtCHD-L._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Probiotics-Formulated-Probiotic-Supplement-Acidophilus/dp/B079H53D2B?rdc=1&sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/physician-s-choice-60-billion-probiotic-30-capsules/114972'
      },
      {
        name: 'LactoBif® Probiotics',
        brand: 'California Gold Nutrition',
        content: '60 Veggie Capsules',
        dietaryInfo: '30 Billion CFU',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00240 per mg',
        pricePerBottle: '$19.18',
        image: 'https://m.media-amazon.com/images/I/71x7tiVE9eL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/California-Gold-Nutrition-Probiotics-Gluten-Free/dp/B01HUZTTX6?sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/california-gold-nutrition-lactobif-30-probiotics-30-billion-cfu-60-veggie-capsules/64009'
      },
      {
        name: 'Sacro-B™ Probiotic',
        brand: 'Thorne',
        content: '60 Capsules (250 mg per capsule)',
        dietaryInfo: undefined,
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00287 per mg',
        pricePerBottle: '$43',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/thr/thr75703/g/85.jpg',
        amazonLink: 'https://www.amazon.com/THORNE-Probiotic-Constipation-Probiotics-Gluten-Free/dp/B000FGXO7A?sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/thorne-sacro-b-probiotic-60-capsules-250-mg-per-capsule/18550'
      }
    ];
  }
  
  // Prebiotics
  if (normalizedName.includes('prebiotic')) {
    return [
      {
        name: 'Inulin Prebiotic Pure Powder',
        brand: 'NOW Foods',
        content: undefined,
        dietaryInfo: 'Certified Organic, Non-GMO, Intestinal Support',
        flavor: undefined,
        weight: '8 oz (227 g)',
        pricePerUnit: '$0.04630 per g Inulin',
        pricePerBottle: '$8.70',
        image: 'https://m.media-amazon.com/images/I/71KrZx9cRTL._AC_SY741_.jpg',
        amazonLink: 'https://www.amazon.com/NOW-Supplements-Certified-Organic-Non-GMO/dp/B000MGSI1K?sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/now-foods-certified-organic-inulin-prebiotic-pure-powder-8-oz-227-g/1100'
      },
      {
        name: 'Leaky Gut Supplement',
        brand: 'Codeage',
        content: '60 Capsules',
        dietaryInfo: 'L-Glutamine, N-Acetylglucosamine, Probiotic, Butyric Acid, Vegan, Non-GMO',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.50 per capsule',
        pricePerBottle: '$29.99',
        image: 'https://m.media-amazon.com/images/I/61MUlupX8WL._AC_SY606_.jpg',
        amazonLink: 'https://www.amazon.com/Codeage-L-Glutamine-N-Acetylglucosamine-Supplement-Polyphenols/dp/B0BJ144JHC?rdc=1&sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/codeage-leaky-gut-formula-60-capsules/117493'
      },
      {
        name: 'Prebiotic Fiber',
        brand: 'California Gold Nutrition',
        content: undefined,
        dietaryInfo: undefined,
        flavor: undefined,
        weight: '6.3 oz (180 g)',
        pricePerUnit: '$0.12100 per g',
        pricePerBottle: '$18.10',
        image: 'https://m.media-amazon.com/images/I/71qVP5S-iWL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Prebiotic-Fiber-California-Gold-Nutrition/dp/B09SQ4J9TQ?sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/california-gold-nutrition-prebiotic-fiber-6-3-oz-180-g/106898'
      }
    ];
  }
  
  // Collagen Peptides
  if (normalizedName.includes('collagen')) {
    return [
      {
        name: 'Orgain Hydrolyzed Collagen Peptides Powder',
        brand: 'Orgain',
        content: undefined,
        dietaryInfo: 'Type I and III, Grass Fed, Paleo & Keto, Non-GMO',
        flavor: 'Unflavored',
        weight: '1 lb 20 oz (560 g)',
        pricePerUnit: '$0.043 per g',
        pricePerBottle: '$19.27',
        image: 'https://m.media-amazon.com/images/I/716IoQSJ4YL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Orgain-Pasture-Hydrolyzed-Collagen-Protein/dp/B07BL69CD2?nav_sdd=aps&rdc=1&sr=1-6',
        iherbLink: ''
      },
      {
        name: 'California Gold Nutrition CollagenUP®',
        brand: 'California Gold Nutrition',
        content: undefined,
        dietaryInfo: 'Hydrolyzed Marine Collagen with Hyaluronic Acid and Vitamin C',
        flavor: 'Unflavored',
        weight: '7.26 oz (206 g)',
        pricePerUnit: '$0.08 per g',
        pricePerBottle: '$17.46',
        image: 'https://m.media-amazon.com/images/I/61QF4SbSxfL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/California-Gold-Nutrition-CollagenUP%C2%AE-Hydrolyzed/dp/B07DMGRWXN?sr=8-1',
        iherbLink: 'https://www.iherb.com/pr/california-gold-nutrition-collagenup-hydrolyzed-marine-collagen-peptides-with-hyaluronic-acid-and-vitamin-c-unflavored-7-26-oz-206-g/64903'
      },
      {
        name: 'Garden of Life Grass Fed Collagen Peptides Powder',
        brand: 'Garden of Life',
        content: undefined,
        dietaryInfo: 'Grass Fed',
        flavor: 'Unflavored',
        weight: '19.75 oz (560 g)',
        pricePerUnit: '$0.047 per g',
        pricePerBottle: '$26.56',
        image: 'https://m.media-amazon.com/images/I/61a4cdr-hWL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Garden-Life-Collagen-Peptides-Joints/dp/B07K4SK9SY?rdc=1&sr=8-1',
        iherbLink: 'https://www.iherb.com/pr/garden-of-life-grass-fed-collagen-peptides-unflavored-19-75-oz-560-g/86837'
      }
    ];
  }
  
  // Multivitamin
  if (normalizedName.includes('multivitamin')) {
    return [
      {
        name: 'Nature Made Multivitamin Tablets with Vitamin D3 and Iron',
        brand: 'Nature Made',
        content: '130 Tablets',
        dietaryInfo: 'With Vitamin D3 and Iron',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.058 per tablet',
        pricePerBottle: '$7.49',
        image: 'https://m.media-amazon.com/images/I/713hbdyLbSL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Nature-Made-Multi-Complete-Tablets/dp/B00YMSLT88?rdc=1&sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/nature-made-multi-with-iron-130-tablets/40426'
      },
      {
        name: 'Life Extension, Two-Per-Day Multivitamin',
        brand: 'Life Extension',
        content: '120 Capsules',
        dietaryInfo: 'Non-GMO, Gluten-Free',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.138 per tablet',
        pricePerBottle: '$16.60',
        image: 'https://m.media-amazon.com/images/I/71owMb26MnL._AC_SY300_SX300_QL70_FMwebp_.jpg',
        amazonLink: 'https://www.amazon.com/Life-Extension-Potency-Multi-Vitamin-Supplement/dp/B07KCZ6CDW?rdc=1&sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/life-extension-two-per-day-multivitamin-120-capsules/86453'
      },
      {
        name: 'THORNE - Basic Nutrients 2/Day',
        brand: 'THORNE',
        content: '60 Capsules',
        dietaryInfo: 'Optimal Bioavailability',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.567 per tablet',
        pricePerBottle: '$34.00',
        image: 'https://m.media-amazon.com/images/I/71uUmLdFh9L._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Thorne-Basic-Nutrients-Comprehensive-Bioavailability/dp/B00FOTMGTU?sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/thorne-basic-nutrients-2-day-60-capsules/85476'
      }
    ];
  }
  
  // Iron
  if (normalizedName.includes('iron')) {
    return [
      {
        name: 'Nature Made Iron',
        brand: 'Nature Made',
        content: '180 Tablets (65 mg / 325 mg Ferrous Sulfate)',
        dietaryInfo: '180 Day Supply',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.0026 per mg',
        pricePerBottle: '$8.49',
        image: 'https://m.media-amazon.com/images/I/71kQn9I4TbL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Nature-Made-Ferrous-Sulfate-Tablets/dp/B003PGJLRO?rdc=1&sr=8-5',
        iherbLink: 'https://www.iherb.com/pr/nature-made-iron-65-mg-180-tablets/70863'
      },
      {
        name: 'NOW Foods Iron',
        brand: 'NOW Foods',
        content: '90 Veg Capsules (36 mg)',
        dietaryInfo: 'Double Strength, Non-Constipating',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.0026 per mg',
        pricePerBottle: '$8.49',
        image: 'https://m.media-amazon.com/images/I/71j+fpD+9NL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/NOW-Supplements-Strength-Non-Constipating-Essential/dp/B00FYOU6AG?sr=8-1',
        iherbLink: 'https://www.iherb.com/pr/now-foods-iron-36-mg-90-veg-capsules/54089'
      },
      {
        name: 'Thorne Iron Bisglycinate',
        brand: 'Thorne',
        content: '60 Capsules (25 mg per capsule)',
        dietaryInfo: undefined,
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.01 per mg',
        pricePerBottle: '$15',
        image: 'https://m.media-amazon.com/images/I/71uiX68Q5nL._AC_SX425_.jpg',
        amazonLink: 'https://www.amazon.com/Thorne-Research-Bisglycinate-Supplement-Gastrointestinal/dp/B0797GZDZL?sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/thorne-iron-bisglycinate-60-capsules-25-mg-per-capsule/52838'
      }
    ];
  }
  
  // Calcium
  if (normalizedName.includes('calcium')) {
    return [
      {
        name: '21st Century Calcium Magnesium Zinc + D3',
        brand: '21st Century',
        content: '90 Tablets',
        dietaryInfo: undefined,
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.000183 per mg',
        pricePerBottle: '$5.49',
        image: 'https://m.media-amazon.com/images/I/61uOWrsJQQL._AC_SX679_.jpg',
        amazonLink: 'https://www.amazon.com/21st-Century-Zinc-Tablets-Count/dp/B004RCR5EG?sr=8-1',
        iherbLink: 'https://www.iherb.com/pr/21st-century-calcium-magnesium-zinc-d3-90-tablets/10695'
      },
      {
        name: 'Garden of Life Calcium Supplement with Magnesium & Organic Vitamin D3 K2',
        brand: 'Garden of Life',
        content: '180 Tablets',
        dietaryInfo: 'Made from Whole Foods, Gluten-Free',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.000809 per mg',
        pricePerBottle: '$48.54',
        image: 'https://m.media-amazon.com/images/I/81I9DWbPCyL._AC_SX679_.jpg',
        amazonLink: 'https://www.amazon.com/Garden-Life-mykind-Organic-Calcium/dp/B00K5NEKKS?sr=8-5',
        iherbLink: 'https://www.iherb.com/pr/garden-of-life-organics-organic-plant-calcium-180-vegan-tablets/58125'
      },
      {
        name: 'Nature Made Calcium with Vitamin D3',
        brand: 'Nature Made',
        content: '130 Tablets (500 mg)',
        dietaryInfo: 'For Bone Support',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.000166 per mg',
        pricePerBottle: '$10.79',
        image: 'https://m.media-amazon.com/images/I/71-0onWFI2L._AC_SY450_.jpg',
        amazonLink: 'https://www.amazon.com/Nature-Made-Calcium-Carbonate-Vitamin/dp/B004B8JGUW?rdc=1&sr=8-5',
        iherbLink: 'https://www.iherb.com/pr/nature-made-calcium-with-d3-130-tablets/145559'
      }
    ];
  }
  
  // BCAAs
  if (normalizedName.includes('bcaa')) {
    return [
      {
        name: 'Optimum Nutrition Instantized BCAA Capsules',
        brand: 'Optimum Nutrition',
        content: '60 Capsules (1000 mg)',
        dietaryInfo: 'Keto Friendly',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00016 per mg',
        pricePerBottle: '$9.74',
        image: 'https://m.media-amazon.com/images/I/71+R-I6pUjL._AC_SL1500_.jpg',
        amazonLink: 'https://a.co/d/9rsL93P',
        iherbLink: 'https://www.iherb.com/pr/optimum-nutrition-bcaa-1000-60-capsules-500-mg-per-capsule/68621'
      },
      {
        name: 'California Gold Nutrition, Sport, BCAA Powder, AjiPure®',
        brand: 'California Gold Nutrition',
        content: undefined,
        dietaryInfo: undefined,
        flavor: undefined,
        weight: '1 lb (454 g)',
        pricePerUnit: '$0.00461 per mg',
        pricePerBottle: '$20.92',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01058/g/87.jpg',
        amazonLink: 'https://www.amazon.com/California-Gold-Nutrition-Gluten-Free-Sugar-Free/dp/B072M7ZF3Z?sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/california-gold-nutrition-sport-bcaa-powder-ajipure-branched-chain-amino-acids-with-l-leucine-l-isoleucine-and-l-valine-1-lb-454-g/71025'
      },
      {
        name: 'XTEND, Sport®, 7G BCAA, Blue Raspberry Ice',
        brand: 'XTEND',
        content: undefined,
        dietaryInfo: undefined,
        flavor: 'Blue Raspberry Ice',
        weight: '12.2 oz (345 g)',
        pricePerUnit: '$0.00510 per mg',
        pricePerBottle: '$17.59',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/clf/clf05104/g/31.jpg',
        amazonLink: 'https://www.amazon.com/Scivation-Hydrasport-Electrolyte-Hydration-Raspberry/dp/B07BV6Y72J?rdc=1&sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/xtend-sport-7g-bcaa-blue-raspberry-ice-12-2-oz-345-g/98546'
      }
    ];
  }
  
  // Sulforaphane
  if (normalizedName.includes('sulforaphane')) {
    return [
      {
        name: 'Sulforaphane from Broccoli Sprouts',
        brand: 'SM Nutrition',
        content: '60 Microbeadlets (50 mg)',
        dietaryInfo: 'NRF2 Activation, Cellular Health & Immune Support, Glucoraphanin, Myrosinase & Antioxidants',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.01665 per mg',
        pricePerBottle: '$49.95',
        image: 'https://m.media-amazon.com/images/I/81+Weot4A1L._AC_SL1500_.jpg',
        amazonLink: 'https://www.amazon.com/Sulforaphane-Glucoraphanin-Antioxidant-Detoxification-Gluten-Free/dp/B07QW9VLSZ?rdc=1&sr=1-5',
        iherbLink: 'https://www.iherb.com/pr/smnutrition-sulforaphane-activated-complex-delayed-release-60-capsules/114571'
      },
      {
        name: 'Swanson Sulforaphane from Broccoli Sprout Extract',
        brand: 'Swanson',
        content: '60 Capsules (400 mcg)',
        dietaryInfo: 'Vegan',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.32042 per mg',
        pricePerBottle: '$7.69',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/swv/swv06048/g/48.jpg',
        amazonLink: 'https://www.amazon.com/Swanson-Sulforaphane-Broccoli-400-Capsules/dp/B0026CB1G2?sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/swanson-sulforaphane-from-broccoli-sprout-extract-400-mcg-60-vegan-caps/118029'
      },
      {
        name: 'Thorne Broccoli Seed Extract',
        brand: 'Thorne',
        content: '60 Capsules',
        dietaryInfo: 'Sulforaphane Glucosinolate (SGS)',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.02100 per mg',
        pricePerBottle: '$63',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/thr/thr66001/g/47.jpg',
        amazonLink: 'https://www.amazon.com/Thorne-Research-Crucera-SGS-Sulforaphane-Glucosinolate/dp/B004FUHIJM?sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/thorne-broccoli-seed-extract-60-capsules/38994'
      }
    ];
  }
  
  // Casein Protein
  if (normalizedName.includes('casein')) {
    return [
      {
        name: 'Gold Standard 100% Casein',
        brand: 'Optimum Nutrition',
        content: undefined,
        dietaryInfo: undefined,
        flavor: 'Creamy Vanilla',
        weight: '1.81 lb (825 g)',
        pricePerUnit: '$0.06181 per g',
        pricePerBottle: '$50.99',
        image: 'https://m.media-amazon.com/images/I/71Z59kI-WeL._AC_SL1500_.jpg',
        amazonLink: 'https://www.amazon.com/NUTRITION-Standard-Micellar-Digesting-Overnight/dp/B002DYJ0PW?sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/optimum-nutrition-gold-standard-100-casein-creamy-vanilla-1-81-lb-825-g/27528'
      },
      {
        name: 'California Gold Nutrition, Sport, Micellar Casein',
        brand: 'California Gold Nutrition',
        content: undefined,
        dietaryInfo: 'Slow Absorption',
        flavor: 'Unflavored',
        weight: '16 oz (454 g)',
        pricePerUnit: '$0.05471 per g',
        pricePerBottle: '$24.84',
        image: 'https://m.media-amazon.com/images/I/71sgfP-kcnL._AC_SL1500_.jpg',
        amazonLink: 'https://www.amazon.com/California-Gold-Nutrition-Gluten-Free-Sugar-Free/dp/B0753SBPX8?sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/california-gold-nutrition-sport-micellar-casein-unflavored-16-oz-454-g/75782'
      },
      {
        name: 'Rule One Proteins, Casein Protein',
        brand: 'Rule One Proteins',
        content: undefined,
        dietaryInfo: undefined,
        flavor: 'Vanilla Creme',
        weight: '3.96 lb (1.8 kg)',
        pricePerUnit: '$0.03682 per g',
        pricePerBottle: '$66.27',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/rul/rul00442/y/40.jpg',
        amazonLink: 'https://www.amazon.com/Casein-Rule-Proteins-Vanilla-Servings/dp/B076PQPHFM?sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/rule-one-proteins-casein-protein-vanilla-creme-3-96-lb-1-8-kg/125772'
      }
    ];
  }
  
  // Curcumin
  if (normalizedName.includes('curcumin') || normalizedName.includes('turmeric')) {
    return [
      {
        name: 'NatureWise Curcumin Turmeric 2250mg',
        brand: 'NatureWise',
        content: '180 Capsules (2250 mg/cap)',
        dietaryInfo: '95% Curcuminoids & BioPerine Black Pepper Extract for Advanced Absorption, Vegan, Non-GMO',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00024 per mg',
        pricePerBottle: '$21.49',
        image: 'https://m.media-amazon.com/images/I/714UFxWRUFL._AC_SL1500_.jpg',
        amazonLink: 'https://www.amazon.com/NatureWise-Curcuminoids-BioPerine-Absorption-Cardiovascular/dp/B01BMDAVIY?rdc=1&sr=1-5',
        iherbLink: 'https://www.iherb.com/pr/naturewise-organic-turmeric-curcumin-180-vegan-capsules/77858'
      },
      {
        name: 'California Gold Nutrition, Curcumin C3 Complex® with BioPerine® Black Pepper Extract',
        brand: 'California Gold Nutrition',
        content: '120 Capsules (505 mg/cap)',
        dietaryInfo: 'Enhanced Bioavailability, Vegetarian',
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00058 per mg',
        pricePerBottle: '$34.90',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn00940/y/184.jpg',
        amazonLink: 'https://www.amazon.com/Curcumin-Turmeric-Standardized-Curcuminoids-BioPerine/dp/B0175JT1QC?sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/california-gold-nutrition-curcumin-c3-complex-with-bioperine-black-pepper-extract-turmeric-curcumin-complex-enhanced-bioavailablity-120-veggie-capsules/60047'
      },
      {
        name: 'Nature Made, Turmeric Curcumin',
        brand: 'Nature Made',
        content: '60 Capsules (50 mg/cap)',
        dietaryInfo: undefined,
        flavor: undefined,
        weight: undefined,
        pricePerUnit: '$0.00042 per mg',
        pricePerBottle: '$12.66',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/ndm/ndm02754/y/37.jpg',
        amazonLink: 'https://www.amazon.com/Nature-Made-Turmeric-Curcumin-Antioxidant/dp/B074QHCL9Z?rdc=1&sr=1-1',
        iherbLink: 'https://www.iherb.com/pr/nature-made-turmeric-curcumin-60-capsules/70865'
      }
    ];
  }
  
  // Whey Protein
  if (normalizedName.includes('whey')) {
    return [
      {
        name: 'Optimum Nutrition Gold Standard 100% Whey Protein Powder',
        brand: 'Optimum Nutrition',
        content: undefined,
        dietaryInfo: undefined,
        flavor: 'Double Rich Chocolate',
        weight: '5lb / 2.29kg',
        pricePerUnit: '$0.036 per g',
        pricePerBottle: '$82.94',
        image: 'https://m.media-amazon.com/images/I/71f+UBXh2vL._AC_SL1500_.jpg',
        amazonLink: 'https://www.amazon.com/Optimum-Nutrition-Standard-Protein-Chocolate/dp/B000QSNYGI?sr=1-5',
        iherbLink: 'https://www.iherb.com/pr/optimum-nutrition-gold-standard-100-whey-protein-double-rich-chocolate-5-05-lb-2-29-kg/27509'
      },
      {
        name: 'California Gold Nutrition, Sport, Whey Protein Isolate',
        brand: 'California Gold Nutrition',
        content: undefined,
        dietaryInfo: undefined,
        flavor: 'Unflavored',
        weight: '1lb (454 g)',
        pricePerUnit: '$0.062 per g',
        pricePerBottle: '$28',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01064/y/134.jpg',
        amazonLink: 'https://www.amazon.com/California-Gold-Nutrition-Instantized-Gluten-Free/dp/B075TJN41F?sr=1-4',
        iherbLink: 'https://www.iherb.com/pr/california-gold-nutrition-sport-whey-protein-isolate-unflavored-1-lb-454-g/71031'
      },
      {
        name: 'Super Nutrition, Ultra Filtered Whey Protein Powder with Stevia Leaf Extract, Monk Fruit Extract, Sunflower Lecithin',
        brand: 'Super Nutrition',
        content: undefined,
        dietaryInfo: 'Non-GMO, rbST Free',
        flavor: 'Vanilla',
        weight: '2lb / 908g',
        pricePerUnit: '$0.067 per g',
        pricePerBottle: '$60.96',
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/spn/spn02345/y/9.jpg',
        amazonLink: 'https://www.amazon.com/s?k=Super+Nutrition+Ultra+Filtered+Whey+Protein',
        iherbLink: 'https://www.iherb.com/pr/super-nutrition-ultra-filtered-whey-protein-powder-with-stevia-leaf-extract-monk-fruit-extract-sunflower-lecithin-non-gmo-and-rbst-free-vanilla-2-lb-908-g/129585'
      }
    ];
  }
  
  // Default fallback for any other supplement
  return [
    {
      name: `${supplementName} Premium`,
      brand: 'Generic Brand',
      content: 'High quality formulation',
      dietaryInfo: undefined,
      flavor: undefined,
      weight: undefined,
      pricePerUnit: undefined,
      pricePerBottle: '$15.99',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      amazonLink: `https://www.amazon.com/s?k=${encodeURIComponent(supplementName)}`,
      iherbLink: `https://www.iherb.com/search?kw=${encodeURIComponent(supplementName)}`
    },
    {
      name: `${supplementName} Plus`,
      brand: 'Generic Brand',
      content: 'Enhanced absorption formula',
      dietaryInfo: undefined,
      flavor: undefined,
      weight: undefined,
      pricePerUnit: undefined,
      pricePerBottle: '$18.99',
      image: 'https://images.unsplash.com/photo-1550572017-4c1a0c1b6c80?w=400&h=300&fit=crop',
      amazonLink: `https://www.amazon.com/s?k=${encodeURIComponent(supplementName)}`,
      iherbLink: `https://www.iherb.com/search?kw=${encodeURIComponent(supplementName)}`
    },
    {
      name: `${supplementName} Value`,
      brand: 'Generic Brand',
      content: 'Best value option',
      dietaryInfo: undefined,
      flavor: undefined,
      weight: undefined,
      pricePerUnit: undefined,
      pricePerBottle: '$12.99',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop',
      amazonLink: `https://www.amazon.com/s?k=${encodeURIComponent(supplementName)}`,
      iherbLink: `https://www.iherb.com/search?kw=${encodeURIComponent(supplementName)}`
    }
  ];
}