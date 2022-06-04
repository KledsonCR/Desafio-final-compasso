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
}
	

module.exports = new CarService();