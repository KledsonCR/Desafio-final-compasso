const CarController = require('../app/controllers/CarController');
const createValidation = require('../app/validation/car/create');

module.exports = (server, routes, prefix = '/api/v1/car') => {
	routes.post('/', createValidation, CarController.create);
	routes.get('/', CarController.find);
	routes.get('/:id', CarController.findById);
	routes.put('/:id', CarController.update);
	routes.delete('/:id', CarController.delete);

	server.use(prefix, routes);
};