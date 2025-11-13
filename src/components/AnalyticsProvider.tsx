// ========================================
// ANALYTICS PROVIDER COMPONENT
// ========================================

import { useEffect } from 'react';
import { initializeDataLayer, trackSessionStart } from '../utils/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
  // Configuration for analytics tools
  googleTagManagerId?: string; // GTM-XXXXXXX
  googleAnalyticsId?: string; // G-XXXXXXXXXX or UA-XXXXXXXXX-X
  hotjarId?: string; // Hotjar site ID
  clarityId?: string; // Microsoft Clarity project ID
}

export function AnalyticsProvider({
  children,
  googleTagManagerId,
  googleAnalyticsId,
  hotjarId,
  clarityId,
}: AnalyticsProviderProps) {
  useEffect(() => {
    // Initialize data layer immediately (lightweight)
    initializeDataLayer();

    // Track session start immediately (lightweight)
    trackSessionStart();

    // PERFORMANCE OPTIMIZATION: Defer heavy analytics scripts until page is interactive
    // This prevents blocking the initial render
    const loadAnalyticsScripts = () => {
      // Load Google Tag Manager
      if (googleTagManagerId) {
        loadGoogleTagManager(googleTagManagerId);
      }

      // Load Google Analytics (if not using GTM)
      if (googleAnalyticsId && !googleTagManagerId) {
        loadGoogleAnalytics(googleAnalyticsId);
      }

      // Load Hotjar
      if (hotjarId) {
        loadHotjar(hotjarId);
      }

      // Load Microsoft Clarity
      if (clarityId) {
        loadClarity(clarityId);
      }
    };

    // Wait for page to be fully loaded before loading analytics
    if (document.readyState === 'complete') {
      // Page already loaded, load analytics with slight delay
      setTimeout(loadAnalyticsScripts, 100);
    } else {
      // Wait for load event
      window.addEventListener('load', loadAnalyticsScripts);
      return () => window.removeEventListener('load', loadAnalyticsScripts);
    }
  }, [googleTagManagerId, googleAnalyticsId, hotjarId, clarityId]);

  return <>{children}</>;
}

// ========================================
// GOOGLE TAG MANAGER LOADER
// ========================================

function loadGoogleTagManager(gtmId: string) {
  if (typeof window === 'undefined') return;

  // GTM script
  const script = document.createElement('script');
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
  document.head.appendChild(script);

  // GTM noscript iframe
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);

  // Only log in development
  if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
    console.log(`Google Tag Manager loaded: ${gtmId}`);
  }
}

// ========================================
// GOOGLE ANALYTICS LOADER
// ========================================

function loadGoogleAnalytics(gaId: string) {
  if (typeof window === 'undefined') return;

  // GA4 script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}', {
      'send_page_view': true,
      'anonymize_ip': true
    });
  `;
  document.head.appendChild(script2);

  // Only log in development
  if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
    console.log(`Google Analytics loaded: ${gaId}`);
  }
}

// ========================================
// HOTJAR LOADER
// ========================================

function loadHotjar(hjId: string) {
  if (typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.innerHTML = `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${hjId},hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;
  document.head.appendChild(script);

  // Only log in development
  if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
    console.log(`Hotjar loaded: ${hjId}`);
  }
}

// ========================================
// MICROSOFT CLARITY LOADER
// ========================================

function loadClarity(clarityId: string) {
  if (typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityId}");
  `;
  document.head.appendChild(script);

  // Only log in development
  if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
    console.log(`Microsoft Clarity loaded: ${clarityId}`);
  }
}

// ========================================
// ANALYTICS CONFIGURATION COMPONENT
// ========================================

/**
 * Usage Example:
 * 
 * In your App.tsx, wrap your application with AnalyticsProvider:
 * 
 * <AnalyticsProvider
 *   googleTagManagerId="GTM-XXXXXXX"
 *   googleAnalyticsId="G-XXXXXXXXXX"
 *   hotjarId="1234567"
 *   clarityId="abcdefghij"
 * >
 *   <YourApp />
 * </AnalyticsProvider>
 * 
 * Then use the tracking functions from utils/analytics.ts throughout your app:
 * 
 * import { trackPageView, trackRetailerClick } from './utils/analytics';
 * 
 * // Track page views
 * trackPageView('Vitamin D', 'supplement');
 * 
 * // Track retailer clicks
 * trackRetailerClick('Amazon', 'Vitamin D', 'hero');
 */