const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const bcrypt = require('bcryptjs');

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
		enum: ['yes', 'no'],
		required: true
	}
});

UserSchema.pre('save', async function(next) {
	const hash = await bcrypt.hash(this.password, 10);
	this.password = hash;

	next();
});

UserSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', UserSchema);

module.exports = User;