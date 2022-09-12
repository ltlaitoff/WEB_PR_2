module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	extends: ['eslint:recommended', 'plugin:import/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'no-console': 'off',
		indent: ['error', 'tab'],
		quotes: ['error', 'single']
	}
}
