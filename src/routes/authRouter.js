const AuthenticateController = require('../app/controllers/AuthenticateController');
const createValidation = require('../app/validation/auth/create');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
	routes.post('/', createValidation, AuthenticateController.authenticate);

	server.use(prefix, routes);
};