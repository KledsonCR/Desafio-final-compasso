const Joi = require('joi').extend(require('@joi/date'));
const { cpfRegex } = require('../../helper/utils/Regex');

const birthDay = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18);

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(3).trim().required(),
      cpf: Joi.string()
        .regex(cpfRegex())
        .message('Cpf with invalid format, use only xxx.xxx.xxx-xx format!')
        .required(),
      birthDay: Joi.date().format().max(birthDay).required(),
      email: Joi.string().trim().email().required(),
      password: Joi.string().min(6).required(),
      canDrive: Joi.string().valid('yes', 'no').required()
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
