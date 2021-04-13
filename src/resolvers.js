import { notesGraphql } from "./models/NoteSchema.js";

export const resolvers = {
  Query: {
    hello: () => "hi",
    notes: () => notesGraphql.find()
  },
  Mutation: {
    createNote: async (_, { name }) => {
      const kitty = new notesGraphql({ name });
      await kitty.save();
      return kitty;
    }
  }
};