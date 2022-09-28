const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    name: { type: String, require: true },
    categoryId: { type: mongoose.Types.ObjectId },
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
});

const subCategoryModel = mongoose.model("subCategory", subCategorySchema);

module.exports = subCategoryModel;