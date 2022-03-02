const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSU = new Schema({
  name:{type:String,required:true},
  contact:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true}
});

const userSU = mongoose.model("User", UserSU);
module.exports = userSU;