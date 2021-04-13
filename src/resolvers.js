import { notesGraphql } from "./models/NoteSchema.js";

export const resolvers = {
  Query: {
    hello: () => "hi",
    notes: () => Notes.find()
  },
  Mutation: {
    createNote: async (_, { name }) => {
      const kitty = new Note({ name });
      await kitty.save();
      return kitty;
    }
  }
};