class NotFound extends Error {
  constructor(payload) {
    super();
    this.statusCode = 404;
    this.description = 'Not found';
    this.message = `${payload}not found`;
  }
}

module.exports = NotFound;
