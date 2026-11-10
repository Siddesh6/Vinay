import { BadgeCheck, Building2, Calendar, Hash, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/lib/profile";
import { Reveal, SectionHeading } from "./Reveal";
export function Certifications() {
  const cls = "btn-glow inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold";
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="certifications" title="Certifications & Learning" />
        <Reveal className="glass glass-hover relative overflow-hidden rounded-2xl p-6 sm:p-10">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet/20 blur-3xl" aria-hidden />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-[var(--glow-primary)]"><BadgeCheck className="h-8 w-8" /></div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold sm:text-3xl">VLSI for Beginners</h3>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                <div className="flex items-center gap-2"><Building2 className="h-4 w-4 text-primary" /><dt className="sr-only">Organization</dt><dd>NIELIT Calicut</dd></div>
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /><dt className="sr-only">Date</dt><dd>January 2026</dd></div>
                <div className="flex items-center gap-2"><Hash className="h-4 w-4 text-primary" /><dt className="sr-only">Credential ID</dt><dd className="font-mono">OLC 49971</dd></div>
              </dl>
              <p className="mt-5 text-muted-foreground">Completed VLSI for Beginners training organized by NIELIT Calicut, gaining hands-on exposure to Verilog HDL, Xilinx Vivado, FPGA design flow, synthesis, and simulation.</p>
              <div className="mt-5 flex flex-wrap gap-2">{["Verilog HDL", "Xilinx Vivado", "FPGA Flow", "Synthesis", "Simulation"].map((t) => <span key={t} className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 font-mono text-xs">{t}</span>)}</div>
              <div className="mt-7">
                {PROFILE.certificateUrl
                  ? <a href={PROFILE.certificateUrl} target="_blank" rel="noopener noreferrer" className={cls}>View Certificate <ExternalLink className="h-4 w-4" /></a>
                  : <button className={cls} onClick={() => toast("Certificate available on request", { description: `Credential ID OLC 49971 · ${PROFILE.email}` })}>View Certificate <ExternalLink className="h-4 w-4" /></button>}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
