# Teagar Company Atelier

## Direção editorial — coleção 01 / matéria em trânsito

**Status:** direção aprovada para implementação · **Revisão:** 01 · **Idioma:** pt-BR

Este documento é a especificação de conteúdo e direção da vitrine. Ele não é a implementação da página. A coleção deve parecer uma edição de moda independente, não uma loja genérica nem uma cópia do guia de sistema.

## 1. Conceito

### Matéria em trânsito

**Matéria em trânsito** trata a roupa como instrumento de deslocamento: peças construídas para atravessar uma manhã de trabalho, uma plataforma, uma rua molhada e a noite sem perder forma. O olhar é de ateliê e de oficina ao mesmo tempo. Mostramos costura, dobra, peso e uso; não prometemos uma identidade pronta para o visitante.

O site funciona como uma folha de especificação que ganhou corpo editorial. O carvão cria o campo de concentração. O papel serve para leitura e comparação. O laranja `#FF6700` marca uma decisão, uma chamada ou uma edição limitada. O azul blueprint identifica orientação, não decoração. Linhas, cotas e coordenadas devem explicar a peça ou organizar o espaço, nunca simular complexidade.

### Tese

> Vestir é escolher o que acompanha o movimento.

### Três princípios

1. **Função antes de fantasia.** Toda peça é apresentada por construção, matéria e situação de uso antes de tendência.
2. **Precisão sem frieza.** A linguagem técnica dá confiança; a fotografia, a textura e a voz humana dão desejo.
3. **Menos, melhor.** Uma coleção curta, bem editada, com espaço para respirar. Não usar urgência artificial, contadores ou excesso de selos.

### O que evitar

- Visual de marketplace com filtros dominando a primeira tela.
- Hero centralizado com modelo sorrindo e botão genérico “Compre agora”.
- Gradientes, sombras macias, cantos arredondados de SaaS e excesso de cartões.
- Jargão de luxo vazio: “atemporal”, “exclusivo”, “premium” sem prova material.
- Copiar o sidebar, os exemplos de software, os assets em base64 ou qualquer código da referência.

## 2. Relação clean-room com a referência

Foi observada somente a linguagem visual e comportamental do arquivo `/home/teagar/Downloads/teagar-company-sistema-de-design(3).html`.

### Princípios reutilizados como vocabulário

- Campo carvão/papel técnico, com alto contraste e áreas de respiro.
- Laranja de sinalização pontual e azul de projeto para orientação.
- Grid de 24 px e ritmo espacial baseado em múltiplos de 8 px.
- `Big Shoulders Display` para títulos, `Public Sans` para leitura e `IBM Plex Mono` para metadados.
- Eyebrows numerados, etiquetas operacionais, linhas de registro e microcopy de estado.
- Foco visível, alvos de toque confortáveis, navegação responsiva e `prefers-reduced-motion`.

### Decisões autorais

- A arquitetura é de vitrine editorial: entrada, edição, peças, matéria, credencial e fechamento; não é um manual com vinte capítulos.
- O herói é assimétrico: texto e índice de coleção ocupam uma faixa; a imagem tem recorte vertical e não fica atrás de texto ilegível.
- O catálogo usa uma sequência modular de peças, com variação de escala e uma imagem de detalhe intercalada.
- A narrativa fala de vestir e deslocamento, não de software, produto SaaS ou engenharia.
- A marca textual é `TEAGAR COMPANY ATELIER`; o símbolo deve ser redesenhado ou usado somente a partir de um asset próprio aprovado.

## 3. Mapa de seções

