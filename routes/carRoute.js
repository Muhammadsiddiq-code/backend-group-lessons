const { Router } = require("express")
const CarRoute = Router()

const {
    CreateCar,
    GetAllCars,
    GetCarById,
    updateCar,
    deleteCar,
} = require("../controller/carController")


CarRoute.post("/carCreate", CreateCar)
CarRoute.get("/carGet", GetAllCars)
CarRoute.get("/carGetById/:id", GetCarById)
CarRoute.put("/carUpdate/:id", updateCar)
CarRoute.delete("/carDelete/:id", deleteCar)

module.exports = { CarRoute }