/** Arquitetura de Âmbar: serviços de compra e venda de ouro separados da interface para futura origem de dados. */
import type { Service } from "../types/content";

export const services: Service[] = [
  { id: "avaliacao-ouro", order: "01", title: "Avaliação de ouro", description: "Analisamos as suas peças com atenção aos detalhes relevantes antes de apresentar qualquer proposta.", icon: "scale" },
  { id: "compra-ouro", order: "02", title: "Compra de ouro", description: "Se pretende vender o seu ouro, apresentamos uma proposta clara, reservada e sem pressão.", icon: "coins" },
  { id: "venda-ouro", order: "03", title: "Venda de ouro", description: "Ajudamos a encontrar peças em ouro com atendimento próximo, segurança e informação transparente.", icon: "shield" },
  { id: "atendimento-reservado", order: "04", title: "Atendimento reservado", description: "Um atendimento organizado para comprar ou vender ouro com discrição e tranquilidade.", icon: "handshake" },
];
