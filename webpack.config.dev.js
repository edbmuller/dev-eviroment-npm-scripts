import path from 'path';

export default {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	target: 'web',
	entry: [
		path.resolve(__dirname, 'src/index'),
	],
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	plugins: [],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
