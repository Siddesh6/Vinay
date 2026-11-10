import { Cpu, Code2, Wrench, Wifi, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
const GROUPS = [
  { icon: Cpu, t: "Digital Design", s: ["Digital Electronics", "VLSI Design", "RTL Design", "Digital System Verification", "Finite State Machines"] },
  { icon: Code2, t: "Programming", s: ["Verilog HDL", "C Programming", "C++"] },
  { icon: Wrench, t: "Tools & Platforms", s: ["Xilinx Vivado", "Cadence", "PicSimLab Simulator", "ThingsBoard Cloud Platform"] },
  { icon: Wifi, t: "IoT & Communication", s: ["Internet of Things", "MQTT Protocol", "Sensor Data Acquisition"] },
  { icon: Users, t: "Soft Skills", s: ["Leadership", "Team Collaboration", "Problem Solving"] },
];
export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="circuit-bg absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="skills" title="My Technical Arsenal" sub="The tools, languages and concepts I use to take designs from logic to silicon-ready RTL." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <Reveal key={g.t} delay={i * 80} className={`glass glass-hover group rounded-2xl p-6 ${i === 0 ? "lg:row-span-2" : ""}`}>
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-primary/40 text-primary transition-shadow group-hover:shadow-[var(--glow-primary)]"><g.icon className="h-5 w-5" /></div>
                <h3 className="text-lg font-semibold">{g.t}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.s.map((s) => (
                  <li key={s} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-xs text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary">{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
