/** Arquitetura de Âmbar: etapas visuais do atendimento, preparadas para futura origem de dados. */
import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    id: "avaliacao-criteriosa",
    title: "Avaliação criteriosa",
    category: "Primeiro passo",
    description: "A peça é observada com atenção para que a conversa comece com informação clara.",
    image: "/assets/ouversaria-gold-assessment.jpg",
    layout: "feature",
  },
  {
    id: "materia-em-detalhe",
    title: "Ouro em detalhe",
    category: "Material",
    description: "Cada artigo é considerado pelo que apresenta, com respeito pelo seu valor e contexto.",
    image: "/assets/ouversaria-gold-detail.jpg",
    layout: "standard",
  },
  {
    id: "proposta-reservada",
    title: "Proposta reservada",
    category: "Atendimento",
    description: "Uma proposta de compra explicada com clareza, num ambiente calmo e profissional.",
    image: "/assets/ouversaria-gold-bars.jpg",
    layout: "standard",
  },
];
