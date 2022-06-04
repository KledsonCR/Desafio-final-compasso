const { Router } = require('express');
const Car = require('./carRouter');

module.exports = (server) => {
	server.use((req, res, next) => {
		Car(server, new Router());
		next();
	});
};