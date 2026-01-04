import { ContactBackground } from "@/components/sections/contact/contact-background";
import { ContactContent } from "@/components/sections/contact/contact-content";
import { ContactHeader } from "@/components/sections/contact/contact-header";
import { MotionSection } from "@/components/motion/motion-tags";
import React from "react";

const Contact = (): React.ReactElement => {
  return (
    <MotionSection
      aria-labelledby="contact-heading"
      id="contact"
      className="relative scroll-mt-28 overflow-hidden px-4 py-20 xl:overflow-visible"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <ContactBackground />

      <div className="relative">
        <ContactHeader />
        <ContactContent />
      </div>
    </MotionSection>
  );
};

export default Contact;
