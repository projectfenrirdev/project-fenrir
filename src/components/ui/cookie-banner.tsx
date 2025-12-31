"use client";

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
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";

// Animation variants
const containerVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const checkboxVariants = {
  checked: { scale: 1.1 },
  unchecked: { scale: 1 },
};

const CookieBanner = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookieCategories>({
    essential: true,
    analytics: false,
    functional: false,
    targeting: false,
    // Google Consent Mode v2 properties
    ad_storage: false,
    ad_user_data: false,
    ad_personalization: false,
    analytics_storage: false,
  });

  // Load consent from localStorage on mount
  useEffect(() => {
    const storedConsent = getStoredConsent();
    setConsent(storedConsent);
    setPreferences(storedConsent.categories);
  }, []);

  // Don't render anything if consent is already given or on server
  if (consent && consent.status !== "pending") {
    return null;
  }

  const handleAcceptAll = async () => {
    // Update localStorage
    acceptAllCookies();
    setConsent(getStoredConsent());

    // Also update server-side cookies
    await acceptAllServerCookies();
  };

  const handleRejectAll = async () => {
    // Update localStorage
    rejectAllCookies();
    setConsent(getStoredConsent());

    // Also update server-side cookies
    await rejectAllServerCookies();
  };

  const handleSavePreferences = async () => {
    // Update localStorage
    saveCustomPreferences(preferences);
    setConsent(getStoredConsent());

    // Also update server-side cookies
    await saveCustomServerPreferences(preferences);

    setShowDetails(false);
  };

  const handlePreferenceChange = (category: keyof CookieCategories) => {
    if (category === "essential") return; // Essential cookies can't be toggled
    setPreferences((prev: CookieCategories) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{ containerVariants }}
        className="bg-forge-base/80 fixed right-0 bottom-0 left-0 z-50 border-t border-white/10 shadow-lg backdrop-blur-md"
      >
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-1/4 bottom-0 h-32 w-32 rounded-full bg-forge-accent-dark/20 blur-[80px]"></div>
          <div className="bg-forge-accent/20 absolute bottom-0 left-1/3 h-40 w-40 rounded-full blur-[100px]"></div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
        </div>

        <div className="relative container mx-auto p-6">
          {!showDetails ? (
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-medium text-white">
                  We value your privacy
                </h3>
                <p className="text-sm text-gray-300">
                  We use cookies and similar technologies to enhance your
                  browsing experience, analyze our traffic, and display
                  personalized content and ads. By clicking &quot;Accept
                  All&quot;, you consent to our use of cookies.{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-forge-primary hover:text-forge-accent underline transition-colors"
                  >
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="sm"
                  onClick={() => setShowDetails(true)}
                  className="border border-white/10 text-white hover:bg-white/5"
                >
                  Customize
                </Button>
                <Button
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
                  className="bg-forge-primary hover:bg-forge-primary/90 text-white"
                >
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">
                  Cookie Preferences
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                  className="text-white hover:bg-white/5"
                >
                  Back
                </Button>
              </div>

              <div className="mb-6 space-y-4">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-4"
                >
                  <div>
                    <h4 className="font-medium text-white">
                      Essential Cookies
                    </h4>
                    <p className="text-sm text-gray-300">
                      These cookies are necessary for the website to function
                      and cannot be switched off.
                    </p>
                  </div>
                  <div className="relative">
                    <motion.input
                      type="checkbox"
                      checked={preferences.essential}
                      disabled
                      className="h-5 w-5 cursor-not-allowed rounded border-gray-600 bg-white/10 opacity-70"
                      variants={{ checkboxVariants }}
                      animate={preferences.essential ? "checked" : "unchecked"}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-4"
                >
                  <div>
                    <h4 className="font-medium text-white">
                      Analytics Cookies
                    </h4>
                    <p className="text-sm text-gray-300">
                      These cookies allow us to count visits and traffic sources
                      to measure and improve site performance.
                    </p>
                  </div>
                  <div>
                    <motion.input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => handlePreferenceChange("analytics")}
                      className="h-5 w-5 cursor-pointer rounded border-gray-600 bg-white/10"
                      variants={{ checkboxVariants }}
                      animate={preferences.analytics ? "checked" : "unchecked"}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-4"
                >
                  <div>
                    <h4 className="font-medium text-white">
                      Functional Cookies
                    </h4>
                    <p className="text-sm text-gray-300">
                      These cookies enable enhanced functionality and
                      personalization.
                    </p>
                  </div>
                  <div>
                    <motion.input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={() => handlePreferenceChange("functional")}
                      className="h-5 w-5 cursor-pointer rounded border-gray-600 bg-white/10"
                      variants={{ checkboxVariants }}
                      animate={preferences.functional ? "checked" : "unchecked"}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-4"
                >
                  <div>
                    <h4 className="font-medium text-white">
                      Targeting Cookies
                    </h4>
                    <p className="text-sm text-gray-300">
                      These cookies may be set through our site by our
                      advertising partners to build a profile of your interests.
                    </p>
                  </div>
                  <div>
                    <motion.input
                      type="checkbox"
                      checked={preferences.targeting}
                      onChange={() => handlePreferenceChange("targeting")}
                      className="h-5 w-5 cursor-pointer rounded border-gray-600 bg-white/10"
                      variants={{ checkboxVariants }}
                      animate={preferences.targeting ? "checked" : "unchecked"}
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                className="flex justify-end gap-3"
              >
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
                  onClick={handleSavePreferences}
                  className="bg-forge-primary hover:bg-forge-primary/90 text-white"
                >
                  Save Preferences
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
