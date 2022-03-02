const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSI = new Schema({
  username:{type:String,required:true},
  password:{type:String,required:true}
});

const userSI = mongoose.model("User", UserSI);
module.exports = userSI;