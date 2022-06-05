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

	async update(id, payload) {
		return CarSchema.findByIdAndUpdate(id, payload);
	}

	async delete(id) {
		return CarSchema.findByIdAndDelete(id);
	}	
}

module.exports = new CarRepository();