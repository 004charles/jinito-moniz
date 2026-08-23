# Direção de Design — Ouversaria Jinito Moniz

## Três abordagens exploradas

| Tema | Introdução breve | Probabilidade |
| --- | --- | --- |
| Arquitetura de Âmbar | Uma estética editorial de luxo, com fundos de obsidiana, dourado âmbar e enquadramentos de inspiração arquitetónica. Transmite autoridade serena, rigor e construção duradoura. | 0.06 |
| Atelier de Grafite | Uma linguagem tátil e monocromática, inspirada em materiais de oficina, com fotografia documental e microdetalhes de acabamento. Aproxima a marca do lado humano da execução. | 0.04 |
| Linha de Precisão | Uma direção tecnológica, minimalista e escultural baseada em planos escuros, linhas técnicas finas e luz azul-petróleo controlada. Apresenta a empresa como parceira de visão, método e entrega. | 0.08 |

---

## Abordagem escolhida: Arquitetura de Âmbar

### Movimento de design

**Luxury editorial industrial**: a sofisticação discreta de publicações de arquitetura e moda masculina encontra a escala segura de uma empresa de execução. O site evita o futurismo ruidoso e constrói prestígio por meio de contraste, ritmo e pormenores materiais.

### Princípios centrais

1. **Contraste disciplinado** — preto profundo, marfim quente e âmbar existem em proporções controladas; o destaque só aparece onde conduz uma decisão.
2. **Composição assimétrica** — blocos editoriais, sobreposições e cortes verticais fazem a página avançar em vez de a reduzir a uma grelha comum.
3. **Materialidade silenciosa** — transparências escuras, granulação subtil e linhas finas evocam precisão, sem efeitos decorativos excessivos.
4. **Fotografia como prova de presença** — imagens em grande escala dão rosto, escala e humanidade à marca; cada uma recebe enquadramento e contraste próprios.

### Filosofia de cor

O **obsidiana** cria uma base séria e tecnológica, como um ambiente de trabalho onde cada detalhe se vê. O **marfim** abre momentos de respiração e leitura. O **âmbar fundido** é a assinatura: não é ouro ostentatório, mas energia quente, seleção cuidadosa e excelência revelada. O azul-petróleo aparece apenas como reflexo frio em traços, para aprofundar a sensação de precisão contemporânea.

### Paradigma de layout

A página usa uma **narrativa em faixa arquitetónica**: uma linha vertical de progresso e pequenas etiquetas de secção acompanham uma sequência de painéis de larguras desiguais. O hero é uma composição de duas colunas descentradas; as secções alternam entre páginas densas escuras e superfícies em marfim. Os cartões não são apenas uma grade: formam ritmos escalonados, com um elemento dominante a quebrar a repetição.

### Elementos de assinatura

1. **Marca de canto âmbar** — um quadrado aberto em forma de monograma geométrico, repetido no logótipo, nos indicadores e nos cantos de imagens.
2. **Linhas de coordenadas** — traços ultrafinos com números de referência e rótulos curtos dão a sensação de uma planta de projeto.
3. **Halo de âmbar** — luz desfocada, usada pontualmente atrás de CTAs, números e imagens-chave.

### Filosofia de interação

As interações são precisas, nunca performativas. Cartões elevam ligeiramente e revelam uma linha de informação; imagens escurecem com uma máscara elegante que apresenta a categoria. A navegação móvel entra como um painel de estúdio, a partir da direita, preservando contexto e permitindo saída clara.

### Animação

Entradas usam opacidade e deslocamento de 16–28 px, com atraso em cascata de 50–70 ms. Elementos de coordenada deslizam apenas alguns píxeis. Modais e menu móvel escalam de 0,97, com duração de 220–300 ms e curva `cubic-bezier(0.23, 1, 0.32, 1)`. Respeitar `prefers-reduced-motion` e nunca animar dimensões de layout.

### Sistema tipográfico

**Manrope** faz o corpo e a navegação: limpo, compacto e extremamente legível. **DM Serif Display** cria títulos editoriais com contraste humano e memorável. Títulos são grandes, com quebras deliberadas e itálico apenas em palavras-chave; texto de apoio tem largura limitada, espaçamento generoso e tom marfim/ardósia conforme a superfície.

### Essência da marca

**Ouversaria Jinito Moniz transforma ambição em trabalhos executados com presença, método e um padrão de excelência visível.**

Personalidade: **segura, meticulosa, visionária**.

### Voz da marca

Headlines são assertivas e serenas; CTAs descrevem ação concreta; microcopy evita promessas vagas e privilegia clareza.

> “Da primeira conversa ao último detalhe, o padrão é o mesmo.”

> “Apresente o seu desafio. Nós estruturamos o próximo passo.”

### Wordmark e logótipo

O logótipo é um **monograma OJM abstrato**: três traços geométricos formam uma janela aberta e ascendente, sugerindo visão e execução. O símbolo aparece em âmbar sobre preto ou em obsidiana sobre marfim; o wordmark usa Manrope com espaçamento amplo e uma abreviação discreta em pequenos formatos.

### Cor de assinatura

**Âmbar Jinito — `#D59A42`**. Um âmbar de metal aquecido que posiciona a marca entre a elegância artesanal e a precisão empresarial.

## Decisões de Estilo

- Evitar gradientes roxos, néon e cartões excessivamente arredondados.
- Usar fotos fornecidas como presença editorial da marca, com sobreposições que garantam legibilidade.
- Tratar dados de estatística e testemunhos como conteúdos de demonstração claramente identificáveis, sem lhes atribuir factualidade.
