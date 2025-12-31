"use client";

import { CONTACT_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { InstagramIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { itemVariants, socialIconVariants } from "./animation-variants";
import WhatsappIcon from "@/components/ui/whatsapp-icon";

export const HeroSocialLinks = () => {
  return (
    <motion.div
      variants={socialIconVariants}
      initial="hidden"
      animate="visible"
      className="mt-10 flex items-center justify-between gap-4 sm:justify-start"
    >
      <span className="text-sm font-medium text-neutral-400">
        Connect with us:
      </span>

      <div className="flex gap-2 sm:gap-4">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="transition-all duration-300"
        >
          <Link
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 focus:outline-none"
            aria-label="Chat with us on WhatsApp"
          >
            <WhatsappIcon className="group-hover:text-forge-accent size-5 text-neutral-300 transition-all" />
          </Link>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="transition-all duration-300"
        >
          <Link
            href={`mailto:${CONTACT_INFO.email}`}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 focus:outline-none"
            aria-label="Email us"
          >
            <MailIcon
              className="group-hover:text-forge-accent size-5 text-neutral-300 transition-all"
              role="img"
              aria-label="Email"
            />
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="transition-all duration-300"
        >
          <Link
            href={CONTACT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 focus:outline-none"
            aria-label="Visit our Instagram"
          >
            <InstagramIcon
              className="group-hover:text-forge-accent size-5 text-neutral-300 transition-all"
              role="img"
              aria-label="Instagram"
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
