const Joi = require('joi').extend(require('@joi/date'));
const { cpfRegex } = require('../../helper/utils/Regex');

const birthDay = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18);

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			name: Joi.string().min(3).trim(),
			cpf: Joi.string().regex(cpfRegex())
				.message(
					'Cpf with invalid format, use only xxx.xxx.xxx-xx format!'
				),			
			birthDay: Joi.date().format().max(birthDay),
			email: Joi.string().trim().email(),           
			password: Joi.string().min(6),
			canDrive: Joi.string().valid('yes', 'no'),
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
