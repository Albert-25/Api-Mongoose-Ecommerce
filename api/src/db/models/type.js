const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    subCategoryId: { type: mongoose.Types.ObjectId },
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
});

const typeModel = mongoose.model("model", typeSchema);

module.exports = typeModel;