const Joi = require('joi').extend(require('@joi/date'));
const validateCnpj = require('../../helper/functions/CnpjValid');

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			name : Joi.string().trim().required(),
			cnpj: Joi.string().trim()
				.min(14).max(18)
				.custom((value, helpe) => {
					if (!validateCnpj(value)) {
						return helpe.message('Invalid CNPJ!');
					}
					return true;
				})
				.required(),
			activities: Joi.string().trim().required(),
			address: Joi.array()
				.min(1)
				.unique('zipCode')
				.items(Joi.object({
					zipCode: Joi.string().min(8).max(8).trim().required(),
					number: Joi.number().min(1).trim().required(),
					complement: Joi.string().trim().required(),
					isFilial: Joi.boolean().required(),
				})
				)
		});
		const { error } = await schema.validate(req.body, { abortEarly: true });
		if (error) {
			throw {
				message: 'Bad Request',
				details: [
					{
						message: error.message,
					},
				],
			};
		}

		return next();
	} catch (error) {
		return res.status(400).json(error);
	}
};

