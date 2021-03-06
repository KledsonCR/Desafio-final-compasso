const RentalRepository = require('../repository/RentalRepository');
const ViaCep = require('../helper/utils/Api/ViaCep');
const BadRequest = require('../errors/BadRequest');
const NotFound = require('../errors/NotFound');

class RentalService {
  async create(payload) {
    let i = 0;
    do {
      const Zipcode = payload.address;
      const address = Zipcode[i];
      // eslint-disable-next-line no-await-in-loop
      const result = await ViaCep.findCep(address.zipCode);
      const { cep, logradouro, complemento, bairro, localidade, uf } = result;
      address.zipCode = cep;
      address.street = logradouro;
      address.complement = complemento;
      address.district = bairro;
      address.city = localidade;
      address.state = uf;
      i += 1;
    } while (i < payload.address.length);
    const result = await RentalRepository.create(payload);
    if (!result) throw new NotFound('Not found');
    return result;
  }

  async findAll(payload) {
    const result = await RentalRepository.findAll(payload);
    if (!result) throw new NotFound('Not found');
    return result;
  }

  async findById(id) {
    const result = await RentalRepository.findById(id);
    if (!result) throw new BadRequest(`Id ${id}It is not valid`);
    return result;
  }

  async update(id, payload) {
    const result = await RentalRepository.update(id, payload);
    if (!result) throw new NotFound(`Id ${id}`);
    return result;
  }

  async delete(id) {
    const result = await RentalRepository.delete(id);
    if (!result) throw new NotFound(`Id ${id}`);
    return result;
  }
}

module.exports = new RentalService();
