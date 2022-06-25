const Reserve = ({ _id, id_user, data_start, data_end, id_car, id_rental, final_value }) => ({
  _id,
  id_user,
  data_start,
  data_end,
  id_car,
  id_rental,
  final_value
});

const paginate = ({ docs, limit, totalDocs, pagingCounter, totalPages }) => ({
  reserves: docs.map(Reserve),
  limit,
  total: totalDocs,
  offset: pagingCounter,
  offsets: totalPages
});

module.exports = paginate;
