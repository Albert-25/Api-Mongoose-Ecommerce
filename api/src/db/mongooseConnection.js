const mongoose = require("mongoose");

const CONNECTION_URL = "mongodb+srv://AlbertJM:python@cluster0.s8uxibm.mongodb.net/ecommerce?retryWrites=true&w=majority";

const mongooseConnection = async () => {
    await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = mongooseConnection;