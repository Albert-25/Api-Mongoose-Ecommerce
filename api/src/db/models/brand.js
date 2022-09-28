const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    name: { type: String, require: true },
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
});

const brandModel = mongoose.model("brand", brandSchema);

module.exports = brandModel;