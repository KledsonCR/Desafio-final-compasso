const AutheController = require('../app/controllers/AutheController');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
	routes.post('/', AutheController.authenticate);

	server.use(prefix, routes);
};