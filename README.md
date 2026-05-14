# 👤 Gerenciador de Cadastro de Usuários

Aplicação web para gerenciamento de cadastro de usuários, desenvolvida com Angular seguindo boas práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

- **Angular 20**
- **TypeScript**
- **SASS (SCSS)**
- **RxJS**
- **Angular Material**
- **JSON Server** — fake REST API para simulação de backend

## ✨ Funcionalidades

- Listagem de usuários cadastrados
- Cadastro de novos usuários
- Edição de usuários existentes
- Remoção de usuários

## 📦 Como rodar o projeto

### Pré-requisitos

- Node.js instalado
- npm instalado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gabrielmeira-dev/gerenciador-usuario.git

# Acesse a pasta do projeto
cd gerenciador-usuario

# Instale as dependências
npm install
```

### Rodando a aplicação

```bash
# Inicie o JSON Server (backend fake)
npx json-server --watch db.json

# Em outro terminal, inicie o Angular
ng serve
```

Acesse em: `http://localhost:4200`

## 📚 O que aprendi

- Consumo de APIs REST com `HttpClient` e `RxJS`
- Uso do `withComponentInputBinding` para simplificar passagem de parâmetros via rotas
- Componentização e organização de módulos no Angular
- Estilização com Angular Material

## 👨‍💻 Autor

Feito por **Gabriel Meira** — [LinkedIn](https://linkedin.com/in/gabriel-meira-dev) | [GitHub](https://github.com/gabrielmeira-dev)
