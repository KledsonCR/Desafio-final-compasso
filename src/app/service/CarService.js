const CarRepository = require('../repository/CarRepository');

class CarService {
	create(payload) {
		const result = CarRepository.create(payload);
		return result;
	}
}

module.exports = new CarService();