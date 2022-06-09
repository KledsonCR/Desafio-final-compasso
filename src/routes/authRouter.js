const AuthenticaController = require('../app/controllers/AuthenticaController');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
	routes.post('/', AuthenticaController.authenticate);

	server.use(prefix, routes);
};