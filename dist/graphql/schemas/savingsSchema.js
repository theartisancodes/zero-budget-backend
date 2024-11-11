"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.savingSchema = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.savingSchema = (0, graphql_tag_1.gql) `
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