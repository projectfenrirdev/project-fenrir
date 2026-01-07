import FAQ from "@/app/faq/components/faq";
import { COMPANY_INFO } from "@/lib/constants";
import {
  faqSchema,
  generateSchemaMetadata,
  navigationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `FAQs | ${COMPANY_INFO.name} | Professional Web Development`,
  description: `Find answers to frequently asked questions about our web development, e-commerce, and software development services at ${COMPANY_INFO.name}.`,
  alternates: {
    canonical: `${COMPANY_INFO.baseUrl}/faq`,
  },
  openGraph: {
    title: `Frequently Asked Questions | ${COMPANY_INFO.name}`,
    description:
      "Get answers to common questions about our web development, e-commerce, and software development services.",
    url: `${COMPANY_INFO.baseUrl}/faq`,
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
    faqSchema,
  ]),
};

const FAQPage = () => {
  return <FAQ />;
};

export default FAQPage;
