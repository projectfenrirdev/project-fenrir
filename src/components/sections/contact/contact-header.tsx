"use client";

import { motion } from "framer-motion";

export const ContactHeader = () => {
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
        Get In Touch
      </motion.span>

      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <motion.h2
          id="contact-heading"
          className="max-w-md bg-linear-to-r from-white to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
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
          Let&apos;s talk
        </motion.h2>
        <motion.p
          className="w-full text-neutral-400 md:w-1/3 md:text-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          We&apos;d love to hear from you. Whether you have a question, a
          project in mind, or just want to discuss, we&apos;re here to help.
        </motion.p>
      </div>
    </motion.div>
  );
};
