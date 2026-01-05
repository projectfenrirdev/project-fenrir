"use client";

import Script from "next/script";

/**
 * Google Analytics Script Component
 *
 * Loads Google Analytics 4 (GA4) with Consent Mode v2 support.
 * The script loads regardless of consent state, but respects consent mode settings.
 *
 * When analytics_storage is denied, GA4 will send cookieless pings.
 * When analytics_storage is granted, GA4 will use cookies for full tracking.
 *
 * IMPORTANT: This should load AFTER GoogleConsentInit sets default consent.
 */
export function GoogleAnalyticsScript() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Don't load if no GA ID is configured
  if (!gaId) {
    console.warn("Google Analytics: NEXT_PUBLIC_GA_ID is not configured");
    return null;
  }

  return (
    <>
      {/* Load the gtag.js library */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />

      {/* Initialize GA4 with the measurement ID */}
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}
