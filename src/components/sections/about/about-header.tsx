import { COMPANY_INFO } from "@/lib/constants";
import {
  MotionDiv,
  MotionH2,
  MotionP,
  MotionSpan,
} from "@/components/motion/motion-tags";

export const AboutHeader = () => {
  return (
    <MotionDiv
      className="mb-16 flex flex-col gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <MotionSpan
        className="text-forge-accent text-sm font-medium tracking-wider uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Who We Are
      </MotionSpan>

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <MotionH2
          id="about-heading"
          className="max-w-md bg-linear-to-r from-white to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          About Us
        </MotionH2>
        <div className="md:w-2/3">
          <MotionP
            className="text-lg leading-relaxed text-neutral-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "circOut" }}
          >
            At{" "}
            <span className="text-forge-accent font-medium">
              {COMPANY_INFO.name}
            </span>
            , we create high-performance, custom software and websites tailored
            to the unique needs of businesses and e-commerce stores. We deliver
            solutions that combine technical excellence, reliability, and
            measurable business impact.
          </MotionP>
        </div>
      </div>
    </MotionDiv>
  );
};
