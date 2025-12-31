"use client";

import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { containerVariants, itemVariants } from "./animation-variants";

export const ServicesGrid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {SERVICES.map((item, index: number) => (
        <motion.div
          key={`${item.text}-${index}`}
          className="group"
          variants={{ itemVariants }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.2 },
          }}
        >
          <Link href={item.link}>
            <div className="hover:border-forge-accent/30 relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:shadow-lg">
              {/* Animated gradient accent on hover */}
              <div className="from-forge-accent absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r to-forge-accent-DEFAULT transition-all duration-500 group-hover:w-full"></div>

              <div className="flex items-start gap-4">
                <div className="from-forge-accent/20 group-hover:from-forge-accent/40 flex size-12 items-center justify-center rounded-lg bg-gradient-to-br to-forge-accent-dark/20 transition-all duration-300 group-hover:to-forge-accent-dark/40 group-hover:shadow-md">
                  <DynamicIcon
                    name={item.icon}
                    className="group-hover:text-forge-accent size-6 text-white transition-all duration-300"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {item.text}
                  </h3>
                  {item.description && (
                    <p className="mt-1 line-clamp-3 text-sm text-neutral-400">
                      {item.longDescription}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
