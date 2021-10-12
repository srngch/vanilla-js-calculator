const path = require('path');

module.exports = {
	target: 'web',
	entry: './src/js/main.js',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		hot: true,
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: {
			keep: /index.html/,
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
