/** Arquitetura de Âmbar: os indicadores de demonstração surgem com movimento preciso e sem excessos. */
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { Stat } from "../types/content";

export default function AnimatedCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1100;
    const startedAt = performance.now();
    let frame = 0;
    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(stat.value * eased));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [isInView, stat.value]);

  return (
    <div ref={ref} className="border-t border-white/15 pt-5">
      <p className="font-display text-5xl leading-none text-[#f5eddc] sm:text-6xl">
        <span className="text-[#D59A42]">{stat.prefix}</span>{count}{stat.suffix}
      </p>
      <p className="mt-3 text-sm font-bold uppercase tracking-[0.13em] text-white">{stat.label}</p>
      <p className="mt-1 text-xs text-white/45">{stat.caption} · substituir por dados confirmados</p>
    </div>
  );
}
