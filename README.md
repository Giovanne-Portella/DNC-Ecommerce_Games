# 🎮 GameVault — DNC E-Commerce Games

Loja virtual gamer de consoles, jogos e acessórios desenvolvida com React + Vite. Projeto iniciado durante o curso da [Escola DNC](https://www.escoladnc.com.br/) e evoluído com funcionalidades completas de e-commerce.

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Pré-requisitos](#pré-requisitos)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Rotas da Aplicação](#rotas-da-aplicação)
- [Produtos Disponíveis](#produtos-disponíveis)

---

## Sobre o Projeto

O **GameVault** é uma aplicação de e-commerce temática gamer com design dark/neon. Simula um fluxo completo de compra — login, listagem de produtos, detalhe, carrinho global com drawer lateral e checkout com formulário validado.

O foco foi criar uma experiência viva e dinâmica: animações CSS contínuas, navegação por categorias com conteúdo próprio, busca funcional e carrinho persistente durante toda a sessão.

---

## Funcionalidades

- 🔐 **Login** com validação de CPF (`000.000.000-00`) e senha via React Hook Form
- 🏠 **Home** com banner animado (gradiente em movimento) e listagem de produtos
- 🔍 **Busca funcional** — filtro em tempo real via `?q=` na URL
- 🛒 **Carrinho global** — drawer lateral com controle de quantidade, total calculado e "Continuar Comprando"
- 💳 **Checkout** — formulário de pagamento com validação
- 🕹️ **Detalhe do Produto** — descrição, cores e botão "Adicionar ao Carrinho"
- 📱 **Totalmente responsivo** — breakpoints em 900px / 768px / 560px / 480px

### Páginas de conteúdo gamer

| Página | Rota | Conteúdo |
|---|---|---|
| Novidades | `/novidades` | Produtos marcados como novidade + seção Game Pass |
| Jogos | `/jogos` | Jogos filtrados por tipo, ranking Top 5 |
| Video Games | `/videogames` | Consoles com tabela comparativa de especificações |
| Mesas Gamer | `/mesas-gamer` | Setups, cadeiras e dicas de montagem |
| Promoções | `/promocoes` | Produtos com desconto, preço original riscado, newsletter |
| Atendimento | `/atendimento` | FAQ accordion, canais de suporte (Chat, E-mail, WhatsApp) |

---

## Tecnologias

| Tecnologia | Versão | Descrição |
|---|---|---|
| [React](https://react.dev/) | ^18.2.0 | Biblioteca para construção de interfaces |
| [Vite](https://vitejs.dev/) | ^4.3.3 | Bundler e servidor de desenvolvimento |
| [React Router DOM](https://reactrouter.com/) | ^6.10.0 | Roteamento SPA com `createBrowserRouter` e layout raiz |
| [React Hook Form](https://react-hook-form.com/) | ^7.43.9 | Validação de formulários de login e checkout |
| [Sass](https://sass-lang.com/) | ^1.62.1 | SCSS com metodologia BEM |

---

## Estrutura de Pastas

```
src/
├── assets/                  # Ícones e logos SVG
├── components/
│   ├── CartDrawer/          # Carrinho lateral (drawer) global
│   ├── DetalhedoProduto/    # Detalhe do produto com addToCart
│   ├── Footer/              # Rodapé
│   ├── HeroBanner/          # Banner animado com gradiente em movimento
│   ├── Nav/                 # Navegação com busca e badge do carrinho
│   ├── PayModal/            # Modal de checkout com validação
│   └── ProdutoCard/         # Card de produto na listagem
├── context/
│   └── CartContext.jsx      # Estado global do carrinho (Context API)
├── mock/
│   └── produtos.mock.js     # 8 produtos com tipo, preço, desconto e novidade
├── pages/
│   ├── Atendimento/         # FAQ + canais de suporte
│   ├── Carrinho/            # Página de carrinho (legada)
│   ├── Home/                # Listagem com filtro de busca
│   ├── Jogos/               # Jogos com ranking
│   ├── Login/               # Autenticação
│   ├── MesasGamer/          # Setups e periféricos
│   ├── Novidades/           # Lançamentos
│   ├── Pay/                 # Checkout (legado)
│   ├── Produto/             # Detalhe do produto
│   ├── Promocoes/           # Ofertas com desconto
│   └── VideoGames/          # Consoles com specs
├── sass/
│   └── _variable.scss       # Variáveis globais SCSS
├── index.scss               # Estilos globais
└── main.jsx                 # Rotas e providers raiz
```

```
public/
├── BOY.svg          # God of War
├── nitendo.svg      # Nintendo Switch
├── turismo.svg      # Gran Turismo
├── uncharted.svg    # Uncharted Collection
├── xboxS.svg        # Xbox Series S
├── xboxX.svg        # Xbox Series X
├── hyperx-headset.svg  # HyperX Cloud III
└── dualsense.svg       # DualSense PS5
```

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm

---

## Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/Giovanne-Portella/DNC-Ecommerce_Games.git

# Acesse a pasta do projeto
cd DNC-Ecommerce_Games-1

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção em `/dist` |
| `npm run preview` | Visualiza o build de produção localmente |

---

## Rotas da Aplicação

| Rota | Página | Descrição |
|---|---|---|
| `/` | Login | Tela de autenticação |
| `/home` | Home | Listagem de produtos (aceita `?q=termo`) |
| `/produto/:produtoId` | Produto | Detalhe e adição ao carrinho |
| `/novidades` | Novidades | Lançamentos e destaques |
| `/jogos` | Jogos | Catálogo de jogos com ranking |
| `/videogames` | Video Games | Consoles com comparativo de specs |
| `/mesas-gamer` | Mesas Gamer | Setups, cadeiras e periféricos |
| `/promocoes` | Promoções | Produtos em oferta com desconto |
| `/atendimento` | Atendimento | FAQ e canais de suporte |
| `/carrinho/:id` | Carrinho | Página de carrinho (legada) |
| `/pay/:id` | Pay | Checkout (legado) |

---

## Produtos Disponíveis

Gerenciados via mock em `src/mock/produtos.mock.js`. Cada produto possui `tipo`, `precoNum`, `novidade` e `desconto`:

| # | Produto | Tipo | Desconto |
|---|---|---|---|
| 1 | Microsoft Xbox Series X | console | — |
| 2 | Microsoft Xbox Series S | console | — |
| 3 | Nintendo Switch com Jogo | console | 10% |
| 4 | Jogo God of War — PlayStation | jogo | — |
| 5 | Jogo Uncharted: The Nathan Drake Collection | jogo | 15% |
| 6 | Jogo Gran Turismo | jogo | 20% |
| 7 | Headset Gamer HyperX Cloud III | acessorio | — |
| 8 | Controle DualSense — PlayStation 5 | acessorio | 5% |

---

## Deploy

Configurado para Netlify via `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Licença

Este projeto foi desenvolvido para fins educacionais durante o curso da Escola DNC.
