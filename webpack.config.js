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
		loaders: [
			{ exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/ },
			{ loader: 'style-loader!css-loader', test: /\.css$/ },
			{ loader: 'url-loader', test: /\.gif$/ },
			{ loader: 'file-loader', test: /\.(ttf|eot|svg)$/ },
		],
	},
	resolve: {
		extensions: ['', 'js', 'jsx'],
		modules: [
			'node_modules',
			'bower_components',
			'shared',
		],
	},
};
