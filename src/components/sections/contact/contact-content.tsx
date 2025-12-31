"use client";

import ContactForm from "@/components/sections/contact/contact-form";
import ContactInfo from "@/components/sections/contact/contact-info";
import { motion } from "framer-motion";
import {
  formContainerVariants,
  infoContainerVariants,
} from "./animation-variants";

export const ContactContent = () => {
  return (
    <motion.div
      className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="lg:col-span-2">
        <motion.div
          className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-sm"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={formContainerVariants}
        >
          <div className="from-forge-accent/5 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr to-forge-accent-dark/5"></div>
          <ContactForm />
        </motion.div>
      </div>

      <motion.div
        className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={infoContainerVariants}
      >
        <div className="to-forge-accent/5 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-forge-accent-dark/5"></div>
        <ContactInfo />
      </motion.div>
    </motion.div>
  );
};
