const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			email: Joi.string().trim().required(),           
			password: Joi.string().min(6).required(), 
		});

		const { error } = await schema.validate(req.body, { abortEarly: false });
		if (error) {
			throw {
				message: 'Ba Request',
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