const { Router } = require("express");
const classRoute = Router();
const {
  createClass,
  getAllClass,
  GetClassById,
  updateClass,
  deleteClass,
} = require("../controller/classController");

classRoute.post("/createClass", createClass);
classRoute.get("/getAllClass", getAllClass);
classRoute.get("/getClassById/:id", GetClassById);
classRoute.put("/updateClass/:id", updateClass);
classRoute.delete("/deleteClass/:id", deleteClass);


module.exports = { classRoute }
