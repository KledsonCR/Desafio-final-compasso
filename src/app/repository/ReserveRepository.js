const ReserveSchema = require('../schema/ReserveSchema');

class ReserveRepository {
	async create(id, payload) {
		return ReserveSchema.create(id, payload);
	}

	async findAll(payload) {
		const { page = 1, limit = 50, ...query } = payload;
		return ReserveSchema.paginate(
			{ ...query },
			{
				limit: Number(limit),
				page: Number(page),
				skip: (Number(page) - 1) * Number(limit)
			}
		);
	}

	async findById(id) {
		return ReserveSchema.findById(id);
	}

	async update(id, payload) {
		return ReserveSchema.findByIdAndUpdate(id, payload);
	}

	async delete(id) {
		return ReserveSchema.findByIdAndDelete(id);
	}
	
}

module.exports = new ReserveRepository();