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
  title: "GDPR Compliance | Project Fenrir | Professional Web Development",
  description:
    "Learn about Project Fenrir's GDPR compliance measures and how we protect your personal data in accordance with EU regulations. Understand your rights and how to exercise them.",
  alternates: {
    canonical: "https://www.projectfenrir.dev/gdpr",
  },
  openGraph: {
    title: "GDPR Compliance | Project Fenrir",
    description:
      "Learn about Project Fenrir's GDPR compliance measures and how we protect your personal data.",
    url: "https://www.projectfenrir.dev/gdpr",
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
    gdprSchema,
  ]),
};

const GDPRPage = () => {
  return <GDPRCompliance />;
};

export default GDPRPage;
