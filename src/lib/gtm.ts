/**
 * Google Tag Manager Event Tracking Utilities
 *
 * These functions push events to the dataLayer, which GTM can then use
 * to trigger tags, track conversions, and send data to GA4.
 */

import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

/**
 * Push a custom event to the dataLayer
 * @param eventName - The name of the event (e.g., "contact_form_submit")
 * @param params - Additional event parameters
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>,
): void => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });

    sendGAEvent("event", eventName);
    sendGTMEvent({ event: eventName });
  }
};

/**
 * Legacy function - kept for backward compatibility
 * @deprecated Use trackEvent instead
 */
export const pushEvent = (event: string, data = {}) => {
  trackEvent(event, data);
};

/**
 * Track form submissions
 * @param formName - Name/identifier of the form
 * @param formLocation - Where the form is located (e.g., "footer", "contact-page")
 * @param additionalData - Any additional form data to track
 */
export const trackFormSubmit = (
  formName: string,
  formLocation?: string,
  additionalData?: Record<string, unknown>,
): void => {
  trackEvent("generate_lead", {
    form_name: formName,
    form_location: formLocation,
    page_location: typeof window !== "undefined" ? window.location.href : "",
    ...additionalData,
  });
};

/**
 * Track CTA button clicks
 * @param buttonText - The text displayed on the button
 * @param buttonLocation - Where the button is located (e.g., "hero", "footer")
 * @param linkUrl - The URL the button links to (if applicable)
 */
export const trackCTAClick = (
  buttonText: string,
  buttonLocation?: string,
  linkUrl?: string,
): void => {
  trackEvent("select_content", {
    content_type: "cta_button",
    button_text: buttonText,
    button_location: buttonLocation,
    link_url: linkUrl,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};

/**
 * Track service page views
 * @param serviceName - The name/slug of the service
 * @param serviceCategory - Optional category for grouping
 */
export const trackServiceView = (
  serviceName: string,
  serviceCategory?: string,
): void => {
  trackEvent("view_item", {
    item_name: serviceName,
    item_category: serviceCategory,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};

/**
 * Track file downloads
 * @param fileName - Name of the downloaded file
 * @param fileType - Type/extension of the file (e.g., "pdf", "zip")
 * @param linkUrl - URL of the downloaded file
 */
export const trackDownload = (
  fileName: string,
  fileType?: string,
  linkUrl?: string,
): void => {
  trackEvent("file_download", {
    file_name: fileName,
    file_type: fileType,
    link_url: linkUrl,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};

/**
 * Track outbound link clicks
 * @param linkUrl - The external URL being clicked
 * @param linkText - The text of the link
 */
export const trackOutboundClick = (
  linkUrl: string,
  linkText?: string,
): void => {
  trackEvent("click", {
    event_category: "outbound",
    event_label: linkText || linkUrl,
    link_url: linkUrl,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};

/**
 * Track email link clicks
 * @param emailAddress - The email address being clicked
 */
export const trackEmailClick = (emailAddress: string): void => {
  trackEvent("email_click", {
    email_address: emailAddress,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};

/**
 * Track phone number clicks
 * @param phoneNumber - The phone number being clicked
 */
export const trackPhoneClick = (phoneNumber: string): void => {
  trackEvent("phone_click", {
    phone_number: phoneNumber,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};

/**
 * Track scroll depth
 * @param percentage - Percentage of page scrolled (e.g., 25, 50, 75, 100)
 */
export const trackScrollDepth = (percentage: number): void => {
  trackEvent("scroll", {
    scroll_depth: percentage,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};

/**
 * Track video interactions
 * @param action - Video action (e.g., "play", "pause", "complete")
 * @param videoTitle - Title of the video
 * @param videoUrl - URL of the video
 */
export const trackVideoInteraction = (
  action: "play" | "pause" | "complete" | "progress",
  videoTitle?: string,
  videoUrl?: string,
): void => {
  trackEvent("video_interaction", {
    video_action: action,
    video_title: videoTitle,
    video_url: videoUrl,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};

/**
 * Track search queries
 * @param searchTerm - The search query
 * @param resultCount - Number of results returned
 */
export const trackSearch = (searchTerm: string, resultCount?: number): void => {
  trackEvent("search", {
    search_term: searchTerm,
    result_count: resultCount,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};

/**
 * Track user engagement time
 * @param engagementTime - Time in milliseconds
 */
export const trackEngagementTime = (engagementTime: number): void => {
  trackEvent("user_engagement", {
    engagement_time_msec: engagementTime,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};

/**
 * Set user properties (for GA4 user-scoped custom dimensions)
 * @param properties - Object with user property key-value pairs
 */
export const setUserProperties = (
  properties: Record<string, unknown>,
): void => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "set_user_properties",
      user_properties: properties,
    });
  }
};

// Type declarations for window.dataLayer
declare global {
  interface Window {
    dataLayer?: Object[];
  }
}
