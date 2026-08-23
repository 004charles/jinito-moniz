/** Arquitetura de Âmbar: serviços separados da interface para uma futura origem de dados. */
import type { Service } from "../types/content";

export const services: Service[] = [
  {
    id: "compra-ouro",
    order: "01",
    title: "Compra de ouro",
    description:
      "Atendimento reservado para quem procura transformar ativos em decisões seguras e bem acompanhadas.",
    icon: "coins",
  },
  {
    id: "venda-ouro",
    order: "02",
    title: "Venda de ouro",
    description:
      "Uma seleção orientada por clareza, apresentação cuidada e atenção a cada detalhe do processo.",
    icon: "scale",
  },
  {
    id: "avaliacao",
    order: "03",
    title: "Avaliação de peças",
    description:
      "Leitura criteriosa de peças e materiais, com uma conversa direta sobre os próximos passos possíveis.",
    icon: "shield",
  },
  {
    id: "parcerias",
    order: "04",
    title: "Parcerias privadas",
    description:
      "Relações profissionais desenhadas para responder a necessidades específicas com discrição e método.",
    icon: "handshake",
  },
];
