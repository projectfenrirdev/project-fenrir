"use client";

import { motion } from "framer-motion";

export const AboutHeader = () => {
  return (
    <motion.div
      className="mb-16 flex flex-col gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.span
        className="text-forge-secondary text-sm font-medium tracking-wider uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Who We Are
      </motion.span>

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <motion.h2
          id="about-heading"
          className="max-w-md bg-linear-to-r from-white to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          About Us
        </motion.h2>
        <div className="md:w-2/3">
          <motion.p
            className="text-lg leading-relaxed text-neutral-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "circOut" }}
          >
            At{" "}
            <span className="text-forge-secondary font-medium">
              Project Fenrir
            </span>
            , we specialize in delivering top-tier services designed to meet the
            unique needs of our clients. With years of industry expertise, we
            offer tailored solutions that drive success and growth.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
