var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
	name: {type: String, required: true, unique: true},
	address: Array, // address
	dob: Array, //DOB
	ssn: String, //SSN
	phone: String,
	email: String,
	mStatus: String,
	dependents: String,


	externalUnderwear: Boolean,
	created: {type: Date, default : ()=>new Date()},
	headquarters: {
		type: mongoose.Schema.ObjectId,
		ref: "HQ"
	}
});

module.exports = mongoose.model("Hero", heroSchema );