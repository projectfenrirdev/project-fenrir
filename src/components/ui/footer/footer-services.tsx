import Link from "next/link";
import { itemVariants, linkHoverVariants } from "./animation-variants";
import { SERVICES } from "@/lib/constants";
import { MotionDiv } from "@/components/motion/motion-tags";

export const FooterServices = () => {
  return (
    <MotionDiv
      className="mb-8"
      variants={{ itemVariants }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h3 className="mb-6 text-lg font-semibold text-white">Services</h3>
      <ul className="space-y-3">
        <li>
          <Link
            href={SERVICES[0].link}
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <MotionDiv variants={linkHoverVariants} whileHover="hover">
              {SERVICES[0].text}
            </MotionDiv>
          </Link>
        </li>
        <li>
          <Link
            href={SERVICES[1].link}
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <MotionDiv variants={linkHoverVariants} whileHover="hover">
              {SERVICES[1].text}
            </MotionDiv>
          </Link>
        </li>
        <li>
          <Link
            href={SERVICES[2].link}
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <MotionDiv variants={linkHoverVariants} whileHover="hover">
              {SERVICES[2].text}
            </MotionDiv>
          </Link>
        </li>
        <li>
          <Link
            href={SERVICES[3].link}
            className="hover:text-forge-accent inline-block text-gray-300 transition-colors"
          >
            <MotionDiv variants={linkHoverVariants} whileHover="hover">
              {SERVICES[3].text}
            </MotionDiv>
          </Link>
        </li>
      </ul>
    </MotionDiv>
  );
};
