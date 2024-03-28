const express = require("express");
const defalut = require("../controller/Defalut");

const router = express.Router();
router.post("/createSetting", defalut.createSetting)

module.exports = router;
