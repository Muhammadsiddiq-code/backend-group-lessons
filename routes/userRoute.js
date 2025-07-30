const { Router } = require("express");
const {
  Createproduct,
  GetProduct,
  getproductById,
  updateProduct,
  deleteProduct,
} = require("../controller/userController");
const UserRouter = Router();

UserRouter.post("/createProduct", Createproduct) 
UserRouter.get("/getproduct", GetProduct)
UserRouter.get("/getprodictById/:id", getproductById);
UserRouter.put("/updateproduct/:id", updateProduct);
UserRouter.delete("/deleteproduct/:id", deleteProduct);



module.exports = { UserRouter }

