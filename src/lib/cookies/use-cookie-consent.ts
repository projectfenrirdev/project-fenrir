"use client";

import {
  CookieCategories,
  CookieConsent,
  CookieConsentStatus,
} from "@/data/types";
import { CONSENT_KEY } from "@/lib/constants";
import {
  CONSENT_CHANGED_EVENT,
  getStoredConsent,
} from "@/lib/cookies/cookie-consent";
import { useEffect, useState } from "react";

/**
 * React hook to access cookie consent state in components
 */
export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Get initial consent
    const storedConsent = getStoredConsent();
    setConsent(storedConsent);

    // Listen for storage events in case consent changes in another tab
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === CONSENT_KEY) {
        const newConsent = event.newValue
          ? JSON.parse(event.newValue)
          : getStoredConsent();
        setConsent(newConsent);
      }
    };

    // Handle same-tab consent changes via custom event
    const handleConsentChanged = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsent>;
      setConsent(customEvent.detail);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(
      CONSENT_CHANGED_EVENT,
      handleConsentChanged as EventListener,
    );

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        CONSENT_CHANGED_EVENT,
        handleConsentChanged as EventListener,
      );
    };
  }, []);

  // Check if a specific cookie category is allowed
  const isCategoryAllowed = (category: keyof CookieCategories): boolean => {
    if (category === "essential") return true; // Essential cookies always allowed

    // For other categories, check consent status and category preference
    return (
      consent?.status === "accepted" && consent?.categories?.[category] === true
    );
  };

  // Get consent status
  const getConsentStatus = (): CookieConsentStatus => {
    return consent?.status || "pending";
  };

  return {
    consent,
    isCategoryAllowed,
    getConsentStatus,
    isConsentGiven: consent?.status === "accepted",
    isLoaded: consent !== null,
  };
};
