const mongoose = require("mongoose");
const User = require("../Models/userSchema");
const Host = require("../Models/hostSchema");
module.exports = {
  isUser: async (req, res) => {
    const mobile = req.params.mobile;
    const normalUser = await User.findOne({ phone: mobile });
    const hostUser = await Host.findOne({ phone: mobile });
    if (!normalUser && !hostUser) {
      return res.json({ status: "error", message: "User not found" });
    } else if (!hostUser && normalUser) {
      return res
        .status(200)
        .json({ status: "success", message: "normal user" });
    } else if (hostUser && !normalUser) {
      return res.status(200).json({ status: "success", message: "host user" });
    }
  },
};
