import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    allnotes: [Note!]!
    notes: [Note!]!
    note(id: String!): Note

  }
  type Note {
    id: ID!
    name: String!
    content: String!
   
  }
  type Mutation {
    addNote(name: String!, content: String!): Note!
    updateNote(id: ID!, name: String!): Note!
    createNote(name: String!): Note!
    
  }
`;


//note: String!
//createNote(name: String!): Note!