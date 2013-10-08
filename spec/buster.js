exports.Shared = {
	environment: 'node',
	tests: ['**/*-spec.js'],
	extensions: [require('../buster-wd')]
};

exports.phantom = {
	extends: 'Shared',
	'buster-wd': {
		desiredCapabilities: {
			browserName: 'phantomjs'
		}
	}
};

exports.sauce = {
	extends: 'Shared',
	'buster-wd': {
		desiredCapabilities: {
			browserName: 'safari',
			version: '6',
			platform: 'Mac 10.8',
			tags: ['examples'],
			name: 'This is an example test',
			'tunnel-identifier': process.env.SAUCE_TUNNEL_ID
		},
		host: 'ondemand.saucelabs.com',
		port: 80,
		user: process.env.SAUCE_USERNAME,
		key: process.env.SAUCE_ACCESS_KEY,
		logLevel: 'silent'
	}
};