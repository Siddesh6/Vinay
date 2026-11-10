import { GraduationCap, Cpu, Code2, CircuitBoard } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import portraitImg from "@/assets/vinayaka-portrait.jpg";
const CARDS = [
  { icon: GraduationCap, t: "Engineering Student", d: "B.E. in ECE at GM Institute of Technology" },
  { icon: Cpu, t: "VLSI Enthusiast", d: "Exploring chip design & semiconductor flow" },
  { icon: Code2, t: "RTL Design", d: "Verilog HDL design, simulation & verification" },
  { icon: CircuitBoard, t: "Digital Electronics", d: "Logic design, FSMs & digital systems" },
];
export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="about" title="About Me" />
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="glass space-y-5 rounded-2xl p-6 leading-relaxed text-muted-foreground sm:p-8">
            <div className="flex items-center gap-4 border-b border-border/50 pb-5">
              <img
                src={portraitImg}
                alt="Vinayaka B"
                width={935}
                height={1024}
                className="h-16 w-16 shrink-0 rounded-full border-2 border-primary/60 object-cover shadow-[var(--glow-primary)]"
              />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Vinayaka B</h3>
                <p className="font-mono text-xs text-primary">Electronics &amp; Communication Engineering</p>
              </div>
            </div>
            <p>I am an <span className="text-foreground">Electronics and Communication Engineering Student</span> at <span className="text-primary">GM Institute of Technology</span>, interested in electronics, embedded systems, IoT, VLSI, robotics, and hardware development. I have a strong foundation in Digital Electronics, RTL Design, Verilog HDL, and Digital System Verification.</p>
            <p>I enjoy designing digital logic circuits, developing hardware-oriented solutions, and exploring semiconductor technologies. Through academic and practical projects, I have gained experience in Verilog-based design, simulation, IoT systems, and embedded programming.</p>
            <p>I am continuously improving my technical skills and looking forward to contributing to innovative semiconductor and hardware engineering projects.</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map((c, i) => (
              <Reveal key={c.t} delay={i * 90} className="glass glass-hover rounded-2xl p-5">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-gradient-brand text-primary-foreground"><c.icon className="h-5 w-5" /></div>
                <h3 className="font-semibold">{c.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
