const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      _id: Joi.string().trim().min(24).max(24),
      model: Joi.string().trim(),
      type: Joi.string().trim(),
      brand: Joi.string().trim(),
      color: Joi.string().trim(),
      year: Joi.number().min(1950).max(2022),
      accessories: Joi.array().unique().min(1).items({ description: Joi.string().trim() }).min(1),
      passengersQtd: Joi.number().integer().min(1).max(5)
    });

    const { error } = await schema.validate(req.query, { abortEarly: false });
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
