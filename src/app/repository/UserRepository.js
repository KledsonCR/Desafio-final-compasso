const UserSchema = require('../schema/UserSchema');

class UserRepository {
	async create(payload) {
		return UserSchema.create(payload);
	}
  
	async findAll(payload) {
		return UserSchema.find(payload);
	}

	async findById(payload) {
		return UserSchema.findById(payload);
	}

}

module.exports = new UserRepository();