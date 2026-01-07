import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/contact";
import Hero from "@/components/sections/hero/hero";
import Process from "@/components/sections/process/process";
import ServiceBadges from "@/components/sections/service-badges/service-badges";
import { COMPANY_INFO } from "@/lib/constants";
import {
  generatePageMetadata,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata(
  `${COMPANY_INFO.name} | Professional Web Development`,
  COMPANY_INFO.description,
  [organizationSchema, websiteSchema],
  "/",
);

const Homepage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ServiceBadges />
      <About />
      <Process />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
};

export default Homepage;
