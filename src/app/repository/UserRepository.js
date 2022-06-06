const UserSchema = require('../schema/UserSchema');

class UserRepository {
	async create(payload) {
		return UserSchema.create(payload);
	}
  
	async findAll(payload) {
		const { page = 1, limit = 50, ...query } = payload;
		return UserSchema.paginate(
			{ ...query },
			{
				limit: Number(limit),
				page: Number(page),
				skip: (Number(page) - 1) * Number(limit)
			}
		);
	}

	async findById(id) {
		return UserSchema.findById(id);
	}

	async update(id, payload) {
		return UserSchema.findByIdAndUpdate(id, payload);
	}

	async delete(id) {
		return UserSchema.findByIdAndDelete(id);
	}	
}

module.exports = new UserRepository();