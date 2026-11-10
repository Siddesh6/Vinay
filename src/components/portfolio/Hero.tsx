import { useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin, GraduationCap, Award, BookOpen } from "lucide-react";
import { PROFILE } from "@/lib/profile";
import portraitImg from "@/assets/vinayaka-portrait.jpg";
import { LinkedinLink } from "./SocialButton";

const TITLES = ["Electronics and Communication Engineering Student", "Embedded Systems, IoT & Robotics Enthusiast", "Digital Design & Verification Learner"];
function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = TITLES[i] ?? TITLES[0] ?? "";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setText(TITLES[0] ?? ""); return; }
    if (!del && text === full) { const t = setTimeout(() => setDel(true), 1700); return () => clearTimeout(t); }
    if (del && text === "") { setDel(false); setI((i + 1) % TITLES.length); return; }
    const t = setTimeout(() => setText(del ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)), del ? 35 : 70);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({ left: (i * 53) % 100, size: 2 + (i % 3), dur: 12 + (i % 7) * 2, delay: (i * 1.3) % 10 }));

export function Hero() {
  const typed = useTyping();
  const stats = [
    { icon: GraduationCap, label: "Current B.E.", value: "7.7 CGPA" },
    { icon: BookOpen, label: "PUC (PCMB)", value: "88.00%" },
    { icon: Award, label: "SSLC Score", value: "93.44%" },
    { icon: MapPin, label: "Location", value: "Chitradurga, KA" },
  ];
  return (
    <section id="home" className="relative flex items-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="circuit-bg absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {PARTICLES.map((p, i) => <span key={i} className="particle" style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }} />)}
      </div>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-xs text-primary">
            <span className="h-2 w-2 rounded-full bg-primary anim-pulse" /> Open to ECE internships & roles
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Hi, I'm <span className="text-gradient">Vinayaka B</span></h1>
          <p className="mt-4 min-h-24 font-mono text-lg text-primary sm:min-h-20 sm:text-xl" aria-label={TITLES[0]}>
            <span className="text-muted-foreground">&gt; </span>{typed}<span className="caret">▍</span>
          </p>
          <p className="mt-6 font-display text-xl font-semibold sm:text-2xl">Transforming Digital Logic into Intelligent Hardware.</p>
          <p className="mt-4 max-w-xl text-muted-foreground">Electronics and Communication Engineering student exploring electronics, embedded systems, IoT, VLSI, robotics, and hardware development.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-glow inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold">Explore My Projects <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className="btn-ghost inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold">Contact Me</a>
          </div>
          <div className="mt-6 flex gap-3">
            <LinkedinLink className="btn-ghost grid h-11 w-11 place-items-center rounded-full" />
            <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="btn-ghost grid h-11 w-11 place-items-center rounded-full"><Mail className="h-5 w-5" /></a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl p-3 sm:p-4">
                <s.icon className="mb-2 h-4 w-4 text-primary" />
                <dd className="font-display text-base font-bold sm:text-xl">{s.value}</dd>
                <dt className="text-[11px] text-muted-foreground sm:text-xs">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <div className="anim-float mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <img src={portraitImg} alt="Illustrated portrait of Vinayaka B" width={935} height={1024} fetchPriority="high" className="aspect-[935/1024] w-full rounded-2xl border border-primary/30 object-cover shadow-[var(--glow-primary)]" />
        </div>
      </div>
    </section>
  );
}
