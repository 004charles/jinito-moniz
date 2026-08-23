/** Arquitetura de Âmbar: rodapé discreto que confirma a especialidade de compra de ouro e fecha o percurso de contacto. */
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SiteLogo from "../components/SiteLogo";
import { contact } from "../data/contact";

const footerLinks = [
  { group: "Compra de ouro", links: [{ label: "Como avaliamos", href: "#servicos" }, { label: "O processo", href: "#projetos" }, { label: "Ouro em detalhe", href: "#galeria" }] },
  { group: "Explorar", links: [{ label: "Início", href: "#inicio" }, { label: "Sobre nós", href: "#sobre" }, { label: "Contactos", href: "#contactos" }] },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0a08] px-5 pt-16 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-[1320px]"><div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.6fr_.6fr_1fr]"><div><SiteLogo /><p className="mt-6 max-w-sm text-sm leading-6 text-white/54">Compra de ouro com uma avaliação explicada de forma clara, atendimento reservado e atenção a cada peça.</p><div className="mt-7 flex gap-2"><span className="social-icon" title="Instagram a configurar"><Instagram size={16} /></span><span className="social-icon" title="LinkedIn a configurar"><Linkedin size={16} /></span></div></div>{footerLinks.map((column) => <div key={column.group}><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D59A42]">{column.group}</p><ul className="mt-5 space-y-3">{column.links.map((link) => <li key={link.href}><a href={link.href} className="footer-link">{link.label}<ArrowUpRight size={14} /></a></li>)}</ul></div>)}<div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D59A42]">Contactos</p><div className="mt-5 space-y-4 text-sm text-white/58"><p className="flex gap-3"><Phone size={16} className="shrink-0 text-[#D59A42]" />{contact.phone.value}</p><p className="flex gap-3"><Mail size={16} className="shrink-0 text-[#D59A42]" />{contact.email.value}</p><p className="flex gap-3"><MapPin size={16} className="shrink-0 text-[#D59A42]" />{contact.address.value}</p></div></div></div><div className="flex flex-col gap-3 py-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Ouversaria Jinito Moniz. Todos os direitos reservados.</p><p>Compra de ouro · contactos e informações a configurar</p></div></div>
    </footer>
  );
}
