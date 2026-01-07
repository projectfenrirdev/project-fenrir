import { COMPANY_INFO } from "@/lib/constants";
import {
  cookiePolicySchema,
  generatePageMetadata,
  navigationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import CookiePolicy from "./components/cookie-policy";

export const metadata = generatePageMetadata(
  "Cookie Policy",
  `Learn about how ${COMPANY_INFO.name} uses cookies and similar technologies on our website. Understand what cookies we use, why we use them, and how you can control them.`,
  [organizationSchema, navigationSchema, websiteSchema, cookiePolicySchema],
  "/cookie-policy",
);

const CookiePolicyPage = () => {
  return <CookiePolicy />;
};

export default CookiePolicyPage;
