const path = require('path');

module.exports = {
	entry: './src/main',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel' },
		],
	},
};
