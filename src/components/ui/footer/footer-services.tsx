"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { itemVariants, linkHoverVariants } from "./animation-variants";
import { SERVICES } from "@/lib/constants";

export const FooterServices = () => {
  return (
    <motion.div className="mb-8" variants={{ itemVariants }}>
      <h3 className="mb-6 text-lg font-semibold text-white">Services</h3>
      <ul className="space-y-3">
        <li>
          <Link
            href={SERVICES[0].link}
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              {SERVICES[0].text}
            </motion.div>
          </Link>
        </li>
        <li>
          <Link
            href={SERVICES[1].link}
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              {SERVICES[1].text}
            </motion.div>
          </Link>
        </li>
        <li>
          <Link
            href={SERVICES[2].link}
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              {SERVICES[2].text}
            </motion.div>
          </Link>
        </li>
        <li>
          <Link
            href={SERVICES[3].link}
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              {SERVICES[3].text}
            </motion.div>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};
