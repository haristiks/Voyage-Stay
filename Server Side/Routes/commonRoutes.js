const express = require("express");
const router = express.Router();
const controller = require("../Controllers/commonController");
const TryCatch = require("../Middlewares/tryCatchMiddleware");

router.get("/ishost/:mobile", TryCatch(controller.isHost));

module.exports = router;
