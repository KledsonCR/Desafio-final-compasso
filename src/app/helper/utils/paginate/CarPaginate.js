const Car = ({ _id, model, type, brand, color, year, accessories, passengersQtd }) => ({
  _id,
  model,
  type,
  brand,
  color,
  year,
  accessories,
  passengersQtd
});

const paginate = ({ docs, limit, totalDocs, pagingCounter, totalPages }) => ({
  vehicles: docs.map(Car),
  limit,
  total: totalDocs,
  offset: pagingCounter,
  offsets: totalPages
});

module.exports = paginate;
