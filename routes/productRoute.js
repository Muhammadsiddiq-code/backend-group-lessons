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

ProductRouter.post("/constcreate", CreateProduct);
ProductRouter.get("/get", Getproduct);
ProductRouter.get("/getId/:id", getProductbyId);
ProductRouter.put("/update/:id", updateProduct);
ProductRouter.delete("/delete/:id", deleteProduct);

module.exports = { ProductRouter };
