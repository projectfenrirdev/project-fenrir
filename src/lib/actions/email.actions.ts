"use server";

import {
  COMPANY_INFO,
  CONTACT_INFO,
} from "@/lib/constants";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validation/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";
import { Resend } from "resend";
import { headers } from "next/headers";
import DOMPurify from "isomorphic-dompurify";

const resend = new Resend(process.env.RESEND_API_KEY);

async function getClientIP(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIP = headersList.get("x-real-ip");
  const cfConnectingIP = headersList.get("cf-connecting-ip");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return "unknown";
}

function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
}

export async function sendContactEmail(formData: ContactFormValues) {
  try {
    // Check honeypot field first
    if (formData.website && formData.website.trim() !== "") {
      console.warn("Honeypot field filled - potential bot submission");
      return {
        success: false,
        error: "Invalid form submission",
      };
    }

    const validatedFields = contactFormSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        success: false,
        error: "Invalid form data",
      };
    }

    const { data } = validatedFields;

    // Rate limiting check
    const clientIP = await getClientIP();
    const rateLimitResult = await checkRateLimit(`contact-form:${clientIP}`);

    if (!rateLimitResult.success) {
      return {
        success: false,
        error: "Too many requests. Please try again later.",
      };
    }

    // Sanitize all user inputs
    const sanitizedFirstName = sanitizeInput(data.firstName);
    const sanitizedLastName = sanitizeInput(data.lastName);
    const sanitizedEmail = sanitizeInput(data.email);
    const sanitizedPhone = data.phone ? sanitizeInput(data.phone) : "";
    const sanitizedMessage = sanitizeInput(data.message);

    const fullName = `${sanitizedFirstName} ${sanitizedLastName}`;

    // Sanitize email subject to prevent header injection
    const sanitizedSubject = sanitizeInput(fullName);

    // Send the email
    const result = await resend.emails.send({
      from: `${COMPANY_INFO.name} <onboarding@resend.dev>`,
      to: process.env.CONTACT_EMAIL_TO || CONTACT_INFO.email,
      subject: `New contact form submission from ${sanitizedSubject}`,
      replyTo: sanitizedEmail,
      text: `
        Name: ${fullName}
        Email: ${sanitizedEmail}
        Phone: ${sanitizedPhone || "Not provided"}
        Message: ${sanitizedMessage}
      `,
    });

    if (result.error) {
      // Log detailed error server-side only
      console.error("Resend API error:", {
        error: result.error,
        code: result.error.name,
        message: result.error.message,
      });

      return {
        success: false,
        error: "Failed to send your message. Please try again later.",
      };
    }

    // Return the success response
    return { success: true, data: result };
  } catch (error) {
    // Log detailed error server-side only
    console.error("Failed to send contact email:", {
      error,
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });

    return {
      success: false,
      error: "Failed to send your message. Please try again later.",
    };
  }
}
