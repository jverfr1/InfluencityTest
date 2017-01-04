
// var after = require('after');
// var should = require('should');
// var express = require('../')
//   , Router = express.Router
//   , methods = require('methods')
//   , assert = require('assert');

// describe('Route', function() {
//     it('should work without handlers', function(done) {
//       var req = { method: 'GET', url: '/' }
//       var router = new Router('/foo')
//       route.dispatch(req, {}, done)
//   })
// })
var supertest = require('supertest'),
expect = require('chai').expect,
app = supertest('localhost:3678');

describe('Info', function(){
	it('should return a 200 response', function(done) {
		app.get('/api/log/list')
		.expect(200,done);
	});
	it('should be an object', function(done) {
		app.get('/api/user/TheRock')
		.set('Accept','application/x-www-form-urlencoded')
		.expect(200,done)
		// .end(function(err,res){
		// 	expect(res.body).to.have.property("data");
		// 	expect(res.body.data).to.have.property("image");
		// 	done();
		// });
	});
});