const Joi = require('joi').extend(require('@joi/date'));
const { cnpjRegex, cepRegex } = require('../../helper/utils/Regex');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().trim(),
      cnpj: Joi.string().regex(cnpjRegex()),
      activities: Joi.string().trim(),
      address: Joi.array().items({
        zipCode: Joi.string().regex(cepRegex()).trim(),
        number: Joi.number().min(1).trim(),
        isFilial: Joi.boolean()
      })
    });
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
