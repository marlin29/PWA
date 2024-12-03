module.exports = {
	globDirectory: 'bootstrap5/',
	globPatterns: [
		'**/*.{css,php,jpg,js}'
	],
	swDest: 'bootstrap5/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};