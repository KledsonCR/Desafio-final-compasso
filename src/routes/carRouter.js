const CarController = require('../app/controllers/CarController');
const createValidation = require('../app/validation/car/create');
const updateValidation = require('../app/validation/car/update');
const getValidation = require('../app/validation/car/get');
const deleteValidation = require('../app/validation/car/delete');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', createValidation, CarController.create);
  routes.get('/', getValidation, CarController.findAll);
  routes.get('/:id', CarController.findById);
  routes.put('/:id', updateValidation, CarController.update);
  routes.delete('/:id', deleteValidation, CarController.delete);
  routes.patch('/:id/accessories/:descriptionId', CarController.updateAccessories);

  server.use(prefix, routes);
};
