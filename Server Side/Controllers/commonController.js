const mongoose = require("mongoose");
const User = require("../Models/userSchema");
const Host = require("../Models/hostSchema");
module.exports = {
  isHost: async (req, res) => {
    const mobile = req.params.mobile;
    const hostUser = await Host.findOne({ phone: mobile });
    if (!hostUser) {
      return res.json({ status: "error", message: "User not found" });
    }
    res.status(200).json({ status: "success", message: "host user" });
  },
};
