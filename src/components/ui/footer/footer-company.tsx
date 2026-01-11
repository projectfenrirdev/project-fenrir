"use client";

import Link from "next/link";
import { itemVariants, linkHoverVariants } from "./animation-variants";
import { MotionDiv } from "@/components/motion/motion-tags";
import { scrollToSection } from "@/lib/utils";

export const FooterCompany = () => {
  return (
    <MotionDiv
      className="mb-8"
      variants={{ itemVariants }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <h3 className="mb-6 text-lg font-semibold text-white">Company</h3>
      <ul className="space-y-3">
        <li>
          <MotionDiv
            onClick={() => scrollToSection("about")}
            className="hover:text-forge-accent inline-block cursor-pointer text-gray-300 transition-colors"
          >
            <MotionDiv variants={linkHoverVariants} whileHover="hover">
              About Us
            </MotionDiv>
          </MotionDiv>
        </li>
        <li>
          <Link
            href="/faq"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <MotionDiv variants={linkHoverVariants} whileHover="hover">
              FAQ
            </MotionDiv>
          </Link>
        </li>
        <li>
          <MotionDiv
            onClick={() => scrollToSection("contact")}
            className="hover:text-forge-accent inline-block cursor-pointer text-gray-300 transition-colors"
          >
            <MotionDiv variants={linkHoverVariants} whileHover="hover">
              Contact Us
            </MotionDiv>
          </MotionDiv>
        </li>
      </ul>
    </MotionDiv>
  );
};
