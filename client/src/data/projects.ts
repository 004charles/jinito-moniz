/** Arquitetura de Âmbar: etapas visuais do atendimento, preparadas para futura origem de dados. */
import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    id: "avaliacao-criteriosa",
    title: "Avaliação criteriosa",
    category: "Primeiro passo",
    description: "A peça é observada com atenção para que a conversa comece com informação clara.",
    image: "/manus-storage/ouversaria-gold-assessment_4d74d530.jpg",
    layout: "feature",
  },
  {
    id: "materia-em-detalhe",
    title: "Ouro em detalhe",
    category: "Material",
    description: "Cada artigo é considerado pelo que apresenta, com respeito pelo seu valor e contexto.",
    image: "/manus-storage/ouversaria-gold-detail_f3ccf97d.jpg",
    layout: "standard",
  },
  {
    id: "proposta-reservada",
    title: "Proposta reservada",
    category: "Atendimento",
    description: "Uma proposta de compra explicada com clareza, num ambiente calmo e profissional.",
    image: "/manus-storage/ouversaria-gold-bars_cc1b68c9.jpg",
    layout: "standard",
  },
];
