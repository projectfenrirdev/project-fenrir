"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { itemVariants, linkHoverVariants } from "./animation-variants";

export const FooterServices = () => {
  return (
    <motion.div className="mb-8" variants={{ itemVariants }}>
      <h3 className="mb-6 text-lg font-semibold text-white">Services</h3>
      <ul className="space-y-3">
        <li>
          <Link
            href="/#services"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              Website Development
            </motion.div>
          </Link>
        </li>
        <li>
          <Link
            href="/#services"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              E-commerce Solutions
            </motion.div>
          </Link>
        </li>
        <li>
          <Link
            href="/#services"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              Application Development
            </motion.div>
          </Link>
        </li>
        <li>
          <Link
            href="/#services"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              UI/UX Design
            </motion.div>
          </Link>
        </li>
        <li>
          <Link
            href="/#services"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <motion.div variants={linkHoverVariants} whileHover="hover">
              Maintenance & Support
            </motion.div>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};
