const express = require("express");
const setting = require("../controller/setting");


const router = express.Router();
router.post("/createSetting", setting.createSetting)

module.exports = router;
