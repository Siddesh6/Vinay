import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "@/components/portfolio/contactSchema";
import { PROFILE } from "@/lib/profile";
import { sendContactEmail } from "./resend.server";

export const sendContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      await sendContactEmail(PROFILE.email, data);
      return { ok: true as const };
    } catch (e) {
      console.error(e);
      return { ok: false as const, error: "Could not send your message right now." };
    }
  });
