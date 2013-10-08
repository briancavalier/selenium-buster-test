var buster = require('buster');
buster.spec.expose();
var expect = buster.expect;

describe('the test button', function() {

	it('should create success', function(done) {
		this.session.url('http://localhost:8080/')
			.click('.test')
			.getText('.success', function(e, value) {
				expect(value).toEqual('success');
			})
			.click('.test')
			.getText('.success', function(e) {
				expect(e).not.toBeNull();
			})
			.call(done);
	});

});