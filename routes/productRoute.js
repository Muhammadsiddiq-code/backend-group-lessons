const { Router } = require("express");
const {
  CreateUser,
  GetUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/productController");
const ProductRouter = Router();

UserRouter.post("/createUser", CreateUser);
UserRouter.get("/getUser", GetUser);
UserRouter.get("/getUserById/:id", getUserById);
UserRouter.put("/updateUser/:id", updateUser);
UserRouter.delete("/deleteUser/:id", deleteUser);

module.exports = { ProductRouter };
