const Joi = require('joi').extend(require('@joi/date'));
const validateCpf = require('../../helper/functions/CpfValid');

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			name: Joi.string().required(),
			cpf: Joi.string().min(11).max(11)
				.custom((value, help) => {
					if (!validateCpf(value)) {
						return help.message('Invalid CPF!');
					}
					return true;
				})
				.required(),
			birthDay: Joi.date().required(),
			email: Joi.string().trim().required(),           
			password: Joi.string().min(6).max(2022),
			canDrive: Joi.string().required().valid('yes', 'no').required(),

		});

		const { error } = await schema.validate(req.body, { abortEarl: true });
		if (error) throw  error;    
		return next();
	} catch (error) {
		return res.status(400).json(error.message);
	}
};
