const { Router } = require('express');
const Car = require('./carRouter');
const User = require('./userRouter');
const Auth = require('./authRouter');

module.exports = (server) => {
	server.use((req, res, next) => {
		Car(server, new Router());
		User(server, new Router());
		Auth(server, new Router());

		next();
	});
};