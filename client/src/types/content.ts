/** Arquitetura de Âmbar: contratos simples para conteúdo estático facilmente substituível por API. */

export type ServiceIconName = "coins" | "scale" | "shield" | "handshake";

export interface Service {
  id: string;
  order: string;
  title: string;
  description: string;
  icon: ServiceIconName;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  layout: "feature" | "standard";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  ratio: "portrait" | "landscape" | "square" | "tall";
}

export interface Stat {
  id: string;
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  photo: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href?: string;
  isConfigured: boolean;
}
