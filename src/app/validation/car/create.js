const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			model: Joi.string().trim().required(),
			type: Joi.string().trim().required(),
			brand: Joi.string().trim().required(),
			color: Joi.string().trim().required(),           
			year: Joi.number().min(1950).max(2022).required(), 
			accessories: Joi.array()
				.unique()
				.min(1)
				.items({ description: Joi.string().trim().required() })
				.min(1)
				.required(),
			passengersQtd: Joi.number().integer()
				.min(1)
				.max(5)
				.required()
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
