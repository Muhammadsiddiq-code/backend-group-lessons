const Joi = require("joi");

const registerValidation = Joi.object({
  username: Joi.string().min(3).max(30).required().trim(),
  password: Joi.string()
    .require()
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
    // car_id: Joi.string(),
    // house_id: Joi.string()
    // edu_id: Joi.string(),
});

const updateUserValidationScheme = Joi.object({
  username: Joi.string().min(3).max(30).required().trim(),
  password: Joi.string()
    .require()
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
//   car_id: Joi.string(),
//   house_id: Joi.string(),
});

module.exports = {
  registerValidation,
  updateUserValidationScheme,
};