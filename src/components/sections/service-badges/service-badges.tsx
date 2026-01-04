import { ServicesBackground } from "@/components/sections/service-badges/services-background";
import { ServicesGrid } from "@/components/sections/service-badges/services-grid";
import { ServicesHeader } from "@/components/sections/service-badges/services-header";
import { MotionSection } from "@/components/motion/motion-tags";

const ServiceBadges = () => {
  return (
    <MotionSection
      id="services"
      aria-label="Our Services"
      className="relative scroll-mt-24 overflow-hidden py-20 xl:overflow-visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ServicesBackground />

      <div className="container mx-auto px-4">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </MotionSection>
  );
};

export default ServiceBadges;