| Ordem | Identificador | Papel | Conteúdo essencial | Ação |
|---|---|---|---|---|
| 00 | `topbar` | Orientação persistente | Marca, “Coleção 01”, links Coleção / Matéria / Sobre, sacola com contagem | Ir para coleção; abrir sacola |
| 01 | `hero` | Capa editorial | Eyebrow `ATELIER / C01`, título, tese, imagem-chave, coordenada `23°32'S · 46°38'W` | `Ver a coleção` |
| 02 | `index` | Índice da edição | Número de peças, estação, local de produção, nota de edição | `Conhecer o processo` |
| 03 | `collection` | Catálogo principal | Título “Peças para atravessar o dia”, 6 produtos e filtro simples por categoria | `Ver peça` / `Adicionar à sacola` |
| 04 | `interlude` | Pausa visual | Foto de gesto, frase curta e legenda técnica | Sem CTA; a imagem é narrativa |
| 05 | `material` | Prova de matéria | Três matérias: algodão encerado, sarja compacta, malha seca; origem, toque e cuidado | `Ler cuidados` |
| 06 | `construction` | Credencial do ateliê | Texto sobre modelagem, pequenos lotes, reparo e rastreabilidade | `Conhecer o ateliê` |
| 07 | `field-note` | Uso real | Ensaio curto “Do primeiro café ao último trem”, 3 situações de uso | `Ler nota de campo` |
| 08 | `closing` | Conversão final | Convite para receber a próxima edição, sem desconto artificial | `Entrar na lista` |
| 09 | `footer` | Fechamento e serviço | Atendimento, trocas, Instagram, privacidade, copyright e status da edição | Links de serviço |

### Fluxo e comportamento

- A navegação principal ancora nas seções; não transformar cada bloco em rota independente.
- `Ver a coleção` leva ao início do catálogo, não a um checkout.
- “Adicionar à sacola” deve dar confirmação textual e manter contexto; não depender apenas de toast colorido.
- Filtros são opcionais e discretos: categoria (camisas, sobreposições, calças) e disponibilidade. Não esconder todas as peças atrás de filtro.
- Sacola, newsletter e detalhes de produto podem ser superfícies futuras; nesta vitrine, seus estados devem ter especificação sem exigir backend real.

## 4. Art direction

### Fotografia

- Luz natural lateral ou flash frontal duro, com sombras reais e textura visível.
- Cenários: concreto, aço escovado, madeira de bancada, tecido cru e rua no fim da tarde.
- Enquadramentos alternados: corpo em movimento, plano médio, still de construção e macro de costura.
- Pessoas reais e variadas em idade, corpo, pele e mobilidade; evitar pose de catálogo congelada.
- Paleta de imagem: carvão, cru, ferrugem, azul profundo e um acento laranja de objeto ou etiqueta.
- Não aplicar filtro vintage uniforme nem fundo de estúdio branco para todos os produtos.

### Composição

- A imagem pode sangrar até a borda; textos permanecem em áreas sólidas e legíveis.
- Uma imagem dominante por momento. Demais imagens entram como evidência, não como mosaico decorativo.
- Usar linhas finas, cruzetas e coordenadas em baixa opacidade; todo elemento técnico precisa ter função de legenda ou alinhamento.
- Cantos de 0 a 4 px. Bordas de 1 px. Sem contêineres empilhados sem necessidade.

## 5. Tokens visuais

Os nomes abaixo são contrato para a implementação. Valores podem ser convertidos para CSS custom properties.

### Cor

| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#1C1B1A` | Texto principal em papel |
| `--charcoal` | `#2B2A28` | Hero, rodapé e superfícies de contraste |
| `--charcoal-deep` | `#201F1D` | Faixas e navegação escura |
| `--paper` | `#F0F1F3` | Fundo principal |
| `--paper-soft` | `#E3E5E9` | Fundo alternado e campos |
| `--white` | `#FFFFFF` | Área de imagem e leitura isolada |
| `--signal` | `#FF6700` | CTA primário, marcação e destaque |
| `--signal-deep` | `#C94E00` | Hover e laranja em texto permitido |
| `--blueprint` | `#1F4B8C` | Links, índices e orientação |
| `--blueprint-tint` | `#DDE6F3` | Fundo informativo discreto |
| `--steel` | `#585C63` | Texto secundário |
| `--line` | `#D3D6DB` | Divisórias em papel |
| `--line-dark` | `rgba(255,255,255,.16)` | Divisórias em carvão |

Não usar `--signal` como texto corrido sobre papel: o contraste é insuficiente em corpo pequeno. Em superfícies laranja, texto `--ink`.

### Tipografia

