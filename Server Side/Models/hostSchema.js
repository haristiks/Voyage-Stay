const mongoose = require("mongoose");
const hostSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  password: String,
  role: String,
});

module.exports = mongoose.model("Host", hostSchema);
