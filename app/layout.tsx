import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnalyticsProvider } from "@/components/providers/AnalyticsProvider";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { GeorestrictionCheck } from "./components/GeorestrictionCheck";
// CSS Strategy: Critical CSS inline + Main CSS via Next.js imports
// Next.js will chunk and optimize these automatically
import "../src/styles/globals.css";
import "../src/fonts.css";

export const metadata: Metadata = {
  title: "Suppl - Get Evidence-Backed Supplement Stacks for Less",
  description:
    "Find the most efficacious supplement stack for your goals in seconds. Compare prices per mg of active ingredient with every claim linked to research sources.",
  keywords:
    "supplements, evidence-based supplements, supplement research, meta-analysis, clinical trials, supplement comparison, supplement reviews, supplement prices, iHerb, Amazon supplements, vitamin research, mineral supplements",
  authors: [{ name: "Suppl.me Research Team" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Suppl - Get Evidence-Backed Supplement Stacks for Less",
    description:
      "Find the most efficacious supplement stack for your goals in seconds. Compare prices per mg of active ingredient with every claim linked to research sources.",
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
    title: "Suppl - Get Evidence-Backed Supplement Stacks for Less",
    description:
      "Find the most efficacious supplement stack for your goals in seconds. Compare prices per mg of active ingredient with every claim linked to research sources.",
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
        {/* Critical CSS - Minimal inline for instant header positioning (~500 bytes) */}
        {/* Full styles loaded via imports below (globals.css + fonts.css) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--header-height:80px;--color-primary-dark:#162f1c;--color-tertiary:#f5f8f6;--font-heading:"Lora",serif;--font-body:"Lato",sans-serif;--z-fixed:1000}html,body{margin:0;padding:0;overflow-x:hidden}header{position:fixed;top:0;left:0;right:0;height:var(--header-height);background:var(--color-primary-dark);z-index:var(--z-fixed)}`,
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
        <GeorestrictionCheck />
        <AnalyticsProvider
          googleTagManagerId={gtmId}
          googleAnalyticsId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          hotjarId={process.env.NEXT_PUBLIC_HOTJAR_ID}
          clarityId={process.env.NEXT_PUBLIC_CLARITY_ID}
        >
          <Header />
          <main className="min-h-screen overflow-x-hidden">{children}</main>
          <Footer />
          <CookieConsent />
          <script
            type="text/javascript"
            src="https://s.skimresources.com/js/295565X1782964.skimlinks.js"
          />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
