"use client";

import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/gtm";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  variants: {
    hidden: {
      opacity: number;
      y: number;
    };
    visible: {
      opacity: number;
      y: number;
    };
  };
};

const ContactButton = ({ variants }: Props) => {
  const handleClick = () => {
    trackCTAClick("Let's Talk", "navbar", "/#contact");
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        type="button"
        asChild
        className="from-forge-accent shadow-forge-accent/20 hover:shadow-forge-accent/40 relative border-none bg-linear-to-r to-forge-accent-DEFAULT py-5 text-base text-white shadow-lg"
      >
        <Link
          href="/#contact"
          role="menuitem"
          aria-label="Contact us"
          className="relative z-10 flex items-center"
          onClick={handleClick}
        >
          Let&apos;s Talk{" "}
          <ArrowRightIcon className="ml-2 size-4" aria-hidden="true" />
          <span className="absolute inset-0 rounded-md bg-black opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
        </Link>
      </Button>
    </motion.div>
  );
};

export default ContactButton;
