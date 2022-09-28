const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    text: { type: String, require: true },
    userId: { type: mongoose.Types.ObjectId },
    productId: { type: mongoose.Types.ObjectId },
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
});

const reviewModel = mongoose.model("review", reviewSchema);

module.exports = reviewModel;