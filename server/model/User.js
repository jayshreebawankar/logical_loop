const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const User = new Schema({
  subject: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
});

const user = mongoose.model("User", User);
module.exports = user;
