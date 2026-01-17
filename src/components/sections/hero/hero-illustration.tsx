import { MotionDiv } from "@/components/motion/motion-tags";
import { Gauge, ShoppingCart, TrendingUp } from "lucide-react";
import Image from "next/image";

export const HeroIllustration = () => {
  return (
    <MotionDiv
      className="mt-12 hidden lg:mt-0 lg:block lg:w-2/5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="relative">
        {/* Ambient glow effect */}
        <div className="from-forge-accent/30 to-forge-accent-dark/20 absolute inset-0 -z-10 rounded-full bg-linear-to-tr blur-[60px]"></div>

        {/* Floating badge - Performance */}
        <MotionDiv
          className="absolute -left-4 top-8 z-20 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Gauge className="h-4 w-4 text-blue-400" />
        </MotionDiv>

        {/* Floating badge - eCommerce */}
        <MotionDiv
          className="absolute -right-4 top-1/3 z-20 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <ShoppingCart className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-medium text-emerald-300">
            eCommerce Ready
          </span>
        </MotionDiv>

        {/* Floating badge - Growth */}
        <MotionDiv
          className="border-forge-accent/30 bg-forge-accent/10 absolute -bottom-2 left-1/4 z-20 flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <TrendingUp className="text-forge-accent h-4 w-4" />
          <span className="text-forge-accent text-xs font-medium">
            Grow Your Business
          </span>
        </MotionDiv>

        {/* Main illustration container */}
        <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-xl backdrop-blur-sm">
          <div className="relative aspect-4/3 overflow-hidden rounded-xl">
            <Image
              src="/hero-illustration.svg"
              alt="Dashboard showing performance metrics, eCommerce interface, and business growth indicators"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};
