const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
	async create(payload) {
		return RentalSchema.create(payload);
	}

	async findAll(payload) {
		return RentalSchema.find(payload);
	}
}

module.exports = new RentalRepository();