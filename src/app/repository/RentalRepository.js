const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
	async create(payload) {
		return RentalSchema.create(payload);
	}

	async findAll(payload) {
		return RentalSchema.find(payload);
	}

	async findById(id) {
		return RentalSchema.findById(id);
	}

	async update(id, payload) {
		return RentalSchema.findByIdAndUpdate(id, payload);
	}

	async delete(id) {
		return RentalSchema.findByIdAndDelete(id);
	}
	
}

module.exports = new RentalRepository();