import { gql } from 'graphql-tag';

export const userSchema = gql`
  type User {
    id: String!
    userName: String
    phoneNumber: String
    email: String
    password: String
    budgets: [Budget]
    savings: [Saving]
    expenses: [Expense]
    viewers: [ProfileViewer]
  }

  type Query {
    getUser(id: String!): User
    getUsers: [User!]!
  }

  type Mutation {
    createUser(
      email: String!
      password: String!
      userName: String!
      phoneNumber: String!
    ): User!
    updateUser(
      id: String!
      email: String
      password: String
      userName: String
      phoneNumber: String
    ): User!
    deleteUser(id: String!): User!
  }
`;
