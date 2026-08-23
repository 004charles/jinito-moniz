/** Arquitetura de Âmbar: chamada final direta para iniciar uma avaliação de ouro. */
import { ArrowUpRight } from "lucide-react";
import CornerMark from "../components/CornerMark";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0a08] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"><img src="/assets/ouversaria-gold-assessment.jpg" alt="Avaliação profissional de peças em ouro" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55" /><div className="absolute inset-0 -z-10 bg-[#0b0a08]/68" /><div className="absolute inset-x-0 top-0 -z-10 h-px bg-[#D59A42]/60" /><div className="relative mx-auto max-w-[1320px]"><CornerMark position="top-right" /><p className="text-xs font-bold uppercase tracking-[0.19em] text-[#e6bd78]">O próximo passo</p><div className="mt-7 grid gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-end"><h2 className="max-w-3xl font-display text-5xl leading-[0.93] text-[#f8f1e4] sm:text-6xl lg:text-8xl">Quer vender o seu <span className="text-[#D59A42] italic">ouro?</span></h2><div><p className="max-w-sm text-base leading-7 text-white/72">Fale connosco, apresente a sua peça e descubra como funciona a nossa avaliação e proposta de compra.</p><a href="#contactos" className="button-primary mt-8">Avaliar o meu ouro <ArrowUpRight size={18} /></a></div></div></div>
    </section>
  );
}
