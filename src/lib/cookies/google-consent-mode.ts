"use client";

import { CookieConsent } from "@/data/types";

/**
 * Initialize Google Consent Mode (programmatic version)
 *
 * Note: This function is available for programmatic use if needed.
 * However, initialization is typically handled by GoogleConsentInit component
 * which runs synchronously before GTM loads (required for Consent Mode v2).
 *
 * Use this function if you need to reinitialize consent mode programmatically.
 */
export const initGoogleConsentMode = (): void => {
  if (typeof window === "undefined") return;

  // Access window.dataLayer and window.gtag without type checking
  // since we're working with the global Google Tag properties
  const dataLayer = window.dataLayer || [];
  window.dataLayer = dataLayer;

  // Define gtag function if it doesn't exist
  if (!window.gtag) {
    const gtag = function (...args: unknown[]) {
      // gtag pushes arguments as an array to dataLayer
      (dataLayer as unknown[]).push(args);
    };
    window.gtag = gtag;
  }

  // Set default consent to denied for all features (per EU recommendations)
  // security_storage is granted by default as security features don't require consent
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    security_storage: "granted",
    wait_for_update: 2000, // Wait for 2 seconds for consent to be determined
  });

  // Enable URL passthrough to preserve some measurement capabilities
  window.gtag("set", "url_passthrough", true);

  // Enable ads_data_redaction when ad_storage is denied
  window.gtag("set", "ads_data_redaction", true);
};

/**
 * Update Google Consent Mode based on user consent selections
 * This should be called whenever user consent status changes
 */
export const updateGoogleConsentMode = (consent: CookieConsent): void => {
  if (typeof window === "undefined") return;

  // Access gtag without type checking
  const gtag = window.gtag;
  if (!gtag) return;

  const { categories } = consent;

  // Map our consent categories to Google's Consent Mode v2 categories
  // Support both legacy categories (analytics, targeting, functional) and new Consent Mode categories
  const analytics_storage =
    (categories.analytics_storage ?? categories.analytics)
      ? "granted"
      : "denied";
  const ad_storage =
    (categories.ad_storage ?? categories.targeting) ? "granted" : "denied";
  const ad_user_data =
    (categories.ad_user_data ?? categories.targeting) ? "granted" : "denied";
  const ad_personalization =
    (categories.ad_personalization ?? categories.targeting)
      ? "granted"
      : "denied";
  const functionality_storage = categories.functional ? "granted" : "denied";
  // security_storage is always granted as security features don't require consent
  const security_storage = "granted";

  // Update consent based on user selection
  gtag("consent", "update", {
    ad_storage,
    ad_user_data,
    ad_personalization,
    analytics_storage,
    functionality_storage,
    security_storage,
  });
};
