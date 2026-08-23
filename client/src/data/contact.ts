/** Arquitetura de Âmbar: central de configuração dos contactos — sem números ou endereços inventados. */
import type { ContactChannel } from "../types/content";

export const contact = {
  phone: { label: "Telefone", value: "Número a configurar", isConfigured: false } satisfies ContactChannel,
  whatsapp: { label: "WhatsApp", value: "Número a configurar", isConfigured: false } satisfies ContactChannel,
  email: { label: "E-mail", value: "E-mail a configurar", isConfigured: false } satisfies ContactChannel,
  address: { label: "Morada", value: "Morada a configurar", isConfigured: false } satisfies ContactChannel,
  hours: "Segunda a sábado · Horário a confirmar",
  whatsappNumber: "",
  whatsappMessage: "Olá, gostaria de saber mais sobre a Ouversaria Jinito Moniz.",
  socialLinks: [
    { label: "Instagram", href: "#", isConfigured: false },
    { label: "Facebook", href: "#", isConfigured: false },
    { label: "LinkedIn", href: "#", isConfigured: false },
  ],
};

export const getWhatsAppUrl = () =>
  contact.whatsappNumber
    ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`
    : "";
