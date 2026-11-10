import { useEffect, useState, type ComponentType } from "react";
import { createPortal } from "react-dom";
import { Calendar, ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { DrowningArt, FactoryArt, SurveillanceArt } from "./ProjectArt";
import { Button } from "@/components/ui/button";

type Project = { title: string; duration?: string; tech: string[]; summary: string; points: string[]; Art: ComponentType; category: string };
const PROJECTS: Project[] = [
  {
    title: "Automatic Drowning Detection System", duration: "August 2025 – November 2025", category: "RTL Design · Verification",
    tech: ["Verilog HDL", "Xilinx Vivado"], Art: DrowningArt,
    summary: "Real-time hardware logic in Verilog that monitors aquatic activity through sensor inputs and flags drowning patterns.",
    points: [
      "Developed an Automatic Drowning Detection System using Verilog HDL.",
      "Designed hardware logic to monitor aquatic activity through sensor inputs.",
      "Implemented logic to differentiate normal movement from emergency/drowning patterns.",
      "Designed RTL architecture for fast and real-time detection.",
      "Simulated and verified the design using Xilinx Vivado.",
      "Verified timing behavior, functionality, and system reliability through RTL simulation.",
    ],
  },
  {
    title: "Smart Factory Monitoring System", duration: "March 2026 – April 2026", category: "Industrial IoT",
    tech: ["IoT", "C++", "ThingsBoard", "PicSimLab", "MQTT"], Art: FactoryArt,
    summary: "A zero-hardware, two-node industrial monitoring prototype streaming MQTT telemetry to a live ThingsBoard dashboard.",
    points: [
      "Developed a zero-hardware, two-node industrial monitoring prototype.",
      "Used PicSimLab to simulate Arduino Uno-based IoT edge nodes and sensors.",
      "Programmed the nodes using C++ for sensor data acquisition and processing.",
      "Implemented MQTT communication for real-time telemetry transmission.",
      "Integrated the system with ThingsBoard Cloud Platform.",
      "Created a centralized dashboard for real-time monitoring and visualization.",
      "Enabled remote asset monitoring and predictive insights using simulated industrial data.",
    ],
  },
  {
    title: "IoT-Based Smart Multi-Application Surveillance Robot", category: "Embedded Systems · IoT · Robotics",
    tech: ["ESP32", "ESP32-CAM", "C++", "IoT", "Wi-Fi", "Sensors", "DC Motors", "Servo Motor"], Art: SurveillanceArt,
    summary: "An ESP32-based surveillance robot combining wireless movement, live video streaming, and environmental sensor monitoring through a web dashboard.",
    points: [
      "Developed an IoT-based surveillance robot using ESP32 and ESP32-CAM for remote monitoring, environmental sensing, and wireless robotic control.",
      "Integrated gas, flame, soil moisture, PIR, and ultrasonic sensors to detect environmental conditions and monitor surroundings.",
      "Implemented Wi-Fi-based robot movement, live video streaming, and sensor monitoring through a web dashboard.",
      "Integrated DC motors and a servo motor into the robotic system.",
      "The system supports applications in home security, industrial monitoring, agriculture, and remote surveillance.",
    ],
  },
];

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);
  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm animate-in fade-in sm:items-center sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="pm-title">
      <div className="glass relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl sm:rounded-2xl animate-in slide-in-from-bottom-6 duration-300" onClick={(e) => e.stopPropagation()}>
        <Button variant="ghost" size="icon" onClick={onClose} autoFocus aria-label="Close details" className="btn-ghost absolute right-4 top-4 z-10 h-10 w-10 rounded-full"><X className="h-5 w-5" /></Button>
        <div className="aspect-[2/1] border-b border-border bg-background/60 p-4"><p.Art /></div>
        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{p.category}</p>
          <h3 id="pm-title" className="mt-2 text-2xl font-bold sm:text-3xl">{p.title}</h3>
          {p.duration && <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="h-4 w-4" />{p.duration}</p>}
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Technologies</h4>
          <div className="mt-3 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="rounded-full border border-violet/40 bg-violet/10 px-3 py-1 font-mono text-xs">{t}</span>)}</div>
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Implementation details</h4>
          <ul className="mt-3 space-y-3">{p.points.map((pt) => <li key={pt} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{pt}</li>)}</ul>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="projects" title="Featured Engineering Projects" />
        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="relative aspect-[2/1] overflow-hidden border-b border-border bg-background/60 p-4">
                  <div className="h-full transition-transform duration-500 group-hover:scale-105"><p.Art /></div>
                  <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">{p.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {p.duration && <p className="flex items-center gap-2 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" />{p.duration}</p>}
                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">{p.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 font-mono text-xs">{t}</span>)}</div>
                   <Button variant="ghost" onClick={() => setOpen(p)} className="btn-ghost mt-6 h-auto w-full rounded-full px-5 py-3 font-semibold sm:w-auto sm:self-start">View Details <ArrowUpRight className="h-4 w-4" /></Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      {open && <Modal p={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
