const CarSchema = require('../schema/CarSchema');

class CarRepository {
	create(payload) {
		return CarSchema.create(payload);
	}
}

module.exports = new CarRepository();