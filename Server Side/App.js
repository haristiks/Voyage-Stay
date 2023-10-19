const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3000;
require("dotenv").config();
mongoose.connect("mongodb://127.0.0.1:27017/Voyage-Stay");

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is Running on PORT: ${PORT}`);
});
