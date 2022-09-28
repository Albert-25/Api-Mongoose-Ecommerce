const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number, require: true },
    categoryId: { type: mongoose.Types.ObjectId },
    subCategoryId: { type: mongoose.Types.ObjectId },
    typeId: { type: mongoose.Types.ObjectId },
    brandId: { type: mongoose.Types.ObjectId },
    discount: { type: Number },
    puchasesId: [{ type: mongoose.Types.ObjectId }],
    shoppingCartProductsId: [{ type: mongoose.Types.ObjectId }],
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;