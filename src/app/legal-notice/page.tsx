import {
  generatePageMetadata,
  navigationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import LegalNotice from "./components/legal-notice";

const legalNoticeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Legal Notice | Project Fenrir",
  description:
    "Legal notice and company information for Project Fenrir. Find our company registration details, contact information, and legal representative information.",
  url: "https://www.projectfenrir.dev/legal-notice",
  inLanguage: "en-US",
  datePublished: "2026-01-07T12:00:00+02:00",
  dateModified: "2026-01-07T12:00:00+02:00",
  isPartOf: {
    "@type": "WebSite",
    name: "Project Fenrir",
    url: "https://www.projectfenrir.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "Project Fenrir",
    logo: "https://www.projectfenrir.dev/favicon.ico",
  },
  mainEntity: {
    "@type": "WebPage",
    mainContentOfPage: "Legal Notice and Company Information for Project Fenrir",
  },
};

export const metadata = generatePageMetadata(
  "Legal Notice",
  "Legal notice and company information for Project Fenrir. Find our company registration details, contact information, and legal representative information.",
  [organizationSchema, navigationSchema, websiteSchema, legalNoticeSchema],
  "/legal-notice",
);

const LegalNoticePage = () => {
  return <LegalNotice />;
};

export default LegalNoticePage;
