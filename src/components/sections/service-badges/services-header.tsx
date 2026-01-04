import {
  MotionDiv,
  MotionH2,
  MotionP,
  MotionSpan,
} from "@/components/motion/motion-tags";
import { SparklesIcon } from "lucide-react";

export const ServicesHeader = () => {
  return (
    <MotionDiv
      className="mb-16 flex flex-col gap-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <MotionSpan
        className="border-forge-accent/30 bg-forge-accent/10 text-forge-accent mx-auto flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium tracking-wider uppercase"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SparklesIcon className="h-4 w-4" />
        What We Offer
      </MotionSpan>

      <MotionH2
        className="bg-linear-to-r from-white to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Services focused on performance, UX, and results
      </MotionH2>

      <MotionP
        className="mx-auto max-w-2xl text-neutral-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        You focus on the business. We take care of the website, from planning to
        a reliable, high-performance launch and ongoing support.
      </MotionP>
    </MotionDiv>
  );
};
