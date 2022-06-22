const cpfRegex = () => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const cnpjRegex = () => /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;


module.exports = {
	cpfRegex,
	cnpjRegex
};
