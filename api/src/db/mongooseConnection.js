const mongoose = require("mongoose");
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DATABASE
} = require("../config/index");

const CONNECTION_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}?retryWrites=true&w=majority`;

const mongooseConnection = async () => {
    console.log("QUE PASAAAA ", CONNECTION_URL)
    await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = mongooseConnection;