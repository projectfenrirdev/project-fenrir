import { type Metadata } from "next";
import { CONTACT_INFO, FAQS, SERVICES } from "./constants";

export const baseUrl = "https://www.projectfenrir.dev";

// Main organization schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Project Fenrir",
  url: baseUrl,
  logo: `${baseUrl}/favicon.ico`,
  sameAs: [CONTACT_INFO.instagram, CONTACT_INFO.twitter, CONTACT_INFO.whatsapp],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sibiu",
    addressRegion: "Sibiu",
    addressCountry: "Romania",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    contactType: "customer service",
  },
  description:
    "Bring your business to the next level with modern, high-performance software that enhances user experience, and drives growth. Your success is our mission.",
};

// Professional service schema
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Project Fenrir",
  image: `${baseUrl}/favicon.ico`,
  "@id": baseUrl,
  url: baseUrl,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sibiu",
    addressRegion: "Sibiu",
    addressCountry: "Romania",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "45.7983",
    longitude: "24.1256",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [CONTACT_INFO.instagram, CONTACT_INFO.twitter, CONTACT_INFO.whatsapp],
  priceRange: "$$",
  servesCuisine: "Digital Services",
};

// Service-specific schema
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.text,
      url: `${baseUrl}${service.link}`,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: "Project Fenrir",
      },
    },
  })),
};

// Local business schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Project Fenrir",
  image: `${baseUrl}/favicon.ico`,
  "@id": baseUrl,
  url: baseUrl,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sibiu",
    addressRegion: "Sibiu",
    addressCountry: "Romania",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "45.7983",
    longitude: "24.1256",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [CONTACT_INFO.instagram, CONTACT_INFO.twitter, CONTACT_INFO.whatsapp],
  priceRange: "$$",
};

// Website schema with SiteNavigationElement for sections
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Project Fenrir",
  url: baseUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${baseUrl}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
  sameAs: [CONTACT_INFO.instagram, CONTACT_INFO.twitter, CONTACT_INFO.whatsapp],
};

// Navigation schema for single-page sections
export const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Main Navigation",
  hasPart: [
    {
      "@type": "SiteNavigationElement",
      name: "Home",
      url: baseUrl,
    },
    {
      "@type": "SiteNavigationElement",
      name: "About",
      url: `${baseUrl}/#about`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Services",
      url: `${baseUrl}/#services`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "FAQ",
      url: `${baseUrl}/faq`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Contact",
      url: `${baseUrl}/#contact`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Privacy Policy",
      url: `${baseUrl}/privacy-policy`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Terms of Service",
      url: `${baseUrl}/terms-of-service`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Cookie Policy",
      url: `${baseUrl}/cookie-policy`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "GDPR Compliance",
      url: `${baseUrl}/gdpr`,
    },
    ...SERVICES.map((service) => ({
      "@type": "SiteNavigationElement",
      name: service.text,
      url: `${baseUrl}${service.link}`,
    })),
  ],
};

// FAQ schema for FAQ page
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ...FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  ],
  sameAs: [CONTACT_INFO.instagram, CONTACT_INFO.twitter, CONTACT_INFO.whatsapp],
};

// Privacy policy schema
export const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy | Project Fenrir",
  description:
    "Learn how Project Fenrir handles your personal data and respects your privacy. Our privacy policy outlines our data collection, use, and protection practices.",
  url: `${baseUrl}/privacy-policy`,
  inLanguage: "en-US",
  datePublished: "2024-06-15T12:00:00+02:00",
  dateModified: "2024-06-15T12:00:00+02:00",
  isPartOf: {
    "@type": "WebSite",
    name: "Project Fenrir",
    url: baseUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Project Fenrir",
    logo: `${baseUrl}/favicon.ico`,
  },
  mainEntity: {
    "@type": "WebPage",
    mainContentOfPage: "Privacy Policy for Project Fenrir",
  },
};

// Terms of service schema
export const termsOfServiceSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service | Project Fenrir",
  description:
    "Read the terms and conditions governing the use of Project Fenrir's services. Our terms of service outline the rules, guidelines, and legal agreements between you and our company.",
  url: `${baseUrl}/terms-of-service`,
  inLanguage: "en-US",
  datePublished: "2024-06-15T12:00:00+02:00",
  dateModified: "2024-06-15T12:00:00+02:00",
  isPartOf: {
    "@type": "WebSite",
    name: "Project Fenrir",
    url: baseUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Project Fenrir",
    logo: `${baseUrl}/favicon.ico`,
  },
  mainEntity: {
    "@type": "WebPage",
    mainContentOfPage: "Terms of Service for Project Fenrir",
  },
};

