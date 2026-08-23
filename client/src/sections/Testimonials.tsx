/** Arquitetura de Âmbar: secção preparada para depoimentos reais, sem simulações de avaliações de clientes. */
import { Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[#eee8dd] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1320px]"><SectionHeading index="06" eyebrow="Relações em primeiro lugar" title="O que dizem os nossos clientes" description="Um espaço preparado para acolher testemunhos reais e autorizados, assim que estiverem disponíveis." light />
      {testimonials.length === 0 ? <div className="mt-14 grid min-h-[260px] place-items-center border border-[#d5ccbd] bg-[#e7dfd2] p-8 text-center"><div><Quote className="mx-auto text-[#b77618]" size={28} /><p className="mx-auto mt-5 max-w-lg font-display text-3xl text-[#28231e]">A confiança será contada por quem viveu a experiência.</p><p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#625b51]">Nesta versão de frontend, não foram inventados comentários, nomes, fotografias ou avaliações. Depoimentos reais poderão ser ligados futuramente em <code>src/data/testimonials.ts</code>.</p></div></div> : null}
    </div></section>
  );
}
