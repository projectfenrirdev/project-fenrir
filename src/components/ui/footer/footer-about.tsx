"use client";

import Logo from "@/components/ui/navbar/logo";
import { CONTACT_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { InstagramIcon, MailIcon, MessageCircleIcon } from "lucide-react";
import { iconHoverVariants, itemVariants } from "./animation-variants";

export const FooterAbout = () => {
  return (
    <motion.div
      className="mb-8 flex flex-col gap-4"
      variants={{ itemVariants }}
    >
      <Logo variants={itemVariants} />
      <p className="mb-2 text-sm text-gray-300">
        Transform your business with custom web development, online stores &
        applications. Based in Romania, serving clients worldwide with
        innovative digital solutions.
      </p>
      <div className="flex space-x-4">
        <motion.a
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-forge-accent text-gray-300 transition-colors"
          variants={iconHoverVariants}
          whileHover="hover"
        >
          <MessageCircleIcon className="h-5 w-5" />
        </motion.a>
        <motion.a
          href={CONTACT_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-forge-accent text-gray-300 transition-colors"
          variants={iconHoverVariants}
          whileHover="hover"
        >
          <InstagramIcon className="h-5 w-5" />
        </motion.a>
        <motion.a
          href={`mailto:${CONTACT_INFO.email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="hover:text-forge-accent text-gray-300 transition-colors"
          variants={iconHoverVariants}
          whileHover="hover"
        >
          <MailIcon className="h-5 w-5" />
        </motion.a>
      </div>
    </motion.div>
  );
};
