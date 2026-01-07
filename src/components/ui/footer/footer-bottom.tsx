"use client";

import { COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";
import { bottomVariants } from "./animation-variants";
import { MotionDiv } from "@/components/motion/motion-tags";

export const FooterBottom = () => {
  return (
    <div className="border-forge-accent/10 mt-12 py-8">
      <MotionDiv
        className="flex flex-col items-center justify-between gap-6 md:flex-row"
        variants={bottomVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center text-sm text-gray-400 md:text-left">
          &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
        </div>
        <div className="flex gap-6 text-xs text-gray-400">
          <MotionDiv
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
          </MotionDiv>
          <MotionDiv
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
          </MotionDiv>
        </div>
      </MotionDiv>
    </div>
  );
};
