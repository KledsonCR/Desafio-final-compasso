const Joi = require('joi').extend(require('@joi/date'));
//const { cnpjRegex } = require('../../helper/utils/Regex');

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			name : Joi.string().trim().required(),
			cnpj: Joi.string()/*.regex(cnpjRegex())*/.required(),
			activities: Joi.string().trim().required(),
			address: Joi.array().items({
				zipCode: Joi.string().min(8).max(8).trim().required(),
				number: Joi.number().min(1).trim().required(),
				isFilial: Joi.boolean().required()
			})
		});
		const { error } = await schema.validate(req.body, { abortEarly: false });
		if (error) 	throw error;

		return next();
	} catch (error) {
		return res.status(400).json(error);
	}
};


