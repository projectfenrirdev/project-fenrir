import type { FAQType, ServiceType } from "@/data/types";

// Company Information
export const COMPANY_INFO = {
  name: "Project Fenrir",
  shortName: "Project Fenrir",
  description:
    "We design and build high-performance websites, software, and eCommerce experiences that convert customers and scale with you.",
  baseUrl: "https://www.projectfenrir.dev",
};

// Contact Information
export const CONTACT_INFO = {
  phone: "+40 727 892 022",
  email: "projectfenrir@yahoo.com",
  instagram: "https://www.instagram.com/projectfenrir.dev/",
  whatsapp: "https://wa.me/40727892022",
  twitter: "https://x.com/projectfenrirdv",
};

// Address Information
export const ADDRESS_INFO = {
  locality: "Sibiu",
  region: "Sibiu County",
  country: "Romania",
  street: "[Street Address - To be completed]",
  postalCode: "[Postal Code - To be completed]",
};

// Geographic Coordinates
export const COORDINATES = {
  latitude: "45.7983",
  longitude: "24.1256",
};

// Business Hours
export const BUSINESS_HOURS = {
  daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  opens: "09:00",
  closes: "18:00",
};

// Legal Information
export const LEGAL_INFO = {
  legalForm: "[Legal Form - To be completed]",
  registrationNumber: "[Company Registration Number - To be completed]",
  tradeRegister: "[Trade Register Details - To be completed]",
  vatNumber: "[VAT Number - To be completed if applicable]",
  taxId: "[Tax ID - To be completed if applicable]",
  jurisdiction: "Romania",
  dataProtectionAuthority:
    "ANSPDCP (National Authority for Supervision of Personal Data Processing)",
  dataProtectionAuthorityAddress:
    "B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București, Romania",
};

// Legal Representative
export const LEGAL_REPRESENTATIVE = {
  name: "[Legal Representative Name - To be completed]",
  title: "[Title - To be completed]",
};

// Cookie Consent Configuration
export const COOKIE_CONSENT_PREFIX = "projectfenrir";

export const SERVICES: ServiceType[] = [
  {
    text: "Website design & development",
    slug: "website-design-development",
    link: "/services/website-design-development",
    icon: "laptop",
    description:
      "High-performance websites built for conversion, UX, and long-term reliability.",
    longDescription:
      "We design and build custom websites for businesses that treat their website as a revenue-critical asset. Every project focuses on clean architecture, fast load times, and conversion-focused UX — ensuring the website is easy to maintain, scales with your business, and performs reliably in production.",
    features: [
      "Responsive design for all devices",
      "Fast loading times and performance optimization",
      "Conversion-focused user experience",
      "Scalable architecture for growth",
      "Reliable hosting and domain management",
      "Ongoing maintenance and support",
    ],
    useCases: [
      "Starting a new business website from scratch",
      "Rebuilding a slow or outdated website",
      "Improving conversion on an existing website",
      "Scaling an eCommerce storefront",
      "Building a SaaS product website",
    ],
  },
  {
    text: "E-Commerce Solutions",
    slug: "e-commerce-solutions",
    link: "/services/e-commerce-solutions",
    icon: "shopping-cart",
    description: "Complete online store solutions — built to sell and scale",
    longDescription:
      "Launch and grow your online business with end-to-end e-commerce solutions designed for performance and conversion. We build secure, scalable, and easy-to-manage online stores that turn visitors into customers. From product catalogs and checkout flows to payments and integrations, everything is handled — so you can focus on growth, not technical complexity.",
    features: [
      "Custom e-commerce platforms",
      "Payment gateway integration",
      "Inventory management systems",
      "Shopping cart and checkout optimization",
      "Multi-currency and multi-language support",
      "Order tracking and management",
    ],
    useCases: [
      "Launching a new online store",
      "Rebuilding an underperforming store",
      "Scaling an existing e-commerce business",
      "Customizing beyond platform limits",
      "Outgrowing WordPress or Shopify",
    ],
  },
  {
    text: "Custom Software",
    slug: "custom-software",
    link: "/services/custom-software",
    icon: "code",
    description: "Tailored software solutions that streamline your business",
    longDescription:
      "We develop custom software designed to solve your business's unique challenges and improve operational efficiency. Every solution is built for reliability, scalability, and long-term maintainability, so it grows alongside your business. From desktop applications to cloud-based tools, we automate processes, reduce manual work, and enable teams to focus on what matters most — driving results.",
    features: [
      "Custom application development",
      "API integration and development",
      "Database design and optimization",
      "Cloud-based solutions",
      "Automation and workflow systems",
      "Legacy system modernization",
    ],
    useCases: [
      "Automating repetitive tasks",
      "CRM, ERP, and other business systems",
      "Internal tools and dashboards",
      "Data management systems",
      "Business process optimization",
    ],
  },
  {
    text: "Audit Report",
    slug: "audit-report",
    link: "/services/audit-report",
    icon: "file-text",
    description:
      "Comprehensive website audits for performance, security, and maintainability",
    longDescription: `${COMPANY_INFO.name} evaluates your website or application through in-depth audits designed to ensure it is secure, high-performing, and maintainable. We review code quality, architecture, security, performance metrics, and compliance, then deliver clear, actionable recommendations to improve reliability and user experience.`,
    features: [
      "Security vulnerability assessment",
      "Performance optimization review",
      "Legal compliance verification",
      "Detailed documentation and reports",
      "Actionable improvement recommendations",
      "Technical advice and guidance",
    ],
    useCases: [
      "Pre-launch audit",
      "Performance & UX assessment",
      "Security & compliance check",
      "Technical debt review",
      "Assistance on technical decisions",
    ],
  },
];

