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
  "Project Fenrir | Professional Web Development",
  "Bring your business to the next level with modern, high-performance software that enhances user experience, and drives growth. Your success is our mission.",
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
