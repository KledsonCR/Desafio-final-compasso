const UserController = require('../app/controllers/UserController');

module.exports = (server, routes, prefix = '/api/v1/person') => {
	routes.post('/', UserController.create);
	routes.get('/', UserController.findAll);

	server.use(prefix, routes);
};