/** Arquitetura de Âmbar: narrativa assimétrica do processo de compra, em vez de uma grelha genérica de projetos. */
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CornerMark from "../components/CornerMark";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projetos" className="bg-[#0b0a08] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1320px]"><SectionHeading index="03" eyebrow="Como funciona" title="Do ouro à proposta, com transparência." description="Uma sequência simples para quem quer compreender a avaliação e receber uma proposta de compra com confiança." />
      <div className="mt-14 grid gap-5 lg:grid-cols-12">{projects.map((project, index) => <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08, duration: 0.52 }} className={`project-card group relative overflow-hidden ${project.layout === "feature" ? "min-h-[510px] lg:col-span-7" : `min-h-[360px] lg:col-span-5 ${index === 2 ? "lg:col-start-3" : ""}`}`}><img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b0a08] via-[#0b0a08]/10 to-[#0b0a08]/10" /><CornerMark position={index === 1 ? "top-left" : "top-right"} className="z-[2]" /><div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e6bd78]">{project.category}</p><div className="mt-2 flex items-end justify-between gap-5"><div><h3 className="font-display text-3xl text-[#f8f1e4] sm:text-4xl">{project.title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-white/67">{project.description}</p></div><a href="#contactos" className="grid h-12 w-12 shrink-0 place-items-center border border-white/30 bg-black/30 text-[#f8f1e4] backdrop-blur transition hover:border-[#D59A42] hover:bg-[#D59A42] hover:text-black" aria-label={`Falar sobre ${project.title}`}><ArrowUpRight size={19} /></a></div></div></motion.article>)}</div>
    </div></section>
  );
}

