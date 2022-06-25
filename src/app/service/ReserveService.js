const ReserveRepository = require('../repository/ReserveRepository');

class ReserveService {
  async create(id, payload) {
    const result = await ReserveRepository.create({ ...id, ...payload });
    return result;
  }

  async findAll(payload) {
    const result = await ReserveRepository.findAll(payload);
    return result;
  }

  async findById(id) {
    const result = await ReserveRepository.findById(id);
    return result;
  }

  async update(id, payload) {
    const result = await ReserveRepository.update(id, payload);
    return result;
  }

  async delete(id) {
    const result = await ReserveRepository.delete(id);
    return result;
  }
}

module.exports = new ReserveService();
