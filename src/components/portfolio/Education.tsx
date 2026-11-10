import { GraduationCap, School, BookOpen, Calendar, MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const ITEMS = [
  {
    icon: GraduationCap,
    institution: "GM Institute of Technology",
    location: "Davanagere, Karnataka",
    degree: "Bachelor of Engineering (B.E.) – Electronics & Communication Engineering",
    duration: "September 2023 – Present",
    score: "CGPA: 7.7",
    now: true,
  },
  {
    icon: BookOpen,
    institution: "Morarji Desai Residential PU College",
    location: "Bommanakatte, Karnataka",
    degree: "Pre-University Course (PUC) – PCMB",
    duration: "May 2021 – March 2023",
    score: "Score: 88%",
    now: false,
  },
  {
    icon: School,
    institution: "Morarji Desai Residential School",
    location: "Molakalmuru, Karnataka",
    degree: "Secondary School Leaving Certificate (SSLC)",
    duration: "May 2020 – March 2021",
    score: "Score: 93.44%",
    now: false,
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="education" title="Academic Journey" />

        <div className="relative mt-12">
          {/* Subtle circuit timeline bus */}
          <div
            className="absolute left-4.5 top-3 bottom-6 w-px bg-gradient-to-b from-primary via-violet to-primary/20 sm:left-6.5"
            aria-hidden
          />

          <ol className="space-y-8 sm:space-y-9">
            {ITEMS.map((it, i) => (
              <li key={it.institution} className="relative pl-12 sm:pl-18">
                <span className="absolute left-0 top-1.5 grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-xl border border-primary/50 bg-background/95 text-primary shadow-[var(--glow-primary)]">
                  <it.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>

                <Reveal delay={i * 90} className="glass glass-hover rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="inline-flex items-center gap-1.5 text-primary">
                        <Calendar className="h-3.5 w-3.5" />
                        {it.duration}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {it.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {it.now && (
                        <span className="rounded-full bg-primary/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                          Current
                        </span>
                      )}
                      <span className="rounded-lg border border-violet/40 bg-violet/10 px-3 py-1 font-display text-xs font-semibold sm:text-sm">
                        {it.score}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-foreground sm:text-xl">
                    {it.institution}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                    {it.degree}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
