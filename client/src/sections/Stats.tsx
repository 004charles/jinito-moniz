/** Arquitetura de Âmbar: números de demonstração destacados com transparência explícita sobre a sua origem. */
import AnimatedCounter from "../components/AnimatedCounter";
import CornerMark from "../components/CornerMark";
import { stats } from "../data/stats";

export default function Stats() {
  return (
    <section className="bg-[#0b0a08] px-5 py-20 sm:px-8 lg:px-12"><div className="relative mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.8fr_2.2fr] lg:gap-20"><CornerMark position="top-right" /><div><p className="text-xs font-bold uppercase tracking-[0.17em] text-[#D59A42]">Indicadores de referência</p><h2 className="mt-5 font-display text-4xl leading-none text-[#f5eddc]">Números com <span className="italic text-[#D59A42]">clareza.</span></h2><p className="mt-5 max-w-xs text-sm leading-6 text-white/56">Os valores abaixo são apenas demonstrativos e foram isolados em <code className="text-[#e6bd78]">src/data/stats.ts</code> para atualização quando forem confirmados.</p></div><div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">{stats.map((stat) => <AnimatedCounter key={stat.id} stat={stat} />)}</div></div></section>
  );
}
