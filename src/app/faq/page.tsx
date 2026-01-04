import FAQ from "@/app/faq/components/faq";
import {
  faqSchema,
  generateSchemaMetadata,
  navigationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Project Fenrir | Professional Web Development",
  description:
    "Find answers to frequently asked questions about our web development, e-commerce, and software development services at Project Fenrir.",
  alternates: {
    canonical: "https://www.projectfenrir.dev/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Project Fenrir",
    description:
      "Get answers to common questions about our web development, e-commerce, and software development services.",
    url: "https://www.projectfenrir.dev/faq",
    siteName: "Project Fenrir",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Project Fenrir - Professional Web Development",
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
