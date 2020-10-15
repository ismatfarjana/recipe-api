const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
// app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//database
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch(err => {
    console.error("Error connecting to mongoDB", err);
  });

//landing routes
app.get("/", (req, res) => {
  res.send("welcome to homepage of recipe blog!");
});
//posts routes
//users routes
//authentication routes

//port
const port = process.env.PORT || 8000;
//listening to port
app.listen(port, () => {
  console.log(`Express API listening on port ${port}!`);
});
