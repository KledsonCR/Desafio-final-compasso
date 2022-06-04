const CarSchema = require('../schema/CarSchema');

class CarRepository {
	async create(payload, result) {
		return CarSchema.create(payload, result);
	}

	async find(payload) {
		return CarSchema.find(payload);
	}

	async findById(payload) {
		return CarSchema.findById(payload);
	}
}

module.exports = new CarRepository();