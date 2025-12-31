"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FoldersIcon, MessageCircleMoreIcon } from "lucide-react";
import Link from "next/link";
import { containerVariants, itemVariants } from "./animation-variants";

export const HeroCtaButtons = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-10 flex flex-col gap-5 sm:flex-row"
    >
      <motion.div variants={itemVariants}>
        <Link href="/#contact">
          <Button className="border-forge-primary bg-forge-primary hover:bg-forge-primary/90 shadow-forge-primary/20 hover:shadow-forge-primary/40 w-full border-2 py-5 text-base font-medium text-white shadow-lg transition-all duration-300 focus:ring-2 focus:outline-none sm:w-auto">
            Get in Touch
            <MessageCircleMoreIcon
              className="ml-2 size-5"
              role="img"
              aria-label="Get in touch icon"
            />
          </Button>
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href="/#services">
          <Button className="w-full border-2 border-white/20 bg-white/5 py-5 text-base backdrop-blur-sm hover:bg-white/10 focus:ring-2 focus:ring-white/20 focus:outline-none sm:w-auto">
            Our Services
            <FoldersIcon
              className="ml-2 size-5"
              role="img"
              aria-label="Services icon"
            />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};
