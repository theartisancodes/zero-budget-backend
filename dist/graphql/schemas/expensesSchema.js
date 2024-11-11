"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseSchema = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.expenseSchema = (0, graphql_tag_1.gql) `
  type Expense {
    id: String!
    amount: Float!
    category: String!
    description: String!
    date: String!
    user: User!
    budget: Budget!
  }

  type Query {
    getExpense(id: String!): Expense
    getExpenses: [Expense!]!
  }

  type Mutation {
    createExpense(
      amount: Float!
      category: String!
      description: String!
      userId: String!
      budgetId: String!
    ): Expense!
    updateExpense(
      id: String!
      amount: Float
      category: String
      description: String
    ): Expense!
    deleteExpense(id: String!): Expense!
  }
`;
//# sourceMappingURL=expensesSchema.js.map