const { Router } = require("express")

const {
    CreateCar,
    GetAllCars,
    GetCarById,
    updateCar,
    deleteCar,
} = require("../controllers/carController")

const CarRoute = Router()

CarRoute.post("/carCreate", CreateCar)
CarRoute.get("/carGet", GetAllCars)
CarRoute.get("/carGetById/:id", GetCarById)
CarRoute.put("/carUpdate/:id", updateCar)
CarRoute.delete("/carDelete/:id", deleteCar)

module.exports = CarRoute