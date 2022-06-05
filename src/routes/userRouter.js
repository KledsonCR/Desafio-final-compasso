const UserController = require('../app/controllers/UserController');

module.exports = (server, routes, prefix = '/api/v1/person') => {
	routes.post('/', UserController.create);
	routes.get('/', UserController.findAll);
	routes.get('/:id', UserController.findById);
	routes.put('/:id', UserController.update);
	routes.delete('/:id', UserController.delete);

	server.use(prefix, routes);
};