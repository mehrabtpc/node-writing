const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const Question = require("./models/Question.model.js");
const questionRoute = require("./routes/questions.route.js");
const answerRoute = require("./routes/answers.route.js");

const app = express();
const port = process.env.PORT|| 3000;
const mongo_uri = process.env.MONGO_URI;
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/api/questions", questionRoute);
app.use("/api/answers", answerRoute);


app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
  });

mongoose
  .connect(
      mongo_uri
    )
    .then(() => {
      console.log("Connected to database!");
      app.listen(port, () => {
        console.log(`Server is running on port ${port}...`);
      });
    })
    .catch(() => {
      console.log("Connection failed!");
    });
    