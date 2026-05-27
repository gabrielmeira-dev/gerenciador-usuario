# 👥 Gerenciador de Cadastro de Usuários

> Aplicação CRUD completa construída com Angular 20, focada em arquitetura escalável, separação de responsabilidades e boas práticas modernas do ecossistema Angular.

🔗 **[Ver projeto ao vivo](https://gabrielmeira-dev.github.io/gerenciador-usuario/)**

---

## 🎯 Contexto e Motivação

O objetivo deste projeto não foi apenas implementar um CRUD funcional, mas foi construir uma aplicação que reflete como penso arquitetura frontend em projetos reais. Cada decisão técnica foi tomada com o mesmo critério que aplico nas minhas experiências profissionais: **clareza, manutenibilidade e escalabilidade**.

---

## 🏗️ Decisões de Arquitetura

### Standalone Components (Angular 20)
Optei por **Standalone Components** em vez de NgModules, alinhando o projeto ao modelo atual do Angular. Isso elimina boilerplate desnecessário, torna cada componente autodescritivo em suas dependências e facilita o entendimento isolado de cada peça.

### Smart vs Dumb Components
A separação entre componentes inteligentes e de apresentação foi aplicada em dois níveis:

- **Páginas (`create`, `edit`, `list`)** — Smart components. Injetam serviços, orquestram estado e repassam dados para baixo via `input()`.
- **`search-input` e `users-list`** — Dumb components. Recebem dados via `input()`, emitem eventos via `output()`, zero acoplamento com serviços ou estado global.

O `list` é o Smart que gerencia o estado da busca: o `search-input` apenas emite o termo digitado, e o `list` aplica o filtro com responsabilidades bem delimitadas dentro da própria feature.

### Colocation — cada coisa vive onde é usada
`TruncatePipe` e a diretiva `ErrorBtn` estão dentro da própria feature `list`, não no `shared/`. Isso aplica o princípio de **colocation**: só vai para `shared/` o que é genuinamente reutilizado em múltiplos lugares. O resultado é um `shared/` enxuto (interface `User` e serviço) e features autocontidas.

```
features/
  users/
    create/
    edit/
    list/
      components/
        search-input/         ← Dumb: emite termo de busca via output()
        users-list/
          directives/
            error-btn/        ← Diretiva scoped: comportamento do botão de remoção
          pipes/
            truncate/         ← Pipe scoped: trunca nomes longos no card
shared/
  interfaces/
    user.ts                   ← Contrato de dados compartilhado
  services/
    users.service.ts          ← Única fonte de verdade para operações de usuário
```

### API de Signals para comunicação entre componentes
Em vez dos decorators clássicos `@Input()` e `@Output()`, utilizei a nova API de Signals do Angular:

```typescript
users = input.required<User[]>();
removeUser = output<User>({ alias: 'remove' });
editUser = output<User>({ alias: 'edit' });
```

`input.required<T>()` garante em tempo de compilação que o dado sempre será fornecido — sem checagens de `undefined` no template. Os aliases no `output()` expõem uma API pública mais semântica para quem consome o componente.

### Pipes: nativo + customizado
A lógica de formatação vive nos pipes, mantendo templates limpos:

- **`TitleCasePipe`** (Angular nativo) — capitalização correta dos nomes
- **`TruncatePipe`** (customizado) — trunca nomes longos nos cards, evitando quebra de layout. A lógica de corte fica encapsulada e reutilizável dentro da feature

### Diretiva customizada — `ErrorBtn`
Encapsula o comportamento visual do botão de remoção. Quem usa a diretiva não precisa saber como o estado de "ação destrutiva" é representado visualmente — só aplica `ErrorBtn` no elemento.

### Environments para configuração de API
URLs da API abstraídas para variáveis de ambiente, eliminando magic strings no código. Permite trocar endpoints entre ambientes sem tocar nos serviços — padrão direto de projetos com CI/CD.

### withComponentInputBinding
Parâmetros de rota chegam diretamente como `input()` nos componentes, sem necessidade de injetar `ActivatedRoute` manualmente. Componentes mais simples e testáveis.

### Reactive Forms
Formulários de cadastro e edição implementados com **Reactive Forms**: validações explícitas no componente, estado do formulário controlado programaticamente e tipagem forte com TypeScript.

---

## 🚀 Tecnologias

| Tecnologia | Uso |
|---|---|
| Angular 20 | Framework principal |
| TypeScript | Tipagem estática |
| RxJS | Gerenciamento de streams HTTP |
| Angular Material | Componentes de UI |
| SASS (SCSS) | Estilização com variáveis e organização modular |
| JSON Server | Simulação de REST API |

---

## ✨ Funcionalidades

- Listagem de usuários com busca em tempo real
- Cadastro de novos usuários com formulário validado
- Edição de usuários existentes
- Remoção de usuários
- Integração com REST API via `HttpClient` + RxJS

---

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
# Terminal 1 — Inicie o JSON Server (backend fake)
npx json-server --watch db.json

# Terminal 2 — Inicie o Angular
ng serve
```

Acesse em: `http://localhost:4200`

---

## 🔍 O que eu faria diferente

- **Testes unitários**: A separação de responsabilidades deixa os dumb components e serviços prontos para teste — seria o próximo passo natural do projeto.
- Adicionar no sistema um feedback visual com snack bar ao cadastrar ou editar. -> **FEITO**
- Confirmação com dialog antes de remover um usuário.

---

## 👨‍💻 Autor

Feito por **Gabriel Meira**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/gabriel-meira-dev)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gabrielmeira-dev)
