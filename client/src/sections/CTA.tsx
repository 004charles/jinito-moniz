/** Arquitetura de Âmbar: fecho cinematográfico de alto contraste para conduzir ao contacto sem ruído visual. */
import { ArrowUpRight } from "lucide-react";
import CornerMark from "../components/CornerMark";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0a08] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"><img src="/manus-storage/ouversaria-cta-silhouette_3d759e57.png" alt="Corredor abstrato iluminado em âmbar" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-75" /><div className="absolute inset-0 -z-10 bg-[#0b0a08]/50" /><div className="absolute inset-x-0 top-0 -z-10 h-px bg-[#D59A42]/60" /><div className="relative mx-auto max-w-[1320px]"><CornerMark position="top-right" /><p className="text-xs font-bold uppercase tracking-[0.19em] text-[#e6bd78]">O próximo passo</p><div className="mt-7 grid gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-end"><h2 className="max-w-3xl font-display text-5xl leading-[0.93] text-[#f8f1e4] sm:text-6xl lg:text-8xl">Pronto para <span className="text-[#D59A42] italic">começar?</span></h2><div><p className="max-w-sm text-base leading-7 text-white/72">Apresente a sua peça ou necessidade. Organizamos a avaliação e esclarecemos o próximo passo com discrição.</p><a href="#contactos" className="button-primary mt-8">Falar connosco <ArrowUpRight size={18} /></a></div></div></div>
    </section>
  );
}
