const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	cnpj: {
		type: String,
		unique: true,
		required: true,
	},
	activities: {
		type: String,
		required: true,
	}});
	/*address: [
		{
			zipCode: {
				type: String,
				required: true
			},
            number: {
				type: String,
				required: true
			}, 
            complement: {
				type: String,
				required: true
			}, 
            isFilial: {
				type: String,
				required: true
			}, 
            : {
				type: String,
				required: true
			}, 
            : {
				type: String,
				required: true
			}, 
            : {
				type: String,
				required: true
			}, 
		}
    ],	
});*/


const Rental = mongoose.model('Rental', RentalSchema);
module.exports = Rental;