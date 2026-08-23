/** Arquitetura de Âmbar: navegação fixa, de contraste garantido, com painel móvel preciso e contido. */
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import SiteLogo from "./SiteLogo";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contactos", href: "#contactos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#0b0a08]/92 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl" : "py-5"}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <SiteLogo />
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Navegação principal">
          {navigation.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
        </nav>
        <div className="hidden lg:block">
          <a href="#contactos" className="button-primary button-small">Fale connosco <ArrowUpRight size={16} /></a>
        </div>
        <button type="button" className="grid h-11 w-11 place-items-center border border-white/15 text-white xl:hidden" onClick={() => setOpen(true)} aria-label="Abrir menu" aria-expanded={open}><Menu size={21} /></button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className="fixed inset-0 z-50 bg-[#0b0a08]/95 backdrop-blur-xl xl:hidden">
            <motion.div initial={{ x: "12%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "12%", opacity: 0 }} transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }} className="ml-auto flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#10100e] p-6 sm:p-8">
              <div className="flex items-center justify-between"><SiteLogo /><button type="button" onClick={closeMenu} className="grid h-11 w-11 place-items-center border border-white/15 text-white" aria-label="Fechar menu"><X size={21} /></button></div>
              <nav className="mt-14 flex flex-col" aria-label="Navegação móvel">
                {navigation.map((item, index) => <motion.a initial={{ x: 18, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 * index + 0.08 }} key={item.href} href={item.href} onClick={closeMenu} className="border-t border-white/10 py-5 font-display text-4xl text-[#f5eddc] transition hover:text-[#D59A42]">{item.label}</motion.a>)}
              </nav>
              <div className="mt-auto border-t border-white/10 pt-6"><a onClick={closeMenu} href="#contactos" className="button-primary w-full justify-center">Fale connosco <ArrowUpRight size={17} /></a><p className="mt-5 text-xs leading-5 text-white/45">Jinito Móniz · compra e venda de ouro</p></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
