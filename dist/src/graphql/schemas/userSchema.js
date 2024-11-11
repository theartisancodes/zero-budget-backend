"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.userSchema = (0, graphql_tag_1.gql) `
  type User {
    id: String!
    userName: String
    phoneNumber: String
    email: String!
    password: String
    budgets: [Budget]
    savings: [Saving]
    expenses: [Expense]
    viewers: [ProfileViewer]
    fullName: String
    firstName: String
    lastName: String
    profilePicture: String
    updatedAt: String
  }

  type Query {
    getUser(id: String!): User
    getUsers: [User!]!
  }

  type Mutation {
    createUser(
      email: String!
      password: String
      userName: String!
      phoneNumber: String
      fullName: String
      firstName: String
      lastName: String
      profilePicture: String
      updatedAt: String
    ): User!
    updateUser(
      id: String!
      email: String
      password: String
      fullName: String
      userName: String
      phoneNumber: String
      firstName: String
      lastName: String
      profilePicture: String
      updatedAt: String
    ): User!
    deleteUser(id: String!): User!
  }
`;
