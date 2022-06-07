const Joi = require('joi').extend(require('@joi/date'));
const validateCpf = require('../../helper/functions/CpfValid');

const birthDay = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18);

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			name: Joi.string().min(3).required(),
			cpf: Joi.string()
				.min(11).max(14)
				.custom((value, help) => {
					if (!validateCpf(value)) {
						return help.message('Invalid CPF!');
					}
					return true;
				})
				.required(),
			birthDay: Joi.date().format().max(birthDay).required(),
			email: Joi.string().trim().required(),           
			password: Joi.string().min(6),
			canDrive: Joi.string().required().valid('yes', 'no').required(),

		});

		const { error } = await schema.validate(req.body, { abortEarl: true });
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
