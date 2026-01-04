# EU Compliance Reference Guide

> A comprehensive guide for implementing GDPR-compliant cookie consent, privacy controls, and analytics in Next.js 15+ projects.

**Based on:** Forging Dev implementation (Project Fenrir)  
**Last Updated:** January 2026  
**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture & File Structure](#architecture--file-structure)
3. [Cookie Categories & Types](#cookie-categories--types)
4. [Google Consent Mode v2](#google-consent-mode-v2)
5. [Cookie Consent Implementation](#cookie-consent-implementation)
6. [Server-Side Cookie Management](#server-side-cookie-management)
7. [Analytics Integration](#analytics-integration)
8. [Required Legal Pages](#required-legal-pages)
9. [Layout Integration](#layout-integration)
10. [Environment Variables](#environment-variables)
11. [Checklist for New Projects](#checklist-for-new-projects)
12. [External Resources](#external-resources)

---

## Overview

### EU Requirements Summary

| Requirement | Description |
|-------------|-------------|
| **GDPR** | General Data Protection Regulation - Governs personal data collection and processing |
| **ePrivacy** | Cookie consent requirements - "Cookie Law" |
| **Consent Mode v2** | Google's requirement for EU users (mandatory March 2024+) |
| **Legal Basis** | Must have valid legal basis for processing (consent, contract, legitimate interest) |
| **User Rights** | Right to access, rectify, erase, restrict, port, object |
| **Data Controller** | Organization determining purposes of data processing |

### Key Principles

1. **Privacy by Default** - All non-essential cookies denied by default
2. **Granular Consent** - Users can choose specific cookie categories
3. **Freely Given** - Must be able to reject as easily as accept
4. **Informed** - Clear explanation of what each cookie does
5. **Revocable** - Users can change preferences anytime
6. **Documented** - Consent must be timestamped and stored

---

## Architecture & File Structure

### Cookie & Consent Files

```
src/
├── lib/
│   ├── cookies/
│   │   ├── cookie-consent.ts          # Client-side localStorage consent
│   │   ├── google-consent-mode.ts     # Google Consent Mode v2 integration
│   │   └── use-cookie-consent.ts      # React hook for consent state
│   ├── actions/
│   │   └── cookie-actions.ts          # Server actions for httpOnly cookies
│   ├── constants.ts                   # Cookie names, expiry, keys
│   └── gtm.ts                         # Event tracking utilities
├── components/
│   ├── ui/
│   │   └── cookie-banner.tsx          # Main cookie consent banner
│   ├── analytics-script.tsx           # Conditional analytics loading
│   ├── clarity-script.tsx             # Microsoft Clarity (consent-aware)
│   ├── google-consent-init.tsx        # Consent Mode initialization
│   ├── google-consent-script.tsx      # Consent Mode update handler
│   └── server-cookie-checker.tsx      # Server-side consent check component
├── data/
│   └── types.ts                       # TypeScript types for consent
└── app/
    ├── cookie-policy/                 # Cookie Policy page
    ├── privacy-policy/                # Privacy Policy page
    ├── gdpr/                          # GDPR Compliance page
    └── terms-of-service/              # Terms of Service page
```

---

## Cookie Categories & Types

### TypeScript Types

```typescript
// src/data/types.ts
export type CookieConsentStatus = "accepted" | "rejected" | "pending";

export type CookieCategories = {
  essential: boolean;       // Always true, can't be rejected
  analytics: boolean;       // GA4, Clarity, etc.
  functional: boolean;      // Enhanced features, personalization
  targeting: boolean;       // Advertising, remarketing
  
  // Google Consent Mode v2 properties
  ad_storage: boolean;           // Cookie storage for ads
  ad_user_data: boolean;         // Sending user data to Google for ads
  ad_personalization: boolean;   // Personalized ads
  analytics_storage: boolean;    // Cookie storage for analytics
};

export type CookieConsent = {
  status: CookieConsentStatus;
  categories: CookieCategories;
  timestamp: number;
};
```

### Cookie Category Descriptions

| Category | Purpose | Required | Examples |
|----------|---------|----------|----------|
| **Essential** | Core website functionality | Yes (always on) | Session cookies, CSRF tokens, consent storage |
| **Analytics** | Traffic analysis, performance | No | Google Analytics, Clarity |
| **Functional** | Enhanced features | No | Language preferences, theme |
| **Targeting** | Advertising, remarketing | No | Google Ads, Facebook Pixel |

### Constants Configuration

```typescript
// src/lib/constants.ts
export const CONSENT_KEY = "projectfenrir-cookie-consent";
export const CONSENT_STATUS_COOKIE = "projectfenrir-cookie-consent-status";
export const CONSENT_CATEGORIES_COOKIE = "projectfenrir-cookie-consent-categories";
export const COOKIE_EXPIRY_DAYS = 365; // 1 year
```

---

## Google Consent Mode v2

### What is Consent Mode v2?

Google Consent Mode v2 is required for EU users. It allows Google services to adapt their behavior based on user consent:

- **Granted**: Full tracking enabled
- **Denied**: Cookieless pings, no personal data stored

### Consent Mode Categories

| Parameter | Description | Maps To |
|-----------|-------------|---------|
| `ad_storage` | Controls cookies for advertising | `targeting` |
| `ad_user_data` | Sending user data to Google for ads | `targeting` |
| `ad_personalization` | Personalized advertising | `targeting` |
| `analytics_storage` | Controls cookies for analytics | `analytics` |
| `functionality_storage` | Controls functional cookies | `functional` |
| `security_storage` | Security features (always granted) | N/A |

### Implementation

#### 1. Initialization Script (MUST run before GTM)

```tsx
// src/components/google-consent-init.tsx
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
            
            // Default: deny everything (EU requirement)
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

#### 2. Update Consent Based on User Choice

```typescript
// src/lib/cookies/google-consent-mode.ts
export const updateGoogleConsentMode = (consent: CookieConsent): void => {
  if (typeof window === "undefined") return;
  
  const gtag = window.gtag;
  if (!gtag) return;

  const { categories } = consent;

  // Map categories to Consent Mode
  const analytics_storage = 
    (categories.analytics_storage ?? categories.analytics) ? "granted" : "denied";
  const ad_storage = 
    (categories.ad_storage ?? categories.targeting) ? "granted" : "denied";
  const ad_user_data = 
    (categories.ad_user_data ?? categories.targeting) ? "granted" : "denied";
  const ad_personalization = 
    (categories.ad_personalization ?? categories.targeting) ? "granted" : "denied";
  const functionality_storage = 
    categories.functional ? "granted" : "denied";

  gtag("consent", "update", {
    ad_storage,
    ad_user_data,
    ad_personalization,
    analytics_storage,
    functionality_storage,
    security_storage: "granted",
  });
};
```

---

## Cookie Consent Implementation

### Client-Side Consent (localStorage)

```typescript
// src/lib/cookies/cookie-consent.ts

// Default consent: everything denied except essential
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

// Get stored consent
export const getStoredConsent = (): CookieConsent => {
  if (typeof window === "undefined") return defaultConsent;
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    return stored ? JSON.parse(stored) : defaultConsent;
  } catch { return defaultConsent; }
};

// Save consent
export const saveConsent = (consent: CookieConsent): void => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify({
      ...consent,
      timestamp: Date.now(),
    }));
  } catch (error) { console.error("Error saving consent", error); }
};

// Accept all cookies
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

// Reject all (essential only)
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

// Save custom preferences
export const saveCustomPreferences = (categories: CookieCategories): void => {
  saveConsent({
    status: categories.analytics || categories.functional || categories.targeting
      ? "accepted" : "rejected",
    categories: { ...categories, essential: true },
    timestamp: Date.now(),
  });
};

// Check if category is allowed
export const isCategoryAllowed = (category: keyof CookieCategories): boolean => {
  const consent = getStoredConsent();
  if (category === "essential") return true;
  return consent.status === "accepted" && consent.categories[category];
};
```

### React Hook for Components

```typescript
// src/lib/cookies/use-cookie-consent.ts
"use client";

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const storedConsent = getStoredConsent();
    setConsent(storedConsent);

    // Listen for changes in other tabs
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === CONSENT_KEY) {
        const newConsent = event.newValue 
          ? JSON.parse(event.newValue) 
          : getStoredConsent();
        setConsent(newConsent);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const isCategoryAllowed = (category: keyof CookieCategories): boolean => {
    if (category === "essential") return true;
    return consent?.status === "accepted" && consent?.categories?.[category] === true;
  };

  return {
    consent,
    isCategoryAllowed,
    getConsentStatus: () => consent?.status || "pending",
    isConsentGiven: consent?.status === "accepted",
    isLoaded: consent !== null,
  };
};
```

### Cookie Banner Component

Key features of a compliant cookie banner:

```tsx
// src/components/ui/cookie-banner.tsx (simplified)
"use client";

const CookieBanner = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookieCategories>({...});

  // Load consent on mount
  useEffect(() => {
    const storedConsent = getStoredConsent();
    setConsent(storedConsent);
    setPreferences(storedConsent.categories);
  }, []);

  // Don't render if consent already given
  if (consent && consent.status !== "pending") return null;

  const handleAcceptAll = async () => {
    acceptAllCookies();
    setConsent(getStoredConsent());
    await acceptAllServerCookies(); // Also sync to server
  };

  const handleRejectAll = async () => {
    rejectAllCookies();
    setConsent(getStoredConsent());
    await rejectAllServerCookies();
  };

  const handleSavePreferences = async () => {
    saveCustomPreferences(preferences);
    setConsent(getStoredConsent());
    await saveCustomServerPreferences(preferences);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 ...">
      {!showDetails ? (
        // Main view with Accept All, Reject All, Customize
        <div>
          <p>We use cookies... <Link href="/cookie-policy">See our Cookie Policy</Link></p>
          <Button onClick={() => setShowDetails(true)}>Customize</Button>
          <Button onClick={handleRejectAll}>Reject All</Button>
          <Button onClick={handleAcceptAll}>Accept All</Button>
        </div>
      ) : (
        // Detailed preferences view
        <div>
          {/* Essential - always on, disabled checkbox */}
          {/* Analytics - toggleable */}
          {/* Functional - toggleable */}
          {/* Targeting - toggleable */}
          <Button onClick={handleSavePreferences}>Save Preferences</Button>
        </div>
      )}
    </div>
  );
};
```

---

## Server-Side Cookie Management

### Server Actions (httpOnly cookies)

```typescript
// src/lib/actions/cookie-actions.ts
"use server";

import { cookies } from "next/headers";

export async function saveConsentCookies(
  status: CookieConsentStatus,
  categories: CookieCategories
) {
  const cookieStore = await cookies();

  cookieStore.set(CONSENT_STATUS_COOKIE, status, {
    maxAge: COOKIE_EXPIRY_DAYS * 24 * 60 * 60,
    path: "/",
    sameSite: "strict",
    httpOnly: true,  // Cannot be accessed by JavaScript
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

export async function getServerConsent() {
  const cookieStore = await cookies();
  const statusCookie = cookieStore.get(CONSENT_STATUS_COOKIE);
  const categoriesCookie = cookieStore.get(CONSENT_CATEGORIES_COOKIE);

  if (!statusCookie || !categoriesCookie) return null;

  try {
    return {
      status: statusCookie.value as CookieConsentStatus,
      categories: JSON.parse(categoriesCookie.value) as CookieCategories,
      timestamp: Date.now(),
    };
  } catch { return null; }
}
```

### Server Component for Conditional Rendering

```tsx
// src/components/server-cookie-checker.tsx
import { cookies } from "next/headers";

export async function ServerCookieChecker({
  category,
  children,
  fallback = null,
}: {
  category: "essential" | "analytics" | "functional" | "targeting";
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
  } catch { return <>{fallback}</>; }
}
```

---

## Analytics Integration

### Conditional Script Loading

```tsx
// src/components/analytics-script.tsx
export function AnalyticsScripts() {
  return (
    <ServerCookieChecker category="analytics" fallback={<></>}>
      <Script
        id="analytics-initialization"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `console.log('Analytics loaded with consent');`,
        }}
      />
    </ServerCookieChecker>
  );
}
```

### Microsoft Clarity (Client-Side, Consent-Aware)

```tsx
// src/components/clarity-script.tsx
"use client";

export function ClarityScript() {
  const { consent, isLoaded } = useCookieConsent();
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  if (!clarityId) return null;
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
```

### Event Tracking Utilities

```typescript
// src/lib/gtm.ts
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
): void => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...params });
  }
};

export const trackFormSubmit = (formName: string, formLocation?: string) => {
  trackEvent("generate_lead", {
    form_name: formName,
    form_location: formLocation,
    page_location: window.location.href,
  });
};

// More tracking functions: trackCTAClick, trackServiceView, trackDownload, etc.
```

---

## Required Legal Pages

### 1. Cookie Policy (`/cookie-policy`)

Must include:
- What cookies are
- Types of cookies used (with table)
- Cookie preferences management
- Third-party cookies disclosure
- Google Consent Mode v2 explanation
- Browser cookie management instructions
- Contact information

### 2. Privacy Policy (`/privacy-policy`)

Must include:
- Data Controller information
- What data is collected
- How data is used
- Legal basis for processing
- Data sharing practices
- Data security measures
- User rights
- Contact information

### 3. GDPR Compliance Page (`/gdpr`)

Must include:
- Introduction to GDPR compliance
- Data Controller details
- Categories of personal data collected
- Purpose and legal basis for processing
- User rights under GDPR
- Data security measures
- International transfers
- Data retention policy
- Complaint process
- Supervisory authority contact (ANSPDCP for Romania)

### 4. Terms of Service (`/terms-of-service`)

Must include:
- Service description
- Client responsibilities
- Intellectual property rights
- Payment terms
- Limitation of liability
- Termination conditions
- Governing law
- Dispute resolution

---

## Layout Integration

### Root Layout Order (Critical!)

```tsx
// src/app/layout.tsx
import { GoogleConsentInit } from "@/components/google-consent-init";
import { GoogleConsentScript } from "@/components/google-consent-script";
import CookieBanner from "@/components/ui/cookie-banner";
import { AnalyticsScripts } from "@/components/analytics-script";
import { ClarityScript } from "@/components/clarity-script";
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 1. FIRST: Initialize Consent Mode BEFORE GTM */}
      <GoogleConsentInit />
      
      {/* 2. THEN: Load GTM */}
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      
      <body>
        {/* 3. Update consent when user preferences change */}
        <GoogleConsentScript />
        
        {/* App content */}
        {children}
        
        {/* 4. Cookie banner for collecting consent */}
        <CookieBanner />
        
        {/* 5. Analytics scripts (consent-aware) */}
        <Suspense fallback={null}>
          <AnalyticsScripts />
        </Suspense>
        
        {/* 6. Clarity (consent-aware) */}
        <ClarityScript />
      </body>
    </html>
  );
}
```

---

## Environment Variables

```bash
# .env.local

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics (typically configured inside GTM)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx

