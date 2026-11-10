import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/lib/profile";
import { Reveal, SectionHeading } from "./Reveal";
import { LinkedinLink } from "./SocialButton";
import { useServerFn } from "@tanstack/react-start";
import { sendContact } from "@/lib/contact.functions";
import { contactSchema, buildMailto, type ContactInput } from "./contactSchema";

const FIELDS: { k: keyof ContactInput; label: string; type?: string }[] = [
  { k: "name", label: "Name" }, { k: "email", label: "Email", type: "email" }, { k: "subject", label: "Subject" },
];
export function Contact() {
  const [v, setV] = useState<ContactInput>({ name: "", email: "", subject: "", message: "" });
  const [err, setErr] = useState<Partial<Record<keyof ContactInput, string>>>({});
  const set = (k: keyof ContactInput, val: string) => { setV({ ...v, [k]: val }); if (err[k]) setErr({ ...err, [k]: undefined }); };
  const send = useServerFn(sendContact);
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const r = contactSchema.safeParse(v);
    if (!r.success) {
      const f: typeof err = {};
      r.error.issues.forEach((i) => { const k = i.path[0] as keyof ContactInput; f[k] ??= i.message; });
      setErr(f); return;
    }
    setBusy(true);
    try {
      const res = await send({ data: r.data });
      if (!res.ok) throw new Error(res.error);
      toast.success("Message sent", { description: "Thanks! I'll get back to you soon." });
      setV({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Couldn't send directly", { description: "Opening your email app instead." });
      window.location.href = buildMailto(PROFILE.email, r.data);
    } finally { setBusy(false); }
  };
  const input = "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-[var(--glow-primary)]";
  const info = [
    { icon: Mail, l: "Email", v: PROFILE.email, h: `mailto:${PROFILE.email}` },
    { icon: Phone, l: "Phone", v: PROFILE.phone, h: PROFILE.phoneHref },
    { icon: MapPin, l: "Location", v: PROFILE.location },
  ];
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="circuit-bg absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="contact" title="Let's Build Something Innovative" sub="Interested in electronics, embedded systems, IoT, VLSI, robotics, or hardware development opportunities? Let's connect!" />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-4">
            {info.map((it) => {
              const inner = (<><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/40 text-primary"><it.icon className="h-5 w-5" /></div><div className="min-w-0"><p className="text-xs uppercase tracking-wider text-muted-foreground">{it.l}</p><p className="break-words font-medium">{it.v}</p></div></>);
              return it.h ? <a key={it.l} href={it.h} className="glass glass-hover flex items-center gap-4 rounded-2xl p-5">{inner}</a> : <div key={it.l} className="glass flex items-center gap-4 rounded-2xl p-5">{inner}</div>;
            })}
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
              <a href={`mailto:${PROFILE.email}`} className="btn-glow inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 font-semibold"><Mail className="h-4 w-4" />Email Me</a>
              <a href={PROFILE.phoneHref} className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 font-semibold"><Phone className="h-4 w-4" />Call Me</a>
              <LinkedinLink label="LinkedIn" className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 font-semibold" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form onSubmit={submit} noValidate className="glass space-y-5 rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {FIELDS.map((f) => (
                  <div key={f.k} className={f.k === "subject" ? "sm:col-span-2" : ""}>
                    <label htmlFor={f.k} className="mb-2 block text-sm font-medium">{f.label}</label>
                    <input id={f.k} type={f.type ?? "text"} value={v[f.k]} onChange={(e) => set(f.k, e.target.value)} aria-invalid={!!err[f.k]} aria-describedby={`${f.k}-err`} className={input} />
                    {err[f.k] && <p id={`${f.k}-err`} className="mt-1.5 text-sm text-destructive">{err[f.k]}</p>}
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                <textarea id="message" rows={5} value={v.message} onChange={(e) => set("message", e.target.value)} aria-invalid={!!err.message} aria-describedby="message-err" className={`${input} resize-y`} />
                {err.message && <p id="message-err" className="mt-1.5 text-sm text-destructive">{err.message}</p>}
              </div>
              <button type="submit" disabled={busy} className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold disabled:opacity-60">{busy ? "Sending..." : "Send Message"} <Send className="h-4 w-4" /></button>
              <p className="text-center text-xs text-muted-foreground">Your message is delivered straight to my inbox.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
