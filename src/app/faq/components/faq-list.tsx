"use client";

import { FAQItem } from "@/app/faq/components/faq-item";
import { FAQS } from "@/lib/constants";
import { useState } from "react";

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
  );
};

export default FAQList;
