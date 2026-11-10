import { useEffect, useRef } from "react";
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current!; el.style.opacity = "1";
    let raf = 0;
    const m = (e: PointerEvent) => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`; }); };
    window.addEventListener("pointermove", m, { passive: true });
    return () => window.removeEventListener("pointermove", m);
  }, []);
  return <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full bg-primary/[0.07] opacity-0 blur-3xl transition-opacity" />;
}
