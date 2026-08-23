/** Arquitetura de Âmbar: o diálogo pré-instalado apresenta imagens sem retirar foco ou acessibilidade. */
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "../types/content";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "./ui/dialog";

interface GalleryLightboxProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onOpenChange: (open: boolean) => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({ items, activeIndex, onOpenChange, onNavigate }: GalleryLightboxProps) {
  const active = activeIndex === null ? null : items[activeIndex];
  const previous = () => activeIndex !== null && onNavigate((activeIndex - 1 + items.length) % items.length);
  const next = () => activeIndex !== null && onNavigate((activeIndex + 1) % items.length);

  return (
    <Dialog open={activeIndex !== null} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="max-w-[min(96vw,1120px)] border-white/10 bg-[#0c0b09] p-0 shadow-2xl">
        {active && (
          <div className="relative overflow-hidden">
            <DialogTitle className="sr-only">{active.title}</DialogTitle>
            <img src={active.image} alt={active.title} className="max-h-[80vh] min-h-[40vh] w-full object-contain bg-black" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 to-transparent px-5 pb-5 pt-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D59A42]">{active.category}</p>
                <p className="mt-1 font-display text-2xl text-white">{active.title}</p>
              </div>
              <p className="font-mono text-xs text-white/55">{String((activeIndex ?? 0) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</p>
            </div>
            <DialogClose className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition hover:border-[#D59A42] hover:text-[#D59A42]" aria-label="Fechar galeria"><X size={19} /></DialogClose>
            <button onClick={previous} className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition hover:border-[#D59A42] hover:text-[#D59A42] sm:left-5" aria-label="Imagem anterior"><ChevronLeft size={22} /></button>
            <button onClick={next} className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition hover:border-[#D59A42] hover:text-[#D59A42] sm:right-5" aria-label="Próxima imagem"><ChevronRight size={22} /></button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
