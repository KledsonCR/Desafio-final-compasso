const FleetController = require('../app/controllers/FleetController');
const createValidation = require('../app/validation/fleet/create');
const updateValidation = require('../app/validation/fleet/update');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:id/fleet', createValidation, FleetController.create);
  routes.get('/:id/fleet', FleetController.findAll);
  routes.get('/:id/fleet/:id', FleetController.findById);
  routes.put('/:id/fleet/:id', updateValidation, FleetController.update);
  routes.delete('/:id/fleet/:id', FleetController.delete);

  server.use(prefix, routes);
};
