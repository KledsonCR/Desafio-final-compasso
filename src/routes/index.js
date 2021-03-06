const { Router } = require('express');
const Car = require('./carRouter');
const User = require('./userRouter');
const Auth = require('./authRouter');
const Rental = require('./rentalRouter');
const Reserve = require('./reserveRouter');
const Fleet = require('./fleetRouter');
const Swagger = require('./docs/swaggerRouter');

module.exports = (server) => {
  server.use((req, res, next) => {
    Car(server, new Router());
    User(server, new Router());
    Auth(server, new Router());
    Rental(server, new Router());
    Reserve(server, new Router());
    Fleet(server, new Router());
    Swagger(server, new Router());

    next();
  });
};
