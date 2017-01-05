var should = require('chai').should,
expect = require('chai').expect,
assert = require('assert'),
supertest = require('supertest'),
app = supertest('localhost:3678');

describe('Info', function(){
	it('should return a 200 response', function(done) {
		app.get('/api/log/list')
		.expect(200,done);
	});
	it('should be an object', function(done) {
		app.get('/api/user/TheRock')
		.set('Accept','application/x-www-form-urlencoded')
		.expect('Content-Type',/json/)
		.expect(200,done)

	});
});