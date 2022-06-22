const FleetController = require('../app/controllers/FleetController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
	routes.post('/:id/fleet', FleetController.create);
	routes.get('/:id/fleet', FleetController.findAll);
	routes.get('/:id/fleet/:id', FleetController.findById);
	routes.put('/:id/fleet/:id', FleetController.update);
	routes.delete('/:id/fleet/:id', FleetController.delete);

	server.use(prefix, routes);
};