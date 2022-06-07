function cpfFormat(Cpf) {	
	const cpf = Cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
	const users = Object.assign(Cpf, { cpf });
	return users;
}

module.exports = cpfFormat;