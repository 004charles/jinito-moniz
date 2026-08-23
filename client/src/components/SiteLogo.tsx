/** Arquitetura de Âmbar: a marca oficial dourada é a âncora visual em superfícies escuras e claras. */
import { Link } from "react-router-dom";

const logoUrl = "/manus-storage/logo-jinito-moniz_9b75b42a.webp";

interface SiteLogoProps {
  compact?: boolean;
  className?: string;
}

export default function SiteLogo({ compact = false, className = "" }: SiteLogoProps) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D59A42] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080807] ${className}`}
      aria-label="Ir para o início"
    >
      <span className={`overflow-hidden rounded-sm border border-[#D59A42]/35 bg-black ${compact ? "h-10 w-10" : "h-12 w-12"}`}>
        <img src={logoUrl} alt="Monograma Jinito Móniz" className="h-full w-full object-cover object-[29%_53%] scale-[2.05]" />
      </span>
      {!compact && (
        <span className="hidden leading-none sm:block">
          <span className="block font-display text-lg tracking-[0.11em] text-[#f5eddc]">JINITO MÓNIZ</span>
          <span className="mt-1 block text-[0.56rem] font-bold tracking-[0.2em] text-[#D59A42]">COMPRA E VENDA DE OURO</span>
        </span>
      )}
    </Link>
  );
}

export { logoUrl };
