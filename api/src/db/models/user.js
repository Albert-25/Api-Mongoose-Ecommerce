const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    lastname: { type: String },
    email: { type: String },
    cellphone: { type: Number },
    password: { type: String, require: true },
    favoritesId: [{ type: mongoose.Types.ObjectId }],
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;