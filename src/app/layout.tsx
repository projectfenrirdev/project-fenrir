import { AnalyticsScripts } from "@/components/analytics-script";
import { GoogleConsentScript } from "@/components/google-consent-script";
import CookieBanner from "@/components/ui/cookie-banner";
import Footer from "@/components/ui/footer/footer";
import Navbar from "@/components/ui/navbar/navbar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense, type ReactNode } from "react";
import "./globals.css";
import { Loader2Icon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Project Fenrir | Professional Web Development",
  description:
    "Transform your business with professional web development, eCommerce & custom software. Serving clients worldwide with innovative digital solutions.",
  metadataBase: new URL("https://www.projectfenrir.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Project Fenrir | Professional Web Development",
    description:
      "Transform your business with professional web development, eCommerce & custom software. Serving clients worldwide with innovative digital solutions.",
    url: "https://www.projectfenrir.com",
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
  twitter: {
    card: "summary_large_image",
    title: "Project Fenrir | Professional Web Development",
    description:
      "Transform your business with professional web development, eCommerce & custom software. Serving clients worldwide with innovative digital solutions.",
    images: ["/images/twitter-image.jpg"],
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
    google: "your-google-verification-code",
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
    "google-site-verification": "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-NG97TR3N" />
      <body
        className={`${poppins.className} font-roboto-mono bg-forge-base overflow-x-hidden text-white antialiased`}
      >
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-NG97TR3N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <GoogleConsentScript />
        <SpeedInsights />
        <Navbar />
        <div className="container mx-auto py-6 pt-24">{children}</div>
        <Footer />
        <CookieBanner />
        <Suspense
          fallback={
            <Loader2Icon className="text-forge-accent size-4 animate-spin" />
          }
        >
          <AnalyticsScripts />
        </Suspense>
      </body>
      <GoogleAnalytics gaId="G-KJ79CHCSHZ" />
    </html>
  );
}
