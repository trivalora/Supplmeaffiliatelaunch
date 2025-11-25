import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AnalyticsProvider } from '../src/components/AnalyticsProvider';
import '../src/styles/globals.css';
import '../src/fonts.css';

export const metadata: Metadata = {
  title: 'Suppl.me - Evidence-Based Supplement Research & Price Comparison',
  description: 'Comprehensive evidence-based supplement information with clinical research, meta-analysis reviews, dosing recommendations, safety profiles, and multi-retailer price comparison. Compare prices from iHerb, Amazon, Vitacost, and more.',
  keywords: 'supplements, evidence-based supplements, supplement research, meta-analysis, clinical trials, supplement comparison, supplement reviews, supplement prices, iHerb, Amazon supplements, vitamin research, mineral supplements',
  authors: [{ name: 'Suppl.me Research Team' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Suppl.me - Evidence-Based Supplement Research & Price Comparison',
    description: 'Comprehensive evidence-based supplement information with clinical research, meta-analysis reviews, and multi-retailer price comparison.',
    url: 'https://suppl.me',
    siteName: 'Suppl.me',
    type: 'website',
    images: [
      {
        url: 'https://suppl.me/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Suppl.me - Evidence-Based Supplement Information',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suppl.me - Evidence-Based Supplement Research',
    description: 'Comprehensive evidence-based supplement information with clinical research, meta-analysis reviews, and multi-retailer price comparison.',
    images: ['https://suppl.me/images/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://suppl.me',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId={gtmId} />
      </head>
      <body className="antialiased">
        <AnalyticsProvider 
          googleTagManagerId={gtmId}
          googleAnalyticsId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          hotjarId={process.env.NEXT_PUBLIC_HOTJAR_ID}
          clarityId={process.env.NEXT_PUBLIC_CLARITY_ID}
        >
          <Header />
          <main className="min-h-screen overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
