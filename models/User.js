const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({    
	email: String,
	password: String,
	date:  {
		type: Date,
		default: Date.now
	}
});

module.exports = User = mongoose.model('User', UserSchema);

