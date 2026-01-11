import { GoogleConsentInit } from "@/components/google-consent-init";
import { GoogleConsentScript } from "@/components/google-consent-script";
import ScrollToTop from "@/components/scroll-to-top";
import CookieBanner from "@/components/ui/cookie-banner";
import Footer from "@/components/ui/footer/footer";
import Navbar from "@/components/ui/navbar/navbar";
import { COMPANY_INFO } from "@/lib/constants";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { type ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | Professional Web Development`,
  description: COMPANY_INFO.description,
  metadataBase: new URL(COMPANY_INFO.baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${COMPANY_INFO.name} | Professional Web Development`,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.baseUrl,
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
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | Professional Web Development`,
    description: COMPANY_INFO.description,
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
  keywords: [
    "web development",
    "application development",
    "online stores",
    "e-commerce",
    "custom software",
    "digital transformation",
    "software development",
    "website design",
    "mobile app development",
    "custom web solutions",
    "professional web development",
    "eCommerce development",
    "custom software development",
  ],
  other: {
    "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-M6RBPP2J";
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-5LQ6L8L54J";

  return (
    <html lang="en">
      <head>
        <GoogleConsentInit />
        <GoogleTagManager gtmId={gtmId} />
      </head>
      <body
        className={`${poppins.className} font-roboto-mono bg-forge-base overflow-x-hidden text-white antialiased`}
      >
        <GoogleConsentScript />
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forge-primary focus:text-white focus:rounded-lg focus:ring-2 focus:ring-forge-accent focus:ring-offset-2 focus:ring-offset-forge-base"
        >
          Skip to main content
        </a>
        <Navbar />
        <ScrollToTop />
        <main id="main-content" className="container mx-auto py-6 pt-24">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
