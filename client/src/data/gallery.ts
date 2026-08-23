/** Arquitetura de Âmbar: galeria demonstrativa, preparada para GET /api/gallery/. */
import type { GalleryItem } from "../types/content";

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Identidade em presença",
    category: "Marca",
    image: "/manus-storage/jinitomoniz1_f8560394.jpg",
    ratio: "tall",
  },
  {
    id: "gallery-2",
    title: "Ritual de seleção",
    category: "Curadoria",
    image: "/manus-storage/ouversaria-gallery-materials_e4d308e8.png",
    ratio: "portrait",
  },
  {
    id: "gallery-3",
    title: "Conversa que orienta",
    category: "Atendimento",
    image: "/manus-storage/jinitomoniz3_4306257a.jpg",
    ratio: "square",
  },
  {
    id: "gallery-4",
    title: "Método partilhado",
    category: "Processo",
    image: "/manus-storage/ouversaria-project-atelier_55f68d2a.png",
    ratio: "landscape",
  },
];
