import { z } from "zod";

const urlPattern = /https?:\/\/[^\s]+/gi;
const spamKeywords = [
  "viagra",
  "casino",
  "lottery",
  "winner",
  "congratulations",
  "click here",
  "limited time",
  "act now",
  "buy now",
  "cheap",
  "discount",
  "free money",
  "xxx",
  "sex",
  "porn",
];

function countUrls(text: string): number {
  const matches = text.match(urlPattern);
  return matches ? matches.length : 0;
}

function containsSpamKeywords(text: string): boolean {
  const lowerText = text.toLowerCase();
  return spamKeywords.some((keyword) => lowerText.includes(keyword));
}

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be at most 50 characters" })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must be at most 50 characters" })
    .trim(),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .min(6, { message: "Phone number must be at least 6 digits" })
    .max(20, { message: "Phone number must be at most 20 digits" })
    .regex(/^[0-9+\-\s()]*$/, { message: "Please enter a valid phone number" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be at most 1000 characters" })
    .trim()
    .refine((val) => countUrls(val) <= 2, {
      message: "Message contains too many links",
    })
    .refine((val) => !containsSpamKeywords(val), {
      message: "Message contains inappropriate content",
    }),
  website: z.string().default("").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
