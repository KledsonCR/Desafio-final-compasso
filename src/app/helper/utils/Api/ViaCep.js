const axios = require('axios');

class ViaCep {
	async findCep(zipCode) {
		const result = await axios.get(`https://viacep.com.br/ws/${zipCode}/json`);
		return result.data;
	}
}

module.exports = new ViaCep();
