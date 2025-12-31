"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";

export const HeroHeading = () => {
  return (
    <>
      <motion.div
        className="border-forge-accent/30 bg-forge-accent/10 mb-6 inline-flex items-center gap-x-2 rounded-full border px-3 py-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SparklesIcon className="text-forge-accent h-4 w-4" />
        <span className="text-forge-accent text-sm font-medium">
          Crafting Digital Excellence
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl font-bold tracking-tight md:text-6xl"
        id="hero-title"
      >
        <span className="block">Software Development</span>
        <span className="mt-2 block">
          We{" "}
          <span className="from-forge-accent bg-linear-to-r to-forge-accent-DEFAULT bg-clip-text text-transparent">
            Get It Right
          </span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 max-w-xl leading-relaxed text-neutral-300 sm:text-lg"
      >
        We help businesses evolve with modern, high-performance software that
        enhances user experience, boosts productivity, and drives growth.
        Innovation meets execution, all in one place.
      </motion.p>
    </>
  );
};
