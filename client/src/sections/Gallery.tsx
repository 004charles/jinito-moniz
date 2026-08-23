/** Arquitetura de Âmbar: mosaico de imagens com profundidade, controlo de leitura e lightbox acessível. */
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { useState } from "react";
import GalleryLightbox from "../components/GalleryLightbox";
import CornerMark from "../components/CornerMark";
import SectionHeading from "../components/SectionHeading";
import { galleryItems } from "../data/gallery";

const ratioClass = { portrait: "row-span-2 min-h-[470px]", landscape: "min-h-[285px]", square: "min-h-[320px]", tall: "row-span-2 min-h-[470px]" };

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section id="galeria" className="bg-[#eee8dd] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1320px]"><SectionHeading index="04" eyebrow="Em foco" title="Galeria" description="Um olhar sobre presença, materiais e contextos que ajudam a revelar o cuidado por trás da marca." light align="right" />
      <div className="mt-14 grid auto-rows-[235px] gap-4 md:grid-cols-2 lg:grid-cols-4">{galleryItems.map((item, index) => <motion.button key={item.id} type="button" initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }} onClick={() => setActiveIndex(index)} className={`gallery-tile group relative overflow-hidden text-left ${ratioClass[item.ratio]} ${index === 3 ? "lg:col-span-2" : ""}`}><img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" /><div className="absolute inset-0 bg-gradient-to-t from-[#11100e]/90 via-[#11100e]/10 to-transparent transition duration-300 group-hover:from-[#11100e]/80" /><CornerMark position={index % 2 === 0 ? "top-left" : "top-right"} className="z-[2] opacity-0 transition duration-300 group-hover:opacity-100" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5"><div><p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#e6bd78]">{item.category}</p><p className="mt-1 font-display text-2xl text-[#f5eddc]">{item.title}</p></div><span className="grid h-9 w-9 translate-y-1 place-items-center border border-white/20 bg-black/25 text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"><Maximize2 size={16} /></span></div></motion.button>)}</div>
    </div><GalleryLightbox items={galleryItems} activeIndex={activeIndex} onOpenChange={(isOpen) => !isOpen && setActiveIndex(null)} onNavigate={setActiveIndex} /></section>
  );
}
