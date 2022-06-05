const Joi = require('joi').extend(require('@joi/date'));
const CarYear = require('../../helper/functions/CarYear');

module.exports = async (req, res, next) => {
	try {
		const schema = Joi.object({
			model: Joi.string().trim().required(),
			type: Joi.string().trim().required(),
			brand: Joi.string().trim().required(),
			color: Joi.string().trim().required(),           
			year: Joi.number().min(1950).max(2022)
				.custom((value, help) => {
					if (CarYear(value)) {
						return help.message('invalid year!');
					}
					return true;
				}).required(),
			accessories: Joi.array()
				.unique()
				.min(1)
				.items(Joi.object({ description: Joi.string().trim().required() }).min(1))	
				.required(),
			passengersQtd: Joi.number().integer().min(1).max(5).required()

		});

		const { error } = await schema.validate(req.body, { abortEarl: true });
		if (error) throw  error;    
		return next();
	} catch (error) {
		return res.status(400).json(error.message);
	}
};
