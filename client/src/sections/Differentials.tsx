/** Arquitetura de Âmbar: critérios de compra em grelha assimétrica, com a clareza como painel dominante. */
import { motion } from "framer-motion";
import { BadgeCheck, Eye, Gem, ScanSearch, ShieldCheck, Sparkles } from "lucide-react";
import CornerMark from "../components/CornerMark";
import SectionHeading from "../components/SectionHeading";

const differentiators = [
  { icon: BadgeCheck, title: "Clareza", text: "Explicamos como funciona a avaliação e o que está a ser considerado em cada peça." },
  { icon: Eye, title: "Transparência", text: "Uma proposta de compra apresentada com uma conversa direta e sem pressão." },
  { icon: ScanSearch, title: "Análise", text: "Atenção à peça, aos seus detalhes e ao contexto antes de avançar para uma proposta." },
  { icon: ShieldCheck, title: "Discrição", text: "Atendimento pensado para que possa falar sobre o seu ouro com tranquilidade." },
  { icon: Gem, title: "Especialidade", text: "Foco exclusivo na compra de ouro e no cuidado que este processo merece." },
  { icon: Sparkles, title: "Atendimento", text: "Uma experiência contemporânea, organizada e centrada nas suas necessidades." },
];

export default function Differentials() {
  return (
    <section className="relative overflow-hidden bg-[#14130f] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="absolute left-1/2 top-0 h-px w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D59A42]/65 to-transparent" /><div className="mx-auto max-w-[1320px]"><SectionHeading index="05" eyebrow="A diferença está no método" title="Por que escolher a Jinito Móniz?" description="Porque vender o seu ouro pede clareza, análise atenta e uma relação profissional do primeiro contacto à proposta." />
      <div className="mt-16 grid border-l border-t border-white/12 sm:grid-cols-2 lg:grid-cols-3">{differentiators.map((item, index) => { const Icon = item.icon; const dominant = index === 0; return <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.42, delay: index * 0.05 }} className={`group relative border-b border-r border-white/12 p-6 sm:p-8 ${dominant ? "bg-[#1a1814] lg:col-span-2 lg:min-h-[310px]" : ""} ${index === 5 ? "lg:col-start-2" : ""}`}><CornerMark coordinate={`OJM.5${index + 1}`} position={dominant ? "bottom-right" : "top-right"} className="opacity-0 transition duration-300 group-hover:opacity-65" /><div className="flex items-center justify-between"><Icon size={dominant ? 27 : 22} className="text-[#D59A42]" /><span className="font-mono text-xs text-white/32">0{index + 1}</span></div><h3 className={`mt-12 font-display text-[#f5eddc] ${dominant ? "text-5xl sm:text-6xl" : "text-3xl"}`}>{item.title}</h3><p className={`mt-3 max-w-sm leading-6 text-white/57 ${dominant ? "text-base" : "text-sm"}`}>{item.text}</p><div className="mt-7 h-px w-10 bg-[#D59A42] transition-all duration-300 group-hover:w-20" /></motion.article>})}</div>
    </div></section>
  );
}
