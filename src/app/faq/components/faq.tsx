"use client";

import { FAQItem } from "@/app/faq/components/faq-item";
import { Button } from "@/components/ui/button";
import { FAQS } from "@/lib/constants";
import { motion } from "framer-motion";
import { MessageCircleMoreIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 pb-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <div className="space-y-8">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggle={toggleFAQ}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold">Still have questions?</h2>
          <p className="mb-8 text-gray-300">
            Contact us and we&apos;ll get back to you as soon as possible
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link href={{ pathname: "/", hash: "#contact" }}>
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQ;
