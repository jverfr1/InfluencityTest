'use strict'

var mongoose     = require('mongoose');
var app          = require('./app');
var port         = process.env.PORT || 3678;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/log', (err, res)=> {
	if (err) {
		throw err;
	}else {
		console.log("MongoDB with test project connection correct");
		app.listen(port, ()=> {
			console.log("Influencity testing working");
		});
	};
});