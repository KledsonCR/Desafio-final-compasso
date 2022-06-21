const AuthenticaController = require('../app/controllers/AuthenticaController');
const createValidation = require('../app/validation/auth/create');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
	routes.post('/', createValidation, AuthenticaController.authenticate);

	server.use(prefix, routes);
};