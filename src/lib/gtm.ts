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
  trackEvent("cta_button_click", {
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

// Type declarations for window.dataLayer
declare global {
  interface Window {
    dataLayer?: Object[];
  }
}
