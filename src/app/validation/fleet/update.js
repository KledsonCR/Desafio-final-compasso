const Joi = require('joi').extend(require('@joi/date'));
const { status } = require('../../helper/utils/ENUMS');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id_car: Joi.string().trim(),
      id_rental: Joi.string().trim(),
      status: Joi.string()
        .valid(...Object.values(status))
        .trim(),
      daily_value: Joi.number(),
      plate: Joi.string().trim()
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json({
      errors: error.details.map((detail) => ({
        name: detail.path.join('.'),
        description: detail.message
      }))
    });
  }
};
