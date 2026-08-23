/** Arquitetura de Âmbar: ação flutuante contida, configurável e sem contactar números fictícios. */
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../data/contact";

export default function WhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl();
  const handleClick = () => {
    if (!whatsappUrl) window.alert("O número de WhatsApp ainda precisa de ser configurado em src/data/contact.ts.");
  };

  return whatsappUrl ? (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Abrir conversa no WhatsApp"><MessageCircle size={21} /></a>
  ) : (
    <button type="button" className="whatsapp-float" onClick={handleClick} aria-label="WhatsApp ainda não configurado"><MessageCircle size={21} /></button>
  );
}
