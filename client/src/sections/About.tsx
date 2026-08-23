/** Arquitetura de Âmbar: secção de contexto com matéria dourada e argumentação direta, sem excesso comercial. */
import { motion } from "framer-motion";
import { Check, Compass, Gem, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const markers = ["Clareza", "Discrição", "Critério", "Respeito"];

export default function About() {
  return (
    <section id="sobre" className="bg-[#eee8dd] px-5 py-24 text-[#11100e] sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading index="01" eyebrow="Quem somos" title="Compra de ouro, com atenção a cada peça." description="A Jinito Móniz recebe quem procura vender ouro com uma abordagem profissional, discreta e fácil de compreender." light />
        <div className="mt-16 grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-16">
          <motion.figure initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"><div className="absolute -left-3 -top-3 h-20 w-20 border-l border-t border-[#D59A42]" /><img src="/manus-storage/ouversaria-gold-bars_cc1b68c9.jpg" alt="Barras e matéria em ouro sob luz âmbar" className="aspect-[4/5] w-full object-cover object-center" /><figcaption className="absolute bottom-0 right-0 max-w-[15rem] bg-[#11100e] px-5 py-4 text-xs leading-5 text-[#f3e8d5]">O valor da sua peça merece um olhar atento antes de qualquer decisão.</figcaption></motion.figure>
          <div className="max-w-2xl"><p className="text-lg leading-8 text-[#39342e]">A nossa especialidade é a compra de ouro. Começamos por observar a peça, ouvir o que procura e explicar o processo de forma direta. O objetivo é que saiba exatamente o que está a ser avaliado e se sinta confortável a decidir.</p><div className="mt-10 grid gap-7 sm:grid-cols-3"><div><Compass className="text-[#b77618]" size={23} /><h3 className="mt-3 font-display text-2xl">Missão</h3><p className="mt-2 text-sm leading-6 text-[#655e54]">Tornar a compra de ouro uma experiência clara e bem acompanhada.</p></div><div><Gem className="text-[#b77618]" size={23} /><h3 className="mt-3 font-display text-2xl">Visão</h3><p className="mt-2 text-sm leading-6 text-[#655e54]">Ser uma referência em atendimento reservado e avaliação de peças em ouro.</p></div><div><ShieldCheck className="text-[#b77618]" size={23} /><h3 className="mt-3 font-display text-2xl">Método</h3><p className="mt-2 text-sm leading-6 text-[#655e54]">Analisar, explicar e apresentar uma proposta de compra sem ruído.</p></div></div><div className="mt-11 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-[#d2c9ba] pt-7 sm:grid-cols-4">{markers.map((marker) => <div key={marker} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#302b25]"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#D59A42] text-black"><Check size={13} strokeWidth={3} /></span>{marker}</div>)}</div></div>
        </div>
      </div>
    </section>
  );
}
