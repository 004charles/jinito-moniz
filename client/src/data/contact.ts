/** Arquitetura de Âmbar: contactos públicos verificados, centralizados para futura origem de dados. */
import type { ContactChannel } from "../types/content";

export const contact = {
  phone: { label: "Telefone", value: "+244 942 516 456", isConfigured: true } satisfies ContactChannel,
  whatsapp: { label: "WhatsApp", value: "+244 942 516 456", isConfigured: true } satisfies ContactChannel,
  email: { label: "E-mail", value: "Contacto via WhatsApp", isConfigured: false } satisfies ContactChannel,
  address: { label: "Localização", value: "Luanda, Angola", isConfigured: true } satisfies ContactChannel,
  hours: "Horário a confirmar",
  whatsappNumber: "244942516456",
  whatsappMessage: "Olá, gostaria de vender o meu ouro e agendar uma avaliação.",
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/jintimoniz_compra_de_ouro/", isConfigured: true },
    { label: "Facebook", href: "https://www.facebook.com/100063836927115/", isConfigured: true },
    { label: "LinkedIn", href: "#", isConfigured: false },
  ],
};

export const getWhatsAppUrl = () =>
  contact.whatsappNumber
    ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`
    : "";
