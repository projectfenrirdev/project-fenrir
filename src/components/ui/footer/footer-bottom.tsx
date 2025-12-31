"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { bottomVariants } from "./animation-variants";

export const FooterBottom = () => {
  return (
    <div className="border-forge-accent/10 mt-12 py-8">
      <motion.div
        className="flex flex-col items-center justify-between gap-6 md:flex-row"
        variants={bottomVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center text-sm text-gray-400 md:text-left">
          &copy; {new Date().getFullYear()} Project Fenrir. All rights reserved.
        </div>
        <div className="flex gap-6 text-xs text-gray-400">
          <motion.div
            whileHover={{
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            <Link
              href="/sitemap.xml"
              className="hover:text-forge-accent transition-colors"
            >
              Sitemap
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            <Link
              href="/privacy-policy"
              className="hover:text-forge-accent transition-colors"
            >
              Privacy Policy
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
