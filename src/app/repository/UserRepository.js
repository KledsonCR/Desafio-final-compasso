const UserSchema = require('../schema/UserSchema');

class UserRepository {
	async create(payload) {
		return UserSchema.create(payload);
	}
  
	async findAll(payload) {
		const myCustomLabels = {
			totalDocs: 'total',
			docs: 'User',
			page: 'offset',
			nextPage: false,
			prevPage: false,
			totalPages: 'offsets',
			pagingCounter: false,
			meta: false,
			hasPrevPage: false,
			hasNextPage: false,
         
		};
		const options = {
			page: 1,
			limit: 50,
			customLabels: myCustomLabels,
		};
		return UserSchema.paginate(payload, options, {});
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