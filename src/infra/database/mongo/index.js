const mongoose = require('mongoose');
const config = require('../../../config/config');
require('dotenv').config();

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(process.env.DB_MONGO, {
      user: config.database.username,
      pass: config.database.password
    });
  }

  disconnect() {
    return mongoose.connection.close();
  }
}

module.exports = new Database().connect();
