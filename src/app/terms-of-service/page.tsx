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
  title: "Terms of Service | Project Fenrir | Professional Web Development",
  description:
    "Read the terms and conditions governing the use of Project Fenrir's services. Our terms of service outline the rules, guidelines, and legal agreements between you and our company.",
  alternates: {
    canonical: "https://www.projectfenrir.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Project Fenrir",
    description:
      "Read the terms and conditions governing the use of Project Fenrir's services.",
    url: "https://www.projectfenrir.com/terms-of-service",
    siteName: "Project Fenrir",
    images: [
      {
        url: "/images/og-image.jpg",
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
    termsOfServiceSchema,
  ]),
};

const TermsOfServicePage = () => {
  return <TermsOfService />;
};

export default TermsOfServicePage;
