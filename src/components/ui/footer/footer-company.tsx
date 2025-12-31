"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { itemVariants, linkHoverVariants } from "./animation-variants";

export const FooterCompany = () => {
  return (
    <motion.div className="mb-8" variants={{ itemVariants }}>
      <h3 className="mb-6 text-lg font-semibold text-white">Company</h3>
      <ul className="space-y-3">
        <li>
          <Link
            href="/#about"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              About Us
            </motion.div>
          </Link>
        </li>
        <li>
          <Link
            href="/#portfolio"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              Portfolio
            </motion.div>
          </Link>
        </li>
        <li>
          <Link
            href="/faq"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              FAQ
            </motion.div>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};
