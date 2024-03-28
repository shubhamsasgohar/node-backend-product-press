const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        shop_name: {
            type: String,
        },
        shop_id: {
            type: Number,
        },
        access_token: {
            type: String,
        },
        client_id: {
            type: String,
        },
        client_secret: {
            type: String,
        },
        json_data: {
            type: Array
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Setting = mongoose.model("Setting", settingSchema);
module.exports = Setting;
