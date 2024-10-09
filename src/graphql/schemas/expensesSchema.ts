import { gql } from 'graphql-tag';

export const expenseSchema = gql`
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
