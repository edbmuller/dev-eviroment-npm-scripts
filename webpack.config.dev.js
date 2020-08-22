import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
	plugins: [
		// Creates HTML file that includes reference to bundled JS
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
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
