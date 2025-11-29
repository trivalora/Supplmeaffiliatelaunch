import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";
// Main CSS - Now async loaded (non-blocking)
// Critical CSS is inlined in <head> below
import "../src/styles/globals.css";
import "../src/fonts.css";

export const metadata: Metadata = {
  title: "Suppl.me - Evidence-Based Supplement Research & Price Comparison",
  description:
    "Comprehensive evidence-based supplement information with clinical research, meta-analysis reviews, and multi-retailer price comparison.",
  keywords:
    "supplements, evidence-based supplements, supplement research, meta-analysis, clinical trials, supplement comparison, supplement reviews, supplement prices, iHerb, Amazon supplements, vitamin research, mineral supplements",
  authors: [{ name: "Suppl.me Research Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Suppl.me - Evidence-Based Supplement Research & Price Comparison",
    description:
      "Comprehensive evidence-based supplement information with clinical research, meta-analysis reviews, and multi-retailer price comparison.",
    url: "https://www.suppl.me",
    siteName: "Suppl.me",
    type: "website",
    images: [
      {
        url: "https://www.suppl.me/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Suppl.me - Evidence-Based Supplement Information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suppl.me - Evidence-Based Supplement Research",
    description:
      "Comprehensive evidence-based supplement information with clinical research, meta-analysis reviews, and multi-retailer price comparison.",
    images: ["https://www.suppl.me/images/og-home.jpg"],
  },
  alternates: {
    canonical: "https://www.suppl.me",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";

  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId={gtmId} />
        {/* Critical CSS - Inlined for instant above-the-fold render (3KB) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
/* === CSS VARIABLES (Design Tokens) === */
:root {
  /* Fluid Typography */
  --fluid-h1: clamp(2rem, 5vw + 1rem, 4rem);
  --fluid-h2: clamp(1.5rem, 3vw + 0.75rem, 2.5rem);
  --fluid-h3: clamp(1.125rem, 2vw + 0.5rem, 1.75rem);
  --fluid-body: clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem);
  
  /* Fluid Spacing */
  --space-sm: clamp(1rem, 2vw, 1.5rem);
  --space-md: clamp(1.5rem, 3vw, 2rem);
  --space-lg: clamp(2rem, 4vw, 3rem);
  --space-xl: clamp(3rem, 5vw, 4rem);
  
  /* Layout */
  --page-padding-inline: clamp(1.5rem, 3vw, 6rem);
  --page-padding-block: clamp(2rem, 4vh, 4rem);
  --header-height: 80px;
  
  /* Fonts */
  --font-heading: "Lora", serif;
  --font-body: "Lato", sans-serif;
  
  /* Colors */
  --color-primary-dark: #162f1c;
  --color-secondary: #e0cba8;
  --color-tertiary: #f5f8f6;
  --color-text: #2d2d2d;
  
  /* Header Colors */
  --header-bg: #162f1c;
  --header-text: #f7f7f3;
  --header-secondary: #e0cba8;
  --header-hover: #1e4028;
  
  /* Z-Index */
  --z-sticky: 100;
  --z-fixed: 1000;
  
  /* Border & Radius */
  --radius-md: 12px;
  --border-subtle: rgba(224, 203, 168, 0.3);
}

/* === BASE RESET === */
html, body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-body);
  font-size: var(--fluid-body);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-tertiary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* === TYPOGRAPHY (Above-Fold Only) === */
h1, h2, h3 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
}

h1 {
  font-size: var(--fluid-h1);
  margin-bottom: var(--space-md);
}

h2 {
  font-size: var(--fluid-h2);
  margin-bottom: var(--space-sm);
}

h3 {
  font-size: var(--fluid-h3);
}

/* === LAYOUT UTILITIES (Critical Only) === */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: var(--page-padding-inline);
}

/* === HEADER (Fixed, Always Visible) === */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: var(--header-bg);
  color: var(--header-text);
  z-index: var(--z-fixed);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* === HERO SECTION (Above Fold) === */
.hero {
  padding-top: calc(var(--header-height) + var(--space-xl));
  padding-bottom: var(--space-xl);
  min-height: 60vh;
}

/* === UTILITY CLASSES (Critical Only) === */
.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.hidden { display: none; }

/* Mobile: Show menu button, hide nav */
@media (max-width: 768px) {
  .md\\:flex { display: none !important; }
  .md\\:hidden { display: block !important; }
}

/* Desktop: Show nav, hide menu button */
@media (min-width: 769px) {
  .md\\:flex { display: flex !important; }
  .md\\:hidden { display: none !important; }
}
`,
          }}
        />
        {/* Preload critical fonts for faster rendering */}
        <link
          rel="preload"
          href="/fonts/Lato-Regular-subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Lato-Bold-subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Lora-Variable.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <AnalyticsProvider
          googleTagManagerId={gtmId}
          googleAnalyticsId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          hotjarId={process.env.NEXT_PUBLIC_HOTJAR_ID}
          clarityId={process.env.NEXT_PUBLIC_CLARITY_ID}
        >
          <Header />
          <main className="min-h-screen overflow-x-hidden">{children}</main>
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
