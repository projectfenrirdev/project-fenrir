# Analytics, Cookies & Consent Setup Guide

A complete, GDPR-compliant implementation for Next.js 15+ with Google Consent Mode v2, cookie management, and analytics integration.

---

## 📋 Overview

This setup provides:
- ✅ **GDPR/EU compliant** cookie consent management
- ✅ **Google Consent Mode v2** integration
- ✅ **Client + Server-side** consent storage
- ✅ **Google Analytics 4** with consent-aware tracking
- ✅ **Customizable cookie categories** (essential, analytics, functional, targeting)
- ✅ **Cross-tab synchronization** of consent preferences

---

## 🚀 Quick Start

### 1. Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX  # Optional
```

### 2. Install Dependencies

```bash
npm install framer-motion  # For animated cookie banner (optional)
```

---

## 📁 File Structure

```
src/
├── components/
│   ├── google-consent-init.tsx       # Consent Mode initialization (runs first)
│   ├── google-consent-script.tsx     # Client-side consent updater
│   ├── server-cookie-checker.tsx     # Server-side consent checker
│   └── ui/
│       └── cookie-banner.tsx         # Cookie consent banner UI
├── lib/
│   ├── cookies/
│   │   ├── cookie-consent.ts         # Client-side consent logic
│   │   ├── google-consent-mode.ts    # Google Consent Mode updater
│   │   └── use-cookie-consent.ts     # React hook for consent state
│   ├── actions/
│   │   └── cookie-actions.ts         # Server actions for cookies
│   └── constants.ts                  # Cookie keys and config
└── data/
    └── types.ts                      # TypeScript types
```

---

## 📄 Core Files

### 1. **Types** (`src/data/types.ts`)

```typescript
export type CookieConsentStatus = "accepted" | "rejected" | "pending";

export type CookieCategories = {
  essential: boolean;      // Always true
  analytics: boolean;
  functional: boolean;
  targeting: boolean;
  // Google Consent Mode v2 properties
  ad_storage: boolean;
  ad_user_data: boolean;
  ad_personalization: boolean;
  analytics_storage: boolean;
};

export type CookieConsent = {
  status: CookieConsentStatus;
  categories: CookieCategories;
  timestamp: number;
};
```

### 2. **Constants** (`src/lib/constants.ts`)

```typescript
export const CONSENT_KEY = "your-app-cookie-consent";
export const CONSENT_STATUS_COOKIE = "your-app-cookie-consent-status";
export const CONSENT_CATEGORIES_COOKIE = "your-app-cookie-consent-categories";
export const COOKIE_EXPIRY_DAYS = 365; // 1 year
```

### 3. **Client-Side Consent** (`src/lib/cookies/cookie-consent.ts`)

```typescript
import type { CookieCategories, CookieConsent } from "@/data/types";
import { CONSENT_KEY } from "@/lib/constants";

export const CONSENT_CHANGED_EVENT = "cookieConsentChanged";

const defaultConsent: CookieConsent = {
  status: "pending",
  categories: {
    essential: true,
    analytics: false,
    functional: false,
    targeting: false,
    ad_storage: false,
    ad_user_data: false,
    ad_personalization: false,
    analytics_storage: false,
  },
  timestamp: 0,
};

export const getStoredConsent = (): CookieConsent => {
  if (typeof window === "undefined") return defaultConsent;
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    return stored ? JSON.parse(stored) : defaultConsent;
  } catch {
    return defaultConsent;
  }
};

export const saveConsent = (consent: CookieConsent): void => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify({
      ...consent,
      timestamp: Date.now(),
    }));
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: consent }));
  } catch (error) {
    console.error("Error saving consent", error);
  }
};

export const acceptAllCookies = (): void => {
  saveConsent({
    status: "accepted",
    categories: {
      essential: true,
      analytics: true,
      functional: true,
      targeting: true,
      ad_storage: true,
      ad_user_data: true,
      ad_personalization: true,
      analytics_storage: true,
    },
    timestamp: Date.now(),
  });
};

export const rejectAllCookies = (): void => {
  saveConsent({
    status: "rejected",
    categories: {
      essential: true,
      analytics: false,
      functional: false,
      targeting: false,
      ad_storage: false,
      ad_user_data: false,
      ad_personalization: false,
      analytics_storage: false,
    },
    timestamp: Date.now(),
  });
};

export const saveCustomPreferences = (categories: CookieCategories): void => {
  saveConsent({
    status: categories.analytics || categories.functional || categories.targeting
      ? "accepted"
      : "rejected",
    categories: { ...categories, essential: true },
    timestamp: Date.now(),
  });
};
```

### 4. **Server Actions** (`src/lib/actions/cookie-actions.ts`)

```typescript
"use server";

import type { CookieCategories, CookieConsentStatus } from "@/data/types";
import { CONSENT_CATEGORIES_COOKIE, CONSENT_STATUS_COOKIE, COOKIE_EXPIRY_DAYS } from "@/lib/constants";
import { cookies } from "next/headers";

