const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	userID: {
		type: String,
		required: true,
		min: 4,
		max: 255,
	},
	title: {
		type: String,
		required: true,
	},
	descryption: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Post', postSchema);
