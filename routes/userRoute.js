const { Router } = require("express");
const { CreateUser } = require("../controllers/usercontroller");
const UserRouter = Router();

UserRouter.post("./createUser", CreateUser)

module.exports = { UserRouter }

