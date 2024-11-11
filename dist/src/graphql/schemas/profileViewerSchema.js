"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileViewerSchema = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.profileViewerSchema = (0, graphql_tag_1.gql) `
  type ProfileViewer {
    id: String!
    user: User!
    viewerUser: User!
  }

  type Query {
    getProfileViewers(userId: String!): [ProfileViewer!]!
  }

  type Mutation {
    addProfileViewer(userId: String!, viewerUserId: String!): ProfileViewer!
    removeProfileViewer(userId: String!, viewerUserId: String!): Boolean
  }
`;
