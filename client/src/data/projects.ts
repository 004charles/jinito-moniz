/** Arquitetura de Âmbar: projetos demonstrativos, prontos para trocar por respostas de GET /api/projects/. */
import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    id: "experiencia-privada",
    title: "Experiência privada",
    category: "Atendimento",
    description:
      "Um ambiente de atendimento pensado para que a conversa aconteça com conforto, tempo e atenção total.",
    image: "/manus-storage/ouversaria-project-atelier_55f68d2a.png",
    layout: "feature",
  },
  {
    id: "presenca-editorial",
    title: "Presença editorial",
    category: "Marca",
    description:
      "Uma linguagem visual que aproxima a imagem da marca de uma experiência premium e contemporânea.",
    image: "/manus-storage/jinitomoniz3_4306257a.jpg",
    layout: "standard",
  },
  {
    id: "curadoria-detalhe",
    title: "Curadoria de detalhe",
    category: "Seleção",
    description:
      "Da primeira referência ao acabamento final, o padrão de avaliação é mantido em cada escolha.",
    image: "/manus-storage/ouversaria-gallery-materials_e4d308e8.png",
    layout: "standard",
  },
];
