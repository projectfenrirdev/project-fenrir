"use client";

import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { itemVariants } from "./animation-variants";
import { ArrowRightIcon } from "lucide-react";

export const ServicesGrid = () => {
  return (
    <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {SERVICES.map((item, index: number) => (
        <motion.div
          key={`${item.text}-${index}`}
          className="group"
          variants={{ itemVariants }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
        >
          <Link href={item.link}>
            <div className="hover:border-forge-accent/30 relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/8 hover:shadow-lg">
              {/* Animated gradient accent on hover */}
              <div className="from-forge-accent to-forge-accent-DEFAULT absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r group-hover:w-full"></div>

              <div className="flex items-start gap-4">
                <div className="from-forge-accent/20 group-hover:from-forge-accent/40 to-forge-accent-dark/20 group-hover:to-forge-accent-dark/40 flex size-12 items-center justify-center rounded-lg bg-gradient-to-br group-hover:shadow-md">
                  <DynamicIcon
                    name={item.icon}
                    className="group-hover:text-forge-accent size-6 text-white"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {item.text}
                  </h3>
                  {item.description && (
                    <p className="mt-1 line-clamp-2 text-sm text-neutral-400">
                      {item.longDescription}
                    </p>
                  )}
                  <p className="text-forge-primary hover:text-forge-accent mt-2 flex items-center justify-end text-sm">
                    Learn More
                    <ArrowRightIcon
                      className="ml-2 size-4"
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
