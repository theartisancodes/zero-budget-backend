import { gql } from 'graphql-tag';

export const profileViewerSchema = gql`
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
