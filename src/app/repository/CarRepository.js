const CarSchema = require('../schema/CarSchema');

class CarRepository {
	async create(payload, result) {
		return CarSchema.create(payload, result);
	}

	async find(payload) {
		const myCustomLabels = {
			totalDocs: 'total',
			docs: 'vehicles',
			page: 'offset',
			nextPage: false,
			prevPage: false,
			totalPages: 'offsets',
			pagingCounter: false,
			meta: false,
			hasPrevPage: false,
			hasNextPage: false,
			limit: 'limit'
		};
		const options = {
			page: 1,
			limit: 50,
			customLabels: myCustomLabels,
		};
		return CarSchema.paginate(payload, options, {});
	}

	async findById(payload) {
		return CarSchema.findById(payload);
	}

	async update(id, payload) {
		return CarSchema.findByIdAndUpdate(id, payload);
	}

	async delete(id) {
		return CarSchema.findByIdAndDelete(id);
	}
	
}

module.exports = new CarRepository();