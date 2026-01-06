"use client";

import { Button } from "@/components/ui/button";
import { FoldersIcon, MessageCircleMoreIcon } from "lucide-react";
import Link from "next/link";
import { itemVariants } from "./animation-variants";
import { MotionDiv } from "@/components/motion/motion-tags";
import { trackEvent } from "@/lib/gtm";

export const HeroCtaButtons = () => {
  const handleGetInTouchClick = () => {
    trackEvent("get_in_touch_button_click", { value: "get_in_touch" });
  };

  const handleViewServicesClick = () => {
    trackEvent("services_button_click", { value: "view_services" });
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-10 flex flex-col gap-5 sm:flex-row"
    >
      <MotionDiv id="get-in-touch-container" variants={itemVariants}>
        <Link
          id="get-in-touch-link"
          href="/#contact"
          onClick={handleGetInTouchClick}
        >
          <Button
            id="get-in-touch-button"
            className="border-forge-primary bg-forge-primary hover:bg-forge-primary/90 shadow-forge-primary/20 hover:shadow-forge-primary/40 w-full border-2 py-5 text-base font-medium text-white shadow-lg focus:ring-2 focus:outline-none sm:w-auto"
          >
            Get in Touch
            <MessageCircleMoreIcon
              className="ml-2 size-5"
              role="img"
              aria-label="Get in touch icon"
            />
          </Button>
        </Link>
      </MotionDiv>

      <MotionDiv id="view-services-container" variants={itemVariants}>
        <Link
          id="view-services-link"
          href="/#services"
          onClick={handleViewServicesClick}
        >
          <Button
            id="view-services-button"
            className="w-full border-2 border-white/20 bg-white/5 py-5 text-base backdrop-blur-sm hover:bg-white/10 focus:ring-2 focus:ring-white/20 focus:outline-none sm:w-auto"
          >
            View Services
            <FoldersIcon
              className="ml-2 size-5"
              role="img"
              aria-label="Services icon"
            />
          </Button>
        </Link>
      </MotionDiv>
    </MotionDiv>
  );
};
