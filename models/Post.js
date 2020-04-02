const mongoose = require('mongoose');

//schema : represent how that post look
const PostSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description:  {
		type: String,
		required: true
	},
	date:  {
		type: Date,
		default: Date.now
	}
});
		
module.exports = mongoose.model('Posts', PostSchema);