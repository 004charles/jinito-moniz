/** Arquitetura de Âmbar: canto OJM recorrente, inspirado no arco e no monograma dourado do logótipo oficial. */
interface CornerMarkProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export default function CornerMark({ position = "top-right", className = "" }: CornerMarkProps) {
  return <span aria-hidden="true" className={`signature-corner signature-corner-${position} ${className}`} />;
}
