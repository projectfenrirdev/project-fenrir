import type { IconName } from "lucide-react/dynamic";

export type ServiceType = {
  text: string;
  link: string;
  icon: IconName;
  slug: string; // URL-friendly identifier
  description?: string; // Short description
  longDescription?: string; // Detailed description for service page
  features?: string[]; // List of features/benefits
  useCases?: string[]; // Common use cases
};

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
};

export type FAQType = {
  question: string;
  answer: string;
};

export type CookieConsentStatus = "accepted" | "rejected" | "pending";
export type CookieCategories = {
  essential: boolean; // Always true, can't be rejected
  analytics: boolean;
  functional: boolean;
  targeting: boolean;
  // Google Consent Mode v2 properties
  ad_storage: boolean; // Controls storage (cookies, local storage) for advertising
  ad_user_data: boolean; // Controls sending user data to Google for advertising purposes
  ad_personalization: boolean; // Controls personalization of ads
  analytics_storage: boolean; // Controls storage for analytics purposes
};

export type CookieConsent = {
  status: CookieConsentStatus;
  categories: CookieCategories;
  timestamp: number;
};
