import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    notes: [Note!]!
  }
  type Note {
    id: ID!
    name: String!
  }
  type Mutation {
    createNote(name: String!): Note!
  }
`;