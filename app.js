const express = require("express")
const app = express()
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
app.use(express.json());

// Define Routes
const Setting = require('./routes/Setting');

// Define api path
app.use("/api/v1/setting", Setting)


app.all("*", (req, res, next) => {
    next(new Error(`Can't find ${req.originalUrl} on this server!`, 404));
});


module.exports = app