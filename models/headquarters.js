var mongoose = require('mongoose');

var headquartersSchema = mongoose.Schema({
	name: {type: String, required: true, unique: true},
	location: String,
	amenities: {type: Array, default: []},
	image: String
});

module.exports = mongoose.model("HQ", headquartersSchema);