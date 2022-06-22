const CarSchema = require('../schema/CarSchema');

class CarRepository {
	async create(payload, result) {
		return CarSchema.create(payload, result);
	}

	async findAll(payload) {
		const { page = 1, limit = 50, ...query } = payload;
		return CarSchema.paginate(
			{ ...query },
			{
				limit: Number(limit),
				page: Number(page)
			}
		);
	}

	async findById(id) {
		return CarSchema.findById(id);
	}

	async update(id, payload) {
		return CarSchema.findByIdAndUpdate(id, payload);
	}

	async delete(id) {
		return CarSchema.findByIdAndDelete(id);
	}

	async updateAccessories(id, descriptionId, payload) {
		return CarSchema.findByIdAndUpdate(
			id,
			{
				$set: {
					'accessories.$[outer].description': payload.description,
				},
			},
			{
				arrayFilters: [
					{
						'outer._id': descriptionId,
					},
				],
			}
		);
	}
}

module.exports = new CarRepository();
