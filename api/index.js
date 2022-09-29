const app = require("./app")
const { PORT } = require("./src/config/index");
const mongooseConnection = require("./src/db/mongooseConnection");

mongooseConnection()
    .then(() => {
        app.listen(PORT, () => { console.log(`Running on the port ${PORT}`) })
    })
    .catch((error) => {
        console.log("this is the error :( ===>>> ", error)
    })