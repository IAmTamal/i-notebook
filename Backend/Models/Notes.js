// this is the models for saving the notes in the database

const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
  //this basically storing the active user's id from mongoose
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  tag: {
    type: String,
    default: "General",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", notesSchema);
