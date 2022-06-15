const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
	async create(payload) {
		return RentalSchema.create(payload);
	}

	async findAll(payload) {
		const { page = 1, limit = 50, ...query } = payload;
		return RentalSchema.paginate(
			{ ...query },
			{
				limit: Number(limit),
				page: Number(page),
				skip: (Number(page) - 1) * Number(limit)
			}
		);
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