
# 📚 API de Catálogo de Receitas - Desafio BIOX

Este projeto é uma API desenvolvida em **NestJS + TypeScript** para gerenciar um **catálogo de receitas**, seguindo os princípios de **Clean Architecture** e **DDD (Domain-Driven Design)**. O desafio foi proposto para avaliar habilidades de organização de código, separação de responsabilidades e boas práticas com Node.js.

---

## 🚀 Funcionalidades

- Criar uma nova receita (`POST /recipes`)
- Listar todas as receitas (`GET /recipes`)
- Buscar uma receita pelo ID (`GET /recipes/:id`)

---

## 🧠 Arquitetura

A estrutura do projeto segue a **Clean Architecture**, com separação clara entre as camadas:

```
|-- app.module.ts
|-- main.ts
|-- modules
  |-- recipes
    |-- recipes.module.ts
    |-- app
      |-- dtos
        |-- create-recipe.dto.ts
        |-- get-recipe-by-id.dto.ts
        |-- list-all-recipe.dto.ts
      |-- use-cases
        |-- create-recipe.use-case.ts
        |-- get-recipe-by-id.use-case.ts
        |-- list-all-recipes.use-case.ts
    |-- domain
      |-- entities
        |-- recipe.entity.ts
      |-- repositories
        |-- recipe.repository.ts
    |-- interfaces
      |-- http
        |-- recipe.controller.ts
    |-- infra
      |-- presenter
        |-- recipe.presenter.ts
      |-- database
        |-- in-memory
          |-- in-memory-recipe.repository.ts

```

---

## 🛠️ Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- Clean Architecture
- Domain-Driven Design (DDD)

---

## 📦 Instalação

### Pré-requisitos

- Node.js (v18 ou superior)
- npm

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/desafio-biox-api.git
cd desafio-biox-api

# 2. Instale as dependências
npm install

# 3. Rode a aplicação
npm run start:dev
```

A API estará disponível em: `http://localhost:3000`

---

## 🧪 Testes

> *Opcional (caso você implemente algum teste)*

```bash
# Rodar testes unitários
npm run test
```

---

## 🧾 Exemplo de Entidade: `Recipe`

```ts
interface Recipe {
  id: string
  title: string
  description: string
  ingredients: string[]
  createdAt: Date
  updatedAt: Date
}
```

---

## 🧑‍💻 Endpoints

| Método | Rota            | Descrição                    |
|--------|------------------|------------------------------|
| POST   | /recipes         | Cria uma nova receita        |
| GET    | /recipes         | Lista todas as receitas      |
| GET    | /recipes/:id     | Busca uma receita por ID     |

---

## 🎁 Extra (opcional)

- [ ] ✅ Teste unitário de 1 use-case
- [ ] ✅ Deploy em plataforma gratuita (ex: Render, Vercel, Railway)

---

## 📄 Licença

Este projeto é apenas para fins de avaliação técnica.

---

## 🙋‍♂️ Autor

Feito por [Pedro Monteiro] — contato: [pedro.oliveira@monteirodev.com]
