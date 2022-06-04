const CarController = require('../app/controllers/CarController');

module.exports = (server, routes, prefix = '/api/v1/car') => {
	routes.post('/', CarController.create);
	routes.get('/', CarController.find);
	routes.get('/:id', CarController.findById);


	server.use(prefix, routes);
};