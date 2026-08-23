/** Arquitetura de Âmbar: serviços de compra de ouro separados da interface para futura origem de dados. */
import type { Service } from "../types/content";

export const services: Service[] = [
  {
    id: "avaliacao-ouro",
    order: "01",
    title: "Avaliação de ouro",
    description: "Analisamos as suas peças com atenção aos detalhes relevantes antes de apresentar qualquer proposta.",
    icon: "scale",
  },
  {
    id: "proposta-compra",
    order: "02",
    title: "Proposta de compra",
    description: "Depois da avaliação, explicamos a proposta de compra de forma direta, reservada e sem pressão.",
    icon: "coins",
  },
  {
    id: "analise-pecas",
    order: "03",
    title: "Análise de peças",
    description: "Joias, correntes, anéis e outros artigos em ouro são observados com critério e cuidado.",
    icon: "shield",
  },
  {
    id: "atendimento-reservado",
    order: "04",
    title: "Atendimento reservado",
    description: "Um atendimento organizado para que possa falar sobre o seu ouro com discrição e tranquilidade.",
    icon: "handshake",
  },
];
