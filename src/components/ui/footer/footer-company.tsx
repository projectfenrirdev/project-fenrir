import Link from "next/link";
import { itemVariants, linkHoverVariants } from "./animation-variants";
import { MotionDiv } from "@/components/motion/motion-tags";

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
          <Link
            href="/#about"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <MotionDiv variants={linkHoverVariants} whileHover="hover">
              About Us
            </MotionDiv>
          </Link>
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
          <Link
            href="/#contact"
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <MotionDiv variants={linkHoverVariants} whileHover="hover">
              Contact Us
            </MotionDiv>
          </Link>
        </li>
      </ul>
    </MotionDiv>
  );
};
