# CRUD com Node.js, Express, Sequelize, PostgreSQL e Docker

Este projeto é um CRUD completo desenvolvido com foco em arquitetura
limpa, boas práticas de API e ambiente totalmente dockerizado.\
O objetivo é praticar conceitos fundamentais de backend, banco de dados
relacional, ORM e padronização de rotas REST.

------------------------------------------------------------------------

## 🚀 Tecnologias utilizadas

-   **Node.js**
-   **Express**
-   **PostgreSQL**
-   **Sequelize (ORM)**
-   **Docker + Docker Compose**

------------------------------------------------------------------------

## 📂 Estrutura do projeto

/src\
├── controllers/ \# Lógica das rotas\
├── routes/ \# Definição das rotas da API\
├── models/ \# Models do Sequelize\
├── database/ \# Configurações, migrations e seeds

------------------------------------------------------------------------

## 🐳 Como rodar o projeto com Docker

Certifique-se de ter o **Docker** e **Docker Compose** instalados na
máquina.

``` bash
docker-compose up --build
```

A API ficará disponível em:

    http://localhost:3000

------------------------------------------------------------------------

## 📡 Rotas da API (Padrão REST)

  Método   Rota            Descrição
  -------- --------------- ------------------
  GET      /usuarios/todos       Lista usuários
  POST     /usuarios/cadastro       Cria usuário
  PATCH    /usuarios/todos/:id   Atualiza usuário
  DELETE   /usuarios/todos/:id   Remove usuário

------------------------------------------------------------------------

## 🔧 Exemplos de requisição

### ➤ Criar usuário (POST)

``` json
POST /usuarios
{
  "nome": "Gabriel",
  "email": "gabriel@email.com",
  "idade": 22
}
```

### ➤ Atualizar usuário (PATCH): Exemplo

``` json
PATCH /usuarios/todos/1
{
  "nome": "Gabriel Honorio"
}
```

------------------------------------------------------------------------

## 🧠 Conceitos aplicados no projeto

-   Estruturação modular (controllers, routes, models)\
-   Dockerização completa (API + banco PostgreSQL)\
-   Migrations com Sequelize\
-   CRUD completo seguindo padrão REST\
-   Tratamento básico de erros\
-   Separação clara de responsabilidades

------------------------------------------------------------------------

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido como parte do meu aprendizado contínuo em
backend, com foco em dominar:

-   APIs REST\
-   Banco de dados relacional (PostgreSQL)\
-   ORM utilizando Sequelize\
-   Ambientes profissionais com Docker\
-   Clean code e boas práticas

------------------------------------------------------------------------

## 📌 Status do projeto

✔ **Concluído**\
💡 **Próximos passos:** testes, validação de dados e autenticação JWT

------------------------------------------------------------------------

## 📎 Autor

Desenvolvido por **Gabriel Honorio**, em busca da minha primeira
oportunidade como **desenvolvedor backend**.
