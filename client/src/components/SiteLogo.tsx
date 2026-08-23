/** Arquitetura de Âmbar: a marca oficial dourada é a âncora visual em superfícies escuras e claras. */
import { Link } from "react-router-dom";

const logoUrl = "/manus-storage/logo-jinito-moniz-alpha_cea17db3.png";

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
      <img src={logoUrl} alt="Jinito Móniz — compra e venda de ouro" className={`w-auto object-contain ${compact ? "h-10 max-w-10" : "h-12 max-w-[205px]"}`} />
    </Link>
  );
}

export { logoUrl };
