const FleetRepository = require('../repository/FleetRepository');
const NotFound = require('../errors/NotFound');

class FleetService {
  async create(id, payload) {
    const result = await FleetRepository.create({ ...id, ...payload });
    if (!result) throw new NotFound('Not found');
    return result;
  }

  async findAll(payload) {
    const result = await FleetRepository.findAll(payload);
    if (!result) throw new NotFound('Not found');
    return result;
  }

  async findById(id) {
    const result = await FleetRepository.findById(id);
    if (!result) throw new NotFound(`Id ${id} It is not valid`);
    return result;
  }

  async update(id, payload) {
    const result = await FleetRepository.update(id, payload);
    if (!result) throw new NotFound('Not found');
    return result;
  }

  async delete(id) {
    const result = await FleetRepository.delete(id);
    if (!result) throw new NotFound(`Id ${id} It is not valid`);
    return result;
  }
}

module.exports = new FleetService();
