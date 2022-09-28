const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: { type: String, require: true },
    createdAt: { type: Date, default: new Date() }
},{
    versionKey:false
});

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;