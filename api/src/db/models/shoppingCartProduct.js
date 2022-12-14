const mongoose = require("mongoose");

const shoppingCartProductSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId },
    productsId: [{ type: mongoose.Types.ObjectId }],
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
});

const shoppingCartProductModel = mongoose.model("shoppingCartProduct", shoppingCartProductSchema);

module.exports = shoppingCartProductModel;