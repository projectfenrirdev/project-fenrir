import { MotionDiv, MotionH1, MotionH2 } from "@/components/motion/motion-tags";
import { SparklesIcon } from "lucide-react";

export const HeroHeading = () => {
  return (
    <>
      <MotionDiv
        className="border-forge-accent/30 bg-forge-accent/10 mb-6 inline-flex items-center gap-x-2 rounded-full border px-3 py-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SparklesIcon className="text-forge-accent h-4 w-4" />
        <span className="text-forge-accent text-sm font-medium">
          Crafting Digital Excellence
        </span>
      </MotionDiv>

      <MotionH1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl font-bold tracking-tight md:text-6xl"
        id="hero-title"
      >
        <span className="block">
          Premium websites, <br /> software and eCommerce
        </span>
        <span className="mt-2 block">
          <span className="from-forge-accent to-forge-accent-DEFAULT bg-linear-to-r bg-clip-text text-transparent">
            For your business
          </span>
        </span>
      </MotionH1>

      <MotionH2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 max-w-xl leading-relaxed text-neutral-300 sm:text-lg"
      >
        Bring your business to the next level with modern, high-performance
        software that enhances user experience, and drives growth. Your success
        is our mission.
      </MotionH2>
    </>
  );
};
