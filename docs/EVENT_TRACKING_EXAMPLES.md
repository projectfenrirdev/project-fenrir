# Event Tracking Examples

This document provides practical examples of how to use the event tracking utilities from `src/lib/gtm.ts` throughout your Next.js application.

## Import the Tracking Functions

```typescript
import {
  trackEvent,
  trackFormSubmit,
  trackCTAClick,
  trackServiceView,
  trackOutboundClick,
  trackEmailClick,
  trackPhoneClick,
  trackDownload,
} from "@/lib/gtm";
```

---

## 1. Form Submissions

### Contact Form Example

```typescript
// In your contact form submission handler
"use client";

import { trackFormSubmit } from "@/lib/gtm";

const handleSubmit = async (formData: FormData) => {
  // Your form submission logic...
  
  // Track the form submission
  trackFormSubmit("contact", "contact-page", {
    form_type: "contact",
    has_phone: !!formData.get("phone"),
  });
  
  // Continue with submission...
};
```

### Newsletter Signup Example

```typescript
const handleNewsletterSubmit = () => {
  trackFormSubmit("newsletter", "footer", {
    source: "footer_signup",
  });
};
```

---

## 2. CTA Button Clicks

### Hero Section CTA

```typescript
// src/components/sections/hero/hero-cta-buttons.tsx
"use client";

import { trackCTAClick } from "@/lib/gtm";

export const HeroCtaButtons = () => {
  const handleGetInTouch = () => {
    trackCTAClick("Get in Touch", "hero", "/#contact");
  };

  const handleViewServices = () => {
    trackCTAClick("View Services", "hero", "/#services");
  };

  return (
    <div>
      <Link href="/#contact" onClick={handleGetInTouch}>
        <Button>Get in Touch</Button>
      </Link>
      <Link href="/#services" onClick={handleViewServices}>
        <Button>View Services</Button>
      </Link>
    </div>
  );
};
```

### Navbar CTA

```typescript
// src/components/ui/navbar/contact-button.tsx
"use client";

import { trackCTAClick } from "@/lib/gtm";

const ContactButton = () => {
  const handleClick = () => {
    trackCTAClick("Let's Talk", "navbar", "/#contact");
  };

  return (
    <Link href="/#contact" onClick={handleClick}>
      <Button>Let's Talk</Button>
    </Link>
  );
};
```

---

## 3. Service Page Views

```typescript
// src/app/services/[service]/page.tsx
"use client";

import { useEffect } from "react";
import { trackServiceView } from "@/lib/gtm";
import { useParams } from "next/navigation";

export default function ServicePage() {
  const params = useParams();
  const serviceSlug = params.service as string;

  useEffect(() => {
    // Track service page view
    trackServiceView(serviceSlug, "services");
  }, [serviceSlug]);

  return (
    // Your service page content...
  );
}
```

---

## 4. Outbound Link Clicks

### Social Media Links

```typescript
// src/components/sections/hero/hero-social-links.tsx
"use client";

import { trackOutboundClick } from "@/lib/gtm";

const SocialLink = ({ url, platform }: { url: string; platform: string }) => {
  const handleClick = () => {
    trackOutboundClick(url, `${platform} link`);
  };

  return (
    <a href={url} onClick={handleClick} target="_blank" rel="noopener noreferrer">
      {platform}
    </a>
  );
};
```

### External Resource Links

```typescript
const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = () => {
    trackOutboundClick(href, children?.toString() || "");
  };

  return (
    <a href={href} onClick={handleClick} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
```

---

## 5. Email and Phone Clicks

### Email Links

```typescript
"use client";

import { trackEmailClick } from "@/lib/gtm";

const EmailLink = ({ email }: { email: string }) => {
  const handleClick = () => {
    trackEmailClick(email);
  };

  return (
    <a href={`mailto:${email}`} onClick={handleClick}>
      {email}
    </a>
  );
};
```

### Phone Links

```typescript
"use client";

import { trackPhoneClick } from "@/lib/gtm";

const PhoneLink = ({ phone }: { phone: string }) => {
  const handleClick = () => {
    trackPhoneClick(phone);
  };

  return (
    <a href={`tel:${phone}`} onClick={handleClick}>
      {phone}
    </a>
  );
};
```

---

## 6. File Downloads

