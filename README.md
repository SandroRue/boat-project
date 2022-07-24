The application has an Angular frontend, a NodeJS backend, and a Postgres database (which is running in a docker container). Authentication is done via Firebase Authentication.

# Backend

The first step is to download the project and install the dependencies:

`cd backend && yarn install`

After that, the Postgres database should be created using Docker:

`yarn start-db`

The next step is to migrate the existing database schema to the created Postgres database using Prisma:

`yarn migrate-db`

The application can be started with the following command:

`yarn start`

# Frontend

The first step in the frontend is to download the project and install the dependencies:

`cd frontend && yarn install`

The application can be started with the following command:

`ng serve`
