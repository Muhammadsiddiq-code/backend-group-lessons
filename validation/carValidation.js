const Joi = require("joi");
// === CAR VALIDATION ===

// CREATE / REGISTER
const registerCarValidationScheme = Joi.object({
  title: Joi.string().required().trim(),
  model: Joi.string().required().trim(),
  description: Joi.string().optional().trim(),
  color: Joi.string().required().trim(),
  horsePower: Joi.number().required(),
  carType: Joi.string().required().trim(),
  charging: Joi.string().optional().trim(),
  weight: Joi.string().required().trim(),
  gasoline: Joi.string().required().trim(),
  yearMachine: Joi.string().required().trim(),
  price: Joi.number().required(),
});

// UPDATE
const updateCarValidationScheme = Joi.object({
  title: Joi.string().optional().trim(),
  model: Joi.string().optional().trim(),
  description: Joi.string().optional().trim(),
  color: Joi.string().optional().trim(),
  horsePower: Joi.number().optional(),
  carType: Joi.string().optional().trim(),
  charging: Joi.string().optional().trim(),
  weight: Joi.string().optional().trim(),
  gasoline: Joi.string().optional().trim(),
  yearMachine: Joi.string().optional().trim(),
  price: Joi.number().optional(),
});

module.exports = {

  registerCarValidationScheme,
  updateCarValidationScheme,
};