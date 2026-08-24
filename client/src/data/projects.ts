/** Arquitetura de Âmbar: etapas visuais de compra e venda de ouro, preparadas para futura origem de dados. */
import type { Project } from "../types/content";

export const projects: Project[] = [
  { id: "avaliacao-criteriosa", title: "Avaliação criteriosa", category: "Primeiro passo", description: "A peça é observada com atenção para que a conversa comece com informação clara.", image: "/assets/ouversaria-gold-assessment.jpg", layout: "feature" },
  { id: "escolha-em-detalhe", title: "Ouro em detalhe", category: "Compra ou venda", description: "Cada artigo é considerado pelo que apresenta, com respeito pelo seu valor e contexto.", image: "/assets/ouversaria-gold-detail.jpg", layout: "standard" },
  { id: "proposta-transparente", title: "Proposta transparente", category: "Atendimento", description: "Uma proposta de compra ou venda explicada com clareza, num ambiente calmo e profissional.", image: "/assets/ouversaria-gold-bars.jpg", layout: "standard" },
];
