const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

let app = express();

let PORT = 8001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/certification")
  .then(() => {
    console.log("connected to MONGO DB");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});