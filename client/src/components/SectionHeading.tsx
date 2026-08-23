/** Arquitetura de Âmbar: cabeçalho editorial com índice de progressão e coordenada de planta OJM. */
import { motion } from "framer-motion";
import CornerMark from "./CornerMark";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "right";
}

export default function SectionHeading({ index, eyebrow, title, description, light = false, align = "left" }: SectionHeadingProps) {
  const textColor = light ? "text-[#11100e]" : "text-[#f5eddc]";
  const mutedColor = light ? "text-[#625c53]" : "text-[#b9b1a5]";
  const borderColor = light ? "border-[#d8d0c3]" : "border-white/15";

  return (
    <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }} className={`relative grid gap-5 pr-12 lg:grid-cols-[minmax(11rem,0.7fr)_minmax(0,2fr)] lg:gap-10 ${align === "right" ? "lg:ml-auto lg:max-w-5xl" : "max-w-5xl"}`}>
      <CornerMark position={align === "right" ? "top-left" : "top-right"} coordinate={`OJM.${index}`} className={light ? "signature-corner-light" : ""} />
      <div className={`flex items-start gap-3 border-t pt-3 ${borderColor}`}><span className="font-mono text-xs tracking-[0.16em] text-[#D59A42]">{index}</span><span className={`text-xs font-bold uppercase tracking-[0.17em] ${mutedColor}`}>{eyebrow}</span></div>
      <div><h2 className={`font-display text-4xl leading-[0.98] sm:text-5xl lg:text-6xl ${textColor}`}>{title}</h2>{description && <p className={`mt-5 max-w-xl text-base leading-7 ${mutedColor}`}>{description}</p>}</div>
    </motion.div>
  );
}
