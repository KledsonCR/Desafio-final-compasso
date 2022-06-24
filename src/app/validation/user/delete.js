const Joi = require('joi');

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			id: Joi.string().trim()
				.min(24)
				.max(24)				
		});

		const { error } = await schema.validate(req.params, { abortEarly: false });
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