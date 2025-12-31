import { type Metadata } from "next";
import { CONTACT_INFO } from "./constants";

export const baseUrl = "https://www.projectfenrir.com";

// Main organization schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Project Fenrir",
  url: baseUrl,
  logo: `${baseUrl}/images/logo.png`,
  sameAs: [
    "https://www.instagram.com/projectfenrir.dev/",
    // Add other social profiles here
  ],
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
    "Transform your business with custom web development, online stores & applications. Based in Romania, serving clients worldwide with innovative digital solutions.",
};

// Professional service schema
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Project Fenrir",
  image: `${baseUrl}/images/logo.png`,
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
  sameAs: [
    "https://www.instagram.com/projectfenrir.dev/",
    // Add other social profiles here
  ],
  priceRange: "$$",
  servesCuisine: "Digital Services",
};

// Service-specific schema
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Website Development",
        url: `${baseUrl}/#services`,
        description:
          "Elevate your brand with our tailored website solutions, designed to reflect your identity and engage your audience effectively.",
        provider: {
          "@type": "Organization",
          name: "Project Fenrir",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Online Store Development",
        url: `${baseUrl}/#services`,
        description:
          "Step into online retail with our store development, providing intuitive platforms that showcase your products and deliver exceptional shopping experiences.",
        provider: {
          "@type": "Organization",
          name: "Project Fenrir",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Application Development",
        url: `${baseUrl}/#services`,
        description:
          "Transform your ideas into reality with our custom application development services, designed to meet your unique requirements.",
        provider: {
          "@type": "Organization",
          name: "Project Fenrir",
        },
      },
    },
  ],
};

// Local business schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Project Fenrir",
  image: `${baseUrl}/images/logo.png`,
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
  ],
};

// FAQ schema for FAQ page
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Project Fenrir offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project Fenrir specializes in custom web development, e-commerce solutions, and application development. We create tailored digital solutions to help businesses establish their online presence, automate processes, and grow their digital footprint.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline varies depending on the complexity of the project. A simple informational website can take 2-4 weeks, while complex e-commerce platforms or custom applications might take 2-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What is your development process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our development process includes: 1) Discovery & Requirements Gathering, 2) Planning & Design, 3) Development, 4) Testing & Quality Assurance, 5) Deployment, and 6) Ongoing Support & Maintenance. We maintain transparent communication throughout the entire process.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer ongoing maintenance and support packages to ensure your website or application remains secure, up-to-date, and functioning optimally. These packages can be customized based on your specific needs and budget.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle website security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Security is a top priority for us. We implement industry best practices including HTTPS encryption, regular security updates, secure coding practices, data encryption, and protection against common vulnerabilities like SQL injection and XSS attacks. We also offer ongoing security monitoring for our maintenance clients.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with SEO and digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We build websites with SEO best practices in mind, including proper semantic HTML, schema markup, optimized page speed, and mobile responsiveness. We can also provide guidance on content strategy and integrate analytics tools to help you track and improve your online performance.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you use for development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with modern technologies like React, Next.js, TypeScript, and Tailwind CSS for frontend development. For backend solutions, we utilize Node.js, Express, and various database technologies depending on project requirements. We're technology-agnostic and choose the best tools for each specific project.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website or application cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project is unique, and pricing depends on complexity, features, timeline, and specific requirements. We provide detailed quotes after our initial consultation. We're transparent about costs and work to find solutions that fit your budget while meeting your business objectives.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with clients internationally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, while we're based in Romania, we work with clients worldwide. We use modern communication tools and project management software to ensure smooth collaboration regardless of location or time zone differences.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Project Fenrir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started is easy! Simply contact us through our website's contact form, email, or phone. We'll schedule an initial consultation to discuss your project, understand your goals, and determine how we can best help you achieve them.",
      },
    },
  ],
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
    logo: `${baseUrl}/images/logo.png`,
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
    logo: `${baseUrl}/images/logo.png`,
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
    logo: `${baseUrl}/images/logo.png`,
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
    logo: `${baseUrl}/images/logo.png`,
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
          url: `${baseUrl}/images/og-image.jpg`,
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
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}
