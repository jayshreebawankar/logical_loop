const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./routes/UserRouter.js");
const SignupRouter =require("./routes/SignupRouter");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/users", UserRouter);
app.use("/signUp",SignupRouter);

mongoose
  .connect(
    `mongodb+srv://jayshree:12345@cluster0.ltmfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(
    app.listen("8000", () => {
      console.log("server runs at port 8000");
    })
  )
  .catch((err) => {
    console.log(err);
  });
