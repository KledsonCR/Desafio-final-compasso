const UserRepository = require('../repository/UserRepository');

class UserService {
	async create(payload) {
		const result = await UserRepository.create(payload);
		return result;
	}

	async findAll(payload) {
		const result = await UserRepository.findAll(payload);
		return result;
	}
	
	async findById(id) {
		const result = await UserRepository.findById(id);
		return result;
	}
}

module.exports = new UserService();