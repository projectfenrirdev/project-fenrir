import { ProcessBackground } from "@/components/sections/process/process-background";
import { ProcessHeader } from "@/components/sections/process/process-header";
import { ProcessIllustration } from "@/components/sections/process/process-illustration";
import { ProcessSteps } from "@/components/sections/process/process-steps";
import { MotionSection } from "@/components/motion/motion-tags";

const Process = () => {
  return (
    <MotionSection
      aria-labelledby="process-heading"
      className="relative overflow-hidden px-4 py-20 xl:overflow-visible"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <ProcessBackground />

      <div className="relative mx-auto">
        <ProcessHeader />
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <ProcessSteps />
          <div className="sticky top-32 hidden lg:block">
            <ProcessIllustration />
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Process;
