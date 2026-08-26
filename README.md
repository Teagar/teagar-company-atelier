# Teagar Company Atelier

Vitrine editorial estática da coleção conceitual **Matéria em trânsito**, criada para uma loja de roupas credenciada pela Teagar Company. A página combina catálogo, narrativa de materiais e interações acessíveis em uma interface responsiva.

**Demonstração:** https://teagar.github.io/teagar-company-atelier/

## Executar localmente

O projeto não requer instalação de dependências para abrir o site. Na raiz do repositório, inicie um servidor HTTP:

```sh
python3 -m http.server 4173
```

Acesse http://localhost:4173. Servir os arquivos por HTTP reproduz melhor o ambiente publicado do que abrir `index.html` diretamente pelo sistema de arquivos.

## Validar

Requer Node.js. O check automatizado verifica estrutura semântica, destinos internos, presença e formato dos assets e estados acessíveis das interações:

```sh
npm run check
git diff --check
```

Para a revisão manual, verifique a página em larguras desktop e mobile, percorra os controles por teclado, altere os filtros do catálogo, adicione peças à sacola e envie a lista de espera com um endereço inválido e outro válido. Sacola e lista de espera são demonstrações locais de interface; não há checkout, persistência ou envio para um backend.

## Arquitetura

- `index.html`: conteúdo, semântica, metadados e estrutura editorial.
- `styles.css`: sistema visual, layouts responsivos, foco visível e preferência por movimento reduzido.
- `script.js`: filtros do catálogo, contagem da sacola e validação da lista de espera.
- `assets/`: marca e ilustrações SVG usadas pela página.
- `tests/check.mjs`: validações automatizadas sem dependências externas.
- `docs/DIRECTION.md`: direção editorial, tokens e critérios que orientaram a implementação.

O projeto usa HTML, CSS e JavaScript sem framework nem etapa de build. Todos os caminhos de assets são relativos para funcionar no subdiretório do GitHub Pages.

## Publicação

O workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) publica o conteúdo estático pelo mecanismo oficial de artifacts do GitHub Pages. Cada push em `main`, ou execução manual pelo GitHub Actions, segue estas etapas:

1. Faz checkout do commit.
2. Executa `npm run check`.
3. Prepara e envia o artifact estático.
4. Publica no ambiente `github-pages`.

A configuração usa permissões mínimas para leitura do repositório e autenticação do deploy. O histórico da execução e a URL do ambiente ficam disponíveis na aba **Actions** do repositório.

## Assets e créditos

Os SVGs foram produzidos para esta implementação e não incorporam imagens de terceiros nem conteúdo extraído da referência visual. A autoria e a função de cada grupo estão documentadas em [`ASSETS.md`](ASSETS.md).

## Processo de orquestração

O trabalho foi coordenado no Teagarden, com o OverClick como fonte dos contratos, critérios de aceite e handoffs. Agentes OpenCode executaram os cards em branches dedicadas; commits e validações públicas no GitHub Pages formam a evidência de entrega. A referência de sistema visual foi tratada em regime clean-room: somente sua linguagem visual e comportamental orientou a direção autoral registrada em [`docs/DIRECTION.md`](docs/DIRECTION.md), sem reutilização de código.
