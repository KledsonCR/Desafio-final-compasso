const ReserveController = require('../app/controllers/ReserveController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
	routes.post('/:id/reserve', ReserveController.create);
	routes.get('/:id/reserve', ReserveController.findAll);
	routes.get('/:id/reserve/:id', ReserveController.findById);
	routes.put('/:id/reserve/:id', ReserveController.update);
	routes.delete('/:id/reserve/:id', ReserveController.delete);

	server.use(prefix, routes);
};