| Token | Família | Tamanho alvo | Peso / uso |
|---|---|---:|---|
| `--font-display` | `Big Shoulders Display` | 56–144 px | 700–900, títulos em caixa alta |
| `--font-body` | `Public Sans` | 16–21 px | 400–700, leitura, navegação e produto |
| `--font-mono` | `IBM Plex Mono` | 11–13 px | 400–600, labels, SKU, coordenadas e status |
| `--type-h1` | display | `clamp(56px, 10vw, 144px)` | line-height 0.9–0.98 |
| `--type-h2` | display | `clamp(40px, 6vw, 89px)` | line-height 0.95–1.0 |
| `--type-h3` | display | `clamp(28px, 4vw, 55px)` | line-height 1.0 |
| `--type-body` | body | 16–18 px | line-height 1.55–1.7 |
| `--type-meta` | mono | 11–13 px | uppercase, tracking `.08em` |

### Espaçamento e forma

- Base: `8px`; escala: `8, 16, 24, 32, 48, 64, 96, 128px`.
- Grid visual: linhas a cada `24px`, sempre com opacidade baixa.
- Largura de leitura: 60–68ch; largura máxima da página: 1180–1240 px.
- Gutter desktop: 32–48 px; gutter mobile: 16–24 px.
- Raio: `0` para imagens e seções; até `4px` para controles e etiquetas.
- Borda padrão: `1px solid var(--line)`; não usar sombras como estrutura.
- Controle: altura mínima de 44 px; padding horizontal de 16–24 px.

## 6. Desktop e mobile

### Desktop, a partir de 960 px

- Topbar horizontal, com marca à esquerda e índice de coleção à direita.
- Hero em duas colunas assimétricas, aproximadamente 5/7 para texto e imagem; título alinha no eixo esquerdo.
- Catálogo em 3 colunas; o primeiro produto pode ocupar duas colunas para quebrar o ritmo, sem criar carrossel.
- Materialidade em faixa dividida: texto e amostras/imagens com uma divisória de blueprint.
- Seções usam 64–128 px de espaço vertical, conforme peso editorial.
- Navegação de âncoras pode permanecer sticky somente se não encobrir o conteúdo e se houver escape claro.

### Tablet, 721–959 px

- Hero em duas colunas estreitas ou imagem abaixo do título quando a leitura ficar comprimida.
- Catálogo em 2 colunas.
- Reduzir títulos com `clamp`, nunca cortar palavras por overflow.
- Manter a barra de navegação horizontal com rolagem acessível se os links não couberem.

### Mobile, até 720 px

- Topbar em duas linhas ou com menu nativo; marca, coleção e sacola continuam visíveis.
- Hero empilha texto e imagem, com texto primeiro. A imagem deve ter proporção mínima 4:5 e não depender de texto sobreposto.
- Catálogo em uma coluna, com preço, nome, cor e ação sempre próximos da imagem.
- “Ver filtros” abre um disclosure; não usar sidebar fora da tela.
- Coordenadas e labels podem quebrar em duas linhas; nunca reduzir abaixo de 11 px.
- Interlúdio pode usar uma imagem horizontal de largura total, sem parallax obrigatório.
- Footer vira grupos empilhados; links têm área de toque e espaçamento real.
- Evitar carrosséis como única forma de descobrir produtos. Se houver rolagem horizontal complementar, indicar quantidade e permitir teclado.

### Movimento

- Entrada de imagem e linha pode ter fade/translate curto, entre 160 e 280 ms.
- Não animar preço, texto ou layout de forma contínua.
- Com `prefers-reduced-motion: reduce`, remover transformações, parallax e transições não essenciais.

## 7. Acessibilidade e conteúdo inclusivo

- Usar `header`, `nav`, `main`, `section`, `article` e `footer` com uma hierarquia única de H1 e headings sequenciais.
- Oferecer link “Pular para o conteúdo” como primeiro elemento focável.
- Todo link e botão descreve destino/efeito: “Adicionar jaqueta Linha 01 à sacola”, não apenas “Adicionar”.
- Foco visível em laranja, com pelo menos 3 px de espessura e 2 px de offset; nunca remover `outline` sem substituto.
- Contraste mínimo WCAG AA: 4.5:1 para corpo e 3:1 para texto grande. Validar cada combinação real, incluindo hover e disabled.
- Imagens de produto têm alt funcional, por exemplo: “Camisa Campo em algodão cru, vista frontal, com bolso quadrado”. Imagens decorativas têm `alt=""`.
- Não comunicar categoria, cor ou disponibilidade somente por cor; usar texto e/ou ícone com nome acessível.
- Campos da lista de espera têm `label`, instrução persistente, erro associado e confirmação anunciada em região `aria-live`.
- O foco não pode ficar preso em modal de sacola ou filtros; Escape fecha e devolve foco ao acionador.
- Suportar zoom de 200% e reflow equivalente a 320 CSS px sem perda de conteúdo ou rolagem horizontal acidental.
- Testar teclado completo, leitor de tela, contraste, reduced motion e navegação com toque antes da publicação.

