const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const config = {
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_DATABASE: process.env.DB_DATABASE,
    PORT: process.env.PORT,
}

module.exports = config;