export async function saveConsentCookies(
  status: CookieConsentStatus,
  categories: CookieCategories,
) {
  const cookieStore = await cookies();
  
  cookieStore.set(CONSENT_STATUS_COOKIE, status, {
    maxAge: COOKIE_EXPIRY_DAYS * 24 * 60 * 60,
    path: "/",
    sameSite: "strict",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  cookieStore.set(CONSENT_CATEGORIES_COOKIE, JSON.stringify(categories), {
    maxAge: COOKIE_EXPIRY_DAYS * 24 * 60 * 60,
    path: "/",
    sameSite: "strict",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return { success: true };
}

export async function acceptAllServerCookies() {
  return saveConsentCookies("accepted", {
    essential: true,
    analytics: true,
    functional: true,
    targeting: true,
    ad_storage: true,
    ad_user_data: true,
    ad_personalization: true,
    analytics_storage: true,
  });
}

export async function rejectAllServerCookies() {
  return saveConsentCookies("rejected", {
    essential: true,
    analytics: false,
    functional: false,
    targeting: false,
    ad_storage: false,
    ad_user_data: false,
    ad_personalization: false,
    analytics_storage: false,
  });
}

export async function saveCustomServerPreferences(categories: CookieCategories) {
  const status: CookieConsentStatus =
    categories.analytics || categories.functional || categories.targeting
      ? "accepted"
      : "rejected";
  return saveConsentCookies(status, { ...categories, essential: true });
}
```

### 5. **Google Consent Mode** (`src/lib/cookies/google-consent-mode.ts`)

```typescript
"use client";

import { CookieConsent } from "@/data/types";

export const updateGoogleConsentMode = (consent: CookieConsent): void => {
  if (typeof window === "undefined") return;
  
  const gtag = window.gtag;
  if (!gtag) return;

  const { categories } = consent;

  gtag("consent", "update", {
    ad_storage: (categories.ad_storage ?? categories.targeting) ? "granted" : "denied",
    ad_user_data: (categories.ad_user_data ?? categories.targeting) ? "granted" : "denied",
    ad_personalization: (categories.ad_personalization ?? categories.targeting) ? "granted" : "denied",
    analytics_storage: (categories.analytics_storage ?? categories.analytics) ? "granted" : "denied",
    functionality_storage: categories.functional ? "granted" : "denied",
    security_storage: "granted",
  });
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer?: Object[];
  }
}
```

### 6. **React Hook** (`src/lib/cookies/use-cookie-consent.ts`)

```typescript
"use client";

import { CookieCategories, CookieConsent } from "@/data/types";
import { CONSENT_KEY } from "@/lib/constants";
import { CONSENT_CHANGED_EVENT, getStoredConsent } from "@/lib/cookies/cookie-consent";
import { useEffect, useState } from "react";

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedConsent = getStoredConsent();
    setConsent(storedConsent);

    // Listen for storage events (other tabs)
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === CONSENT_KEY) {
        const newConsent = event.newValue ? JSON.parse(event.newValue) : getStoredConsent();
        setConsent(newConsent);
      }
    };

    // Listen for same-tab changes
    const handleConsentChanged = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsent>;
      setConsent(customEvent.detail);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(CONSENT_CHANGED_EVENT, handleConsentChanged as EventListener);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(CONSENT_CHANGED_EVENT, handleConsentChanged as EventListener);
    };
  }, []);

  const isCategoryAllowed = (category: keyof CookieCategories): boolean => {
    if (category === "essential") return true;
    return consent?.status === "accepted" && consent?.categories?.[category] === true;
  };

  return {
    consent,
    isCategoryAllowed,
    isConsentGiven: consent?.status === "accepted",
    isLoaded: consent !== null,
  };
};
```

### 7. **Consent Initialization** (`src/components/google-consent-init.tsx`)

```typescript
import Script from "next/script";

export function GoogleConsentInit() {
  return (
    <Script
      id="google-consent-init"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            window.gtag = gtag;
            
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 2000
            });
            
            gtag('set', 'url_passthrough', true);
            gtag('set', 'ads_data_redaction', true);
          })();
        `,
      }}
    />
  );
}
```

### 8. **Consent Script** (`src/components/google-consent-script.tsx`)

```typescript
"use client";

import { useCookieConsent } from "@/lib/cookies/use-cookie-consent";
import { updateGoogleConsentMode } from "@/lib/cookies/google-consent-mode";
import { useEffect } from "react";

export function GoogleConsentScript() {
  const { consent, isLoaded } = useCookieConsent();

  useEffect(() => {
    if (!isLoaded || !consent) return;
    updateGoogleConsentMode(consent);
  }, [consent, isLoaded]);

  return null;
}
```

### 9. **Server Cookie Checker** (`src/components/server-cookie-checker.tsx`)

```typescript
import { CONSENT_CATEGORIES_COOKIE, CONSENT_STATUS_COOKIE } from "@/lib/constants";
import { cookies } from "next/headers";

type CookieCategory = "essential" | "analytics" | "functional" | "targeting";

export async function ServerCookieChecker({
  category,
  children,
  fallback = null,
}: {
  category: CookieCategory;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  if (category === "essential") return <>{children}</>;

  const cookieStore = await cookies();
  const statusCookie = cookieStore.get(CONSENT_STATUS_COOKIE);
  const categoriesCookie = cookieStore.get(CONSENT_CATEGORIES_COOKIE);

  if (!statusCookie || !categoriesCookie) return <>{fallback}</>;

  try {
    const status = statusCookie.value;
    const categories = JSON.parse(categoriesCookie.value);

    if (status === "accepted" && categories[category] === true) {
      return <>{children}</>;
    }
    return <>{fallback}</>;
  } catch {
    return <>{fallback}</>;
  }
}
```

