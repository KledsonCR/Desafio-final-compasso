const AutheService = require('../service/AutheService');

class AutheController {
	async authenticate(req, res) {
		try {
			const { email, password } = req.body;
			const result = await AutheService.authenticate(email, password);
			return res.status(201).json(result);
		}catch (error) {
			return res.status(400).json(error.message);
		}
	}
}

module.exports = new AutheController();