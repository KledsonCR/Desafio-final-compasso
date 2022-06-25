const Rental = ({ _id, name, cnpj, activities, address }) => ({
  _id,
  name,
  cnpj,
  activities,
  address
});

const paginate = ({ docs, limit, totalDocs, pagingCounter, totalPages }) => ({
  rentals: docs.map(Rental),
  limit,
  total: totalDocs,
  offset: pagingCounter,
  offsets: totalPages
});

module.exports = paginate;
