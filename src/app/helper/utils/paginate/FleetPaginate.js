const Fleet = ({ _id, id_car, status, daily_value, id_rental, plate }) => ({
	_id,
	id_car,
	status,
	daily_value,
	id_rental,
	plate
});
  
const paginate = ({ docs, limit, totalDocs, pagingCounter, totalPages }) => ({
	fleet: docs.map(Fleet),
	limit,
	total: totalDocs,
	offset: pagingCounter,
	offsets: totalPages
});
  
module.exports = paginate;