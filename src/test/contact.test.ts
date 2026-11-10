import { describe, it, expect } from "vitest";
import { contactSchema, buildMailto } from "@/components/portfolio/contactSchema";
const ok = { name: "Asha", email: "asha@example.com", subject: "Internship", message: "Hello, interested in your RTL work." };
describe("contact form", () => {
  it("accepts valid input", () => expect(contactSchema.safeParse(ok).success).toBe(true));
  it("rejects bad email", () => expect(contactSchema.safeParse({ ...ok, email: "nope" }).success).toBe(false));
  it("rejects short message", () => expect(contactSchema.safeParse({ ...ok, message: "hi" }).success).toBe(false));
  it("builds mailto to Vinayaka", () => expect(buildMailto("vinayakab.contact@gmail.com", ok)).toMatch(/^mailto:vinayakab\.contact@gmail\.com\?subject=Internship/));
});
