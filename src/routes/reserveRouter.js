const ReserveController = require('../app/controllers/ReserveController');
const createValidation = require('../app/validation/reserve/create');
const updateValidation = require('../app/validation/reserve/update');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:id/reserve', createValidation, ReserveController.create);
  routes.get('/:id/reserve', ReserveController.findAll);
  routes.get('/:id/reserve/:id', ReserveController.findById);
  routes.put('/:id/reserve/:id', updateValidation, ReserveController.update);
  routes.delete('/:id/reserve/:id', ReserveController.delete);

  server.use(prefix, routes);
};
