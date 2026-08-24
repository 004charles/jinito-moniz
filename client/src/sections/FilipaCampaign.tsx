/** Arquitetura de Âmbar: leitor incorporado de campanha autorizada, com crédito e origem preservados. */
import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, MapPin, Phone } from "lucide-react";
import CornerMark from "../components/CornerMark";

const sourceUrl = "https://www.facebook.com/Filipaanttonio/videos/compramos-todo-tipo-de-ouropagamos-o-pre%C3%A7o-justoan%C3%A9is-brincos-pulseira-rel%C3%B3gio-e/1770711293924229/";
const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(sourceUrl)}&show_text=false&width=430&height=764`;

export default function FilipaCampaign() {
  return (
    <section className="relative overflow-hidden bg-[#17150f] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#D59A42]/10 blur-[110px]" />
      <div className="relative mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.52 }}>
          <div className="flex items-center gap-3"><span className="h-px w-10 bg-[#D59A42]" /><span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6bd78]">Campanha em destaque</span></div>
          <h2 className="mt-7 max-w-lg font-display text-5xl leading-[0.94] text-[#f8f1e4] sm:text-6xl">Compramos todo tipo de <span className="text-[#D59A42] italic">ouro.</span></h2>
          <p className="mt-6 max-w-md text-base leading-7 text-white/65">Assista à campanha que apresenta as peças avaliadas, o contacto da marca e as localizações divulgadas publicamente em Luanda.</p>
          <div className="mt-8 grid gap-4 border-y border-white/10 py-5 text-sm text-white/64"><p className="flex gap-3"><Phone size={17} className="shrink-0 text-[#D59A42]" />WhatsApp: +244 942 516 456</p><p className="flex gap-3"><MapPin size={17} className="shrink-0 text-[#D59A42]" />Cinco localizações anunciadas em Luanda</p></div>
          <p className="mt-6 max-w-md text-xs leading-5 text-white/42">Vídeo publicado por <span className="text-[#e9d4ac]">Filipa António</span>. A reprodução é feita a partir do Facebook e o conteúdo continua alojado na plataforma de origem.</p>
        </motion.div>
        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.08 }} className="relative mx-auto w-full max-w-[430px] overflow-hidden border border-[#D59A42]/35 bg-black">
          <CornerMark position="top-right" coordinate="OJM.V01" />
          <div className="relative aspect-[9/16] overflow-hidden bg-black">
            <iframe title="Vídeo de campanha da Jinito Móniz publicado por Filipa António" src={embedUrl} className="absolute inset-0 h-full w-full border-0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen />
          </div>
          <a href={sourceUrl} target="_blank" rel="noreferrer" aria-label="Abrir publicação da Filipa António no Facebook" className="absolute bottom-4 left-4 grid h-8 w-8 place-items-center bg-black/70 text-white/70 transition hover:text-[#D59A42]"><Facebook size={16} /></a>
        </motion.article>
      </div>
    </section>
  );
}
