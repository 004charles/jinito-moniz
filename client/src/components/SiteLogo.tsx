/** Arquitetura de Âmbar: assinatura compacta com monograma dourado e foco explícito em compra de ouro. */
import { Link } from "react-router-dom";

const logoUrl = "/manus-storage/jinito-moniz-mark_b7a0fafe.png";

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
      <img src={logoUrl} alt="Monograma Jinito Móniz" className={`w-auto object-contain ${compact ? "h-10 max-w-10" : "h-11 max-w-11"}`} />
      {!compact && (
        <span className="hidden leading-none sm:block">
          <span className="block font-display text-lg tracking-[0.11em] text-[#f5eddc]">JINITO MÓNIZ</span>
          <span className="mt-1 block text-[0.56rem] font-bold tracking-[0.2em] text-[#D59A42]">COMPRA DE OURO</span>
        </span>
      )}
    </Link>
  );
}

export { logoUrl };
