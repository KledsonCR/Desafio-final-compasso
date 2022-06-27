const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id_user: Joi.string().trim(),
      data_start: Joi.date().format('DD/MM/YYYY'),
      data_end: Joi.date().format('DD/MM/YYYY'),
      id_car: Joi.string().trim(),
      id_rental: Joi.string().trim(),
      final_value: Joi.number()
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
