import { notesGraphql } from "./models/NoteSchema.js";
import LRU from "lru-cache";

export const resolvers = {
  Query: {
    //hello: () => "hi",
    allnotes: () => notesGraphql.find(),

    notes: () => {
    const notes = notesGraphql.find();
    cache.forEach((id, name) => notes.push({ id, name }));
    return notes;
    },
    
    note: (_, { id, name }) => {
      return { id, name: cache.get(id) };
    }
  },

  Mutation: {
    createNote: async (_, { name }) => {
      const note1 = new notesGraphql({ id, name });
      await note1.save();
      
    },
    addNote: async (_, { id, name, content }) => {
      const note = new notesGraphql({ id, name, content });
      await note.save();
      cache.set(id, name);
      return note;
    },
    updateNote: async (_, { id, name }) => {
      const note = { id, name };
      await note.save();
      cache.set(id, name);
      return note;
    }
  }
};



