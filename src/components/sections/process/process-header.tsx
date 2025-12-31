"use client";

import { motion } from "framer-motion";

export const ProcessHeader = () => {
  return (
    <motion.div
      className="mb-16 flex flex-col gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.span
        className="text-forge-accent text-sm font-medium tracking-wider uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        How We Work
      </motion.span>

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <motion.h2
          id="process-heading"
          className="max-w-md bg-linear-to-r from-white to-neutral-400 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            type: "spring",
            stiffness: 100,
          }}
        >
          Our Process
        </motion.h2>
        <motion.p
          className="w-full text-neutral-400 md:w-1/3 md:text-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          We follow a structured approach to ensure every project is delivered
          with transparency, efficiency and quality.
        </motion.p>
      </div>
    </motion.div>
  );
};
