const mongoose = require("mongoose");
const hostSchema = mongoose.Schema({
hostName: String,
hostEmail:String,
hostPhone:String,
hostAddress:String,
hostPassword:String,
properties:[{ type: mongoose.Schema.ObjectId, ref: "Property" }],
});

module.exports = mongoose.model("Host", hostSchema);
