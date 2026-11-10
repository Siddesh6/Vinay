import { useEffect, useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
export const SECTIONS = ["home", "about", "skills", "projects", "certifications", "education", "contact"];
export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    SECTIONS.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold tracking-wider">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-primary/50 text-primary shadow-[var(--glow-primary)]"><Cpu className="h-4 w-4" /></span>
          VINAYAKA <span className="text-gradient">B</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <li key={s}><a href={`#${s}`} className={`rounded-md px-3 py-2 text-sm capitalize transition-colors ${active === s ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>{s}
              <span className={`mx-auto mt-0.5 block h-px bg-primary transition-all ${active === s ? "w-full" : "w-0"}`} /></a></li>
          ))}
        </ul>
        <a href="#contact" className="btn-glow hidden rounded-full px-5 py-2 text-sm font-semibold lg:inline-block">Let's Connect</a>
        <button className="grid h-11 w-11 place-items-center rounded-md text-foreground lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 px-4 pb-5 lg:hidden animate-in fade-in slide-in-from-top-2">
          {SECTIONS.map((s) => (
            <li key={s}><a onClick={() => setOpen(false)} href={`#${s}`} className={`block rounded-lg px-4 py-3 capitalize ${active === s ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>{s}</a></li>
          ))}
          <li><a onClick={() => setOpen(false)} href="#contact" className="btn-glow mt-2 block rounded-full py-3 text-center font-semibold">Let's Connect</a></li>
        </ul>
      )}
    </header>
  );
}
