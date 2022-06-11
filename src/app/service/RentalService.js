const RentalRepository = require('../repository/RentalRepository');

class RentalService {
	async create(payload) {
		const result = await RentalRepository.create(payload);
		return result;
	}

	async findAll(payload) {
		const result = await RentalRepository.findAll(payload);
		return result;
	}

	async findById(id) {
		const result = await RentalRepository.findById(id);
		return result;
	}

	async update(id, payload) {
		const result = await RentalRepository.update(id, payload);
		return result;
	}

	async delete(id) {
		const result = await RentalRepository.delete(id);
		return result;
	}
}

module.exports = new RentalService();