
# 📚 API de Catálogo de Receitas - Desafio BIOX

Este projeto é uma API desenvolvida em **NestJS + TypeScript** para gerenciar um **catálogo de receitas**, seguindo os princípios de **Clean Architecture** e **DDD (Domain-Driven Design)**. O desafio foi proposto para avaliar habilidades de organização de código, separação de responsabilidades e boas práticas com Node.js. Foi utilizado o Swagger para criar a interface e documentação pra facilitar o uso. Ademais foi feito um deploy no render, usando docker com github actions.

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
|-- core
  |-- swagger.config.ts
  |-- crypto
    |-- crypto.interface.ts
|-- infra
  |-- crypto
    |-- uuid.ts
|-- modules
  |-- recipes
    |-- recipes.module.ts
    |-- domain
      |-- entities
        |-- recipe.entity.ts
      |-- repositories
        |-- recipe.repository.ts
    |-- interfaces
      |-- http
        |-- recipe.controller.ts
      |-- pipes
        |-- zod-validation.pipe.ts
    |-- infra
      |-- presenter
        |-- recipe.presenter.ts
      |-- database
        |-- in-memory
          |-- in-memory-recipe.repository.ts
    |-- app
      |-- dtos
        |-- create-recipe.dto.ts
        |-- get-recipe-by-id.dto.ts
        |-- list-all-recipe.dto.ts
      |-- schemas
        |-- create-recipe.schema.ts
        |-- get-recipe-by-id.schema.ts
        |-- list-all-recipe.schema.ts
      |-- swagger
        |-- create-recipe-swagger.dto.ts
        |-- recipe.swagger.dto.ts
      |-- use-cases
        |-- create-recipe
          |-- create-recipe.use-case.spec.ts
          |-- create-recipe.use-case.ts
        |-- list-all-recipes
          |-- list-all-recipes.use-case.ts
        |-- get-recipe-by-id
          |-- get-recipe-by-id.use-case.ts
```

---

## 🛠️ Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- Clean Architecture
- Domain-Driven Design (DDD)
- Swagger

---

## 📦 Instalação

### Pré-requisitos

- Node.js (v18 ou superior)
- npm

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/opedro-monteiro/biox-api
cd desafio-biox-api

# 2. Instale as dependências
npm install

# 3. Rode a aplicação
npm run start:dev
```

A API estará disponível em: 
`http://localhost:3000/api/docs` 
ou em 
`https://biox-api-latest.onrender.com/api/docs`

---

## 🧪 Testes
> *Opcional*

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

| Método | Rota                     | Descrição                    |
|--------|------------------|--------------------------------------|
| POST   | /api/v1/recipes          | Cria uma nova receita        |
| GET    | /api/v1/recipes         | Lista todas as receitas      |
| GET    | /api/v1/recipes/:id     | Busca uma receita por ID     |

---

## 🎁 Extra (opcional)

- [ ✅ ]  Teste unitário de 1 use-case
- [ ✅ ]  Deploy em plataforma gratuita (Render)

---

## 📄 Licença

Este projeto é apenas para fins de avaliação técnica.

---

## 🙋‍♂️ Autor

Feito por Pedro Monteiro — contato: pedro.oliveira@monteirodev.com
