import { MotionDiv } from "@/components/motion/motion-tags";
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
        <div className="from-forge-accent/30 to-forge-accent-dark/20 absolute inset-0 -z-10 rounded-full bg-gradient-to-tr blur-[60px]"></div>

        <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-xl backdrop-blur-sm">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/hero-illustration.svg"
              alt="Software development illustration"
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
