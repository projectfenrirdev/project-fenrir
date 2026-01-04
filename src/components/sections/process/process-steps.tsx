"use client";

import { MotionDiv } from "@/components/motion/motion-tags";
import { stepVariants } from "./animation-variants";
import { processSteps } from "./process-data";

export const ProcessSteps = () => {
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="from-forge-accent/70 via-forge-accent/30 absolute top-0 bottom-0 left-8 hidden w-px bg-gradient-to-b to-transparent md:block"></div>

      <div className="flex flex-col gap-16">
        {processSteps.map((step, index) => {
          const IconComponent = step.icon;

          return (
            <MotionDiv
              key={index}
              className="flex flex-col gap-8 md:flex-row md:items-start"
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              variants={{ stepVariants }}
            >
              <div className="from-forge-accent/20 flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br to-transparent shadow-lg backdrop-blur-sm">
                <IconComponent className="text-forge-accent size-8" />
                <span className="bg-forge-accent absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold shadow-md">
                  {index + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="max-w-xl text-neutral-400">{step.description}</p>
                <div className="from-forge-accent/80 mt-2 h-px w-24 bg-linear-to-r to-transparent"></div>
              </div>
            </MotionDiv>
          );
        })}
      </div>
    </div>
  );
};
