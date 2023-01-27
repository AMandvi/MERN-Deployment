//import the controller
const Pet = require("../controllers/controller")

module.exports = (app) => {
    app.get("/api/pets", Pet.findAll)
    app.post("/api/pets", Pet.create)
    app.get("/api/pets/:id", Pet.findOne)
    app.put("/api/pets/:id", Pet.update)
    app.delete("/api/pets/:id", Pet.delete)
}