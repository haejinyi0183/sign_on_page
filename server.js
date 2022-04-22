require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");


const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const user = require("./register_user");

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log("Connected to database ");
  })
  .catch(() => {
    console.error("Error connecting to the database.");
  });

app.use("/", function (req, res, next) {
  res.redirect("welcome.html");
  next();
});

app.post("/", user);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
