const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	cpf: {
		type: String,
		unique: true,
		required: true
	},
	birthDay: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		minlength: 6,
		required: true,
	},
	canDrive: {
		type: String,
		required: true,
	}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;