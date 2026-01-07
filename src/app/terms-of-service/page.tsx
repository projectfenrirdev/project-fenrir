import { COMPANY_INFO } from "@/lib/constants";
import {
  generateSchemaMetadata,
  navigationSchema,
  organizationSchema,
  termsOfServiceSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";
import TermsOfService from "./components/terms-of-service";

export const metadata: Metadata = {
  title: `Terms of Service | ${COMPANY_INFO.name} | Professional Web Development`,
  description: `Read the terms and conditions governing the use of ${COMPANY_INFO.name}'s services. Our terms of service outline the rules, guidelines, and legal agreements between you and our company.`,
  alternates: {
    canonical: `${COMPANY_INFO.baseUrl}/terms-of-service`,
  },
  openGraph: {
    title: `Terms of Service | ${COMPANY_INFO.name}`,
    description: `Read the terms and conditions governing the use of ${COMPANY_INFO.name}'s services.`,
    url: `${COMPANY_INFO.baseUrl}/terms-of-service`,
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
    termsOfServiceSchema,
  ]),
};

const TermsOfServicePage = () => {
  return <TermsOfService />;
};

export default TermsOfServicePage;
