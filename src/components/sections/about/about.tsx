import { AboutBackground } from "@/components/sections/about/about-background";
import { AboutHeader } from "@/components/sections/about/about-header";
import { AboutValues } from "@/components/sections/about/about-values";
import { MotionSection } from "@/components/motion/motion-tags";

const About = () => {
  return (
    <MotionSection
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 overflow-hidden px-4 py-20 xl:overflow-visible"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <AboutBackground />

      <div className="relative">
        <AboutHeader />
        <AboutValues />
      </div>
    </MotionSection>
  );
};

export default About;
