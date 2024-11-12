import { gql } from 'graphql-tag';
export const savingSchema = gql `
  type Saving {
    id: String!
    amountSaved: Float!
    goal: Float!
    user: User!
    budget: Budget!
  }

  type Query {
    getSaving(id: String!): Saving
    getSavings: [Saving!]!
  }

  type Mutation {
    createSaving(
      amountSaved: Float!
      goal: Float!
      userId: String!
      budgetId: String!
    ): Saving!
    updateSaving(id: String!, amountSaved: Float, goal: Float): Saving!
    deleteSaving(id: String!): Saving!
  }
`;
//# sourceMappingURL=savingsSchema.js.map