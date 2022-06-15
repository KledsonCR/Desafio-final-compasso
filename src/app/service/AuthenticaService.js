const UserRepository = require('../repository/UserRepository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authConfig = require('../../config/config.json');


class AuthenticaService {
	async authenticate(email, password) {
		const user = await UserRepository.authenticate(email);
  
		if (!user) throw Error('User not found.');
  
		const { canDrive } = user;
  
		const validPassword = await bcrypt.compare(password, user.password);
  
		if ( !validPassword) throw Error('Invalid password.');
  
		user.password = undefined;
  
		const token = jwt.sign({ id: user.id }, authConfig.secret, {
			expiresIn: 86400
		});
  
		return { email, canDrive, token };
	}
}
  
module.exports = new AuthenticaService();