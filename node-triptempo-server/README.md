# Trip Tempo Server

...

## Installation

Clone this repository

```bash
git clone https://github.com/baguilar6174/fullstack-triptempo-app.git
```

Install dependencies

```bash
cd node-triptempo-server
yarn
```

Clone `.env.template` file and rename to `.env`.

Replace your environment variables in `.env` file

## Running the app

If you need local Postgres database

- Install docker
- Run `docker compose up -d` (Only the first time you start the project)

This command create a local volumen in root project to save data.

**Important**: If you don't need Postgres from Docker, set your configuration into `.env`

Run `yarn db:seed` to create database schema in your Postgres database and create initial data

Run `yarn dev`

If your want to create build production, run `yarn build`

**Important**: If you want to re create database schema, run `yarn prisma:db`

- You can see the app running at [http://localhost:3000](http://localhost:3000)

## My process

### Built with

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [winston](https://www.npmjs.com/package/winston)
- [dotenv](https://www.npmjs.com/package/dotenv)

### What I learned

- Environment variables
- Single Page Application + Frontend Router
- Serve differents files
- Configure routes and controllers
- DTOs pattern
- Repository Pattern
- Clean Architecture
- Use cases
- Autentication using tokens
- Pagination
- Error handlers

## Development Features

- Clean Architecture
