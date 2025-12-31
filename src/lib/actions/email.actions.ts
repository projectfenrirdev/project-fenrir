"use server";

import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validation/contact-schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: ContactFormValues) {
  try {
    const validatedFields = contactFormSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        success: false,
        error: "Invalid form data",
      };
    }

    const { data } = validatedFields;
    const fullName = `${data.firstName} ${data.lastName}`;

    // Send the email
    const result = await resend.emails.send({
      from: `Contact Form <"no-reply@projectfenrir.com">`,
      to: process.env.CONTACT_EMAIL_TO || "projectfenrir@yahoo.com",
      subject: `New contact form submission from ${fullName}`,
      replyTo: data.email,
      text: `
Name: ${fullName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Message:
${data.message}
      `,
    });

    // Return the success response
    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      error: "Failed to send your message. Please try again later.",
    };
  }
}
