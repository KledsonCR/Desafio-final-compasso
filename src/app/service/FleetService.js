const FleetRepository = require('../repository/FleetRepository');

class FleetService {
	async create(id, payload) {
		const result = await FleetRepository.create({...id, ...payload});
		return result;
	}

	async findAll(payload) {
		const result = await FleetRepository.findAll(payload);
		return result;
	}
	
	async findById(id) {
		const result = await FleetRepository.findById(id);
		return result;
	}

	async update(id, payload) {
		const result = await FleetRepository.update(id, payload);
		return result;
	}

	async delete(id) {
		const result = await FleetRepository.delete(id);
		return result;
	}
}

module.exports = new FleetService();