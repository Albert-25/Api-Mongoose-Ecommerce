const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId },
    productsId: [{ type: mongoose.Types.ObjectId }],
    status: { type: String, enum: ["undelivered", "delivered"] },
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
});

const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = purchaseModel;