/** Arquitetura de Âmbar: os diferenciais formam uma composição técnica em vez de cartões decorativos. */
import { motion } from "framer-motion";
import { BadgeCheck, Eye, Gem, ScanSearch, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const differentiators = [
  { icon: BadgeCheck, title: "Qualidade", text: "Compromisso com um padrão alto de apresentação, escuta e acompanhamento." },
  { icon: Eye, title: "Transparência", text: "Uma conversa clara para que cada pessoa compreenda o processo e os caminhos possíveis." },
  { icon: ScanSearch, title: "Critério", text: "Atenção a detalhes e contexto antes de chegar a qualquer recomendação." },
  { icon: ShieldCheck, title: "Confiança", text: "Uma relação construída com reserva, profissionalismo e consistência." },
  { icon: Gem, title: "Curadoria", text: "Uma seleção que valoriza relevância, acabamento e adequação a cada necessidade." },
  { icon: Sparkles, title: "Inovação", text: "Uma presença contemporânea, preparada para comunicar com mais proximidade." },
];

export default function Differentials() {
  return (
    <section className="relative overflow-hidden bg-[#14130f] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="absolute left-1/2 top-0 h-px w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D59A42]/65 to-transparent" /><div className="mx-auto max-w-[1320px]"><SectionHeading index="05" eyebrow="A diferença está no método" title="Por que escolher a Ouversaria Jinito Moniz?" description="A marca foi desenhada para tornar cada contacto mais direto, contextualizado e digno da confiança que exige." />
      <div className="mt-16 grid border-l border-t border-white/12 sm:grid-cols-2 lg:grid-cols-3">{differentiators.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.42, delay: index * 0.05 }} className="group border-b border-r border-white/12 p-6 sm:p-8"><div className="flex items-center justify-between"><Icon size={22} className="text-[#D59A42]" /><span className="font-mono text-xs text-white/32">0{index + 1}</span></div><h3 className="mt-12 font-display text-3xl text-[#f5eddc]">{item.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-white/57">{item.text}</p><div className="mt-7 h-px w-10 bg-[#D59A42] transition-all duration-300 group-hover:w-20" /></motion.article>})}</div>
    </div></section>
  );
}