# Google Search Console Verification
GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxx
```

---

## Checklist for New Projects

### Core Implementation

- [ ] Create `src/data/types.ts` with consent types
- [ ] Create `src/lib/constants.ts` with cookie names
- [ ] Create `src/lib/cookies/cookie-consent.ts` (client-side)
- [ ] Create `src/lib/cookies/google-consent-mode.ts`
- [ ] Create `src/lib/cookies/use-cookie-consent.ts` (React hook)
- [ ] Create `src/lib/actions/cookie-actions.ts` (server actions)
- [ ] Create `src/components/google-consent-init.tsx`
- [ ] Create `src/components/google-consent-script.tsx`
- [ ] Create `src/components/ui/cookie-banner.tsx`
- [ ] Create `src/components/server-cookie-checker.tsx`
- [ ] Create `src/components/analytics-script.tsx`
- [ ] Create `src/components/clarity-script.tsx` (optional)
- [ ] Create `src/lib/gtm.ts` for event tracking
- [ ] Update `src/app/layout.tsx` with proper component order

### Legal Pages

- [ ] Create `/cookie-policy` page
- [ ] Create `/privacy-policy` page
- [ ] Create `/gdpr` page
- [ ] Create `/terms-of-service` page
- [ ] Add footer links to all legal pages
- [ ] Update all pages with correct company info and contact

### Testing

- [ ] Test Accept All - verify analytics loads
- [ ] Test Reject All - verify analytics blocked
- [ ] Test custom preferences
- [ ] Test consent persists across sessions
- [ ] Test consent syncs across tabs
- [ ] Verify GTM Preview shows correct consent state
- [ ] Verify GA4 Realtime respects consent
- [ ] Test all legal pages render correctly
- [ ] Test mobile responsiveness of cookie banner

### Compliance Verification

- [ ] Default consent state is "denied" for all categories
- [ ] Essential cookies cannot be disabled
- [ ] Users can reject as easily as accept
- [ ] Clear descriptions for each cookie category
- [ ] Consent timestamp is stored
- [ ] Preferences can be changed anytime
- [ ] Link to Cookie Policy in banner
- [ ] Contact information on all legal pages
- [ ] Supervisory authority info on GDPR page

---

## External Resources

### Official Documentation

- [Google Consent Mode v2](https://developers.google.com/tag-platform/security/guides/consent?hl=en)
- [GDPR Official Text](https://gdpr.eu/)
- [ICO Cookie Guidance (UK)](https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/)
- [CNIL Cookie Guidance (France)](https://www.cnil.fr/en/cookies-and-other-tracking-devices-cnil-publishes-new-guidelines)
- [ANSPDCP (Romania)](https://www.dataprotection.ro/)

### Tools & Testing

- [GTM Preview Mode](https://tagmanager.google.com)
- [GA4 DebugView](https://analytics.google.com)
- [Cookiebot Compliance Check](https://www.cookiebot.com/en/gdpr-cookies/)

### Third-Party Services

- [Google Tag Manager](https://tagmanager.google.com)
- [Google Analytics 4](https://analytics.google.com)
- [Microsoft Clarity](https://clarity.microsoft.com)
- [Google Search Console](https://search.google.com/search-console)

---

## Quick Copy-Paste Templates

### Minimal Types File

```typescript
export type CookieConsentStatus = "accepted" | "rejected" | "pending";
export type CookieCategories = {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  targeting: boolean;
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

### Minimal Constants File

```typescript
export const CONSENT_KEY = "my-app-cookie-consent";
export const CONSENT_STATUS_COOKIE = "my-app-consent-status";
export const CONSENT_CATEGORIES_COOKIE = "my-app-consent-categories";
export const COOKIE_EXPIRY_DAYS = 365;
```

---

*This document is a living reference. Update it as regulations change or new best practices emerge.*
