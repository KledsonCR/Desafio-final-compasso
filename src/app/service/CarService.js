const CarRepository = require('../repository/CarRepository');
const NotFound = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');

class CarService {
  async create(payload) {
    const result = await CarRepository.create(payload);
    if (!result) throw new NotFound('Not found');
    return result;
  }

  async findAll(payload) {
    const result = await CarRepository.findAll(payload);
    if (!result) throw new NotFound('Not found');
    return result;
  }

  async findById(id) {
    const result = await CarRepository.findById(id);
    if (!result) throw new BadRequest(`Id ${id} It is not valid`);
    return result;
  }

  async update(id, payload) {
    const result = await CarRepository.update(id, payload);
    if (!result) throw new BadRequest(`Id ${id} It is not valid`);
    return result;
  }

  async delete(id) {
    const result = await CarRepository.delete(id);
    if (!result) throw new NotFound(`Id ${id} It is not valid`);
    return result;
  }

  async updateAccessories(id, descriptionId, payload) {
    const result = await CarRepository.updateAccessories(id, descriptionId, payload);
    if (!result) throw new NotFound(`Id ${id} It is not valid`);
    return result;
  }
}

module.exports = new CarService();
