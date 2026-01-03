"use client";

import { motion } from "framer-motion";

export const ProcessIllustration = () => {
  const pathDefinition =
    "M100 100 C 200 100, 200 200, 300 200 C 400 200, 400 300, 300 300 C 200 300, 200 400, 300 400 C 400 400, 400 500, 500 500";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      {/* Background glow effect */}
      <div className="from-forge-accent/20 bg-radial-gradient absolute inset-0 to-transparent opacity-30 blur-3xl filter" />

      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-[600px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f78228" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#f78228" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f78228" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base Path (dimmed) */}
        <motion.path
          d={pathDefinition}
          stroke="#333"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Animated Progress Path */}
        <motion.path
          d={pathDefinition}
          stroke="url(#pathGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Moving Particle along the path */}
        {/* Note: Framer Motion doesn't directly support motion along path easily without custom interpolation, 
            but we can use stroke-dashoffset tricks or simply animate circle position if we calculated points. 
            However, simpler visual: A dashed line moving.
         */}
        <motion.path
          d={pathDefinition}
          stroke="#fff"
          strokeWidth="2"
          strokeDasharray="0 100" // Create a "comet" like dash
          strokeLinecap="round"
          initial={{ strokeDashoffset: 1000 }} // Start far back
          animate={{ strokeDashoffset: 0 }} // Move to 0
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            strokeDasharray: "20 500", // A small dash followed by a long gap
          }}
        />

        {/* Nodes */}
        {[
          { cx: 100, cy: 100, delay: 0 },
          { cx: 300, cy: 200, delay: 0.5 },
          { cx: 300, cy: 300, delay: 1.0 },
          { cx: 300, cy: 400, delay: 1.5 },
          { cx: 500, cy: 500, delay: 2.0 },
        ].map((node, i) => (
          <g key={i}>
            {/* Outer Ring */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="24"
              stroke="#f78228"
              strokeWidth="1.5"
              fill="#111"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: node.delay, duration: 0.5, type: "spring" }}
            />

            {/* Spinning Dashed Ring */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="28"
              stroke="#f78228"
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.5"
              initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
              animate={{ scale: 1, opacity: 0.5, rotate: 360 }}
              transition={{
                scale: { delay: node.delay, duration: 0.5 },
                opacity: { delay: node.delay, duration: 0.5 },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              }}
            />

            {/* Inner Core */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="10"
              fill="#f78228"
              filter="url(#glow)"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                scale: {
                  delay: node.delay + 0.2,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
                default: { delay: node.delay + 0.2, duration: 0.3 },
              }}
            />
          </g>
        ))}
      </motion.svg>
    </div>
  );
};
