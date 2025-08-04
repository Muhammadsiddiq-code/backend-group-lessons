const { Router } = require("express");
const UserRouter = Router();
const {
  CreateUser,
  getUserById,
  updateUser,
  deleteUser,
  GetUser,
  postLogin,
  searchUser,
} = require("../controller/userController");


UserRouter.post("/createUser", CreateUser) 
UserRouter.get("/getUser", GetUser)
UserRouter.get("/getUserById/:id", getUserById);
UserRouter.put("/updateUser/:id", updateUser);
UserRouter.delete("/deleteUser/:id", deleteUser);
UserRouter.post("/loginUser", postLogin)
UserRouter.get("/searchUser", searchUser);


module.exports = { UserRouter }

