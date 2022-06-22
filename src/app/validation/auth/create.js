const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			email: Joi.string().trim().email().required(),
			password: Joi.string().min(6).required(),
		});

		const { error } = await schema.validate(req.body, { abortEarly: false });
		if (error) throw error;
		return next();
	} catch (error) {
		return res.status(400).json({
			errors: error.details.map((detail) => ({
				name: detail.path.join('.'),
				description: detail.message,
			})),
		});
	}
};
