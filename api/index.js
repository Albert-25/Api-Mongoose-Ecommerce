const app = require("./app")
const PORT = 3000;
const mongooseConnection = require("./src/db/mongooseConnection");

mongooseConnection()
    .then(() => {
        app.listen(PORT, () => { console.log(`Running on the port ${PORT}`) })
    })
    .catch((error) => {
        console.log("this is the error :( ===>>> ", error)
    })