"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.budgetSchema = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.budgetSchema = (0, graphql_tag_1.gql) `
  type Budget {
    id: String!
    name: String!
    totalAmount: Float!
    monthlyAllocation: Float!
    user: User!
    savings: [Saving!]!
    expenses: [Expense!]!
  }

  type Query {
    getBudget(id: String!): Budget
    getBudgets: [Budget!]!
  }

  type Mutation {
    createBudget(
      name: String!
      totalAmount: Float!
      monthlyAllocation: Float!
      userId: String!
    ): Budget!
    updateBudget(
      id: String!
      name: String
      totalAmount: Float
      monthlyAllocation: Float
    ): Budget!
    deleteBudget(id: String!): Budget!
  }
`;
//# sourceMappingURL=budgetSchema.js.map