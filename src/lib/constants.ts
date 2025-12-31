import type { FAQType, ProjectType, ServiceType } from "@/data/types";

export const CONTACT_INFO = {
  phone: "+40727892022",
  email: "projectfenrir@yahoo.com",
  instagram: "https://www.instagram.com/projectfenrir.dev/",
  whatsapp: "https://wa.me/40727892022",
};

export const SERVICES: ServiceType[] = [
  {
    text: "Web Development",
    slug: "web-development",
    link: "/services/web-development",
    icon: "laptop",
    description: "Custom websites built with modern technologies",
    longDescription:
      "Transform your online presence with our custom web development services. We create responsive, fast, and SEO-optimized websites tailored to your business needs. From simple landing pages to complex web applications, we deliver solutions that drive results.",
    features: [
      "Responsive design for all devices",
      "SEO optimization and best practices",
      "Fast loading times and performance optimization",
      "Focus on user experience and accessibility",
      "Security and legal compliance",
      "Ongoing maintenance and support",
      "Hosting and domain registration",
      "Integration with third-party services",
    ],
    useCases: [
      "Business websites and landing pages",
      "Corporate portals and intranets",
      "Web applications and dashboards",
      "Portfolio websites",
      "Blogs and content management systems",
    ],
  },
  {
    text: "E-Commerce Solutions",
    slug: "e-commerce-solutions",
    link: "/services/e-commerce-solutions",
    icon: "shopping-cart",
    description: "Complete online store solutions",
    longDescription:
      "Launch and grow your online business with our comprehensive e-commerce solutions. We build secure, scalable, and user-friendly online stores that convert visitors into customers. From product catalogs to payment integration, we handle everything.",
    features: [
      "Custom e-commerce platforms",
      "Payment gateway integration",
      "Inventory management systems",
      "Shopping cart and checkout optimization",
      "Multi-currency and multi-language support",
      "Order tracking and management",
    ],
    useCases: [
      "Online retail stores",
      "Digital product sales",
      "Marketplace platforms",
      "Subscription-based businesses",
      "B2B e-commerce portals",
    ],
  },
  {
    text: "Custom Software",
    slug: "custom-software",
    link: "/services/custom-software",
    icon: "code",
    description: "Tailored software solutions for your business",
    longDescription:
      "Streamline your business operations with custom software designed specifically for your needs. We develop robust applications that automate processes, improve efficiency, and solve unique business challenges. From desktop applications to cloud-based solutions, we deliver software that grows with your business.",
    features: [
      "Custom application development",
      "API integration and development",
      "Database design and optimization",
      "Cloud-based solutions",
      "Automation and workflow systems",
      "Legacy system modernization",
    ],
    useCases: [
      "Business process automation",
      "CRM and ERP systems",
      "Internal tools and dashboards",
      "Data management systems",
      "Integration with existing software",
    ],
  },
  {
    text: "Audit Report",
    slug: "audit-report",
    link: "/services/audit-report",
    icon: "file-text",
    description: "Comprehensive security and technical audits",
    longDescription:
      "Ensure your website is secure, performant, and maintainable with our comprehensive audit services. We analyze your existing projects, identify issues, and provide detailed reports with actionable recommendations. Perfect for code reviews, security assessments, performance optimization and legal compliance verification.",
    features: [
      "Security vulnerability assessment",
      "Performance optimization review",
      "Legal compliance verification",
      "Detailed documentation and reports",
      "Actionable improvement recommendations",
      "Technical advice and guidance",
    ],
  },
];

export const PROJECTS: ProjectType[] = [
  {
    title: "Liquid Money",
    description: "Online Pawn Shop",
    image: "/projects/liquid_money.webp",
    link: "https://magazin.liquidmoney.ro/",
    tags: ["E-Commerce", "Finance"],
  },
  {
    title: "Diamantenklotz",
    description: "Jewelry E-Commerce",
    image: "/projects/diamantenklotz.webp",
    link: "https://diamantenklotz.de/",
    tags: ["Jewelry", "E-Commerce"],
  },
];

export const FAQS: FAQType[] = [
  {
    question: "What services does Project Fenrir offer?",
    answer:
      "Project Fenrir specializes in custom web development, e-commerce solutions, and application development. We create tailored digital solutions to help businesses establish their online presence, automate processes, and grow their digital footprint.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline varies depending on the complexity of the project. A simple informational website can take 2-4 weeks, while complex e-commerce platforms or custom applications might take 2-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our development process includes: 1) Discovery & Requirements Gathering, 2) Planning & Design, 3) Development, 4) Testing & Quality Assurance, 5) Deployment, and 6) Ongoing Support & Maintenance. We maintain transparent communication throughout the entire process.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website or application remains secure, up-to-date, and functioning optimally. These packages can be customized based on your specific needs and budget.",
  },
  {
    question: "How do you handle website security?",
    answer:
      "Security is a top priority for us. We implement industry best practices including HTTPS encryption, regular security updates, secure coding practices, data encryption, and protection against common vulnerabilities like SQL injection and XSS attacks. We also offer ongoing security monitoring for our maintenance clients.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "Absolutely! We build websites with SEO best practices in mind, including proper semantic HTML, schema markup, optimized page speed, and mobile responsiveness. We can also provide guidance on content strategy and integrate analytics tools to help you track and improve your online performance.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We work with modern technologies like React, Next.js, TypeScript, and Tailwind CSS for frontend development. For backend solutions, we utilize Node.js, Express, and various database technologies depending on project requirements. We're technology-agnostic and choose the best tools for each specific project.",
  },
  {
    question: "How much does a website or application cost?",
    answer:
      "Every project is unique, and pricing depends on complexity, features, timeline, and specific requirements. We provide detailed quotes after our initial consultation. We're transparent about costs and work to find solutions that fit your budget while meeting your business objectives.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes, while we're based in Romania, we work with clients worldwide. We use modern communication tools and project management software to ensure smooth collaboration regardless of location or time zone differences.",
  },
  {
    question: "How can I get started with Project Fenrir?",
    answer:
      "Getting started is easy! Simply contact us through our website's contact form, email, or phone. We'll schedule an initial consultation to discuss your project, understand your goals, and determine how we can best help you achieve them.",
  },
];

export const NAVBAR_LINKS = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/#about",
  },
  {
    text: "Services",
    href: "/#services",
  },
  {
    text: "Portfolio",
    href: "/#portfolio",
  },
];

export const CONSENT_KEY = "projectfenrir-cookie-consent";
export const CONSENT_STATUS_COOKIE = "projectfenrir-cookie-consent-status";
export const CONSENT_CATEGORIES_COOKIE =
  "projectfenrir-cookie-consent-categories";
export const COOKIE_EXPIRY_DAYS = 365; // 1 year
