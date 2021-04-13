import mongoose from "mongoose";

//export const Cat = mongoose.model("Cat", { name: String });
//const mongoose = require("mongoose");
export const notesGraphql = mongoose.model("Note", { name: String });

//export const subscribeCats = mongoose.model("Note", { name: String });

//const notesSchema = {
//    title: String, 
//    content: String
//}

//module.exports = notesSchema;