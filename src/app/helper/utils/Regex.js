const cpfRegex = () => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const cnpjRegex = () => /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

const cepRegex = () => /^[0-9]{5}-[0-9]{3}$/;

module.exports = {
  cpfRegex,
  cnpjRegex,
  cepRegex
};