## 8. Plano de assets

### Entregáveis

| Asset | Quantidade | Especificação | Alt / uso |
|---|---:|---|---|
| Hero editorial | 1 | 2400 × 1600, AVIF/WebP + fallback JPG | Pessoa em movimento; informar cenário e peça |
| Produto principal | 6 | 1400 × 1750, AVIF/WebP | Vista frontal limpa, uma por peça |
| Detalhe de construção | 3 | 1200 × 1200 | Costura, fechamento, textura; evidência material |
| Interlúdio | 1 | 2400 × 1400 | Gesto ou deslocamento, sem texto embutido |
| Matéria | 3 | 1000 × 1000 | Amostra visual de cada tecido |
| Nota de campo | 3 | 1200 × 1500 | Situações de uso, pessoas diversas |
| Marca | 2 | SVG próprio, claro e reverso | Logo com texto alternativo `Teagar Company Atelier` |
| Favicon/social | 2 | SVG/PNG e 1200 × 630 | Marca simples; verificar recorte social |

### Regras de produção

- Preferir assets fotografados para esta coleção ou com licença documentada no repositório.
- Não extrair, recortar ou reaproveitar imagens e data URIs da referência.
- Remover metadados sensíveis de localização das fotografias antes de publicar.
- Definir `width`, `height`, `loading="lazy"` para imagens fora do hero e `fetchpriority="high"` somente no hero.
- Usar `srcset`/`sizes` e compressão verificável; alvo de LCP visual abaixo de 2,5 s em conexão móvel simulada.
- Nomes de arquivo descritivos: `c01-camisa-campo-frente.avif`, não `IMG_0042.webp`.
- Não colocar texto essencial dentro da imagem; legendas e dados ficam em HTML.

## 9. Copy final em português

### Navegação

- Marca: `TEAGAR COMPANY ATELIER`
- Índice: `COLEÇÃO 01 / MATÉRIA EM TRÂNSITO`
- Links: `Coleção` · `Matéria` · `Ateliê` · `Notas`
- Sacola: `Sacola (0)`

### Hero

**Eyebrow:** `ATELIER / C01 / 2026`

**H1:** `Roupa para o movimento.`

**Texto:** `Uma edição curta de peças construídas para acompanhar o dia inteiro. Matérias honestas, forma precisa e espaço para você se mover.`

**CTA primário:** `Ver a coleção`

**CTA secundário:** `Ler a nota de campo`

**Meta:** `06 PEÇAS` · `PEQUENOS LOTES` · `FEITO NO BRASIL`

### Índice

**Eyebrow:** `00 / FICHA DA EDIÇÃO`

**Título:** `Uma coleção, três ritmos.`

**Texto:** `A primeira edição reúne camadas leves, calças de estrutura macia e uma camisa que trabalha bem sozinha. Tudo entra pela matéria: o que toca a pele, o que resiste ao uso, o que pode ser reparado.`

**Dados:**

- `EDIÇÃO` — C01 / Matéria em trânsito
- `ESCALA` — 06 peças / 03 matérias
- `ORIGEM` — Desenvolvida no Brasil
- `MÉTODO` — Pequenos lotes / reparo previsto

### Coleção

**Eyebrow:** `01 / PEÇAS EM CAMPO`

**Título:** `Peças para atravessar o dia.`

**Introdução:** `Escolha por sensação, construção ou situação. Cada peça traz sua ficha para você decidir com calma.`

**Filtros:** `Todas` · `Camisas` · `Sobreposições` · `Calças` · `Disponíveis`

**Produtos:**

