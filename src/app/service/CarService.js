const CarRepository = require('../repository/CarRepository');
const NotFound = require('../errors/NotFound');

class CarService {
  async create(payload) {
    const result = await CarRepository.create(payload);
    return result;
  }

  async findAll(payload) {
    const result = await CarRepository.findAll(payload);
    return result;
  }

  async findById(id) {
    const result = await CarRepository.findById(id);
    if (result == null) throw new NotFound(id);
    return result;
  }

  async update(id, payload) {
    const result = await CarRepository.update(id, payload);
    if (result == null) throw new NotFound(id);
    return result;
  }

  async delete(id) {
    const result = await CarRepository.delete(id);
    if (result == null) throw new NotFound(id);
    return result;
  }

  async updateAccessories(id, descriptionId, payload) {
    const result = await CarRepository.updateAccessories(id, descriptionId, payload);
    return result;
  }
}

module.exports = new CarService();
