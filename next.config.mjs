/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output for static export (SSG) - commented out for Phase 1 development
  // Will be enabled in Phase 8 (Static Site Generation)
  // output: 'export',

  // Configure image domains for external images
  images: {
    // unoptimized: true, // Required for static export - will enable in Phase 8
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.iherb.com",
      },
      {
        protocol: "https",
        hostname: "iherb.com",
      },
      {
        protocol: "https",
        hostname: "cloudinary.images-iherb.com",
      },
      {
        protocol: "https",
        hostname: "www.vitacost.com",
      },
      {
        protocol: "https",
        hostname: "www.bodybuilding.com",
      },
      {
        protocol: "https",
        hostname: "www.gnc.com",
      },
      {
        protocol: "https",
        hostname: "www.amazon.com",
      },
    ],
  },

  // Turbopack configuration - set root to silence lockfile warning
  turbopack: {
    root: process.cwd(),
  },

  // CSS Optimization + Static Generation Settings
  experimental: {
    optimizeCss: true, // Enable built-in CSS optimization
    staticGenerationMaxConcurrency: 8, // Limit concurrent generations to avoid memory issues
    staticGenerationMinPagesPerWorker: 25, // Minimum pages per worker
  },

  // Environment variables available to the browser
  env: {
    VITE_CANONICAL_BASE_URL:
      process.env.VITE_CANONICAL_BASE_URL || "https://www.suppl.me",
  },

  // Disable x-powered-by header
  poweredByHeader: false,

  // Trailing slash behavior
  trailingSlash: false,

  // React strict mode
  reactStrictMode: true,

  // Redirects for SEO - handle common URL variations
  async redirects() {
    return [
      // Glossary redirects (fix slug mismatches)
      {
        source: "/glossary/homair",
        destination: "/glossary/homa-ir",
        permanent: true,
      },
      // Comparison page redirects (fix Seobility 404s)
      {
        source: "/comparison/bcaas",
        destination: "/comparison/bcaa",
        permanent: true,
      },
      {
        source: "/comparison/whey",
        destination: "/comparison/whey-protein",
        permanent: true,
      },
      {
        source: "/comparison/casein",
        destination: "/comparison/casein-protein",
        permanent: true,
      },
      {
        source: "/comparison/collagen-peptides",
        destination: "/comparison/collagen",
        permanent: true,
      },
      {
        source: "/comparison/magnesium-glycinate",
        destination: "/comparison/magnesium",
        permanent: true,
      },
      // No redirect for /comparison/zinc - it doesn't exist (zinc is a knowledgebase page only)
    ];
  },
};

export default nextConfig;
