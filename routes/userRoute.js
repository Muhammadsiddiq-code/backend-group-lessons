const { Router } = require("express");
const { CreateUser } = require("../controller/userController");
const UserRouter = Router();

UserRouter.post("/createUser", CreateUser)



module.exports = { UserRouter }

