import type { FAQType } from "@/data/types";
import { motion } from "framer-motion";
import { MinusIcon, PlusIcon } from "lucide-react";

interface FAQItemProps {
  faq: FAQType;
  index: number;
  isOpen: boolean;
  toggle: (index: number) => void;
}

export const FAQItem = ({ faq, index, isOpen, toggle }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15, delay: index * 0.1 }}
      className="bg-forge-surface border-forge-accent/20 overflow-hidden rounded-lg border p-0"
    >
      <motion.button
        onClick={() => toggle(index)}
        className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
        whileTap={{ scale: 0.995 }}
      >
        <h3 className="text-forge-accent text-xl font-semibold">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-forge-accent flex-shrink-0"
        >
          {isOpen ? (
            <MinusIcon className="h-5 w-5" />
          ) : (
            <PlusIcon className="h-5 w-5" />
          )}
        </motion.div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pt-4 pb-6">
          <p className="text-gray-300">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
