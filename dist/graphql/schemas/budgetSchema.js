import { gql } from 'graphql-tag';
export const budgetSchema = gql `
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