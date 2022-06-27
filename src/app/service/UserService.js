const UserRepository = require('../repository/UserRepository');
const BadRequest = require('../errors/BadRequest');
const NotFound = require('../errors/NotFound');

class UserService {
  async create(payload) {
    const result = await UserRepository.create(payload);
    if (!result) throw new NotFound('Not found');
    return result;
  }

  async findAll(payload) {
    const result = await UserRepository.findAll(payload);
    if (!result) throw new NotFound('Not found');
    return result;
  }

  async findById(id) {
    const result = await UserRepository.findById(id);
    if (!result) throw new BadRequest(`Id ${id} It is not valid`);
    return result;
  }

  async update(id, payload) {
    const result = await UserRepository.update(id, payload);
    if (!result) throw new BadRequest(`Id ${id} It is not valid`);
    return result;
  }

  async delete(id) {
    const result = await UserRepository.delete(id);
    if (!result) throw new NotFound(`Id ${id} It is not valid`);
    return result;
  }
}

module.exports = new UserService();
