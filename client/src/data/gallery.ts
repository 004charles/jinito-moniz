/** Arquitetura de Âmbar: galeria de materiais e rituais de compra de ouro, pronta para futura API. */
import type { GalleryItem } from "../types/content";

export const galleryItems: GalleryItem[] = [
  {
    id: "gold-assessment",
    title: "Avaliação atenta",
    category: "Análise",
    image: "/assets/ouversaria-gold-assessment.jpg",
    ratio: "landscape",
  },
  {
    id: "gold-bars",
    title: "Valor material",
    category: "Ouro",
    image: "/assets/ouversaria-gold-bars.jpg",
    ratio: "portrait",
  },
  {
    id: "gold-jewelry",
    title: "Peças em detalhe",
    category: "Joalharia",
    image: "/assets/ouversaria-gold-detail.jpg",
    ratio: "square",
  },
  {
    id: "founder-presence",
    title: "Atendimento pessoal",
    category: "Jinito Móniz",
    image: "/assets/jinito-moniz-founder.jpg",
    ratio: "tall",
  },
];
