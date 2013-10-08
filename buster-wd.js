var wd = require('webdriverjs');

var defaultTimeout = 5000;

exports.name = 'buster-wd';

exports.create = function(options) {
	var ext = Object.create(this);
	ext.webdriverConfig = options;
	ext.timeout = options.timeout || defaultTimeout;
	return ext;
};

exports.testRun = function(testRunner) {
	var timeout = this.timeout;
	var session = wd.remote(this.webdriverConfig);
	session.init();

	testRunner.on('test:setUp', function(context) {
		context.testCase.timeout = timeout;
		context.testCase.session = session;
	});

	testRunner.on('suite:end', function() {
		session.end();
	});
}
