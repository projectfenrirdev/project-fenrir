"use client";

import { trackServiceView } from "@/lib/gtm";
import { useEffect } from "react";

type ServicePageTrackerProps = {
  serviceSlug: string;
  serviceCategory?: string;
};

/**
 * Component to track service page views
 * Place this in service pages to automatically track when users view a service
 */
export const ServicePageTracker = ({
  serviceSlug,
  serviceCategory,
}: ServicePageTrackerProps) => {
  useEffect(() => {
    trackServiceView(serviceSlug, serviceCategory);
  }, [serviceSlug, serviceCategory]);

  return null;
};
