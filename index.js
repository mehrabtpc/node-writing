const express = require("express");
const mongoose = require("mongoose");
const Question = require("./models/Question.model.js");
const questionRoute = require("./routes/questions.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/api/questions", questionRoute);


app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
  });

mongoose
  .connect(
    "mongodb+srv://mehrabtpc:LWCrL3GZZAbymmzU@node-writing.35qhp2b.mongodb.net/?retryWrites=true&w=majority&appName=node-writing"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
  