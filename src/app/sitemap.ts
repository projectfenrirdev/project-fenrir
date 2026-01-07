import { COMPANY_INFO, SERVICES } from "@/lib/constants";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.baseUrl;
  const date = new Date();

  // Main page with highest priority
  const mainPage = {
    url: baseUrl,
    lastModified: date,
    changeFrequency: "weekly" as const,
    priority: 1.0,
  };

  // Service pages with high priority
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}${service.link}`,
    lastModified: date,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Any additional standalone pages (like privacy policy, terms, etc.)
  const additionalPages = [
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    "/gdpr",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [mainPage, ...servicePages, ...additionalPages];
}
