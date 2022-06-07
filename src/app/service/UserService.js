const UserRepository = require('../repository/UserRepository');
const cpfFormat = require('../helper/functions/CpfFomat');

class UserService {
	async create(payload) {
		const result = await UserRepository.create(payload);
		const users = cpfFormat(result);
		return users;
	}

	async findAll(payload) {
		const result = await UserRepository.findAll(payload);
		return result;
	}
	
	async findById(id) {
		const result = await UserRepository.findById(id);
		return result;
	}

	async update(id, payload) {
		const result = await UserRepository.update(id, payload);
		return result;
	}

	async delete(id) {
		const result = await UserRepository.delete(id);
		return result;
	}
}

module.exports = new UserService();