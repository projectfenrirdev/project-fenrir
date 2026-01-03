"use client";

import { motion } from "framer-motion";
import { Compass, Rocket, ShieldCheck } from "lucide-react";

export const AboutValues = () => {
  const values = [
    {
      title: "The Approach",
      description:
        "Our focus on performance, usability, and scalable architecture sets us apart. Whether you need a custom website, e-commerce store, or software solution, we act as a trusted partner.",
      icon: Compass,
      delay: 0.3,
    },
    {
      title: "Our Mission",
      description:
        "We aim to cultivate lasting partnerships by combining exceptional service with clear, open communication. We emphasize security, maintainability, and scalability.",
      icon: Rocket,
      delay: 0.4,
    },
    {
      title: "Why Us?",
      description:
        "Choosing Project Fenrir means partnering with a team committed to lasting value. We prioritize transparent communication, reliability, and long-term quality.",
      icon: ShieldCheck,
      delay: 0.5,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {values.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className="group hover:border-forge-accent/50 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: item.delay }}
          >
            <div className="bg-forge-accent/10 text-forge-accent group-hover:bg-forge-accent mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300 group-hover:text-white">
              <Icon size={24} />
            </div>

            <h3 className="group-hover:text-forge-accent mb-4 text-xl font-semibold text-white transition-colors duration-300">
              {item.title}
            </h3>

            <p className="leading-relaxed text-neutral-400">
              {item.description}
            </p>

            {/* Decorative gradient blob on hover */}
            <div className="bg-forge-accent/10 group-hover:bg-forge-accent/20 absolute -right-10 -bottom-10 h-32 w-32 rounded-full blur-2xl transition-all duration-500" />
          </motion.div>
        );
      })}
    </div>
  );
};
