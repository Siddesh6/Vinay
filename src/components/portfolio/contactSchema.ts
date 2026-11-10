import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Subject is too short").max(150, "Subject is too long"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000, "Message is too long"),
});
export type ContactInput = z.infer<typeof contactSchema>;
export function buildMailto(to: string, d: ContactInput) {
  const body = `${d.message}\n\n— ${d.name} (${d.email})`;
  return `mailto:${to}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
}
