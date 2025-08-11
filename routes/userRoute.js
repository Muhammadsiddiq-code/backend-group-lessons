// const { Router } = require("express");
// const UserRouter = Router();
// const {
//   CreateUser,
//   getUserById,
//   updateUser,
//   deleteUser,
//   GetUser,
//   postLogin,
//   searchUser,
// } = require("../controller/userController");

// const validateScheme  = (scheme) => (req, res, next) => {
//     const validationResult = scheme.validate(req.body);
//     if (validationResult.error) {
//         return res
//           .status(400)
//           .send( validationResult.error.details[0].message );
//     };
//     next()
// }
    
// const {
//   registerValidationScheme,
//   updateUserValidationScheme,
// } = require("../validation/usersValidation");




// UserRouter.post(
//   "/createUser",
//   validateScheme(registerValidationScheme),
//   CreateUser
// );

// UserRouter.put(
//   "/updateUser",
//   validateScheme(updateUserValidationScheme),
//   updateUser
// );


// UserRouter.get("/getUser", GetUser)
// UserRouter.get("/getUserById/:id", getUserById);
// // UserRouter.put("/updateUser/:id", updateUser);
// UserRouter.delete("/deleteUser/:id", deleteUser);
// UserRouter.post("/loginUser", postLogin)
// UserRouter.get("/searchUser", searchUser);


// module.exports = { UserRouter }

// // module.exports = UserRouter









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

const validateScheme = (scheme) => (req, res, next) => {
  const { error } = scheme.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

const {
  registerValidationScheme,
  updateUserValidationScheme,
} = require("../validation/usersValidation");

UserRouter.post(
  "/createUser",
  validateScheme(registerValidationScheme),
  CreateUser
);

UserRouter.put(
  "/updateUser",
  validateScheme(updateUserValidationScheme),
  updateUser
);

UserRouter.get("/getUser", GetUser);
UserRouter.get("/getUserById/:id", getUserById);
UserRouter.delete("/deleteUser/:id", deleteUser);
UserRouter.post("/loginUser", postLogin);
UserRouter.get("/searchUser", searchUser);

module.exports = { UserRouter };