| Produto | Descrição curta | Dados |
|---|---|---|
| `Camisa Campo 01` | Algodão compacto, bolso aplicado e barra reta. | `ALGODÃO / CRU` · `R$ 389` |
| `Jaqueta Linha 01` | Sarja encerada leve para quando o tempo vira. | `SARJA / CARVÃO` · `R$ 749` |
| `Calça Trajeto 01` | Cintura confortável e volume que não prende o passo. | `SARJA / AZUL` · `R$ 529` |
| `Overshirt Sinal 01` | Uma camada curta com fechamento de pressão e presença. | `ALGODÃO / LARANJA` · `R$ 469` |
| `Camiseta Base 01` | Malha seca, gola firme, feita para repetir. | `MALHA / PAPEL` · `R$ 189` |
| `Calça Fôlego 01` | Tecido leve, pregas precisas e bolso interno. | `MISTO / GRAFITE` · `R$ 489` |

**Ação de produto:** `Ver detalhes` / `Adicionar à sacola`

**Confirmação de sacola:** `Camisa Campo 01 foi adicionada à sacola.`

### Interlúdio

**Legenda:** `NOTA 01 / 07:42 / PRIMEIRA CAMADA`

**Frase:** `A melhor peça é a que some no movimento e aparece na memória.`

### Matéria

**Eyebrow:** `02 / MATÉRIA E CUIDADO`

**Título:** `A roupa começa no toque.`

**Texto:** `Descrevemos o material antes de adjetivá-lo. Você encontra origem, peso, composição e o jeito certo de cuidar para a peça durar mais.`

**Blocos:**

- `ALGODÃO ENCERADO` — `Resistência seca, brilho discreto. Limpar com pano úmido; não lavar a seco.`
- `SARJA COMPACTA` — `Estrutura sem rigidez. Lavar do avesso em água fria e secar à sombra.`
- `MALHA SECA` — `Toque fresco e retorno de forma. Evitar alvejante; guardar dobrada.`

**CTA:** `Ver guia de cuidados`

### Ateliê

**Eyebrow:** `03 / CREDENCIAL DO ATELIÊ`

**Título:** `Feito para ser usado. Feito para ser consertado.`

**Texto:** `Trabalhamos em pequenos lotes para observar cada construção de perto. Quando uma peça pede reparo, o ateliê continua fazendo parte dela: oferecemos orientação e conserto de componentes selecionados.`

**Dados:** `03 MATÉRIAS` · `06 PEÇAS` · `01 MÉTODO ABERTO`

**CTA:** `Conhecer o ateliê`

### Nota de campo

**Eyebrow:** `04 / NOTA DE CAMPO`

**Título:** `Do primeiro café ao último trem.`

**Texto:** `A coleção foi testada em dias que não cabem numa pose. Camada que abre quando esquenta. Bolso que encontra a chave. Barra que acompanha a calçada. A ficha técnica importa porque o corpo vai usá-la.`

**CTA:** `Ler a nota completa`

### Fechamento e lista

**Eyebrow:** `05 / PRÓXIMA EDIÇÃO`

**Título:** `Receba o próximo corte.`

**Texto:** `Uma mensagem quando a próxima edição entrar no ar. Sem sequência automática, sem ruído.`

**Label:** `Seu e-mail`

**Placeholder:** `voce@exemplo.com`

**CTA:** `Entrar na lista`

**Confirmação:** `Endereço registrado. Avisaremos quando a próxima edição estiver pronta.`

### Rodapé

- `Teagar Company Atelier / Coleção 01`
- `Atendimento` · `Trocas e devoluções` · `Cuidados` · `Privacidade`
- `Instagram` · `Contato`
- `STATUS: EDIÇÃO ABERTA / ATUALIZADA EM 2026`

## 10. Critérios de aceite da futura implementação

- O primeiro viewport comunica coleção, tese, imagem e ação sem depender de rolagem.
- As seis peças têm nome, preço, matéria, cor, imagem, alt e ação legível.
- O documento de tokens é traduzido sem inventar uma segunda paleta ou tipografia.
- Desktop, tablet e mobile respeitam as regras acima; nenhum conteúdo essencial é perdido.
- Todas as ações funcionam por teclado, têm foco visível e comunicam estado em texto.
- Imagens não provêm do HTML de referência; licenças e créditos ficam registrados quando aplicável.
- A página não usa texto de preenchimento, urgência falsa ou claims de sustentabilidade sem evidência.
- O resultado mantém o vocabulário técnico-industrial, mas a composição, o conteúdo e a narrativa são inequivocamente do Atelier.
