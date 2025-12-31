"use client";

import { Button } from "@/components/ui/button";
import type { CookieCategories, CookieConsent } from "@/data/types";
import {
  acceptAllServerCookies,
  rejectAllServerCookies,
  saveCustomServerPreferences,
} from "@/lib/actions/cookie-actions";
import {
  acceptAllCookies,
  getStoredConsent,
  rejectAllCookies,
  saveCustomPreferences,
} from "@/lib/cookies/cookie-consent";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CookiePreferences = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [preferences, setPreferences] = useState<CookieCategories>({
    essential: true,
    analytics: false,
    functional: false,
    targeting: false,
    ad_storage: false,
    ad_user_data: false,
    ad_personalization: false,
    analytics_storage: false,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const checkboxVariants = {
    checked: { scale: 1.1 },
    unchecked: { scale: 1 },
  };

  // Load consent from localStorage on mount
  useEffect(() => {
    const storedConsent = getStoredConsent();
    setConsent(storedConsent);
    setPreferences(storedConsent.categories);
  }, []);

  const handleAcceptAll = async () => {
    // Update localStorage
    acceptAllCookies();
    setConsent(getStoredConsent());

    // Also update server-side cookies
    await acceptAllServerCookies();

    // Update the cookie preferences
    setPreferences({
      essential: true,
      analytics: true,
      functional: true,
      targeting: true,
      ad_storage: true,
      ad_user_data: true,
      ad_personalization: true,
      analytics_storage: true,
    });
  };

  const handleRejectAll = async () => {
    // Update localStorage
    rejectAllCookies();
    setConsent(getStoredConsent());

    // Also update server-side cookies
    await rejectAllServerCookies();

    // Update the cookie preferences
    setPreferences({
      essential: true,
      analytics: false,
      functional: false,
      targeting: false,
      ad_storage: false,
      ad_user_data: false,
      ad_personalization: false,
      analytics_storage: false,
    });
  };

  const handleSavePreferences = async () => {
    // Update localStorage
    saveCustomPreferences(preferences);
    setConsent(getStoredConsent());

    // Also update server-side cookies
    await saveCustomServerPreferences(preferences);
  };

  const handlePreferenceChange = (category: keyof CookieCategories) => {
    if (category === "essential") return; // Essential cookies can't be toggled
    setPreferences((prev: CookieCategories) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!consent) {
    return null;
  }

  return (
    <motion.div
      className="bg-forge-surface/50 border-forge-accent/10 mb-10 rounded-lg border p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Manage Cookie Preferences
      </h2>

      <div className="mb-6 space-y-4">
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between border-b border-white/10 pb-4"
        >
          <div>
            <h4 className="font-medium text-white">Essential Cookies</h4>
            <p className="text-sm text-gray-300">
              These cookies are necessary for the website to function and cannot
              be switched off.
            </p>
          </div>
          <div className="relative">
            <motion.input
              type="checkbox"
              checked={preferences.essential}
              disabled
              className="h-5 w-5 cursor-not-allowed rounded border-gray-600 bg-white/10 opacity-70"
              variants={checkboxVariants}
              animate={preferences.essential ? "checked" : "unchecked"}
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between border-b border-white/10 pb-4"
        >
          <div>
            <h4 className="font-medium text-white">Analytics Cookies</h4>
            <p className="text-sm text-gray-300">
              These cookies allow us to count visits and traffic sources to
              measure and improve site performance.
            </p>
          </div>
          <div>
            <motion.input
              type="checkbox"
              checked={preferences.analytics}
              onChange={() => handlePreferenceChange("analytics")}
              className="h-5 w-5 cursor-pointer rounded border-gray-600 bg-white/10"
              variants={checkboxVariants}
              animate={preferences.analytics ? "checked" : "unchecked"}
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between border-b border-white/10 pb-4"
        >
          <div>
            <h4 className="font-medium text-white">Functional Cookies</h4>
            <p className="text-sm text-gray-300">
              These cookies enable enhanced functionality and personalization.
            </p>
          </div>
          <div>
            <motion.input
              type="checkbox"
              checked={preferences.functional}
              onChange={() => handlePreferenceChange("functional")}
              className="h-5 w-5 cursor-pointer rounded border-gray-600 bg-white/10"
              variants={checkboxVariants}
              animate={preferences.functional ? "checked" : "unchecked"}
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between border-b border-white/10 pb-4"
        >
          <div>
            <h4 className="font-medium text-white">Targeting Cookies</h4>
            <p className="text-sm text-gray-300">
              These cookies may be set through our site by our advertising
              partners to build a profile of your interests.
            </p>
          </div>
          <div>
            <motion.input
              type="checkbox"
              checked={preferences.targeting}
              onChange={() => handlePreferenceChange("targeting")}
              className="h-5 w-5 cursor-pointer rounded border-gray-600 bg-white/10"
              variants={checkboxVariants}
              animate={preferences.targeting ? "checked" : "unchecked"}
            />
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="flex justify-end gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={handleRejectAll}
          className="border-white/20 bg-white/5 text-white hover:bg-white/10"
        >
          Reject All
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={handleAcceptAll}
          className="from-forge-accent-DEFAULT to-forge-accent bg-linear-to-r text-white"
        >
          Accept All
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={handleSavePreferences}
          className="bg-forge-primary hover:bg-forge-primary/90 text-white"
        >
          Save Preferences
        </Button>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-4 text-center">
        <p className="text-sm text-gray-400">
          {consent.status === "accepted"
            ? "You've accepted cookies. You can change your preferences at any time."
            : consent.status === "rejected"
              ? "You've rejected non-essential cookies. You can change your preferences at any time."
              : "Please select your cookie preferences."}
        </p>
        {consent.timestamp > 0 && (
          <p className="mt-1 text-xs text-gray-500">
            Last updated: {new Date(consent.timestamp).toLocaleString()}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CookiePreferences;
