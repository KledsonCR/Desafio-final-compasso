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

	async update(id, payload) {
		return UserSchema.findByIdAndUpdate(id, payload);
	}

	async delete(id) {
		return UserSchema.findByIdAndDelete(id);
	}	
}

module.exports = new UserRepository();