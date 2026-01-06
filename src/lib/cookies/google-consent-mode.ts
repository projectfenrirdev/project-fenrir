"use client";

import { CookieConsent } from "@/data/types";

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
