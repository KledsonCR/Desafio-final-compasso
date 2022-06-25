const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../../app/docs/swagger.json');

module.exports = (server, routes, prefix = '/api/v1/api-docs') => {
  routes.use('/', swaggerUi.serve);
  routes.get('/', swaggerUi.setup(swaggerDocs));

  server.use(prefix, routes);
};
