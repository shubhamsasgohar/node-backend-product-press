const express = require('express');
const Setting = require('../model/setting');


// Create Setting api
exports.createSetting = async (req, res) => {
    try {
        const setting = await Setting.create(req.body);
        res.status(201).json({
            status: "success",
            message: "Data saved sucessfully!",
            setting,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "error",
            message: "Failed to save data",
        });
    }
}