import { COMPANY_INFO } from "@/lib/constants";
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
  name: `Legal Notice | ${COMPANY_INFO.name}`,
  description: `Legal notice and company information for ${COMPANY_INFO.name}. Find our company registration details, contact information, and legal representative information.`,
  url: `${COMPANY_INFO.baseUrl}/legal-notice`,
  inLanguage: "en-US",
  datePublished: "2026-01-07T12:00:00+02:00",
  dateModified: "2026-01-07T12:00:00+02:00",
  isPartOf: {
    "@type": "WebSite",
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.baseUrl,
  },
  publisher: {
    "@type": "Organization",
    name: COMPANY_INFO.name,
    logo: `${COMPANY_INFO.baseUrl}/favicon.ico`,
  },
  mainEntity: {
    "@type": "WebPage",
    mainContentOfPage: `Legal Notice and Company Information for ${COMPANY_INFO.name}`,
  },
};

export const metadata = generatePageMetadata(
  "Legal Notice",
  `Legal notice and company information for ${COMPANY_INFO.name}. Find our company registration details, contact information, and legal representative information.`,
  [organizationSchema, navigationSchema, websiteSchema, legalNoticeSchema],
  "/legal-notice",
);

const LegalNoticePage = () => {
  return <LegalNotice />;
};

export default LegalNoticePage;
