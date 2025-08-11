const Joi = require("joi");

// === PRODUCT VALIDATION ===

// CREATE / REGISTER
const registerProductValidationScheme = Joi.object({
  name: Joi.string().required().trim(),
  price: Joi.number().required(),
  description: Joi.string().required().trim(),
  image: Joi.string().required().trim(),
  count: Joi.number().default(0),
});

// UPDATE
const updateProductValidationScheme = Joi.object({
  name: Joi.string().optional().trim(),
  price: Joi.number().optional(),
  description: Joi.string().optional().trim(),
  image: Joi.string().optional().trim(),
  count: Joi.number().optional(),
});

module.exports = {
  registerProductValidationScheme,
  updateProductValidationScheme,
};
