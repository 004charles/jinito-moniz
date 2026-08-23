/** Arquitetura de Âmbar: superfície marfim e fotografia humana dão contrapeso à linguagem técnica escura. */
import { motion } from "framer-motion";
import { Check, Compass, Gem, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const markers = ["Qualidade", "Profissionalismo", "Inovação", "Confiança"];

export default function About() {
  return (
    <section id="sobre" className="bg-[#eee8dd] px-5 py-24 text-[#11100e] sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1320px]"><SectionHeading index="01" eyebrow="A nossa assinatura" title="Sobre a Ouversaria Jinito Moniz" description="Uma presença construída para quem valoriza discrição, critério e relações profissionais consistentes." light />
        <div className="mt-16 grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-16">
          <motion.figure initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"><div className="absolute -left-3 -top-3 h-20 w-20 border-l border-t border-[#D59A42]" /><img src="/manus-storage/jinitomoniz1_f8560394.jpg" alt="Representante da Jinito Móniz" className="aspect-[4/5] w-full object-cover object-top grayscale-[15%]" /><figcaption className="absolute bottom-0 right-0 max-w-[15rem] bg-[#11100e] px-5 py-4 text-xs leading-5 text-[#f3e8d5]">Cada conversa começa com atenção ao contexto, não com uma resposta pronta.</figcaption></motion.figure>
          <div className="max-w-2xl"><p className="text-lg leading-8 text-[#39342e]">A Ouversaria Jinito Moniz alia um atendimento contemporâneo ao rigor que a compra e venda de ouro exige. O trabalho começa por compreender a peça, o momento e a necessidade; depois, apresenta possibilidades de forma confidencial, direta e acompanhada.</p><div className="mt-10 grid gap-7 sm:grid-cols-3"><div><Compass className="text-[#b77618]" size={23} /><h3 className="mt-3 font-display text-2xl">Missão</h3><p className="mt-2 text-sm leading-6 text-[#655e54]">Acompanhar decisões sobre ouro com clareza e atendimento reservado.</p></div><div><Gem className="text-[#b77618]" size={23} /><h3 className="mt-3 font-display text-2xl">Visão</h3><p className="mt-2 text-sm leading-6 text-[#655e54]">Ser uma referência de critério, relação profissional e confiança.</p></div><div><ShieldCheck className="text-[#b77618]" size={23} /><h3 className="mt-3 font-display text-2xl">Método</h3><p className="mt-2 text-sm leading-6 text-[#655e54]">Avaliar, explicar e orientar com atenção a cada detalhe.</p></div></div><div className="mt-11 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-[#d2c9ba] pt-7 sm:grid-cols-4">{markers.map((marker) => <div key={marker} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#302b25]"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#D59A42] text-black"><Check size={13} strokeWidth={3} /></span>{marker}</div>)}</div></div>
        </div>
      </div>
    </section>
  );
}
