const User = ({ _id, name, cpf, birthDay, email, password, canDrive }) => ({
	_id,
	name,
	cpf,
	birthDay,
	email,
	password,
	canDrive
});
  
const paginate = ({ docs, limit, totalDocs, pagingCounter, totalPages }) => ({
	Users: docs.map(User),
	limit,
	total: totalDocs,
	offset: pagingCounter,
	offsets: totalPages
});
  
module.exports = paginate;