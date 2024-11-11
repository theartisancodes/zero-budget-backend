# Zero-Budget Backend Project

This project is a backend service built with **Node.js**, **TypeScript**, **GraphQL**, and **Prisma**. It handles budgeting, expenses, and savings tracking, providing a GraphQL API to interact with the data.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [GraphQL API](#graphql-api)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Requirements

Make sure you have the following installed before running the application:

- **Node.js v20+**: For runtime environment
- **TypeScript**: For type checking and transpilation
- **ts-node**: To run TypeScript directly
- **Nodemon**: For auto-restarting the index during development
- **Prisma**: ORM for database interactions
- **GraphQL**: API query language
- **PostgreSQL**: Database (or use any supported Prisma database)

## Installation

Follow the steps below to set up the project.

### Step 1: Clone the repository

```bash
git clone https://github.com/your-repo/zero-budget-backend.git
cd zero-budget-backend
```

### Step 2: Install dependencies

Ensure you have **Node.js v20+** installed, then install the project dependencies:

```bash
npm install
```

### Step 3: Install PostgreSQL

If you're using **PostgreSQL**, make sure you have it installed and running on your system. You will need to configure the database connection in the `.env` file.

### Step 4: Set up Prisma

After PostgreSQL is installed and running, set up **Prisma** by running the following commands:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

This will create the necessary database tables and generate Prisma client code.

## Running the Application

You can run the application in development mode or production mode.

### Development Mode

To run the application in development mode with **nodemon** and **ts-node**, use the following command:

```bash
npm run dev
```

This will start the index and reload it whenever you make changes to the code.

### Production Mode

For production builds, transpile the TypeScript files and run the compiled JavaScript files:

```bash
npm run build
```

The **build** script transpiles the TypeScript into JavaScript, and **start** runs the compiled output.

## Environment Variables

You will need to create a `.env` file to provide environment variables for the database and other configurations. Here’s an example `.env` template:

```
DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase"
JWT_SECRET="your-secret-key"
```

### Important Environment Variables

- **`DATABASE_URL`**: The connection URL to your PostgreSQL database.
- **`JWT_SECRET`**: The secret key used for JWT authentication.

## GraphQL API

The project uses **GraphQL** for API interactions. Once the index is running, you can access the **GraphQL Playground** at:

```
http://localhost:3000/graphql
```

### Available GraphQL Queries and Mutations

You can interact with the following entities:

- **User**: Create, update, delete, and fetch user information.
- **Budget**: Manage budgets.
- **Expense**: Track expenses related to a budget.
- **Saving**: Manage savings and goals.

Example query for fetching a user:

```graphql
query {
  getUser(id: "user-id") {
    id
    email
    budgets {
      name
      totalAmount
    }
  }
}
```

Example mutation for creating a budget:

```graphql
mutation {
  createBudget(name: "My Budget", totalAmount: 1000, monthlyAllocation: 200, userId: "user-id") {
    id
    name
    totalAmount
  }
}
```

## Development

For development, you can use **nodemon** to automatically restart the index whenever you make changes to the TypeScript files.

### Useful Commands

- **`npm run dev`**: Runs the index in development mode with automatic reload.
- **`npm run build`**: Transpiles TypeScript into JavaScript.
- **`npm start`**: Runs the transpiled JavaScript files in production mode.
- **`npx prisma studio`**: Opens Prisma Studio, a web-based database UI.

### Linting

To ensure code quality, the project uses **ESLint**. You can run the following command to check for issues:

```bash
npm run lint
```

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request. Before submitting, please ensure your code passes the linter and all tests.

```bash
npm run lint
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
```

---

### Key Sections:

1. **Requirements**: Lists the necessary tools such as Node.js, TypeScript, and PostgreSQL.
2. **Installation**: Step-by-step guide to cloning the repo, installing dependencies, and setting up Prisma.
3. **Running the Application**: Instructions for running the app in both development and production modes.
4. **Environment Variables**: Example `.env` file and important environment variables.
5. **GraphQL API**: Explains how to access the GraphQL Playground and provides example queries and mutations.
6. **Development**: Information on how to run the project in development mode and useful commands.
7. **Contributing**: Encourages contribution and provides guidelines.
8. **License**: Mentions the project’s licensing.

Let me know if you'd like to make any adjustments!
