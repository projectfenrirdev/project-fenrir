import FAQ from "@/app/faq/components/faq";
import {
  faqSchema,
  generateSchemaMetadata,
  navigationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { Loader2Icon } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "FAQs | Project Fenrir | Professional Web Development",
  description:
    "Find answers to frequently asked questions about our web development, e-commerce, and application development services at Project Fenrir.",
  alternates: {
    canonical: "https://www.projectfenrir.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Project Fenrir",
    description:
      "Get answers to common questions about our web development, e-commerce, and application services.",
    url: "https://www.projectfenrir.com/faq",
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
    faqSchema,
  ]),
};

const FAQPage = () => {
  return (
    <Suspense
      fallback={
        <Loader2Icon className="text-forge-accent size-4 animate-spin" />
      }
    >
      <FAQ />
    </Suspense>
  );
};

export default FAQPage;