// GDPR compliance schema
export const gdprSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "GDPR Compliance | Project Fenrir",
  description:
    "Learn about Project Fenrir's GDPR compliance measures and how we protect your personal data in accordance with EU regulations. Understand your rights and how to exercise them.",
  url: `${baseUrl}/gdpr`,
  inLanguage: "en-US",
  datePublished: "2024-06-15T12:00:00+02:00",
  dateModified: "2024-06-15T12:00:00+02:00",
  isPartOf: {
    "@type": "WebSite",
    name: "Project Fenrir",
    url: baseUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Project Fenrir",
    logo: `${baseUrl}/favicon.ico`,
  },
  mainEntity: {
    "@type": "WebPage",
    mainContentOfPage: "GDPR Compliance Information for Project Fenrir",
  },
};

// Cookie policy schema
export const cookiePolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cookie Policy | Project Fenrir",
  description:
    "Learn about how Project Fenrir uses cookies and similar technologies on our website. Understand what cookies we use, why we use them, and how you can control them.",
  url: `${baseUrl}/cookie-policy`,
  inLanguage: "en-US",
  datePublished: "2024-06-15T12:00:00+02:00",
  dateModified: "2024-06-15T12:00:00+02:00",
  isPartOf: {
    "@type": "WebSite",
    name: "Project Fenrir",
    url: baseUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Project Fenrir",
    logo: `${baseUrl}/favicon.ico`,
  },
  mainEntity: {
    "@type": "WebPage",
    mainContentOfPage: "Cookie Policy for Project Fenrir",
  },
};

/**
 * Generates an SEO-optimized page title
 * @param pageTitle The specific page title
 * @param includeBrand Whether to include the brand name
 * @returns A properly formatted title between 10-60 characters
 */
export function generatePageTitle(
  pageTitle: string,
  includeBrand = true,
): string {
  const brandName = "Project Fenrir";
  const separator = " | ";

  // Clean up the page title
  const cleanTitle = pageTitle.trim();

  // If title already includes brand, don't add it again
  const alreadyIncludesBrand = cleanTitle.includes(brandName);

  // Create the full title
  let fullTitle =
    alreadyIncludesBrand || !includeBrand
      ? cleanTitle
      : `${cleanTitle}${separator}${brandName}`;

  // Check length and truncate if necessary
  if (fullTitle.length > 60) {
    // If we have the brand name and separator, try removing them first
    if (includeBrand && !alreadyIncludesBrand) {
      fullTitle = cleanTitle;
    }

    // If still too long, truncate and add ellipsis
    if (fullTitle.length > 60) {
      fullTitle = fullTitle.substring(0, 57) + "...";
    }
  }

  // Check if title is too short
  if (fullTitle.length < 10) {
    // If brand isn't included, add it
    if (!includeBrand && !alreadyIncludesBrand) {
      fullTitle = `${fullTitle}${separator}${brandName}`;
    }
    // If still too short, consider adding a descriptor
    if (fullTitle.length < 10) {
      fullTitle = `${brandName} - Custom Web Development`;
    }
  }

  return fullTitle;
}

// Helper to generate schema for each page
export function generateSchemaMetadata(
  schemas: Record<string, unknown>[],
): Metadata {
  return {
    other: {
      "script:ld+json": schemas.map((schema) => JSON.stringify(schema)),
    },
  };
}

/**
 * Generate complete page metadata including title, description, and schema
 * @param title Page title (will be optimized to 10-60 chars)
 * @param description Page description
 * @param schemas Schema.org structured data
 * @param path Page path (without domain) for canonical URL
 * @returns Next.js Metadata object
 */
export function generatePageMetadata(
  title: string,
  description: string,
  schemas: Record<string, unknown>[] = [],
  path: string = "",
): Metadata {
  const optimizedTitle = generatePageTitle(title);
  // Ensure path starts with / if not empty and not already starting with /
  const normalizedPath = path && !path.startsWith("/") ? `/${path}` : path;
  const canonicalUrl = normalizedPath ? `${baseUrl}${normalizedPath}` : baseUrl;

  return {
    title: optimizedTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    ...generateSchemaMetadata(schemas),
    openGraph: {
      title: optimizedTitle,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: "Project Fenrir",
      images: [
        {
          url: `${baseUrl}/favicon.ico`,
          width: 1200,
          height: 630,
          alt: "Project Fenrir - Professional Web Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: optimizedTitle,
      description,
      images: [`${baseUrl}/favicon.ico`],
    },
  };
}
