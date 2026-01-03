"use client";

import { FooterAbout } from "@/components/ui/footer/footer-about";
import { FooterBottom } from "@/components/ui/footer/footer-bottom";
import { FooterCompany } from "@/components/ui/footer/footer-company";
import { FooterLegal } from "@/components/ui/footer/footer-legal";
import { FooterServices } from "@/components/ui/footer/footer-services";
import { motion } from "framer-motion";
import { containerVariants } from "./animation-variants";

const Footer = () => {
  return (
    <footer className="border-forge-accent/10 bg-forge-surface/50 mt-20 border-t pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FooterAbout />
          <FooterServices />
          <FooterCompany />
          <FooterLegal />
        </motion.div>

        {/* Bottom section - Copyright and links */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
