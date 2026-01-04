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
export function ClarityScript() {
  const { consent, isLoaded } = useCookieConsent();
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  // Don't load if no Clarity ID is configured
  if (!clarityId) return null;

  // Only load if consent is granted for analytics
  if (!isLoaded || !consent?.categories.analytics) return null;

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `,
      }}
    />
  );
}
