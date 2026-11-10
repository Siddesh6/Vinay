import { useEffect, useState } from "react";
import { ArrowUp, Mail, Phone, Cpu } from "lucide-react";
import { PROFILE } from "@/lib/profile";
import { LinkedinLink } from "./SocialButton";
const top = () => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => { const f = () => setShow(window.scrollY > 600); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  const ico = "btn-ghost grid h-11 w-11 place-items-center rounded-full";
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6">
        <div className="flex items-center gap-2 font-display text-lg font-bold tracking-wider"><Cpu className="h-5 w-5 text-primary" />VINAYAKA <span className="text-gradient">B</span></div>
        <p className="text-sm text-muted-foreground">Designed & Developed by Vinayaka B</p>
        <div className="flex gap-3">
          <LinkedinLink className={ico} />
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className={ico}><Mail className="h-5 w-5" /></a>
          <a href={PROFILE.phoneHref} aria-label="Call" className={ico}><Phone className="h-5 w-5" /></a>
          <button onClick={top} aria-label="Back to top" className={ico}><ArrowUp className="h-5 w-5" /></button>
        </div>
        <a href={`mailto:${PROFILE.email}`} className="text-sm text-primary hover:underline">{PROFILE.email}</a>
        <p className="font-mono text-xs text-muted-foreground">© 2026 Vinayaka B. All Rights Reserved.</p>
      </div>
      <button onClick={top} aria-label="Back to top" className={`btn-glow fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full transition-all ${show ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}><ArrowUp className="h-5 w-5" /></button>
    </footer>
  );
}
