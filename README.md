# 🎮 DNC E-Commerce Games

Loja virtual de consoles e jogos eletrônicos desenvolvida com React + Vite. Projeto criado durante o curso da [Escola DNC](https://www.escoladnc.com.br/).

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

O **DNC E-Commerce Games** é uma aplicação de e-commerce voltada para a venda de consoles e jogos. O projeto simula um fluxo completo de compra: login, listagem de produtos, detalhes do produto, carrinho e pagamento.

---

## Funcionalidades

- 🔐 **Login** com validação de CPF (formato `000.000.000-00`) e senha
- 🏠 **Home** com listagem de todos os produtos disponíveis
- 🕹️ **Detalhe do Produto** com descrição, preço e opção de compra
- 🛒 **Carrinho** de compras
- 💳 **Pagamento** (página de checkout)

---

## Tecnologias

| Tecnologia | Versão | Descrição |
|---|---|---|
| [React](https://react.dev/) | ^18.2.0 | Biblioteca para construção de interfaces |
| [Vite](https://vitejs.dev/) | ^4.3.3 | Bundler e servidor de desenvolvimento |
| [React Router DOM](https://reactrouter.com/) | ^6.10.0 | Roteamento de páginas SPA |
| [React Hook Form](https://react-hook-form.com/) | ^7.43.9 | Gerenciamento de formulários |
| [Sass](https://sass-lang.com/) | ^1.62.1 | Pré-processador CSS |

---

## Estrutura de Pastas

```
src/
├── assets/               # Imagens e ícones SVG
├── components/
│   ├── DetalhedoProduto/ # Componente de detalhes do produto
│   ├── Footer/           # Rodapé da aplicação
│   ├── Nav/              # Barra de navegação
│   └── ProdutoCard/      # Card de produto na listagem
├── mock/
│   └── produtos.mock.js  # Dados simulados dos produtos
├── pages/
│   ├── Carrinho/         # Página do carrinho
│   ├── Home/             # Página inicial com listagem
│   ├── Login/            # Página de login
│   ├── Pay/              # Página de pagamento
│   └── Produto/          # Página de detalhe do produto
├── sass/
│   └── _variable.scss    # Variáveis globais SCSS
├── index.scss            # Estilos globais
└── main.jsx              # Entrada da aplicação e configuração de rotas
```

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) v16 ou superior
- npm ou yarn

---

## Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/Giovanne-Portella/DNC-Ecommerce_Games.git

# Acesse a pasta do projeto
cd DNC-Ecommerce_Games

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
| `npm run build` | Gera o build de produção |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Analisa o código com ESLint |

---

## Rotas da Aplicação

| Rota | Página | Descrição |
|---|---|---|
| `/` | Login | Tela de autenticação |
| `/home` | Home | Listagem de produtos |
| `/produto/:produtoId` | Produto | Detalhe de um produto |
| `/carrinho/:carrinhoId` | Carrinho | Carrinho de compras |
| `/pay/:payId` | Pay | Finalização da compra |

---

## Produtos Disponíveis

Os dados dos produtos são gerenciados via mock local em `src/mock/produtos.mock.js` e incluem:

- 🖤 Microsoft Xbox Series X
- ⬜ Microsoft Xbox Series S
- 🎮 Nintendo Switch com Jogo
- 🪓 God of War — PlayStation
- 🏺 Uncharted: The Nathan Drake Collection
- 🏎️ Gran Turismo

---

## Licença

Este projeto foi desenvolvido para fins educacionais durante o curso da Escola DNC.
