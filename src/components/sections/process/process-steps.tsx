"use client";

import { motion } from "framer-motion";
import { stepVariants } from "./animation-variants";
import { processSteps } from "./process-data";

export const ProcessSteps = () => {
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="from-forge-secondary/70 via-forge-secondary/30 absolute top-0 bottom-0 left-8 hidden w-px bg-gradient-to-b to-transparent md:block"></div>

      <div className="flex flex-col gap-16">
        {processSteps.map((step, index) => {
          const IconComponent = step.icon;

          return (
            <motion.div
              key={index}
              className="flex flex-col gap-8 md:flex-row md:items-start"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ stepVariants }}
            >
              <div className="from-forge-secondary/20 flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br to-transparent shadow-lg backdrop-blur-sm">
                <IconComponent className="text-forge-secondary size-8" />
                <span className="bg-forge-secondary absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold shadow-md">
                  {index + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="max-w-xl text-neutral-400">{step.description}</p>
                <div className="from-forge-secondary/80 mt-2 h-px w-24 bg-linear-to-r to-transparent"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
