const UserController = require('../app/controllers/UserController');
const createValidation = require('../app/validation/user/create');

module.exports = (server, routes, prefix = '/api/v1/person') => {
	routes.post('/', createValidation, UserController.create);
	routes.get('/', UserController.findAll);
	routes.get('/:id', UserController.findById);
	routes.put('/:id', UserController.update);
	routes.delete('/:id', UserController.delete);

	server.use(prefix, routes);
};