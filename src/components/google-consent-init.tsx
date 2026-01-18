import Script from "next/script";

/**
 * Google Consent Mode Initialization Script
 *
 * This MUST run BEFORE GTM loads to set default consent state.
 * Consent Mode v2 requires default consent to be set before any Google tags fire.
 *
 * Using afterInteractive strategy to avoid blocking critical rendering path.
 * This still runs before GoogleAnalytics component fires.
 */
export function GoogleConsentInit() {
  return (
    <Script
      id="google-consent-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Initialize dataLayer
            window.dataLayer = window.dataLayer || [];
            
            // Define gtag function
            function gtag() {
              dataLayer.push(arguments);
            }
            window.gtag = gtag;
            
            // Set default consent to denied for all features (per EU recommendations)
            // This must happen BEFORE GTM loads
            // security_storage is granted by default as security features don't require consent
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 2000 // Wait for 2 seconds for consent to be determined
            });
            
            // Enable URL passthrough to preserve some measurement capabilities
            gtag('set', 'url_passthrough', true);
            
            // Enable ads_data_redaction when ad_storage is denied
            gtag('set', 'ads_data_redaction', true);
          })();
        `,
      }}
    />
  );
}

// Type declaration for window.gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer?: Object[];
  }
}
