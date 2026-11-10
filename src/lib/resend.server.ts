import type { ContactInput } from "@/components/portfolio/contactSchema";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function getApiKey(): string | undefined {
  if (typeof process !== "undefined" && process.env) {
    if (process.env["RESEND_API_KEY"]) return process.env["RESEND_API_KEY"];
    if (process.env["VITE_RESEND_API_KEY"]) return process.env["VITE_RESEND_API_KEY"];
  }
  return undefined;
}

export async function sendContactEmail(to: string, d: ContactInput) {
  const key = getApiKey();
  if (!key) throw new Error("Email service is not configured");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [to],
      reply_to: d.email,
      subject: `[Portfolio] ${d.subject}`,
      html: `<p><strong>From:</strong> ${esc(d.name)} (${esc(d.email)})</p><p>${esc(d.message).replace(/\n/g, "<br/>")}</p>`,
      text: `From: ${d.name} (${d.email})\n\n${d.message}`,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    console.error(`Resend failed [${res.status}]: ${body}`);
    throw new Error(`Email send failed (${res.status})`);
  }
  return (await res.json()) as { id: string };
}
