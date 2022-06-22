const RentalController = require('../app/controllers/RentalController');
//const createValidation = require('../app/validation/rental/create');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
	routes.post('/', /*createValidation,*/ RentalController.create);
	routes.get('/', RentalController.findAll);
	routes.get('/:id', RentalController.findById);
	routes.put('/:id', RentalController.update);
	routes.delete('/:id', RentalController.delete);


	server.use(prefix, routes);
};