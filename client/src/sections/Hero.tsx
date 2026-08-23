/** Arquitetura de Âmbar: hero editorial de alto contraste, com o fundador como presença humana e ouro como especialidade. */
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import CornerMark from "../components/CornerMark";

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[780px] overflow-hidden bg-[#0b0a08] pt-28 text-white lg:min-h-[880px]">
      <div className="absolute inset-0"><img src="/assets/jinito-moniz-founder.jpg" alt="Jinito Móniz num ambiente de atendimento reservado" className="h-full w-full object-cover object-[58%_center] opacity-72" /><div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0a08_2%,rgba(11,10,8,.95)_31%,rgba(11,10,8,.38)_69%,rgba(11,10,8,.76)_100%)]" /><div className="absolute inset-0 bg-[linear-gradient(0deg,#0b0a08_0%,transparent_34%)]" /></div>
      <div className="absolute right-[7%] top-[19%] h-64 w-64 rounded-full bg-[#D59A42]/15 blur-[110px]" />
      <div className="absolute bottom-0 left-[7%] h-[66%] w-px bg-gradient-to-b from-transparent via-[#D59A42]/65 to-transparent" />
      <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-end px-5 pb-14 sm:px-8 sm:pb-16 lg:min-h-[750px] lg:grid-cols-[minmax(0,1.1fr)_minmax(310px,.65fr)] lg:px-12 lg:pb-20">
        <CornerMark position="top-right" coordinate="OJM.00" className="right-[7%] top-8 hidden opacity-80 lg:block" />
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="mb-7 flex items-center gap-3"><span className="h-px w-10 bg-[#D59A42]" /><span className="text-xs font-bold uppercase tracking-[0.19em] text-[#e6bd78]">Compra de ouro</span></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.13, ease: [0.23, 1, 0.32, 1] }} className="font-display text-[3.25rem] leading-[0.91] tracking-[-0.045em] text-[#f8f1e4] sm:text-7xl lg:text-[clamp(5rem,8.2vw,8.5rem)]">O seu ouro, <span className="text-[#D59A42] italic">avaliado</span> com clareza.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }} className="mt-8 max-w-xl text-base leading-7 text-white/72 sm:text-lg">Compra de ouro com atendimento reservado, análise criteriosa das suas peças e uma proposta explicada com transparência.</motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#servicos" className="button-primary">Como avaliamos o seu ouro <ArrowUpRight size={17} /></a><a href="#contactos" className="button-outline">Falar connosco <ArrowUpRight size={17} /></a></motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.38 }} className="mt-10 hidden justify-self-end lg:block"><p className="w-52 border-t border-white/20 pt-4 text-xs leading-5 text-white/58">Uma conversa reservada, uma avaliação atenta e uma proposta de compra clara.</p><div className="mt-9 flex items-center gap-3 text-[#D59A42]"><ArrowDownRight size={24} /><span className="font-mono text-xs tracking-[0.14em]">DESLIZE PARA DESCOBRIR</span></div></motion.div>
      </div>
    </section>
  );
}
