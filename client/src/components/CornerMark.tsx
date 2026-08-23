/** Arquitetura de Âmbar: marca de canto com coordenada OJM, usada como assinatura estrutural em imagens e painéis. */
interface CornerMarkProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  coordinate?: string;
}

export default function CornerMark({ position = "top-right", className = "", coordinate = "OJM" }: CornerMarkProps) {
  return (
    <span aria-hidden="true" className={`signature-corner signature-corner-${position} ${className}`}>
      <span className="signature-coordinate">{coordinate}</span>
    </span>
  );
}
