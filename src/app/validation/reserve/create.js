const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id_user: Joi.string().trim().required(),
      data_start: Joi.date().format('DD/MM/YYYY').required(),
      data_end: Joi.date().format('DD/MM/YYYY').required(),
      id_car: Joi.string().trim().required(),
      id_rental: Joi.string().trim().required(),
      final_value: Joi.number().required()
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
