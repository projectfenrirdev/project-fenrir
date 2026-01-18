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
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold tracking-tight md:text-5xl py-1.5"
        id="hero-title"
      >
        <span className="block">
          Custom Built Digital Solutions
        </span>
        <span className="mt-2 block">
          <span className="from-forge-accent to-forge-accent-DEFAULT bg-linear-to-r bg-clip-text text-transparent">
            Designed for Success
          </span>
        </span>
      </MotionH1>

      {/* LCP Element: Render immediately without animation delay */}
      <MotionH2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 max-w-xl leading-relaxed text-neutral-300 sm:text-lg"
      >
        We design and build high-performance websites, software, and eCommerce
        experiences that convert customers and grow your business.
      </MotionH2>
    </>
  );
};
