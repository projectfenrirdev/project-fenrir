import { COMPANY_INFO } from "@/lib/constants";
import {
  gdprSchema,
  generateSchemaMetadata,
  navigationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";
import GDPRCompliance from "./components/gdpr-compliance";

export const metadata: Metadata = {
  title: `GDPR Compliance | ${COMPANY_INFO.name}`,
  description: `Learn about ${COMPANY_INFO.name}'s GDPR compliance measures and how we protect your personal data in accordance with EU regulations. Understand your rights and how to exercise them.`,
  alternates: {
    canonical: `${COMPANY_INFO.baseUrl}/gdpr`,
  },
  openGraph: {
    title: `GDPR Compliance | ${COMPANY_INFO.name}`,
    description: `Learn about ${COMPANY_INFO.name}'s GDPR compliance measures and how we protect your personal data.`,
    url: `${COMPANY_INFO.baseUrl}/gdpr`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} - Professional Web Development`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  ...generateSchemaMetadata([
    organizationSchema,
    navigationSchema,
    websiteSchema,
    gdprSchema,
  ]),
};

const GDPRPage = () => {
  return <GDPRCompliance />;
};

export default GDPRPage;
