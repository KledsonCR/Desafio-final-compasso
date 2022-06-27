const ReserveRepository = require('../repository/ReserveRepository');
const NotFound = require('../errors/NotFound');

class ReserveService {
  async create(id, payload) {
    const result = await ReserveRepository.create({ ...id, ...payload });
    if (!result) throw new NotFound('Not found');
    return result;
  }

  async findAll(payload) {
    const result = await ReserveRepository.findAll(payload);
    if (!result) throw new NotFound('Not found');
    return result;
  }

  async findById(id) {
    const result = await ReserveRepository.findById(id);
    if (!result) throw new NotFound(`Id ${id}`);
    return result;
  }

  async update(id, payload) {
    const result = await ReserveRepository.update(id, payload);
    if (!result) throw new NotFound(`Id ${id}`);
    return result;
  }

  async delete(id) {
    const result = await ReserveRepository.delete(id);
    if (!result) throw new NotFound(`Id ${id}`);
    return result;
  }
}

module.exports = new ReserveService();