```typescript
"use client";

import { trackDownload } from "@/lib/gtm";

const DownloadButton = ({ fileUrl, fileName }: { fileUrl: string; fileName: string }) => {
  const handleDownload = () => {
    const fileType = fileName.split(".").pop()?.toLowerCase();
    trackDownload(fileName, fileType, fileUrl);
  };

  return (
    <a href={fileUrl} download onClick={handleDownload}>
      Download {fileName}
    </a>
  );
};
```

---

## 7. Scroll Depth Tracking

```typescript
"use client";

import { useEffect } from "react";
import { trackScrollDepth } from "@/lib/gtm";

export const ScrollTracker = () => {
  useEffect(() => {
    const trackedDepths = new Set<number>();
    const scrollThresholds = [25, 50, 75, 100];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      scrollThresholds.forEach((threshold) => {
        if (scrollPercentage >= threshold && !trackedDepths.has(threshold)) {
          trackedDepths.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};
```

---

## 8. Custom Events

### Video Interactions

```typescript
"use client";

import { trackVideoInteraction } from "@/lib/gtm";

const VideoPlayer = ({ videoUrl, videoTitle }: { videoUrl: string; videoTitle: string }) => {
  const handlePlay = () => {
    trackVideoInteraction("play", videoTitle, videoUrl);
  };

  const handlePause = () => {
    trackVideoInteraction("pause", videoTitle, videoUrl);
  };

  const handleComplete = () => {
    trackVideoInteraction("complete", videoTitle, videoUrl);
  };

  return (
    <video
      src={videoUrl}
      onPlay={handlePlay}
      onPause={handlePause}
      onEnded={handleComplete}
    >
      {/* Video content */}
    </video>
  );
};
```

### Search Functionality

```typescript
"use client";

import { trackSearch } from "@/lib/gtm";

const SearchBar = () => {
  const handleSearch = (query: string, results: number) => {
    trackSearch(query, results);
  };

  return (
    // Your search component
  );
};
```

### Generic Custom Events

```typescript
import { trackEvent } from "@/lib/gtm";

// Track any custom event
trackEvent("custom_action", {
  action_type: "button_click",
  element_id: "special-button",
  page_section: "pricing",
});
```

---

## 9. User Properties

Set user properties for segmentation in GA4:

```typescript
"use client";

import { setUserProperties } from "@/lib/gtm";
import { useEffect } from "react";

export const UserPropertySetter = ({ userType }: { userType: string }) => {
  useEffect(() => {
    setUserProperties({
      user_type: userType,
      signup_date: new Date().toISOString(),
    });
  }, [userType]);

  return null;
};
```

---

## 10. Integration with Next.js Router

Track page views and route changes:

```typescript
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/gtm";

export const PageViewTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Note: GTM automatically tracks page views via GA4 Configuration tag
    // This is for custom page view tracking with additional data
    trackEvent("page_view", {
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
};
```

---

## Best Practices

1. **Track User Intent, Not Just Clicks**
   - Track form submissions, not just form views
   - Track completed actions, not just started ones

2. **Include Context**
   - Always include `page_location` (automatically added by tracking functions)
   - Add relevant context like `form_location`, `button_location`

3. **Consistent Naming**
   - Use lowercase with underscores: `contact_form_submit`
   - Be descriptive: `service_page_view` not `spv`

4. **Privacy Compliance**
   - All tracking functions check for `window` existence
   - Events only fire on client-side
   - Respect user consent (handled by Consent Mode)

5. **Performance**
   - Tracking functions are lightweight and non-blocking
   - Use `onClick` handlers, not inline event handlers for better performance

6. **Testing**
   - Use GTM Preview mode to verify events
   - Check GA4 Realtime reports
   - Verify events appear in dataLayer (DevTools → Console → `window.dataLayer`)

---

## Debugging

### Check if Events are Firing

```typescript
// In browser console
console.log(window.dataLayer);

// Filter for specific events
window.dataLayer.filter(item => item.event === 'contact_form_submit');
```

### GTM Preview Mode

1. Open GTM → Click **Preview**
2. Enter your website URL
3. Interact with your site
4. See events fire in real-time in GTM Preview panel

### GA4 Realtime Report

1. Go to GA4 → **Reports** → **Realtime**
2. Interact with your site
3. Events should appear within seconds
