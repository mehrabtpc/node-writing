const express = require("express");
const mongoose = require("mongoose");
const Question = require("./models/Question.model.js");
const questionRoute = require("./routes/product.route.js");
const app = express();


app.use("/api/products", productRoute);


app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
  });

//TODO
mongoose
  .connect(
    "mongodb+srv://haris2iftikhar:GClTzr15XhkjvN6k@backenddb.nrurtot.mongodb.net/Node-API?retryWrites=true&w=majority"
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
  