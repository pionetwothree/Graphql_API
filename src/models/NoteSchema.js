import mongoose from "mongoose";

export const notesGraphql = mongoose.model("Note", { name: String , content: String});