export const FAQS: FAQType[] = [
  {
    question: `What services does ${COMPANY_INFO.name} offer?`,
    answer: `${COMPANY_INFO.name} provides custom web development, e-commerce solutions, and software applications designed to meet the unique needs of SaaS and e-commerce businesses. We deliver high-performance, scalable, and reliable digital solutions that enhance online presence, streamline operations, and support long-term growth.`,
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on the project’s complexity and scope. Typical websites take 3–6 weeks from initial planning to launch, while larger or custom projects may require more time to ensure performance, scalability, and long-term maintainability. Throughout the process, we provide regular updates and milestones so you’re always informed.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our development process includes: 1) Consultation & Discovery, 2) Planning & Strategy, 3) Execution & Delivery, 4) Review & Feedback, and 5) Ongoing Support & Maintenance. We maintain transparent communication throughout the entire process.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: `Yes. ${COMPANY_INFO.name} offers ongoing maintenance and support to ensure your website or software remains secure, up-to-date, and high-performing. We provide regular updates, performance monitoring, and troubleshooting, giving you peace of mind and allowing your team to focus on growth while we handle the technical upkeep.`,
  },
  {
    question: "How do you handle website security?",
    answer:
      "Security is a top priority for us. We implement industry best practices including HTTPS encryption, regular security updates, secure coding practices, data encryption, and protection against common vulnerabilities like SQL injection and XSS attacks. We also offer ongoing security monitoring for our maintenance clients.",
  },
  {
    question: "Are your websites SEO-friendly?",
    answer:
      "Absolutely! Our websites are built with SEO best practices in mind, including semantic HTML, structured data, optimized page speed, and mobile-first responsive design. We also provide guidance on content strategy and integrate analytics tools to help you track and improve your online performance.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We work with modern technologies proven to deliver high-performance and scalable solutions like React, Next.js, TypeScript, and Tailwind CSS for frontend development. For backend solutions, we utilize Node.js, and various SQL database technologies depending on project requirements.",
  },
  {
    question: "How much does a website or software cost?",
    answer:
      "Every project is unique, and pricing depends on complexity, features, timeline, and specific requirements. We provide detailed quotes after our initial consultation. We're transparent about costs and work to find solutions that fit your budget while meeting your business objectives.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes, while we're based in Romania, we work with clients worldwide. We use modern communication tools and project management software to ensure smooth collaboration regardless of location or time zone differences.",
  },
  {
    question: "Why custom software instead of Shopify or WordPress?",
    answer:
      "While Shopify and WordPress are popular platforms, they often limit customization and scalability. We build custom software that is tailored to your business’s unique needs, providing full control over design, functionality, and future growth. Our solutions are built for reliability, performance, and long-term maintainability, ensuring your business can scale as it grows. No vendor lock-in, no hidden fees, no surprises or security risks.",
  },
  {
    question: `How can I get started with ${COMPANY_INFO.name}?`,
    answer:
      "Getting started is easy! Simply contact us through our website's contact form, email, or WhatsApp. We'll schedule an initial consultation to discuss your project, understand your goals, and determine how we can best help you achieve them.",
  },
];

export const NAVBAR_LINKS = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Services",
    href: "services",
  },
  {
    text: "About",
    href: "about",
  },
];

export const CONSENT_KEY = `${COOKIE_CONSENT_PREFIX}-cookie-consent`;
export const CONSENT_STATUS_COOKIE = `${COOKIE_CONSENT_PREFIX}-cookie-consent-status`;
export const CONSENT_CATEGORIES_COOKIE = `${COOKIE_CONSENT_PREFIX}-cookie-consent-categories`;
export const COOKIE_EXPIRY_DAYS = 365; // 1 year
