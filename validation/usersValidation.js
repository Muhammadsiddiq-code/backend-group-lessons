// const Joi = require("joi");

// const registerValidation = Joi.object({
//   username: Joi.string().min(3).max(30).required().trim(),
//   password: Joi.string()
//     .required()
//     .min(8)
//     .max(30)
//     .pattern(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
//     ),
//   firstname: Joi.string(),
//   lastname: Joi.string(),
//   birthday: Joi.string(),
//   jinsi: Joi.string().optional(),
//   adress: Joi.string(),
//   phone: Joi.string().pattern(/^\+998\d{9}$/),
//   Product_id: Joi.string()
// });

// const updateUserValidationScheme = Joi.object({
//   username: Joi.string().min(3).max(30).required().trim(),
//   password: Joi.string()
//     .required()
//     .min(8)
//     .max(30)
//     .pattern(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
//     ),
//   firstname: Joi.string(),
//   lastname: Joi.string(),
//   birthday: Joi.string(),
//   jinsi: Joi.string().optional(),
//   adress: Joi.string(),
//   phone: Joi.string().pattern(/^\+998\d{9}$/),
//   // age: Joi.number().min(18).max(100),
// });

// module.exports = {
//   registerValidation,
//   updateUserValidationScheme,
// };




const Joi = require("joi");

const registerValidationScheme = Joi.object({
  username: Joi.string().min(3).max(30).required().trim(),
  password: Joi.string()
    .required()
    .min(8)
    .max(30)
    .pattern(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
    ),
  firstname: Joi.string(),
  lastname: Joi.string(),
  birthday: Joi.string(),
  jinsi: Joi.string().optional(),
  adress: Joi.string(),
  phone: Joi.string().pattern(/^\+998\d{9}$/),
  product_id: Joi.string(), // product_id ni model bilan bir xil yozish kerak
});

const updateUserValidationScheme = Joi.object({
  username: Joi.string().min(3).max(30).required().trim(),
  password: Joi.string()
    .required()
    .min(8)
    .max(30)
    .pattern(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
    ),
  firstname: Joi.string(),
  lastname: Joi.string(),
  birthday: Joi.string(),
  jinsi: Joi.string().optional(),
  adress: Joi.string(),
  phone: Joi.string().pattern(/^\+998\d{9}$/),
});

module.exports = {
  registerValidationScheme,
  updateUserValidationScheme,
};
