// const { Router } = require("express");
// const {
//   deleteProduct,
//   CreateProduct,
//   Getproduct,
//   getProductbyId,
//   updateProduct,
// } = require("../controller/productController");
// const ProductRouter = Router();

// UserRouter.post("/createproduct", CreateProduct);
// UserRouter.get("/getproduct", Getproduct);
// UserRouter.get("/getproductById/:id", getProductbyId);
// UserRouter.put("/updateproduct/:id", updateProduct);
// UserRouter.delete("/deleteproduct/:id", deleteProduct);

// module.exports = { ProductRouter };

// routes/productRoute.js
const { Router } = require("express");
const {
  deleteProduct,
  CreateProduct,
  Getproduct,
  getProductbyId,
  updateProduct,
} = require("../controller/productController");

const ProductRouter = Router();




const validateScheme = (scheme) => (req, res, next) => {
  const validationResult = scheme.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  registerProductValidationScheme,
  updateProductValidationScheme,
} = require("../validation/productValidation");

ProductRouter.post(
  "/constcreate",
  validateScheme(registerProductValidationScheme),
  CreateProduct
);

ProductRouter.put(
  "/update",
  validateScheme(updateProductValidationScheme),
  updateProduct
);




// ProductRouter.post("/constcreate", CreateProduct);
ProductRouter.get("/get", Getproduct);
ProductRouter.get("/getId/:id", getProductbyId);
// ProductRouter.put("/update/:id", updateProduct);
ProductRouter.delete("/delete/:id", deleteProduct);

module.exports = { ProductRouter };