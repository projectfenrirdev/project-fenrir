"use client";

import { useCookieConsent } from "@/lib/cookies/use-cookie-consent";
import { updateGoogleConsentMode } from "@/lib/cookies/google-consent-mode";
import { useEffect } from "react";

export function GoogleConsentScript() {
  const { consent, isLoaded } = useCookieConsent();

  // Update Google Consent Mode whenever consent status changes
  useEffect(() => {
    // Only run when consent is loaded
    if (!isLoaded || !consent) return;

    // Use the centralized function to update consent mode
    updateGoogleConsentMode(consent);
  }, [consent, isLoaded]);

  return null;
}

// Add a declaration for window.dataLayer and window.gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
