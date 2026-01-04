import { AnalyticsScripts } from "@/components/analytics-script";
import { GoogleConsentScript } from "@/components/google-consent-script";
import CookieBanner from "@/components/ui/cookie-banner";
import Footer from "@/components/ui/footer/footer";
import Navbar from "@/components/ui/navbar/navbar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense, type ReactNode } from "react";
import "./globals.css";
import { Loader2Icon } from "lucide-react";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Project Fenrir | Professional Web Development",
  description:
    "Bring your business to the next level with modern, high-performance software that enhances user experience, and drives growth. Your success is our mission.",
  metadataBase: new URL("https://www.projectfenrir.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Project Fenrir | Professional Web Development",
    description:
      "Bring your business to the next level with modern, high-performance software that enhances user experience, and drives growth. Your success is our mission.",
    url: "https://www.projectfenrir.dev",
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
  twitter: {
    card: "summary_large_image",
    title: "Project Fenrir | Professional Web Development",
    description:
      "Bring your business to the next level with modern, high-performance software that enhances user experience, and drives growth. Your success is our mission.",
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
      <GoogleTagManager gtmId="GTM-M6RBPP2J" />
      <Script
        id="google-analytics-script"
        strategy="beforeInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5LQ6L8L54J"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5LQ6L8L54J');
      `,
        }}
      ></Script>

      <body
        className={`${poppins.className} font-roboto-mono bg-forge-base overflow-x-hidden text-white antialiased`}
      >
        <GoogleConsentScript />
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
