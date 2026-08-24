/** Arquitetura de Âmbar: rodapé discreto com canais públicos verificados para compra e venda de ouro. */
import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import SiteLogo from "../components/SiteLogo";
import { contact } from "../data/contact";

const footerLinks = [
  { group: "Compra e venda", links: [{ label: "Como avaliamos", href: "#servicos" }, { label: "O processo", href: "#projetos" }, { label: "Ouro em detalhe", href: "#galeria" }] },
  { group: "Explorar", links: [{ label: "Início", href: "#inicio" }, { label: "Sobre nós", href: "#sobre" }, { label: "Contactos", href: "#contactos" }] },
];

export default function Footer() {
  const instagram = contact.socialLinks.find((link) => link.label === "Instagram");
  const facebook = contact.socialLinks.find((link) => link.label === "Facebook");
  const whatsApp = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;
  return <footer className="bg-[#0b0a08] px-5 pt-16 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-[1320px]"><div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.6fr_.6fr_1fr]"><div><SiteLogo /><p className="mt-6 max-w-sm text-sm leading-6 text-white/54">Compra e venda de ouro com uma avaliação explicada de forma clara, atendimento reservado e atenção a cada peça.</p><div className="mt-7 flex gap-2">{instagram?.isConfigured && <a href={instagram.href} target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram oficial da Jinito Móniz"><Instagram size={16} /></a>}{facebook?.isConfigured && <a href={facebook.href} target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook oficial da Jinito Móniz"><Facebook size={16} /></a>}</div></div>{footerLinks.map((column) => <div key={column.group}><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D59A42]">{column.group}</p><ul className="mt-5 space-y-3">{column.links.map((link) => <li key={link.href}><a href={link.href} className="footer-link">{link.label}<ArrowUpRight size={14} /></a></li>)}</ul></div>)}<div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D59A42]">Contactos</p><div className="mt-5 space-y-4 text-sm text-white/58"><a href="tel:+244942516456" className="flex gap-3 transition hover:text-white"><Phone size={16} className="shrink-0 text-[#D59A42]" />{contact.phone.value}</a><a href={whatsApp} target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-white"><Mail size={16} className="shrink-0 text-[#D59A42]" />WhatsApp: {contact.whatsapp.value}</a><p className="flex gap-3"><MapPin size={16} className="shrink-0 text-[#D59A42]" />{contact.address.value}</p></div></div></div><div className="flex flex-col gap-3 py-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Jinito Móniz. Todos os direitos reservados.</p><p>Compra e venda de ouro · Luanda, Angola</p></div></div></footer>;
}
