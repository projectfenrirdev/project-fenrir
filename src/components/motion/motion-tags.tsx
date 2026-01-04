"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export const MotionDiv = (props: HTMLMotionProps<"div">) => {
  return <motion.div {...props}>{props.children}</motion.div>;
};

export const MotionSpan = (props: HTMLMotionProps<"span">) => {
  return <motion.span {...props}>{props.children}</motion.span>;
};

export const MotionH1 = (props: HTMLMotionProps<"h1">) => {
  return <motion.h1 {...props}>{props.children}</motion.h1>;
};

export const MotionH2 = (props: HTMLMotionProps<"h2">) => {
  return <motion.h2 {...props}>{props.children}</motion.h2>;
};

export const MotionP = (props: HTMLMotionProps<"p">) => {
  return <motion.p {...props}>{props.children}</motion.p>;
};

export const MotionSection = (props: HTMLMotionProps<"section">) => {
  return <motion.section {...props}>{props.children}</motion.section>;
};
