var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TwitInfoSchema = Schema({
	date: String,
	data: Object
});
module.exports = mongoose.model('TwitInfo',TwitInfoSchema);