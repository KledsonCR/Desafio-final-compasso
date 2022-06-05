const UserService = require('../service/UserService');

class UserCrontroller {
	async create(req, res) {
		const payload = req.body;
		try {
			const result = await UserService.create(payload);
			return res.status(201).json(result);
		} catch(error) {
			return res.status(500).json(error);
		}
	}

	async findAll(req, res) {
		const payload = req.params;
		try {
			const result = await UserService.findAll(payload);
			return res.status(201).json(result);
		} catch(error) {
			return res.status(500).json(error);
		}
	}
}

module.exports = new UserCrontroller();