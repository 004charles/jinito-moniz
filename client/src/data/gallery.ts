/** Arquitetura de Âmbar: galeria de materiais e rituais de compra de ouro, pronta para futura API. */
import type { GalleryItem } from "../types/content";

export const galleryItems: GalleryItem[] = [
  {
    id: "gold-assessment",
    title: "Avaliação atenta",
    category: "Análise",
    image: "/manus-storage/ouversaria-gold-assessment_4d74d530.jpg",
    ratio: "landscape",
  },
  {
    id: "gold-bars",
    title: "Valor material",
    category: "Ouro",
    image: "/manus-storage/ouversaria-gold-bars_cc1b68c9.jpg",
    ratio: "portrait",
  },
  {
    id: "gold-jewelry",
    title: "Peças em detalhe",
    category: "Joalharia",
    image: "/manus-storage/ouversaria-gold-detail_f3ccf97d.jpg",
    ratio: "square",
  },
  {
    id: "founder-presence",
    title: "Atendimento pessoal",
    category: "Jinito Móniz",
    image: "/manus-storage/jinito-moniz-founder_200b8f31.jpg",
    ratio: "tall",
  },
];