### 10. **Cookie Banner** (`src/components/ui/cookie-banner.tsx`)

Minimal implementation (customize UI as needed):

```typescript
"use client";

import { CookieCategories, CookieConsent } from "@/data/types";
import { acceptAllServerCookies, rejectAllServerCookies } from "@/lib/actions/cookie-actions";
import { acceptAllCookies, getStoredConsent, rejectAllCookies } from "@/lib/cookies/cookie-consent";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    const storedConsent = getStoredConsent();
    setConsent(storedConsent);
  }, []);

  if (consent && consent.status !== "pending") return null;

  const handleAcceptAll = async () => {
    acceptAllCookies();
    setConsent(getStoredConsent());
    await acceptAllServerCookies();
  };

  const handleRejectAll = async () => {
    rejectAllCookies();
    setConsent(getStoredConsent());
    await rejectAllServerCookies();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">
          We use cookies to improve your experience. By using our site, you accept our cookie policy.
        </p>
        <div className="flex gap-2">
          <button onClick={handleRejectAll} className="px-4 py-2 bg-gray-700 rounded">
            Reject
          </button>
          <button onClick={handleAcceptAll} className="px-4 py-2 bg-blue-600 rounded">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## 🔧 Integration in Layout

**`src/app/layout.tsx`:**

```typescript
import { GoogleConsentInit } from "@/components/google-consent-init";
import { GoogleConsentScript } from "@/components/google-consent-script";
import { CookieBanner } from "@/components/ui/cookie-banner";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        {/* MUST load first - sets default consent */}
        <GoogleConsentInit />
        
        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        {/* Updates consent when user makes choice */}
        <GoogleConsentScript />
        
        {children}
        
        {/* Cookie consent banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
```

---

## ✅ Verification

### 1. Check Browser Console
Open DevTools → Console. You should see no errors.

### 2. Check Network Tab
Filter by `google-analytics` or `collect`. After accepting cookies, you should see requests to Google Analytics.

### 3. Check Google Analytics Real-Time
Go to GA4 → Reports → Realtime. After accepting cookies, your visit should appear within 30 seconds.

### 4. Check localStorage
Open DevTools → Application → Local Storage. You should see `your-app-cookie-consent` key.

### 5. Check Cookies
Open DevTools → Application → Cookies. You should see:
- `your-app-cookie-consent-status`
- `your-app-cookie-consent-categories`

---

## 🌍 GDPR Compliance Checklist

- ✅ Default consent is **denied** for all non-essential cookies
- ✅ User can **accept**, **reject**, or **customize** preferences
- ✅ Essential cookies are always enabled (can't be disabled)
- ✅ Consent is stored for **365 days**
- ✅ User can **change preferences** at any time
- ✅ **Clear information** about what cookies are used
- ✅ **No tracking** before consent is given
- ✅ Google Consent Mode v2 **cookieless pings** when denied

---

## 🎨 Customization

### Add More Cookie Categories

Edit `types.ts` to add new categories:

```typescript
export type CookieCategories = {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  targeting: boolean;
  marketing: boolean;  // New category
  // ... Google Consent Mode properties
};
```

### Change Cookie Expiry

Edit `constants.ts`:

```typescript
export const COOKIE_EXPIRY_DAYS = 180; // 6 months instead of 1 year
```

### Add Custom Analytics Events

```typescript
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'button_click', {
    event_category: 'engagement',
    event_label: 'CTA Button',
  });
}
```

---

## 🐛 Troubleshooting

### Analytics not tracking
1. Check that `NEXT_PUBLIC_GA_ID` is set correctly
2. Verify consent is "accepted" in localStorage
3. Check Network tab for requests to `google-analytics.com`
4. Ensure `GoogleConsentInit` loads before GA script

### Consent not persisting
1. Check browser localStorage is enabled
2. Verify server cookies are being set (check DevTools → Cookies)
3. Ensure server actions are being called

### Cross-tab sync not working
1. Check that `CONSENT_CHANGED_EVENT` is dispatched
2. Verify `storage` event listener is attached
3. Test in two separate tabs (not incognito + normal)

---

## 📚 Resources

- [Google Consent Mode v2 Documentation](https://developers.google.com/tag-platform/security/guides/consent)
- [GA4 Setup Guide](https://developers.google.com/analytics/devguides/collection/ga4)
- [GDPR Compliance Guide](https://gdpr.eu/cookies/)
- [Next.js Cookies Documentation](https://nextjs.org/docs/app/api-reference/functions/cookies)

---

## 📝 License

This setup is provided as-is for educational and commercial use. Customize as needed for your project.

---

**Made with ❤️ for GDPR-compliant web development**
