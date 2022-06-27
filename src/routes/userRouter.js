const UserController = require('../app/controllers/UserController');
const createValidation = require('../app/validation/user/create');
const updateValidation = require('../app/validation/user/update');
const getValidation = require('../app/validation/user/get');
const deleteValidation = require('../app/validation/user/delete');

module.exports = (server, routes, prefix = '/api/v1/person') => {
  routes.post('/', createValidation, UserController.create);
  routes.get('/', getValidation, UserController.findAll);
  routes.get('/:id', UserController.findById);
  routes.put('/:id', updateValidation, UserController.update);
  routes.delete('/:id', deleteValidation, UserController.delete);

  server.use(prefix, routes);
};
