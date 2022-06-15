const CarRepository = require('../repository/CarRepository');

class CarService {
	async create(payload) {
		const result = await CarRepository.create(payload);
		return result;
	}

	async find(payload) {
		const result = await CarRepository.find(payload);
		return result;
	}

	async findById(id) {
		const result = await CarRepository.findById(id);
		return result;
	}

	async update(id, payload) {
		const result = await CarRepository.update(id, payload);
		return result;
	}

	async delete(id) {
		const result = await CarRepository.delete(id);
		return result;
	}

	async updateAccessories(id, descriptionId, payload) {
		const result = await CarRepository.updateAccessories(id, descriptionId, payload);
		return result;
	}
	
}
	
module.exports = new CarService();