/** Arquitetura de Âmbar: painel editorial de campanha externa, com crédito visível e sem copiar o vídeo da autora. */
import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, MapPin, Phone, Play } from "lucide-react";
import CornerMark from "../components/CornerMark";

const sourceUrl = "https://www.facebook.com/Filipaanttonio/videos/compramos-todo-tipo-de-ouropagamos-o-pre%C3%A7o-justoan%C3%A9is-brincos-pulseira-rel%C3%B3gio-e/1770711293924229/";

export default function FilipaCampaign() {
  return (
    <section className="relative overflow-hidden bg-[#17150f] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#D59A42]/10 blur-[110px]" />
      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.52 }}>
            <div className="flex items-center gap-3"><span className="h-px w-10 bg-[#D59A42]" /><span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6bd78]">Campanha em destaque</span></div>
            <h2 className="mt-7 max-w-lg font-display text-5xl leading-[0.94] text-[#f8f1e4] sm:text-6xl">Compramos todo tipo de <span className="text-[#D59A42] italic">ouro.</span></h2>
            <p className="mt-6 max-w-md text-base leading-7 text-white/65">Veja a campanha que apresenta as peças avaliadas, o contacto da marca e as localizações divulgadas publicamente em Luanda.</p>
          </motion.div>
          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.08 }} className="relative overflow-hidden border border-[#D59A42]/35 bg-[#0c0b09] p-6 sm:p-8">
            <CornerMark position="top-right" coordinate="OJM.V01" />
            <div className="flex items-start justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D59A42]">Vídeo externo · 1:04</p><h3 className="mt-3 font-display text-3xl text-[#f5eddc] sm:text-4xl">Avaliação, preço justo e atendimento em Luanda.</h3></div><span className="grid h-12 w-12 shrink-0 place-items-center border border-[#D59A42]/50 text-[#D59A42]"><Play size={19} fill="currentColor" /></span></div>
            <div className="mt-8 grid gap-4 border-y border-white/10 py-5 text-sm text-white/64 sm:grid-cols-2"><p className="flex gap-3"><Phone size={17} className="shrink-0 text-[#D59A42]" />WhatsApp: +244 942 516 456</p><p className="flex gap-3"><MapPin size={17} className="shrink-0 text-[#D59A42]" />Cinco localizações anunciadas em Luanda</p></div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs leading-5 text-white/42">Publicado por <span className="text-[#e9d4ac]">Filipa António</span> no Facebook. O vídeo permanece alojado na plataforma de origem.</p><a href={sourceUrl} target="_blank" rel="noreferrer" className="button-primary shrink-0">Ver vídeo no Facebook <ArrowUpRight size={17} /></a></div>
            <a href={sourceUrl} target="_blank" rel="noreferrer" aria-label="Abrir publicação da Filipa António no Facebook" className="absolute bottom-4 right-5 text-white/25 transition hover:text-[#D59A42]"><Facebook size={16} /></a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
