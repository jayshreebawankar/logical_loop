const express=require("express");
const route=express.Router();
const SignupController=require("../controller/SignupController.js");

route.post("/reg", SignupController.createUser);
route.post("/reg", SignupController.signIn);

module.exports =route;