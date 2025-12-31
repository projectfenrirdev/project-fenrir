"use client";

import { motion } from "framer-motion";

export const AboutValues = () => {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <motion.div
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h3 className="mb-4 text-xl font-semibold">Our Approach</h3>
        <p className="text-neutral-400">
          Our commitment to quality, customer satisfaction, and innovation sets
          us apart in the industry. Whether you&apos;re seeking personalized
          Software Development or Digital Business Growth, we are your trusted
          partner for reliable, high-quality results.
        </p>
        <div className="from-forge-secondary/80 mt-4 h-px w-24 bg-linear-to-r to-transparent"></div>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <h3 className="mb-4 text-xl font-semibold">Our Values</h3>
        <p className="text-neutral-400">
          We focus on building lasting relationships through exceptional service
          and transparent communication. Our development processes emphasize
          reliability, security, and scalable solutions tailored to your
          expectations.
        </p>
        <div className="from-forge-secondary/80 mt-4 h-px w-24 bg-linear-to-r to-transparent"></div>
      </motion.div>
    </div>
  );
};
