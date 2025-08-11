const { Router } = require("express")
const CarRoute = Router()

const {
    CreateCar,
    GetAllCars,
    GetCarById,
    updateCar,
    deleteCar,
} = require("../controller/carController")





const validateScheme = (scheme) => (req, res, next) => {
  const validationResult = scheme.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  registerCarValidationScheme,
  updateCarValidationScheme,
} = require("../validation/productValidation");

CarRoute.post(
  "/carGet",
  validateScheme(registerCarValidationScheme),
  GetAllCars
);

CarRoute.put(
  "/carUpdate",
  validateScheme(updateCarValidationScheme),
  updateCar
);


// CarRoute.post("/carCreate", CreateCar)
CarRoute.get("/carGet", GetAllCars)
CarRoute.get("/carGetById/:id", GetCarById)
// CarRoute.put("/carUpdate/:id", updateCar)
CarRoute.delete("/carDelete/:id", deleteCar)

module.exports = { CarRoute }