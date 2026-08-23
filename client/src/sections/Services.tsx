/** Arquitetura de Âmbar: cartões verticais de serviço usam numeração e linhas para orientar a leitura. */
import { motion } from "framer-motion";
import { Coins, Handshake, Scale, ShieldCheck, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/services";

const icons = { coins: Coins, scale: Scale, shield: ShieldCheck, handshake: Handshake };

export default function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-[#12110f] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#D59A42]/[.07] blur-[110px]" />
      <div className="relative mx-auto max-w-[1320px]"><SectionHeading index="02" eyebrow="O que fazemos" title="Os nossos serviços" description="Estruturamos o atendimento em torno do que cada situação pede: orientação, avaliação, seleção e relação profissional." />
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">{services.map((service, index) => { const Icon = icons[service.icon]; return <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.07, duration: 0.48 }} key={service.id} className="service-card group min-h-[292px] bg-[#12110f] p-6 sm:p-7"><div className="flex items-start justify-between"><span className="font-mono text-xs text-[#D59A42]">{service.order}</span><Icon size={22} className="text-[#e7ddcf] transition duration-300 group-hover:-translate-y-1 group-hover:text-[#D59A42]" /></div><div className="mt-16"><h3 className="font-display text-3xl text-[#f5eddc]">{service.title}</h3><p className="mt-4 text-sm leading-6 text-white/58">{service.description}</p></div><div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#D59A42] opacity-0 transition duration-300 group-hover:opacity-100">Saber mais <ArrowUpRight size={15} /></div></motion.article>})}</div>
      </div>
    </section>
  );
}
