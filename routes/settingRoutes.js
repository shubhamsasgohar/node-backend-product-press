const express = require("express");
const settingController = require("./../controller/settingController");


const router = express.Router();
router.post("/createSetting", settingController.createSetting)

module.exports = router;
