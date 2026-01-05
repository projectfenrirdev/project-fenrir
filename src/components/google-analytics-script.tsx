"use client";

import Script from "next/script";
import { useCookieConsent } from "@/lib/cookies/use-cookie-consent";

/**
 * Microsoft Clarity Script Component
 *
 * Loads Clarity only when analytics consent is granted.
 * Clarity provides heatmaps, session recordings, and user behavior insights.
 *
 * Alternative: You can also configure Clarity via GTM as a Custom HTML tag
 * which would respect consent mode automatically.
 */
export function GoogleAnalyticsScript() {
  const { consent, isLoaded } = useCookieConsent();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Don't load if no GA ID is configured
  if (!gaId) return null;

  // Only load if consent is granted for analytics
  if (!isLoaded || !consent?.categories.analytics) return null;

  return (
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
              <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaId}');
              </script>
        `,
      }}
    />
  );
}
