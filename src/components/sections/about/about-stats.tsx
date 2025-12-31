"use client";

import { motion } from "framer-motion";
import { statItemVariants } from "./animation-variants";

export const AboutStats = () => {
  const stats = [
    { value: "5+", label: "Years of Experience" },
    { value: "6+", label: "Happy Clients" },
    { value: "10+", label: "Projects Completed" },
  ];

  return (
    <motion.dl
      className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
      aria-label="Company Stats"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3, delayChildren: 0.6 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 backdrop-blur-sm"
          variants={{ statItemVariants }}
        >
          <dt className="from-forge-secondary bg-linear-to-r to-white bg-clip-text text-5xl font-bold text-transparent">
            {stat.value}
          </dt>
          <dd className="mt-2 text-center text-neutral-400">{stat.label}</dd>
        </motion.div>
      ))}
    </motion.dl>
  );
};
