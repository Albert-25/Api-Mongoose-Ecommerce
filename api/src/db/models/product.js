const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number, require: true },
    category: { type: mongoose.Types.ObjectId },
    subCategory: { type: mongoose.Types.ObjectId },
    type: { type: mongoose.Types.ObjectId },
    discount: { type: Number },
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;