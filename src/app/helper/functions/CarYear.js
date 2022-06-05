function carYear(year) {
	return year instanceof Date && !isNaN(year);
}

module.exports = carYear;