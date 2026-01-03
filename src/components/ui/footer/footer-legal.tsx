"use client";

import { CONTACT_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { itemVariants, linkHoverVariants } from "./animation-variants";

export const FooterLegal = () => {
  return (
    <motion.div
      className="mb-8"
      variants={{ itemVariants }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <h3 className="mb-6 text-lg font-semibold text-white">Legal</h3>
      <ul className="mb-6 space-y-3">
        <li>
          <motion.div variants={linkHoverVariants} whileHover="hover">
            <Link
              href="/privacy-policy"
              className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </motion.div>
        </li>
        <li>
          <Link
            href="/terms-of-service"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              Terms of Service
            </motion.div>
          </Link>
        </li>
        <li>
          <Link
            href="/cookie-policy"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              Cookie Policy
            </motion.div>
          </Link>
        </li>
        <li>
          <Link
            href="/gdpr"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              GDPR Compliance
            </motion.div>
          </Link>
        </li>
      </ul>
      <h3 className="mb-3 text-lg font-semibold text-white">Contact</h3>
      <address className="flex flex-col gap-2 text-gray-300 not-italic">
        <Link
          href={CONTACT_INFO.whatsapp}
          className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
        >
          <motion.div variants={linkHoverVariants} whileHover="hover">
            {CONTACT_INFO.phone}
          </motion.div>
        </Link>
        <Link
          href={`mailto:${CONTACT_INFO.email}`}
          className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
        >
          <motion.div variants={linkHoverVariants} whileHover="hover">
            {CONTACT_INFO.email}
          </motion.div>
        </Link>
      </address>
    </motion.div>
  );
};
