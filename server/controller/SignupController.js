const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const mongoose=require("mongoose");
const UserSU = require("../model/SignUp")
const userSI = require("../model/Signin");

const createUser=async(req,res,next)=>{
    const {name,email,phone,password} = req.body;

    if(!name || !email || !phone || !password){
        res.json("Please, fill up all Data");
    }
    
    const passwordHash=await bcrypt.hash(password,12);
    console.log("password",passwordHash);

    const result=new UserSU({
        name,email,phone,password:passwordHash
    });

    await result.save(); ///database

    const token=jwt.sign({email:result.email},"This_is-my=token",
    {expiresIn:"1h"})

    console.log("tokens:",token);
    res.json({id:result.id,token:token});  
}

const signIn=async(req,res,next)=>{
    const {email, password} = req.body;
    const data=await userSI.findOne({email:email});
    if(data){
             const match=await bcrypt.compare(password,data.password);
             if(match){
                 res.json("Login Successfully");
             }else{
                 res.json("Invalid Credential!!!");
             }
    }else{
        res.json("User is NOT REGISTERED");
    }
}
exports.createUser=createUser;
exports.signIn=signIn;
