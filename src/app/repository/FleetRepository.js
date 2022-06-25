const FleetSchema = require('../schema/FleetSchema');

class FleetRepository {
  async create(id, payload) {
    return FleetSchema.create(id, payload);
  }

  async findAll(payload) {
    const { page = 1, limit = 50, ...query } = payload;
    return FleetSchema.paginate(
      { ...query },
      {
        limit: Number(limit),
        page: Number(page),
        skip: (Number(page) - 1) * Number(limit)
      }
    );
  }

  async findById(id) {
    return FleetSchema.findById(id);
  }

  async update(id, payload) {
    return FleetSchema.findByIdAndUpdate(id, payload);
  }

  async delete(id) {
    return FleetSchema.findByIdAndDelete(id);
  }
}

module.exports = new FleetRepository();
