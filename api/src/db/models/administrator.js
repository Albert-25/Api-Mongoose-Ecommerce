const mongoose = require("mongoose");

const administratorSchema = new mongoose.Schema({
    name: { type: String, require: true },
    lastname: { type: String },
    email: { type: String },
    cellphone: { type: Number },
    password: { type: String, require: true },
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
});

const administratorModel = mongoose.model("administrator", administratorSchema);

module.exports = administratorModel;