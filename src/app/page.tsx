import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/contact";
import Hero from "@/components/sections/hero/hero";
import Process from "@/components/sections/process/process";
import ServiceBadges from "@/components/sections/service-badges/service-badges";
import {
  generatePageMetadata,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata(
  "Custom Web Development & Digital Solutions",
  "Transform your business with custom web development, online stores & applications. Based in Romania, serving clients worldwide with innovative digital solutions.",
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
